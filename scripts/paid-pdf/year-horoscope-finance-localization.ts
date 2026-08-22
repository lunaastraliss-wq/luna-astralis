import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   FINANCE TITLES
========================================================= */

const FINANCE_TITLES: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Une année pour renforcer votre sécurité financière":
      "A year to strengthen your financial security",

    "Vos finances entrent dans une phase plus structurée":
      "Your finances enter a more structured phase",

    "Une gestion plus consciente de vos ressources":
      "A more mindful approach to managing your resources",

    "Une année de stabilité et de décisions réfléchies":
      "A year of stability and thoughtful decisions",

    "Votre rapport à l’argent évolue":
      "Your relationship with money is evolving",

    "De nouvelles bases financières se construisent":
      "New financial foundations are taking shape",

    "Une année pour mieux protéger vos ressources":
      "A year to better protect your resources",

    "Votre équilibre financier gagne en clarté":
      "Your financial balance becomes clearer",
  },

  es: {
    "Une année pour renforcer votre sécurité financière":
      "Un año para reforzar tu seguridad financiera",

    "Vos finances entrent dans une phase plus structurée":
      "Tus finanzas entran en una etapa más estructurada",

    "Une gestion plus consciente de vos ressources":
      "Una gestión más consciente de tus recursos",

    "Une année de stabilité et de décisions réfléchies":
      "Un año de estabilidad y decisiones reflexivas",

    "Votre rapport à l’argent évolue":
      "Tu relación con el dinero evoluciona",

    "De nouvelles bases financières se construisent":
      "Se están construyendo nuevas bases financieras",

    "Une année pour mieux protéger vos ressources":
      "Un año para proteger mejor tus recursos",

    "Votre équilibre financier gagne en clarté":
      "Tu equilibrio financiero se vuelve más claro",
  },

  de: {
    "Une année pour renforcer votre sécurité financière":
      "Ein Jahr, um Ihre finanzielle Sicherheit zu stärken",

    "Vos finances entrent dans une phase plus structurée":
      "Ihre Finanzen treten in eine strukturiertere Phase ein",

    "Une gestion plus consciente de vos ressources":
      "Ein bewussterer Umgang mit Ihren Ressourcen",

    "Une année de stabilité et de décisions réfléchies":
      "Ein Jahr der Stabilität und wohlüberlegter Entscheidungen",

    "Votre rapport à l’argent évolue":
      "Ihr Verhältnis zu Geld entwickelt sich weiter",

    "De nouvelles bases financières se construisent":
      "Neue finanzielle Grundlagen entstehen",

    "Une année pour mieux protéger vos ressources":
      "Ein Jahr, um Ihre Ressourcen besser zu schützen",

    "Votre équilibre financier gagne en clarté":
      "Ihr finanzielles Gleichgewicht wird klarer",
  },

  it: {
    "Une année pour renforcer votre sécurité financière":
      "Un anno per rafforzare la tua sicurezza finanziaria",

    "Vos finances entrent dans une phase plus structurée":
      "Le tue finanze entrano in una fase più strutturata",

    "Une gestion plus consciente de vos ressources":
      "Una gestione più consapevole delle tue risorse",

    "Une année de stabilité et de décisions réfléchies":
      "Un anno di stabilità e decisioni ponderate",

    "Votre rapport à l’argent évolue":
      "Il tuo rapporto con il denaro si evolve",

    "De nouvelles bases financières se construisent":
      "Si stanno costruendo nuove basi finanziarie",

    "Une année pour mieux protéger vos ressources":
      "Un anno per proteggere meglio le tue risorse",

    "Votre équilibre financier gagne en clarté":
      "Il tuo equilibrio finanziario diventa più chiaro",
  },

  pt: {
    "Une année pour renforcer votre sécurité financière":
      "Um ano para fortalecer sua segurança financeira",

    "Vos finances entrent dans une phase plus structurée":
      "Suas finanças entram em uma fase mais estruturada",

    "Une gestion plus consciente de vos ressources":
      "Uma gestão mais consciente dos seus recursos",

    "Une année de stabilité et de décisions réfléchies":
      "Um ano de estabilidade e decisões ponderadas",

    "Votre rapport à l’argent évolue":
      "Sua relação com o dinheiro está evoluindo",

    "De nouvelles bases financières se construisent":
      "Novas bases financeiras estão sendo construídas",

    "Une année pour mieux protéger vos ressources":
      "Um ano para proteger melhor seus recursos",

    "Votre équilibre financier gagne en clarté":
      "Seu equilíbrio financeiro se torna mais claro",
  },
};

/* =========================================================
   FINANCE TEXTS
========================================================= */

const FINANCE_TEXTS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.":
      "Your financial situation enters a year in which structure and foresight will make a real difference. Several simple adjustments could sustainably improve your sense of security.",

    "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.":
      "This year's financial climate invites you to review certain habits. A clearer understanding of your income, expenses, and priorities will help you make decisions with greater peace of mind.",

    "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.":
      "The coming months favor a more mindful management of your resources. You may discover that a small, consistent adjustment produces a greater effect than a dramatic decision.",

    "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "This year highlights your relationship with money, security, and material priorities. A thoughtful decision could ease a persistent source of pressure.",

    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.":
      "A period of financial reorganization begins. It will help you better distinguish genuinely useful expenses from those driven mainly by impulse or worry.",

    "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Your attention turns increasingly toward financial stability. This year is well suited to planning, reviewing your finances, and making long-term choices.",

    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.":
      "A new awareness of your finances could positively change the way you manage the coming months.",

    "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.":
      "The year encourages you to regain control over a financial matter that has remained unclear. The clearer your numbers become, the easier your decisions will be.",

    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Your approach to spending and saving is becoming more realistic. You may feel the need to protect your resources more seriously.",

    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "A new financial approach could bring you greater peace of mind. The goal will not be to restrict everything, but to make better choices.",

    /* GENERAL */

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "Your stability will depend largely on your ability to follow your actual numbers rather than relying on a general impression.",

    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.":
      "Clear planning will help you avoid decisions made in urgency or under the influence of a temporary emotion.",

    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.":
      "You may need to rebalance certain priorities. What once seemed essential could gradually become secondary.",

    "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "The year favors cautious and gradual decisions. Avoid financial commitments that would be difficult to change later.",

    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.":
      "Better administrative organization could save you time and prevent a costly mistake, delay, or oversight.",

    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.":
      "Your situation could improve through a simple step: comparing options, negotiating, reducing an unnecessary expense, or reviewing a payment deadline.",

    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "A financial matter that has remained unresolved could finally become clearer. However, wait until you have all the information before acting.",

    "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.":
      "This year reminds you that security is built primarily through consistency. Small, regular actions will be more useful than a sudden transformation.",

    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "An unexpected expense could require a temporary adjustment. Keep some financial flexibility instead of using all your resources immediately.",

    "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.":
      "Your ability to make realistic choices will allow you to move through the year with greater confidence.",

    /* INCOME */

    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "An opportunity to increase your income could arise through additional work, a sale, a contract, or a new idea.",

    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Expected income could require more patience. Check the timing before relying on that money.",

    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "A personal skill could be put to better use to create an additional source of income.",

    "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "The year favors efforts to better value your work or review a rate that has become too low.",

    "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.":
      "A financial opportunity could arise through a professional contact, a recommendation, or a previous connection.",

    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "You may discover that a secondary activity deserves more attention. Its potential could be greater than you imagined.",

    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "A discussion about your compensation could become necessary. Prepare precise and realistic arguments.",

    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.":
      "A project that was slow to get started could begin producing results. Continue, however, to monitor costs and timelines.",

    "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.":
      "A new way of using your resources could create a financial advantage in the medium or long term.",

    "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "The year encourages you to diversify your opportunities without multiplying unnecessary risks.",

    /* EXPENSES */

    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.":
      "An impulsive expense could seem justified in the moment. Give yourself some time before confirming a major purchase.",

    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Certain recurring expenses deserve to be reviewed. You may be paying for a service you rarely use or no longer need.",

    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.":
      "A repair, bill, or obligation could cost more than expected. Avoid postponing important checks.",

    "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "The year is well suited to reducing hidden expenses that accumulate without providing real satisfaction.",

    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "You may be tempted to spend money to temporarily improve your mood. First look for a solution that does not weaken your budget.",

    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Comparing prices or negotiating could allow you to save more than expected.",

    "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.":
      "Expenses related to comfort, leisure, or personal projects will need to remain proportionate to your other responsibilities.",

    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Avoid lending or advancing an amount of money that you could not afford to lose.",

    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "A major expense should be examined from several angles before being confirmed.",

    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Your budget will become more stable if you set a clear limit on nonessential purchases.",
        /* INVESTMENTS */

    "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.":
      "This year favors gradually building a financial safety reserve before taking on any greater risk.",

    "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.":
      "An investment project deserves to be studied methodically. The quality of the information will matter more than the initial enthusiasm.",

    "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.":
      "Your savings could become more consistent if you automate some of your financial decisions.",

    "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.":
      "A long-term strategy will probably be more favorable than seeking quick gains.",

    "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.":
      "You may reconsider how your resources are allocated between security, projects, and growth.",

    "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.":
      "An important financial or material decision will require several checks before being confirmed.",

    "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.":
      "The year invites you to better distinguish a well-considered investment from an expense presented as an opportunity.",

    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "A long-term project could begin to take more concrete shape through consistent financial discipline.",

    "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.":
      "Diversification can help protect your resources, provided that you fully understand each commitment.",

    "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.":
      "Your best decision could be to strengthen your stability first before seeking a higher return.",

    /* OPPORTUNITIES */

    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "An interesting opportunity could appear in a subtle form. Take the time to assess its true potential.",

    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "A well-prepared negotiation could improve your financial conditions or reduce a major expense.",

    "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "The year favors finding more economical solutions without sacrificing quality.",

    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "An idea related to your skills could become an additional source of income.",

    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "You could receive an offer worth considering, even if it does not exactly match your original plan.",

    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "A financial improvement could come from better organization rather than an immediate increase in income.",

    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Useful information could help you benefit from a program, refund, or discount.",

    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.":
      "A sale, refund, or unexpected amount of money could temporarily ease your financial situation.",

    "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.":
      "This year offers you an opportunity to build a stronger foundation for the years ahead.",

    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "A sensible choice made now could produce a lasting financial advantage.",

    /* RISKS */

    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "The main risk will be making a financial decision to soothe an emotion or respond to external pressure.",

    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "An attractive offer could include terms that are less favorable than they appear.",

    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Avoid relying on income that has not yet been confirmed.",

    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "A lack of verification could lead to an avoidable expense or a misunderstanding of a contract.",

    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "The desire to move too quickly could lead you to accept a commitment that is difficult to sustain.",

    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.":
      "Someone could minimize the risks of a decision. Rely on precise and verifiable facts.",

    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "The desire to please others could lead you to exceed your financial limits.",

    "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.":
      "A small recurring expense could add up to a much larger amount by the end of the year.",

    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "The main risk will be postponing a financial matter that requires a clear response.",

    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Overconfidence could cause you to overlook an important detail. Review the terms before signing or paying.",

    /* KEY PERIODS */

    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "The beginning of the year will favor financial reviews, checks, and the creation of a more realistic budget.",

    "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.":
      "Spring could bring an opportunity to increase your income or reduce a major expense.",

    "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.":
      "The middle of the year will require greater caution regarding impulsive purchases or commitments made too quickly.",

    "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.":
      "Summer could favor certain personal projects, provided that you maintain a sufficient reserve.",

    "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.":
      "Early autumn will be favorable for negotiations, contract reviews, and administrative decisions.",

    "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.":
      "The end of the year will favor consolidation, saving, and preparation for future goals.",

    "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.":
      "An improvement could gradually emerge during the second half of the year.",

    "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.":
      "A slower period will allow you to correct a weakness before it becomes more costly.",

    "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.":
      "The most favorable periods will be those in which you take the time to compare several options before deciding.",

    "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.":
      "An important opportunity could require a quick response, but it should still be carefully verified.",

    /* ADVICE */

    "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.":
      "Set clear limits for nonessential spending and review them regularly.",

    "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Review your subscriptions, automatic payments, and recurring expenses.",

    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Keep a reserve available for unexpected expenses instead of immediately using every amount you receive.",

    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compare several options before making an important financial decision.",

    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Avoid confusing emotional urgency with financial urgency.",

    "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.":
      "Track your spending long enough to identify the habits that genuinely weaken your budget.",

    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Do not commit based on a vague promise. Ask for precise figures, dates, and terms.",

    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Focus on realistic improvement rather than an instant financial transformation.",

    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Protect your stability before seeking a higher return.",

    "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.":
      "Make decisions that can still give you peace of mind several months from now.",

    /* CONCLUSION */

    "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "This year can improve your financial stability if you move forward with method, moderation, and clear judgment.",

    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Your situation will improve through simple, consistent, and carefully verified choices.",

    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "A better understanding of your priorities will help you use your resources with greater confidence.",

    "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "The coming months can allow you to regain control over a financial matter that has become too burdensome or unclear.",

    "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.":
      "You could end the year with a more realistic and reassuring view of your financial situation.",

    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Your financial progress will depend largely on your ability to avoid impulsive decisions.",

    "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "This year reminds you that financial security is built more through consistency than through quick solutions.",

    "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.":
      "A prudent decision made this year could become one of your most beneficial choices.",

    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Your relationship with money is evolving toward greater maturity and discernment.",

    "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.":
      "By respecting your limits and priorities, you will be able to move through the year with greater stability.",
  },

  /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.":
      "Tu situación financiera entra en un año en el que la organización y la previsión marcarán una verdadera diferencia. Varios ajustes sencillos podrían mejorar de manera duradera tu sensación de seguridad.",

    "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.":
      "El clima financiero del año te invita a revisar ciertos hábitos. Una visión más clara de tus ingresos, tus gastos y tus prioridades te ayudará a tomar decisiones con mayor tranquilidad.",

    "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.":
      "Los próximos meses favorecen una gestión más consciente de tus recursos. Podrías descubrir que un pequeño ajuste constante produce un efecto mayor que una decisión espectacular.",

    "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Este año pone de relieve tu relación con el dinero, la seguridad y las prioridades materiales. Una decisión bien meditada podría aliviar una presión persistente.",

    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.":
      "Comienza un período de reorganización financiera. Te ayudará a distinguir mejor los gastos realmente útiles de aquellos que responden principalmente a un impulso o una preocupación.",

    "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Tu atención se orienta cada vez más hacia la estabilidad financiera. El año es favorable para la planificación, las verificaciones y las decisiones a largo plazo.",

    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.":
      "Una toma de conciencia sobre tus finanzas podría modificar positivamente tu manera de gestionar los próximos meses.",

    "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.":
      "El año te anima a recuperar el control de un aspecto financiero que ha permanecido poco claro. Cuanto más claras sean tus cifras, más sencillas serán tus decisiones.",

    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Tu relación con los gastos y el ahorro evoluciona hacia un mayor realismo. Podrías sentir la necesidad de proteger tus recursos con mayor seriedad.",

    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Un nuevo enfoque financiero podría aportarte mayor tranquilidad. El objetivo no será restringirlo todo, sino elegir mejor.",

    /* GENERAL */

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "Tu estabilidad dependerá principalmente de tu capacidad para seguir tus cifras reales en lugar de confiar en una impresión general.",

    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.":
      "Una planificación clara te ayudará a evitar decisiones tomadas con urgencia o bajo el efecto de una emoción pasajera.",

    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.":
      "Podrías verte en la necesidad de reequilibrar ciertas prioridades. Lo que parecía indispensable podría convertirse progresivamente en algo secundario.",

    "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "El año favorece las decisiones prudentes y progresivas. Evita los compromisos financieros que posteriormente sean difíciles de modificar.",

    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.":
      "Una mejor organización administrativa podría ahorrarte tiempo y evitar un error, un retraso o un olvido costoso.",

    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.":
      "Tu situación podría mejorar gracias a una medida sencilla: comparar, negociar, reducir un gasto innecesario o revisar un plazo de pago.",

    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Una cuestión financiera que había quedado pendiente podría finalmente aclararse. Sin embargo, espera a disponer de toda la información antes de actuar.",

    "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.":
      "Este año te recuerda que la seguridad se construye principalmente mediante la constancia. Pequeñas acciones regulares serán más útiles que una transformación repentina.",

    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Un gasto imprevisto podría requerir un ajuste temporal. Conserva un margen de maniobra en lugar de utilizar inmediatamente todos tus recursos.",

    "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.":
      "Tu capacidad para tomar decisiones realistas te permitirá atravesar el año con mayor confianza.",

    /* INCOME */

    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Podría surgir una posibilidad de aumentar tus ingresos mediante una tarea adicional, una venta, un encargo o una nueva idea.",

    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Un ingreso esperado podría requerir más paciencia. Comprueba los plazos antes de contar con ese dinero.",

    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Una habilidad personal podría aprovecharse mejor para crear una fuente adicional de ingresos.",

    "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "El año favorece las iniciativas destinadas a valorar mejor tu trabajo o revisar una tarifa que se ha vuelto demasiado baja.",

    "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.":
      "Una oportunidad financiera podría surgir de un contacto profesional, una recomendación o una relación anterior.",

    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Podrías descubrir que una actividad secundaria merece más atención. Su potencial podría ser mayor de lo que imaginabas.",

    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Una conversación sobre tu remuneración podría volverse necesaria. Prepara argumentos precisos y realistas.",

    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.":
      "Un proyecto que tardó en ponerse en marcha podría comenzar a producir resultados. Sin embargo, continúa vigilando los costos y los plazos.",

    "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.":
      "Una nueva manera de utilizar tus recursos podría generar una ventaja financiera a mediano o largo plazo.",

    "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "El año te anima a diversificar tus posibilidades sin multiplicar los riesgos innecesarios.",

    /* EXPENSES */

    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.":
      "Un gasto impulsivo podría parecer justificado en el momento. Date un tiempo antes de confirmar una compra importante.",

    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Algunos gastos recurrentes merecen ser revisados. Podrías estar pagando por un servicio que utilizas poco o que ya no necesitas.",

    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.":
      "Una reparación, una factura o una obligación podría requerir más de lo previsto. Evita posponer las verificaciones importantes.",

    "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "El año es favorable para reducir los gastos invisibles que se acumulan sin aportar una satisfacción real.",

    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Podrías sentir la tentación de gastar para mejorar temporalmente tu estado de ánimo. Busca primero una solución que no debilite tu presupuesto.",

    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Comparar precios o negociar podría permitirte ahorrar más de lo previsto.",

    "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.":
      "Los gastos relacionados con la comodidad, el ocio o los proyectos personales deberán mantenerse proporcionales a tus demás responsabilidades.",

    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evita prestar o adelantar una cantidad de dinero que no podrías permitirte perder.",

    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Un gasto importante debería analizarse desde varios ángulos antes de confirmarse.",

    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Tu presupuesto ganará estabilidad si estableces un límite claro para las compras no esenciales.",

    /* INVESTMENTS */

    "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.":
      "Este año favorece la creación progresiva de una reserva de seguridad antes de asumir riesgos mayores.",

    "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.":
      "Un proyecto de inversión merece ser estudiado con método. La calidad de la información será más importante que el entusiasmo inicial.",

    "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.":
      "Tus ahorros podrían volverse más constantes si automatizas una parte de tus decisiones financieras.",

    "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.":
      "Una estrategia a largo plazo probablemente será más favorable que la búsqueda de ganancias rápidas.",

    "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.":
      "Podrías revisar la manera en que distribuyes tus recursos entre seguridad, proyectos y crecimiento.",

    "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.":
      "Una decisión patrimonial o material importante requerirá varias verificaciones antes de confirmarse.",

    "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.":
      "El año te invita a distinguir mejor una inversión bien meditada de un gasto presentado como una oportunidad.",

    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "Un proyecto a largo plazo podría comenzar a hacerse más concreto gracias a una disciplina financiera constante.",

    "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.":
      "La diversificación puede proteger tus recursos, siempre que comprendas bien cada compromiso.",

    "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.":
      "Tu mejor decisión podría ser reforzar primero tu estabilidad antes de buscar un rendimiento más elevado.",

    /* OPPORTUNITIES */

    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Una oportunidad interesante podría aparecer de forma discreta. Tómate el tiempo necesario para evaluar su verdadero potencial.",

    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Una negociación bien preparada podría mejorar tus condiciones financieras o reducir un gasto importante.",

    "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "El año favorece la búsqueda de soluciones más económicas sin sacrificar la calidad.",

    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Una idea relacionada con tus habilidades podría convertirse en una fuente adicional de ingresos.",

    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Podrías recibir una propuesta que merezca ser estudiada, aunque no corresponda exactamente con tu plan inicial.",

    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Una mejora financiera podría provenir de una mejor organización en lugar de un aumento inmediato de los ingresos.",

    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Una información útil podría ayudarte a beneficiarte de un programa, un reembolso o un descuento.",

    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.":
      "Una venta, un reembolso o una cantidad inesperada podría aliviar temporalmente tu situación.",

    "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.":
      "Este año te ofrece la oportunidad de establecer una base más sólida para los próximos años.",

    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Una decisión razonable tomada ahora podría producir una ventaja financiera duradera.",

    /* RISKS */

    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "El principal riesgo será tomar una decisión financiera para calmar una emoción o responder a una presión externa.",

    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Una propuesta atractiva podría incluir condiciones menos favorables de lo que parecen.",

    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evita contar con un ingreso que todavía no esté confirmado.",

    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "La falta de verificación podría provocar un gasto evitable o una mala comprensión de un contrato.",

    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "El deseo de avanzar demasiado rápido podría llevarte a aceptar un compromiso difícil de mantener.",

    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.":
      "Una persona podría minimizar los riesgos de una decisión. Apóyate en hechos precisos y verificables.",

    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "La necesidad de complacer a los demás podría llevarte a superar tus límites financieros.",

    "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.":
      "Un pequeño gasto recurrente podría convertirse en una cantidad mucho mayor al final del año.",

    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "El principal riesgo será posponer una cuestión financiera que exige una respuesta clara.",

    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Un exceso de confianza podría hacerte pasar por alto un detalle importante. Revisa las condiciones antes de firmar o pagar.",

    /* KEY PERIODS */

    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "El comienzo del año favorecerá los balances, las verificaciones y la creación de un presupuesto más realista.",

    "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.":
      "La primavera podría traer una oportunidad para aumentar tus ingresos o reducir un gasto importante.",

    "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.":
      "La mitad del año requerirá mayor prudencia ante las compras impulsivas o los compromisos asumidos demasiado rápido.",

    "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.":
      "El verano podrá favorecer ciertos proyectos personales, siempre que mantengas una reserva suficiente.",

    "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.":
      "El comienzo del otoño será favorable para las negociaciones, las revisiones de contratos y las decisiones administrativas.",

    "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.":
      "El final del año favorecerá la consolidación, el ahorro y la preparación de objetivos futuros.",

    "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.":
      "Una mejora podría aparecer progresivamente durante la segunda mitad del año.",

    "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.":
      "Un período de desaceleración te permitirá corregir una debilidad antes de que se vuelva más costosa.",

    "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.":
      "Los mejores períodos serán aquellos en los que te tomes el tiempo de comparar varias opciones antes de decidir.",

    "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.":
      "Una oportunidad importante podría requerir una respuesta rápida, pero aun así deberá verificarse cuidadosamente.",

    /* ADVICE */

    "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.":
      "Establece límites claros para los gastos no esenciales y revísalos regularmente.",

    "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Revisa tus suscripciones, tus pagos automáticos y tus gastos recurrentes.",

    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantén una reserva disponible para los imprevistos en lugar de utilizar inmediatamente cada cantidad que recibas.",

    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compara varias opciones antes de tomar una decisión financiera importante.",

    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evita confundir la urgencia emocional con la urgencia financiera.",

    "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.":
      "Haz un seguimiento de tus gastos durante el tiempo suficiente para identificar los hábitos que realmente debilitan tu presupuesto.",

    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "No te comprometas basándote en una promesa vaga. Pide cifras, fechas y condiciones precisas.",

    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concéntrate en una mejora realista en lugar de buscar una transformación financiera instantánea.",

    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Protege tu estabilidad antes de buscar un rendimiento más elevado.",

    "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.":
      "Toma decisiones que puedan seguir aportándote tranquilidad dentro de varios meses.",

    /* CONCLUSION */

    "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Este año puede mejorar tu estabilidad financiera si avanzas con método, moderación y lucidez.",

    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Tu situación evolucionará favorablemente gracias a decisiones sencillas, constantes y cuidadosamente verificadas.",

    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Una mejor comprensión de tus prioridades te ayudará a utilizar tus recursos con mayor confianza.",

    "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Los próximos meses pueden permitirte recuperar el control de un aspecto financiero que se ha vuelto demasiado pesado o poco claro.",

    "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.":
      "Podrías terminar el año con una visión más realista y tranquilizadora de tu situación.",

    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Tu progreso financiero dependerá principalmente de tu capacidad para evitar las decisiones impulsivas.",

    "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Este año te recuerda que la seguridad se construye más mediante la constancia que con soluciones rápidas.",

    "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.":
      "Una decisión prudente tomada este año podría convertirse en una de tus elecciones más útiles.",

    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Tu relación con el dinero evoluciona hacia una mayor madurez y discernimiento.",

    "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.":
      "Respetando tus límites y tus prioridades, podrás atravesar el año con mayor estabilidad.",
  },

   /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    /* INTRODUCTION */

    "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.":
      "Ihre finanzielle Situation tritt in ein Jahr ein, in dem Struktur und vorausschauende Planung einen echten Unterschied machen werden. Mehrere einfache Anpassungen könnten Ihr Sicherheitsgefühl langfristig verbessern.",

    "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.":
      "Das finanzielle Klima des Jahres lädt Sie dazu ein, bestimmte Gewohnheiten zu überdenken. Ein klarerer Überblick über Ihre Einnahmen, Ausgaben und Prioritäten wird Ihnen helfen, Entscheidungen gelassener zu treffen.",

    "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.":
      "Die kommenden Monate begünstigen einen bewussteren Umgang mit Ihren Ressourcen. Sie könnten feststellen, dass eine kleine, regelmäßige Anpassung eine größere Wirkung erzielt als eine spektakuläre Entscheidung.",

    "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Dieses Jahr rückt Ihr Verhältnis zu Geld, Sicherheit und materiellen Prioritäten in den Mittelpunkt. Eine wohlüberlegte Entscheidung könnte einen anhaltenden Druck verringern.",

    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.":
      "Eine Phase der finanziellen Neuordnung beginnt. Sie wird Ihnen helfen, wirklich sinnvolle Ausgaben besser von solchen zu unterscheiden, die vor allem aus einem Impuls oder einer Sorge heraus entstehen.",

    "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Ihre Aufmerksamkeit richtet sich stärker auf finanzielle Stabilität. Das Jahr eignet sich gut für Planung, Überprüfungen und langfristige Entscheidungen.",

    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.":
      "Eine neue Erkenntnis über Ihre Finanzen könnte Ihre Art, die kommenden Monate zu gestalten, positiv verändern.",

    "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.":
      "Das Jahr ermutigt Sie, die Kontrolle über einen bisher unklaren finanziellen Bereich zurückzugewinnen. Je klarer Ihre Zahlen sind, desto einfacher werden Ihre Entscheidungen.",

    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Ihr Umgang mit Ausgaben und Ersparnissen entwickelt sich hin zu mehr Realismus. Sie könnten das Bedürfnis verspüren, Ihre Ressourcen konsequenter zu schützen.",

    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Ein neuer finanzieller Ansatz könnte Ihnen mehr Ruhe verschaffen. Das Ziel wird nicht darin bestehen, alles einzuschränken, sondern bessere Entscheidungen zu treffen.",

    /* GENERAL */

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "Ihre Stabilität wird vor allem davon abhängen, ob Sie sich an Ihren tatsächlichen Zahlen orientieren, anstatt sich auf einen allgemeinen Eindruck zu verlassen.",

    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.":
      "Eine klare Planung wird Ihnen helfen, Entscheidungen zu vermeiden, die unter Zeitdruck oder aufgrund einer vorübergehenden Emotion getroffen werden.",

    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.":
      "Sie könnten dazu veranlasst werden, bestimmte Prioritäten neu auszubalancieren. Was unverzichtbar erschien, könnte allmählich an Bedeutung verlieren.",

    "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "Das Jahr begünstigt vorsichtige und schrittweise Entscheidungen. Vermeiden Sie finanzielle Verpflichtungen, die sich später nur schwer ändern lassen.",

    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.":
      "Eine bessere administrative Organisation könnte Ihnen Zeit sparen und einen kostspieligen Fehler, eine Verzögerung oder ein Versäumnis verhindern.",

    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.":
      "Ihre Situation könnte sich durch einen einfachen Schritt verbessern: vergleichen, verhandeln, eine unnötige Ausgabe reduzieren oder einen Zahlungstermin überprüfen.",

    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Eine bislang ungeklärte finanzielle Frage könnte endlich klarer werden. Warten Sie jedoch, bis Ihnen alle Informationen vorliegen, bevor Sie handeln.",

    "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.":
      "Dieses Jahr erinnert Sie daran, dass Sicherheit vor allem durch Beständigkeit entsteht. Kleine, regelmäßige Schritte werden hilfreicher sein als eine plötzliche Veränderung.",

    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Eine unerwartete Ausgabe könnte eine vorübergehende Anpassung erforderlich machen. Bewahren Sie finanziellen Spielraum, anstatt sofort alle Ihre Ressourcen einzusetzen.",

    "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.":
      "Ihre Fähigkeit, realistische Entscheidungen zu treffen, wird Ihnen helfen, mit mehr Zuversicht durch das Jahr zu gehen.",

    /* INCOME */

    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Eine Möglichkeit, Ihr Einkommen zu erhöhen, könnte sich durch eine zusätzliche Aufgabe, einen Verkauf, einen Auftrag oder eine neue Idee ergeben.",

    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Ein erwartetes Einkommen könnte mehr Geduld erfordern. Prüfen Sie die Fristen, bevor Sie mit diesem Geld rechnen.",

    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Eine persönliche Fähigkeit könnte besser genutzt werden, um eine zusätzliche Einkommensquelle zu schaffen.",

    "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "Das Jahr begünstigt Schritte, mit denen Sie den Wert Ihrer Arbeit besser zur Geltung bringen oder einen inzwischen zu niedrigen Preis beziehungsweise Tarif überprüfen.",

    "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.":
      "Eine finanzielle Gelegenheit könnte sich durch einen beruflichen Kontakt, eine Empfehlung oder eine frühere Verbindung ergeben.",

    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Sie könnten feststellen, dass eine Nebentätigkeit mehr Aufmerksamkeit verdient. Ihr Potenzial könnte größer sein, als Sie bisher angenommen haben.",

    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Ein Gespräch über Ihre Vergütung könnte notwendig werden. Bereiten Sie präzise und realistische Argumente vor.",

    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.":
      "Ein Projekt, das nur langsam angelaufen ist, könnte erste Ergebnisse liefern. Behalten Sie jedoch weiterhin Kosten und Fristen im Blick.",

    "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.":
      "Eine neue Art, Ihre Ressourcen einzusetzen, könnte mittel- oder langfristig einen finanziellen Vorteil schaffen.",

    "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "Das Jahr ermutigt Sie, Ihre Möglichkeiten zu diversifizieren, ohne unnötige Risiken zu vervielfachen.",

    /* EXPENSES */

    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.":
      "Eine impulsive Ausgabe könnte im ersten Moment gerechtfertigt erscheinen. Geben Sie sich etwas Zeit, bevor Sie einen größeren Kauf bestätigen.",

    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Bestimmte wiederkehrende Kosten sollten überprüft werden. Möglicherweise zahlen Sie für einen Dienst, den Sie kaum nutzen oder nicht mehr benötigen.",

    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.":
      "Eine Reparatur, eine Rechnung oder eine Verpflichtung könnte mehr kosten als erwartet. Verschieben Sie wichtige Überprüfungen nicht.",

    "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "Das Jahr eignet sich gut dazu, unauffällige Ausgaben zu reduzieren, die sich summieren, ohne wirkliche Zufriedenheit zu bringen.",

    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Sie könnten versucht sein, Geld auszugeben, um Ihre Stimmung vorübergehend zu verbessern. Suchen Sie zunächst nach einer Lösung, die Ihr Budget nicht belastet.",

    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Ein Preisvergleich oder eine Verhandlung könnte Ihnen ermöglichen, mehr zu sparen als erwartet.",

    "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.":
      "Ausgaben für Komfort, Freizeit oder persönliche Projekte sollten in einem angemessenen Verhältnis zu Ihren anderen Verpflichtungen bleiben.",

    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Vermeiden Sie es, einen Betrag zu verleihen oder vorzustrecken, dessen Verlust Sie sich nicht leisten könnten.",

    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Eine größere Ausgabe sollte aus mehreren Blickwinkeln geprüft werden, bevor sie bestätigt wird.",

    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Ihr Budget wird stabiler, wenn Sie eine klare Grenze für nicht notwendige Einkäufe festlegen.",

    /* INVESTMENTS */

    "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.":
      "Dieses Jahr begünstigt den schrittweisen Aufbau einer Sicherheitsreserve, bevor Sie größere Risiken eingehen.",

    "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.":
      "Ein Investitionsvorhaben sollte systematisch geprüft werden. Die Qualität der Informationen wird wichtiger sein als die anfängliche Begeisterung.",

    "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.":
      "Ihr Sparverhalten könnte regelmäßiger werden, wenn Sie einen Teil Ihrer finanziellen Entscheidungen automatisieren.",

    "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.":
      "Eine langfristige Strategie wird wahrscheinlich vorteilhafter sein als die Suche nach schnellen Gewinnen.",

    "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.":
      "Sie könnten überprüfen, wie Ihre Ressourcen zwischen Sicherheit, Projekten und Wachstum verteilt sind.",

    "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.":
      "Eine wichtige Vermögens- oder Sachentscheidung wird mehrere Überprüfungen erfordern, bevor sie bestätigt wird.",

    "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.":
      "Das Jahr lädt Sie dazu ein, eine wohlüberlegte Investition besser von einer Ausgabe zu unterscheiden, die lediglich als Gelegenheit dargestellt wird.",

    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "Ein langfristiges Projekt könnte dank konsequenter finanzieller Disziplin zunehmend konkrete Formen annehmen.",

    "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.":
      "Diversifizierung kann Ihre Ressourcen schützen, vorausgesetzt, Sie verstehen jede Verpflichtung genau.",

    "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.":
      "Ihre beste Entscheidung könnte darin bestehen, zunächst Ihre Stabilität zu stärken, bevor Sie nach einer höheren Rendite suchen.",

    /* OPPORTUNITIES */

    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Eine interessante Gelegenheit könnte in unauffälliger Form auftauchen. Nehmen Sie sich die Zeit, ihr tatsächliches Potenzial zu beurteilen.",

    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Eine gut vorbereitete Verhandlung könnte Ihre finanziellen Bedingungen verbessern oder eine größere Ausgabe reduzieren.",

    "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "Das Jahr begünstigt die Suche nach kostengünstigeren Lösungen, ohne dabei auf Qualität zu verzichten.",

    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Eine Idee, die mit Ihren Fähigkeiten zusammenhängt, könnte zu einer zusätzlichen Einkommensquelle werden.",

    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Sie könnten ein Angebot erhalten, das eine genauere Prüfung verdient, auch wenn es nicht genau Ihrem ursprünglichen Plan entspricht.",

    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Eine finanzielle Verbesserung könnte eher durch eine bessere Organisation als durch eine sofortige Einkommenssteigerung entstehen.",

    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Eine nützliche Information könnte Ihnen helfen, ein Programm, eine Rückerstattung oder eine Vergünstigung in Anspruch zu nehmen.",

    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.":
      "Ein Verkauf, eine Rückerstattung oder ein unerwarteter Geldbetrag könnte Ihre Situation vorübergehend erleichtern.",

    "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.":
      "Dieses Jahr bietet Ihnen die Gelegenheit, eine solidere Grundlage für die kommenden Jahre zu schaffen.",

    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Eine vernünftige Entscheidung, die Sie jetzt treffen, könnte einen langfristigen finanziellen Vorteil bringen.",

    /* RISKS */

    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "Das größte Risiko besteht darin, eine finanzielle Entscheidung zu treffen, um eine Emotion zu beruhigen oder auf äußeren Druck zu reagieren.",

    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Ein verlockendes Angebot könnte Bedingungen enthalten, die weniger vorteilhaft sind, als sie zunächst erscheinen.",

    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Vermeiden Sie es, mit einem Einkommen zu rechnen, das noch nicht bestätigt ist.",

    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "Eine unzureichende Prüfung könnte zu vermeidbaren Kosten oder zu einem Missverständnis eines Vertrags führen.",

    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "Der Wunsch, zu schnell voranzukommen, könnte Sie dazu verleiten, eine Verpflichtung einzugehen, die nur schwer aufrechtzuerhalten ist.",

    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.":
      "Jemand könnte die Risiken einer Entscheidung herunterspielen. Stützen Sie sich auf präzise und überprüfbare Fakten.",

    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "Der Wunsch, anderen eine Freude zu machen, könnte dazu führen, dass Sie Ihre finanziellen Grenzen überschreiten.",

    "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.":
      "Eine regelmäßig wiederkehrende kleine Ausgabe könnte sich bis zum Jahresende zu einem deutlich größeren Betrag summieren.",

    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "Das größte Risiko besteht darin, eine finanzielle Frage aufzuschieben, die eine klare Antwort erfordert.",

    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Übermäßiges Vertrauen könnte dazu führen, dass Sie ein wichtiges Detail übersehen. Lesen Sie die Bedingungen noch einmal, bevor Sie unterschreiben oder bezahlen.",

    /* KEY PERIODS */

    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "Der Jahresbeginn begünstigt Bestandsaufnahmen, Überprüfungen und die Erstellung eines realistischeren Budgets.",

    "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.":
      "Der Frühling könnte eine Gelegenheit bieten, Ihr Einkommen zu erhöhen oder eine größere Ausgabe zu reduzieren.",

    "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.":
      "Die Jahresmitte wird mehr Vorsicht bei impulsiven Käufen oder übereilt eingegangenen Verpflichtungen erfordern.",

    "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.":
      "Der Sommer könnte bestimmte persönliche Projekte begünstigen, vorausgesetzt, Sie behalten eine ausreichende Reserve.",

    "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.":
      "Der Herbstanfang wird sich gut für Verhandlungen, Vertragsüberprüfungen und administrative Entscheidungen eignen.",

    "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.":
      "Das Jahresende begünstigt Konsolidierung, Sparen und die Vorbereitung zukünftiger Ziele.",

    "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.":
      "Im Laufe der zweiten Jahreshälfte könnte sich allmählich eine Verbesserung zeigen.",

    "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.":
      "Eine ruhigere Phase wird Ihnen ermöglichen, eine Schwachstelle zu korrigieren, bevor sie kostspieliger wird.",

    "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.":
      "Die günstigsten Phasen werden jene sein, in denen Sie sich die Zeit nehmen, mehrere Möglichkeiten zu vergleichen, bevor Sie entscheiden.",

    "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.":
      "Eine wichtige Gelegenheit könnte eine schnelle Antwort erfordern, sollte aber dennoch sorgfältig geprüft werden.",

    /* ADVICE */

    "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.":
      "Legen Sie klare Grenzen für nicht notwendige Ausgaben fest und überprüfen Sie diese regelmäßig.",

    "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Überprüfen Sie Ihre Abonnements, automatischen Abbuchungen und wiederkehrenden Ausgaben.",

    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Halten Sie eine Reserve für unerwartete Ausgaben bereit, anstatt jeden erhaltenen Betrag sofort zu verwenden.",

    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Vergleichen Sie mehrere Möglichkeiten, bevor Sie eine wichtige finanzielle Entscheidung treffen.",

    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Verwechseln Sie emotionale Dringlichkeit nicht mit finanzieller Dringlichkeit.",

    "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.":
      "Beobachten Sie Ihre Ausgaben lange genug, um die Gewohnheiten zu erkennen, die Ihr Budget tatsächlich schwächen.",

    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Gehen Sie keine Verpflichtung auf der Grundlage eines vagen Versprechens ein. Verlangen Sie konkrete Zahlen, Daten und Bedingungen.",

    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Konzentrieren Sie sich auf eine realistische Verbesserung statt auf eine sofortige finanzielle Veränderung.",

    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Schützen Sie Ihre Stabilität, bevor Sie nach einer höheren Rendite suchen.",

    "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.":
      "Treffen Sie Entscheidungen, die Ihnen auch in mehreren Monaten noch ein Gefühl der Sicherheit geben können.",

    /* CONCLUSION */

    "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Dieses Jahr kann Ihre finanzielle Stabilität verbessern, wenn Sie systematisch, maßvoll und mit klarem Blick vorgehen.",

    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Ihre Situation wird sich durch einfache, konsequente und sorgfältig geprüfte Entscheidungen positiv entwickeln.",

    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Ein besseres Verständnis Ihrer Prioritäten wird Ihnen helfen, Ihre Ressourcen mit größerer Sicherheit einzusetzen.",

    "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Die kommenden Monate können Ihnen ermöglichen, die Kontrolle über einen finanziellen Bereich zurückzugewinnen, der zu belastend oder zu unklar geworden ist.",

    "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.":
      "Sie könnten das Jahr mit einer realistischeren und beruhigenderen Sicht auf Ihre Situation beenden.",

    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Ihr finanzieller Fortschritt wird vor allem von Ihrer Fähigkeit abhängen, impulsive Entscheidungen zu vermeiden.",

    "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Dieses Jahr erinnert Sie daran, dass Sicherheit eher durch Beständigkeit als durch schnelle Lösungen entsteht.",

    "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.":
      "Eine vorsichtige Entscheidung, die Sie in diesem Jahr treffen, könnte sich als eine Ihrer hilfreichsten Entscheidungen erweisen.",

    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Ihr Verhältnis zu Geld entwickelt sich hin zu mehr Reife und Urteilsvermögen.",

    "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.":
      "Wenn Sie Ihre Grenzen und Prioritäten respektieren, können Sie mit größerer Stabilität durch das Jahr gehen.",
  },

  /* =======================================================
     ITALIAN
  ======================================================= */

  it: {
    /* INTRODUCTION */

    "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.":
      "La tua situazione finanziaria entra in un anno in cui l'organizzazione e la capacità di pianificare faranno una vera differenza. Diversi semplici aggiustamenti potrebbero migliorare in modo duraturo il tuo senso di sicurezza.",

    "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.":
      "Il clima finanziario dell'anno ti invita a rivedere alcune abitudini. Una visione più chiara delle tue entrate, delle tue spese e delle tue priorità ti aiuterà a prendere decisioni con maggiore serenità.",

    "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.":
      "I prossimi mesi favoriscono una gestione più consapevole delle tue risorse. Potresti scoprire che un piccolo aggiustamento costante produce un effetto maggiore rispetto a una decisione drastica.",

    "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Quest'anno mette in luce il tuo rapporto con il denaro, la sicurezza e le priorità materiali. Una decisione ponderata potrebbe alleviare una pressione persistente.",

    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.":
      "Inizia un periodo di riorganizzazione finanziaria. Ti aiuterà a distinguere meglio le spese realmente utili da quelle che rispondono soprattutto a un impulso o a una preoccupazione.",

    "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.":
      "La tua attenzione si concentra maggiormente sulla stabilità finanziaria. L'anno è favorevole alla pianificazione, alle verifiche e alle scelte a lungo termine.",

    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.":
      "Una maggiore consapevolezza riguardo alle tue finanze potrebbe modificare positivamente il modo in cui gestirai i prossimi mesi.",

    "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.":
      "L'anno ti incoraggia a riprendere il controllo di un aspetto finanziario rimasto poco chiaro. Più chiari saranno i tuoi numeri, più semplici diventeranno le tue decisioni.",

    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Il tuo rapporto con le spese e il risparmio evolve verso un maggiore realismo. Potresti sentire il bisogno di proteggere più seriamente le tue risorse.",

    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Un nuovo approccio finanziario potrebbe offrirti maggiore tranquillità. L'obiettivo non sarà limitare tutto, ma scegliere meglio.",

    /* GENERAL */

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "La tua stabilità dipenderà soprattutto dalla capacità di seguire i tuoi dati reali anziché affidarti a un'impressione generale.",

    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.":
      "Una pianificazione chiara ti aiuterà a evitare decisioni prese con urgenza o sotto l'effetto di un'emozione passeggera.",

    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.":
      "Potresti dover riequilibrare alcune priorità. Ciò che sembrava indispensabile potrebbe gradualmente diventare secondario.",

    "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "L'anno favorisce decisioni prudenti e graduali. Evita impegni finanziari che potrebbero essere difficili da modificare in seguito.",

    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.":
      "Una migliore organizzazione amministrativa potrebbe farti risparmiare tempo ed evitare un errore, un ritardo o una dimenticanza costosa.",

    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.":
      "La tua situazione potrebbe migliorare grazie a una semplice iniziativa: confrontare, negoziare, ridurre una spesa inutile o rivedere una scadenza.",

    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Una questione finanziaria rimasta in sospeso potrebbe finalmente diventare più chiara. Aspetta comunque di avere tutte le informazioni prima di agire.",

    "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.":
      "Quest'anno ti ricorda che la sicurezza si costruisce soprattutto attraverso la costanza. Piccole azioni regolari saranno più utili di un cambiamento improvviso.",

    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Una spesa imprevista potrebbe richiedere un aggiustamento temporaneo. Mantieni un margine di sicurezza invece di utilizzare immediatamente tutte le tue risorse.",

    "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.":
      "La tua capacità di fare scelte realistiche ti permetterà di affrontare l'anno con maggiore fiducia.",

    /* INCOME */

    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Potrebbe presentarsi una possibilità di aumentare le tue entrate attraverso un'attività aggiuntiva, una vendita, un incarico o una nuova idea.",

    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Un'entrata prevista potrebbe richiedere maggiore pazienza. Verifica le tempistiche prima di fare affidamento su quel denaro.",

    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Una competenza personale potrebbe essere utilizzata meglio per creare una fonte di reddito supplementare.",

    "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "L'anno favorisce le iniziative volte a valorizzare meglio il tuo lavoro o a rivedere una tariffa diventata troppo bassa.",

    "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.":
      "Un'opportunità finanziaria potrebbe nascere da un contatto professionale, una raccomandazione o una vecchia conoscenza.",

    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Potresti scoprire che un'attività secondaria merita maggiore attenzione. Il suo potenziale potrebbe essere superiore a quanto immaginavi.",

    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Una discussione riguardante la tua retribuzione potrebbe diventare necessaria. Prepara argomenti precisi e realistici.",

    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.":
      "Un progetto partito lentamente potrebbe iniziare a produrre risultati. Continua comunque a monitorare i costi e le tempistiche.",

    "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.":
      "Un nuovo modo di utilizzare le tue risorse potrebbe creare un vantaggio finanziario a medio o lungo termine.",

    "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "L'anno ti incoraggia a diversificare le tue possibilità senza moltiplicare i rischi inutili.",

    /* EXPENSES */

    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.":
      "Una spesa impulsiva potrebbe sembrare giustificata sul momento. Concediti un po' di tempo prima di confermare un acquisto importante.",

    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Alcune spese ricorrenti meritano di essere controllate. Potresti pagare per un servizio che utilizzi poco o che è diventato inutile.",

    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.":
      "Una riparazione, una fattura o un obbligo potrebbe richiedere più del previsto. Evita di rimandare le verifiche importanti.",

    "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "L'anno è favorevole alla riduzione delle spese poco visibili che si accumulano senza offrire una reale soddisfazione.",

    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Potresti essere tentato di spendere per migliorare temporaneamente il tuo umore. Cerca prima una soluzione che non indebolisca il tuo budget.",

    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Un confronto dei prezzi o una negoziazione potrebbe permetterti di risparmiare più del previsto.",

    "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.":
      "Le spese legate al comfort, al tempo libero o ai progetti personali dovranno rimanere proporzionate alle tue altre responsabilità.",

    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evita di prestare o anticipare una somma che non potresti permetterti di perdere.",

    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Una spesa importante dovrebbe essere esaminata da diversi punti di vista prima di essere confermata.",

    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Il tuo budget diventerà più stabile se stabilirai un limite chiaro per gli acquisti non essenziali.",

    /* INVESTMENTS */

    "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.":
      "Quest'anno favorisce la creazione graduale di una riserva di sicurezza prima di assumere rischi più importanti.",

    "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.":
      "Un progetto di investimento merita di essere studiato con metodo. La qualità delle informazioni conterà più dell'entusiasmo iniziale.",

    "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.":
      "I tuoi risparmi potrebbero diventare più regolari se automatizzassi una parte delle tue decisioni finanziarie.",

    "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.":
      "Una strategia a lungo termine sarà probabilmente più favorevole rispetto alla ricerca di guadagni rapidi.",

    "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.":
      "Potresti rivedere il modo in cui le tue risorse sono distribuite tra sicurezza, progetti e crescita.",

    "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.":
      "Una decisione patrimoniale o materiale importante richiederà diverse verifiche prima di essere confermata.",

    "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.":
      "L'anno ti invita a distinguere meglio un investimento ponderato da una spesa presentata come un'opportunità.",

    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "Un progetto a lungo termine potrebbe iniziare a diventare più concreto grazie a una disciplina finanziaria costante.",

    "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.":
      "La diversificazione può proteggere le tue risorse, a condizione di comprendere bene ogni impegno.",

    "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.":
      "La tua decisione migliore potrebbe essere quella di rafforzare prima la tua stabilità, prima di cercare un rendimento più elevato.",

    /* OPPORTUNITIES */

    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Un'opportunità interessante potrebbe presentarsi in modo discreto. Prenditi il tempo necessario per valutarne il reale potenziale.",

    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Una negoziazione ben preparata potrebbe migliorare le tue condizioni finanziarie o ridurre una spesa importante.",

    "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "L'anno favorisce la ricerca di soluzioni più economiche senza sacrificare la qualità.",

    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Un'idea legata alle tue competenze potrebbe diventare una fonte di reddito supplementare.",

    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Potresti ricevere una proposta che merita di essere valutata, anche se non corrisponde esattamente al tuo piano iniziale.",

    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Un miglioramento finanziario potrebbe derivare da una migliore organizzazione piuttosto che da un aumento immediato delle entrate.",

    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Un'informazione utile potrebbe aiutarti a beneficiare di un programma, di un rimborso o di uno sconto.",

    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.":
      "Una vendita, un rimborso o una somma inaspettata potrebbe alleggerire temporaneamente la tua situazione.",

    "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.":
      "Quest'anno ti offre l'opportunità di creare una base più solida per gli anni successivi.",

    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Una scelta ragionevole fatta ora potrebbe produrre un vantaggio finanziario duraturo.",

    /* RISKS */

    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "Il rischio principale sarà prendere una decisione finanziaria per calmare un'emozione o rispondere a una pressione esterna.",

    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Una proposta allettante potrebbe contenere condizioni meno vantaggiose di quanto sembrino.",

    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evita di fare affidamento su un'entrata che non è ancora stata confermata.",

    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "Una verifica insufficiente potrebbe comportare una spesa evitabile o una cattiva comprensione di un contratto.",

    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "Il desiderio di procedere troppo velocemente potrebbe spingerti ad accettare un impegno difficile da sostenere.",

    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.":
      "Una persona potrebbe minimizzare i rischi di una decisione. Basati su fatti precisi e verificabili.",

    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "Il bisogno di compiacere gli altri potrebbe portarti a superare i tuoi limiti finanziari.",

    "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.":
      "Una piccola spesa ricorrente potrebbe trasformarsi in una somma molto più importante entro la fine dell'anno.",

    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "Il rischio principale sarà rimandare una questione finanziaria che richiede una risposta chiara.",

    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Un'eccessiva fiducia potrebbe portarti a trascurare un dettaglio importante. Rileggi le condizioni prima di firmare o pagare.",

    /* KEY PERIODS */

    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "L'inizio dell'anno favorirà i bilanci, le verifiche e la definizione di un budget più realistico.",

    "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.":
      "La primavera potrebbe offrire un'opportunità per aumentare le tue entrate o ridurre una spesa importante.",

    "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.":
      "La metà dell'anno richiederà maggiore prudenza di fronte agli acquisti impulsivi o agli impegni presi troppo rapidamente.",

    "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.":
      "L'estate potrà favorire alcuni progetti personali, a condizione di mantenere una riserva sufficiente.",

    "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.":
      "L'inizio dell'autunno sarà favorevole alle negoziazioni, alla revisione dei contratti e alle decisioni amministrative.",

    "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.":
      "La fine dell'anno favorirà il consolidamento, il risparmio e la preparazione degli obiettivi futuri.",

    "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.":
      "Un miglioramento potrebbe manifestarsi gradualmente nel corso della seconda metà dell'anno.",

    "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.":
      "Un periodo di rallentamento ti permetterà di correggere un punto debole prima che diventi più costoso.",

    "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.":
      "I periodi migliori saranno quelli in cui ti prenderai il tempo di confrontare diverse opzioni prima di decidere.",

    "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.":
      "Un'opportunità importante potrebbe richiedere una risposta rapida, ma dovrà comunque essere verificata con attenzione.",

    /* ADVICE */

    "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.":
      "Stabilisci limiti chiari per le spese non essenziali e controllali regolarmente.",

    "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Controlla i tuoi abbonamenti, gli addebiti automatici e le spese ricorrenti.",

    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantieni una riserva disponibile per gli imprevisti invece di utilizzare immediatamente ogni somma ricevuta.",

    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Confronta diverse opzioni prima di prendere una decisione finanziaria importante.",

    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evita di confondere l'urgenza emotiva con quella finanziaria.",

    "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.":
      "Monitora le tue spese abbastanza a lungo da identificare le abitudini che indeboliscono realmente il tuo budget.",

    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Non assumere impegni sulla base di una promessa vaga. Chiedi cifre, date e condizioni precise.",

    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concentrati su un miglioramento realistico piuttosto che su una trasformazione finanziaria immediata.",

    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Proteggi la tua stabilità prima di cercare un rendimento più elevato.",

    "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.":
      "Prendi decisioni che possano continuare a darti tranquillità anche tra diversi mesi.",

    /* CONCLUSION */

    "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Quest'anno può migliorare la tua stabilità finanziaria se procedi con metodo, moderazione e lucidità.",

    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "La tua situazione evolverà favorevolmente grazie a scelte semplici, costanti e attentamente verificate.",

    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Una migliore comprensione delle tue priorità ti aiuterà a utilizzare le tue risorse con maggiore fiducia.",

    "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "I prossimi mesi possono permetterti di riprendere il controllo di un aspetto finanziario diventato troppo pesante o poco chiaro.",

    "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.":
      "Potresti concludere l'anno con una visione più realistica e rassicurante della tua situazione.",

    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Il tuo progresso finanziario dipenderà soprattutto dalla tua capacità di evitare decisioni impulsive.",

    "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Quest'anno ti ricorda che la sicurezza si costruisce più attraverso la costanza che con soluzioni rapide.",

    "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.":
      "Una decisione prudente presa quest'anno potrebbe diventare una delle tue scelte più utili.",

    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Il tuo rapporto con il denaro evolve verso una maggiore maturità e capacità di giudizio.",

    "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.":
      "Rispettando i tuoi limiti e le tue priorità, potrai affrontare l'anno con maggiore stabilità.",
  },

    /* =======================================================
     PORTUGUESE — BRAZIL
  ======================================================= */

  pt: {
    /* INTRODUCTION */

    "Votre situation financière entre dans une année où la structure et la prévoyance feront une réelle différence. Plusieurs ajustements simples pourraient améliorer durablement votre sentiment de sécurité.":
      "Sua situação financeira entra em um ano em que a organização e o planejamento farão uma diferença real. Alguns ajustes simples poderão melhorar de forma duradoura sua sensação de segurança.",

    "Le climat financier de l’année vous invite à revoir certaines habitudes. Une meilleure vision de vos revenus, de vos dépenses et de vos priorités vous aidera à prendre des décisions plus sereines.":
      "O cenário financeiro do ano convida você a rever alguns hábitos. Uma visão mais clara de suas receitas, despesas e prioridades ajudará você a tomar decisões com mais tranquilidade.",

    "Les prochains mois favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction régulière produit un effet plus important qu’une décision spectaculaire.":
      "Os próximos meses favorecem uma gestão mais consciente dos seus recursos. Você poderá perceber que um pequeno ajuste constante produz um efeito maior do que uma decisão radical.",

    "Cette année met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Este ano destaca sua relação com o dinheiro, a segurança e as prioridades materiais. Uma decisão bem pensada poderá aliviar uma pressão persistente.",

    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses réellement utiles de celles qui répondent surtout à une impulsion ou à une inquiétude.":
      "Começa um período de reorganização financeira. Ele ajudará você a distinguir melhor as despesas realmente úteis daquelas motivadas principalmente por um impulso ou uma preocupação.",

    "Votre attention se porte davantage sur la stabilité financière. L’année convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Sua atenção se volta cada vez mais para a estabilidade financeira. O ano é favorável ao planejamento, às verificações e às escolhas de longo prazo.",

    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochains mois.":
      "Uma nova percepção sobre suas finanças poderá modificar positivamente a maneira como você administrará os próximos meses.",

    "L’année vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions deviendront simples.":
      "O ano incentiva você a retomar o controle de um aspecto financeiro que permaneceu pouco claro. Quanto mais claros forem seus números, mais simples serão suas decisões.",

    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Sua relação com os gastos e a poupança evolui para uma postura mais realista. Você poderá sentir a necessidade de proteger seus recursos com mais seriedade.",

    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Uma nova abordagem financeira poderá trazer mais tranquilidade. O objetivo não será restringir tudo, mas fazer escolhas melhores.",

    /* GENERAL */

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "Sua estabilidade dependerá principalmente da sua capacidade de acompanhar seus números reais, em vez de confiar apenas em uma impressão geral.",

    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion passagère.":
      "Um planejamento claro ajudará você a evitar decisões tomadas com pressa ou sob o efeito de uma emoção passageira.",

    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait progressivement devenir secondaire.":
      "Você poderá precisar reequilibrar algumas prioridades. O que parecia indispensável poderá gradualmente se tornar secundário.",

    "L’année favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "O ano favorece decisões prudentes e graduais. Evite compromissos financeiros que sejam difíceis de modificar posteriormente.",

    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur, un retard ou un oubli coûteux.":
      "Uma melhor organização administrativa poderá fazer você economizar tempo e evitar um erro, atraso ou esquecimento que poderia sair caro.",

    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, réduire une dépense inutile ou revoir une échéance.":
      "Sua situação poderá melhorar graças a uma medida simples: comparar, negociar, reduzir uma despesa desnecessária ou rever um prazo de pagamento.",

    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Uma questão financeira que permaneceu pendente poderá finalmente ficar mais clara. No entanto, espere ter todas as informações antes de agir.",

    "Cette année vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une transformation soudaine.":
      "Este ano lembra que a segurança é construída principalmente com constância. Pequenas atitudes regulares serão mais úteis do que uma transformação repentina.",

    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Uma despesa inesperada poderá exigir um ajuste temporário. Mantenha uma margem de segurança em vez de utilizar imediatamente todos os seus recursos.",

    "Votre capacité à faire des choix réalistes vous permettra de traverser l’année avec davantage de confiance.":
      "Sua capacidade de fazer escolhas realistas permitirá que você atravesse o ano com mais confiança.",

    /* INCOME */

    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Uma possibilidade de aumentar sua renda poderá surgir por meio de uma atividade adicional, uma venda, um trabalho ou uma nova ideia.",

    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Uma renda esperada poderá exigir mais paciência. Verifique os prazos antes de contar com esse dinheiro.",

    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Uma habilidade pessoal poderá ser melhor aproveitada para criar uma fonte de renda complementar.",

    "L’année favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "O ano favorece iniciativas destinadas a valorizar melhor o seu trabalho ou a rever um valor que se tornou muito baixo.",

    "Une occasion financière pourrait naître d’un contact professionnel, d’une recommandation ou d’une ancienne relation.":
      "Uma oportunidade financeira poderá surgir de um contato profissional, de uma indicação ou de uma relação anterior.",

    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Você poderá perceber que uma atividade secundária merece mais atenção. O potencial dela poderá ser maior do que você imaginava.",

    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Uma conversa sobre sua remuneração poderá se tornar necessária. Prepare argumentos precisos e realistas.",

    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à surveiller les coûts et les délais.":
      "Um projeto que demorou a começar poderá passar a produzir resultados. No entanto, continue acompanhando os custos e os prazos.",

    "Une nouvelle manière d’utiliser vos ressources pourrait créer un avantage financier à moyen ou à long terme.":
      "Uma nova maneira de utilizar seus recursos poderá criar uma vantagem financeira a médio ou longo prazo.",

    "L’année vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "O ano incentiva você a diversificar suas possibilidades sem aumentar riscos desnecessários.",

    /* EXPENSES */

    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer un achat important.":
      "Uma despesa impulsiva poderá parecer justificada no momento. Dê a si mesmo algum tempo antes de confirmar uma compra importante.",

    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Algumas despesas recorrentes merecem ser verificadas. Você poderá estar pagando por um serviço pouco utilizado ou que deixou de ser necessário.",

    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter les vérifications importantes.":
      "Um conserto, uma conta ou uma obrigação poderá exigir mais do que o previsto. Evite adiar verificações importantes.",

    "L’année convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "O ano é favorável à redução de pequenas despesas pouco perceptíveis que se acumulam sem trazer verdadeira satisfação.",

    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Você poderá sentir vontade de gastar para melhorar temporariamente seu humor. Procure primeiro uma solução que não comprometa seu orçamento.",

    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Uma comparação de preços ou uma negociação poderá permitir que você economize mais do que esperava.",

    "Les dépenses liées au confort, aux loisirs ou aux projets personnels devront rester proportionnelles à vos autres responsabilités.":
      "As despesas relacionadas ao conforto, ao lazer ou a projetos pessoais deverão permanecer proporcionais às suas outras responsabilidades.",

    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evite emprestar ou adiantar uma quantia que você não poderia se dar ao luxo de perder.",

    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Uma despesa importante deverá ser analisada sob diferentes perspectivas antes de ser confirmada.",

    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Seu orçamento ganhará mais estabilidade se você estabelecer um limite claro para compras não essenciais.",

    /* INVESTMENTS */

    "Cette année favorise la constitution progressive d’une réserve de sécurité avant toute prise de risque plus importante.":
      "Este ano favorece a formação gradual de uma reserva de segurança antes de assumir riscos maiores.",

    "Un projet d’investissement mérite d’être étudié avec méthode. La qualité des informations comptera davantage que l’enthousiasme initial.":
      "Um projeto de investimento merece ser analisado com método. A qualidade das informações será mais importante do que o entusiasmo inicial.",

    "Votre épargne pourrait devenir plus régulière si vous automatisez une partie de vos décisions financières.":
      "Sua poupança poderá se tornar mais regular se você automatizar parte das suas decisões financeiras.",

    "Une stratégie à long terme sera probablement plus favorable qu’une recherche de gains rapides.":
      "Uma estratégia de longo prazo provavelmente será mais favorável do que a busca por ganhos rápidos.",

    "Vous pourriez revoir la manière dont vos ressources sont réparties entre sécurité, projets et croissance.":
      "Você poderá rever a maneira como seus recursos estão distribuídos entre segurança, projetos e crescimento.",

    "Une décision patrimoniale ou matérielle importante demandera plusieurs vérifications avant d’être confirmée.":
      "Uma decisão patrimonial ou material importante exigirá várias verificações antes de ser confirmada.",

    "L’année vous invite à mieux distinguer un investissement réfléchi d’une dépense présentée comme une occasion.":
      "O ano convida você a distinguir melhor um investimento bem planejado de uma despesa apresentada como uma oportunidade.",

    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "Um projeto de longo prazo poderá começar a se tornar mais concreto graças a uma disciplina financeira constante.",

    "La diversification peut protéger vos ressources, à condition de bien comprendre chaque engagement.":
      "A diversificação pode proteger seus recursos, desde que você compreenda bem cada compromisso.",

    "Votre meilleure décision pourrait être de renforcer d’abord votre stabilité avant de chercher un rendement plus élevé.":
      "Sua melhor decisão poderá ser fortalecer primeiro sua estabilidade antes de buscar um retorno mais elevado.",

    /* OPPORTUNITIES */

    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Uma oportunidade interessante poderá surgir de forma discreta. Reserve um tempo para avaliar seu verdadeiro potencial.",

    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Uma negociação bem preparada poderá melhorar suas condições financeiras ou reduzir uma despesa importante.",

    "L’année favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "O ano favorece a busca por soluções mais econômicas sem sacrificar a qualidade.",

    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Uma ideia relacionada às suas habilidades poderá se tornar uma fonte adicional de renda.",

    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Você poderá receber uma proposta que merece ser analisada, mesmo que ela não corresponda exatamente ao seu plano inicial.",

    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Uma melhora financeira poderá vir de uma organização melhor, em vez de um aumento imediato da renda.",

    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Uma informação útil poderá ajudar você a aproveitar um programa, um reembolso ou um desconto.",

    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre situation.":
      "Uma venda, um reembolso ou uma quantia inesperada poderá aliviar temporariamente sua situação.",

    "Cette année vous offre une occasion de poser une base plus solide pour les années suivantes.":
      "Este ano oferece a você a oportunidade de construir uma base mais sólida para os próximos anos.",

    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Uma escolha sensata feita agora poderá gerar uma vantagem financeira duradoura.",

    /* RISKS */

    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "O principal risco será tomar uma decisão financeira para acalmar uma emoção ou responder a uma pressão externa.",

    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Uma proposta atraente poderá conter condições menos vantajosas do que parecem.",

    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evite contar com uma renda que ainda não esteja confirmada.",

    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "A falta de verificação poderá resultar em uma despesa evitável ou em uma interpretação incorreta de um contrato.",

    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "O desejo de avançar rápido demais poderá levar você a assumir um compromisso difícil de manter.",

    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis et vérifiables.":
      "Alguém poderá minimizar os riscos de uma decisão. Baseie-se em fatos precisos e verificáveis.",

    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "A necessidade de agradar aos outros poderá levar você a ultrapassar seus limites financeiros.",

    "Une dépense répétée de faible montant pourrait devenir beaucoup plus importante à la fin de l’année.":
      "Uma pequena despesa recorrente poderá se transformar em uma quantia muito maior até o final do ano.",

    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "O principal risco será adiar uma questão financeira que exige uma resposta clara.",

    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "O excesso de confiança poderá fazer você ignorar um detalhe importante. Releia as condições antes de assinar ou pagar.",

    /* KEY PERIODS */

    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "O início do ano favorecerá balanços, verificações e a criação de um orçamento mais realista.",

    "Le printemps pourrait apporter une occasion d’augmenter vos revenus ou de réduire une dépense importante.":
      "A primavera poderá trazer uma oportunidade de aumentar sua renda ou reduzir uma despesa importante.",

    "Le milieu de l’année demandera davantage de prudence face aux achats impulsifs ou aux engagements trop rapides.":
      "O meio do ano exigirá mais prudência diante de compras impulsivas ou compromissos assumidos rapidamente demais.",

    "L’été pourra favoriser certains projets personnels, à condition de conserver une réserve suffisante.":
      "O verão poderá favorecer alguns projetos pessoais, desde que você mantenha uma reserva suficiente.",

    "Le début de l’automne sera propice aux négociations, aux révisions de contrats et aux décisions administratives.":
      "O início do outono será favorável a negociações, revisões de contratos e decisões administrativas.",

    "La fin de l’année favorisera la consolidation, l’épargne et la préparation des objectifs futurs.":
      "O final do ano favorecerá a consolidação, a poupança e a preparação de objetivos futuros.",

    "Une amélioration pourrait apparaître progressivement au cours du deuxième semestre.":
      "Uma melhora poderá surgir gradualmente ao longo do segundo semestre.",

    "Une période de ralentissement vous permettra de corriger une faiblesse avant qu’elle ne devienne plus coûteuse.":
      "Um período de desaceleração permitirá que você corrija um ponto fraco antes que ele se torne mais caro.",

    "Les meilleures périodes seront celles où vous prendrez le temps de comparer plusieurs options avant de décider.":
      "Os melhores períodos serão aqueles em que você reservar tempo para comparar várias opções antes de decidir.",

    "Une occasion importante pourrait demander une réponse rapide, mais elle devra tout de même être vérifiée avec soin.":
      "Uma oportunidade importante poderá exigir uma resposta rápida, mas ainda assim deverá ser verificada com cuidado.",

    /* ADVICE */

    "Établissez des limites claires pour les dépenses non essentielles et vérifiez-les régulièrement.":
      "Estabeleça limites claros para despesas não essenciais e revise-os regularmente.",

    "Examinez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Revise suas assinaturas, seus pagamentos automáticos e suas despesas recorrentes.",

    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantenha uma reserva disponível para imprevistos, em vez de utilizar imediatamente cada quantia recebida.",

    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compare várias opções antes de tomar uma decisão financeira importante.",

    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evite confundir urgência emocional com urgência financeira.",

    "Suivez vos dépenses assez longtemps pour identifier les habitudes qui fragilisent réellement votre budget.":
      "Acompanhe suas despesas por tempo suficiente para identificar os hábitos que realmente enfraquecem seu orçamento.",

    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Não assuma compromissos com base em uma promessa vaga. Peça valores, datas e condições precisas.",

    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concentre-se em uma melhora realista, em vez de buscar uma transformação financeira imediata.",

    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Proteja sua estabilidade antes de buscar um retorno mais elevado.",

    "Prenez des décisions capables de vous apporter encore de la tranquillité dans plusieurs mois.":
      "Tome decisões que ainda possam trazer tranquilidade a você daqui a vários meses.",

    /* CONCLUSION */

    "Cette année peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Este ano pode melhorar sua estabilidade financeira se você avançar com método, moderação e clareza.",

    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Sua situação evoluirá favoravelmente graças a escolhas simples, constantes e cuidadosamente verificadas.",

    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Uma melhor compreensão das suas prioridades ajudará você a utilizar seus recursos com mais confiança.",

    "Les prochains mois peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Os próximos meses poderão permitir que você retome o controle de um aspecto financeiro que se tornou pesado demais ou pouco claro.",

    "Vous pourriez terminer l’année avec une vision plus réaliste et plus rassurante de votre situation.":
      "Você poderá terminar o ano com uma visão mais realista e tranquilizadora da sua situação.",

    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Seu progresso financeiro dependerá principalmente da sua capacidade de evitar decisões impulsivas.",

    "Cette année vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Este ano lembra que a segurança é construída mais pela constância do que por soluções rápidas.",

    "Une décision prudente prise cette année pourrait devenir l’un de vos choix les plus utiles.":
      "Uma decisão prudente tomada neste ano poderá se tornar uma das suas escolhas mais úteis.",

    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Sua relação com o dinheiro evolui para uma postura de maior maturidade e discernimento.",

    "En respectant vos limites et vos priorités, vous pourrez traverser l’année avec davantage de stabilité.":
      "Respeitando seus limites e suas prioridades, você poderá atravessar o ano com mais estabilidade.",
  },
  };

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let result = source;

  for (
    const [french, translated] of
    Object.entries(translations)
  ) {
    result = result.split(french).join(translated);
  }

  return result;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeYearHoroscopeFinance(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let localized = source;

  localized = applyTranslations(
    localized,
    FINANCE_TITLES[locale],
  );

  localized = applyTranslations(
    localized,
    FINANCE_TEXTS[locale],
  );

  return localized;
}
  
