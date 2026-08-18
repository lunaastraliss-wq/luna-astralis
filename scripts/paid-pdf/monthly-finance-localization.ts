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

const FINANCE_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Une période favorable à vos finances":
      "A favorable period for your finances",
    "Vos ressources évoluent progressivement":
      "Your resources are evolving gradually",
    "Le mois invite à une meilleure gestion":
      "The month invites you to manage your finances more effectively",
    "Des occasions financières se présentent":
      "Financial opportunities are emerging",
    "Votre équilibre matériel se renforce":
      "Your material balance is strengthening",
    "Un nouveau regard sur votre budget":
      "A new perspective on your budget",
    "Une période propice aux décisions financières":
      "A favorable period for financial decisions",
    "Vos priorités financières deviennent plus claires":
      "Your financial priorities are becoming clearer",
  },
  es: {
    "Une période favorable à vos finances":
      "Un período favorable para sus finanzas",
    "Vos ressources évoluent progressivement":
      "Sus recursos evolucionan progresivamente",
    "Le mois invite à une meilleure gestion":
      "El mes invita a una mejor gestión",
    "Des occasions financières se présentent":
      "Se presentan oportunidades financieras",
    "Votre équilibre matériel se renforce":
      "Su equilibrio material se fortalece",
    "Un nouveau regard sur votre budget":
      "Una nueva mirada sobre su presupuesto",
    "Une période propice aux décisions financières":
      "Un período propicio para las decisiones financieras",
    "Vos priorités financières deviennent plus claires":
      "Sus prioridades financieras se vuelven más claras",
  },
  de: {
    "Une période favorable à vos finances":
      "Eine günstige Phase für Ihre Finanzen",
    "Vos ressources évoluent progressivement":
      "Ihre Ressourcen entwickeln sich schrittweise",
    "Le mois invite à une meilleure gestion":
      "Der Monat lädt zu einem besseren Finanzmanagement ein",
    "Des occasions financières se présentent":
      "Finanzielle Möglichkeiten zeichnen sich ab",
    "Votre équilibre matériel se renforce":
      "Ihr materielles Gleichgewicht wird stärker",
    "Un nouveau regard sur votre budget":
      "Ein neuer Blick auf Ihr Budget",
    "Une période propice aux décisions financières":
      "Eine günstige Zeit für finanzielle Entscheidungen",
    "Vos priorités financières deviennent plus claires":
      "Ihre finanziellen Prioritäten werden klarer",
  },
  it: {
    "Une période favorable à vos finances":
      "Un periodo favorevole per le tue finanze",
    "Vos ressources évoluent progressivement":
      "Le tue risorse evolvono gradualmente",
    "Le mois invite à une meilleure gestion":
      "Il mese invita a una gestione migliore",
    "Des occasions financières se présentent":
      "Si presentano opportunità finanziarie",
    "Votre équilibre matériel se renforce":
      "Il tuo equilibrio materiale si rafforza",
    "Un nouveau regard sur votre budget":
      "Un nuovo sguardo sul tuo budget",
    "Une période propice aux décisions financières":
      "Un periodo favorevole alle decisioni finanziarie",
    "Vos priorités financières deviennent plus claires":
      "Le tue priorità finanziarie diventano più chiare",
  },
  pt: {
    "Une période favorable à vos finances":
      "Um período favorável para suas finanças",
    "Vos ressources évoluent progressivement":
      "Seus recursos evoluem gradualmente",
    "Le mois invite à une meilleure gestion":
      "O mês convida a uma gestão melhor",
    "Des occasions financières se présentent":
      "Oportunidades financeiras se apresentam",
    "Votre équilibre matériel se renforce":
      "Seu equilíbrio material se fortalece",
    "Un nouveau regard sur votre budget":
      "Um novo olhar sobre seu orçamento",
    "Une période propice aux décisions financières":
      "Um período propício para decisões financeiras",
    "Vos priorités financières deviennent plus claires":
      "Suas prioridades financeiras ficam mais claras",
  },
};

/* =========================================================
   BANQUE DE TEXTES
========================================================= */

const FINANCE_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre situation financière demande ce mois-ci davantage de structure et de prévoyance. Quelques ajustements simples pourraient améliorer votre sentiment de sécurité.":
      "Your financial situation requires more structure and foresight this month. A few simple adjustments could improve your sense of security.",
    "Le climat financier du mois vous invite à revoir certaines habitudes. Une meilleure vision de vos dépenses vous aidera à prendre des décisions plus sereines.":
      "The financial climate of the month invites you to review certain habits. A clearer view of your expenses will help you make calmer decisions.",
    "Les prochaines semaines favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction produit un effet plus important que prévu.":
      "The coming weeks favor a more conscious management of your resources. You may discover that a small adjustment produces a greater effect than expected.",
    "Ce mois met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "This month highlights your relationship with money, security, and material priorities. A thoughtful decision could ease a persistent pressure.",
    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses nécessaires de celles qui répondent surtout à une impulsion.":
      "A period of financial reorganization begins. It will help you better distinguish necessary expenses from those driven mainly by impulse.",
    "Votre attention se porte davantage sur la stabilité financière. Le mois convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Your attention is turning more toward financial stability. The month is well suited to planning, checking details, and making long-term choices.",
    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochaines semaines.":
      "A realization about your finances could positively change the way you manage the coming weeks.",
    "Le mois vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions seront simples.":
      "The month encourages you to regain control over a financial matter that has remained unclear. The clearer your numbers are, the simpler your decisions will become.",
    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Your relationship with spending and saving is becoming more realistic. You may feel the need to protect your resources more seriously.",
    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "A new financial approach could bring you greater peace of mind. The goal will not be to restrict everything, but to choose more wisely.",
    "La stabilité dépendra surtout de votre capacité à suivre vos dépenses réelles plutôt qu’à vous fier à une impression générale.":
      "Stability will depend mainly on your ability to track your actual expenses rather than rely on a general impression.",
    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion.":
      "Clear planning will help you avoid decisions made in urgency or under the influence of emotion.",
    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait finalement devenir secondaire.":
      "You may need to rebalance certain priorities. What once seemed essential could ultimately become secondary.",
    "Le mois favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "The month favors cautious and gradual decisions. Avoid financial commitments that would be difficult to change later.",
    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur ou un oubli.":
      "Better administrative organization could save you time and prevent an error or omission.",
    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, annuler une dépense inutile ou revoir une échéance.":
      "Your situation could improve through a simple step: compare, negotiate, cancel an unnecessary expense, or review a due date.",
    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "A financial question that has remained unresolved may finally become clearer. However, wait until you have all the information before acting.",
    "Ce mois vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une décision spectaculaire.":
      "This month reminds you that security is built mainly through consistency. Small regular actions will be more useful than one spectacular decision.",
    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "An unexpected expense may require a temporary adjustment. Keep some room to maneuver instead of using all your resources immediately.",
    "Votre capacité à faire des choix réalistes vous permettra de traverser le mois avec davantage de confiance.":
      "Your ability to make realistic choices will help you move through the month with greater confidence.",
    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "An opportunity to increase your income may appear through an additional task, a sale, an assignment, or a new idea.",
    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Expected income may require more patience. Check the timing before relying on that money.",
    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "A personal skill could be used more effectively to create an additional source of income.",
    "Le mois favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "The month favors steps aimed at better valuing your work or reviewing a rate that has become too low.",
    "Une occasion financière pourrait naître d’un contact professionnel ou d’une ancienne relation.":
      "A financial opportunity may arise from a professional contact or a former relationship.",
    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "You may notice that a side activity deserves more attention. Its potential could be greater than you imagined.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "A discussion about your compensation may become necessary. Prepare precise and realistic arguments.",
    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à contrôler les coûts.":
      "A slow-starting project may begin to produce results. However, continue to monitor costs.",
    "Une nouvelle façon d’utiliser vos ressources pourrait créer un avantage financier à moyen terme.":
      "A new way of using your resources could create a medium-term financial advantage.",
    "Le mois vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "The month encourages you to diversify your possibilities without multiplying unnecessary risks.",
    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer l’achat.":
      "An impulsive expense may seem justified in the moment. Give yourself some time before confirming the purchase.",
    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Some recurring expenses deserve to be reviewed. You may be paying for a service that is rarely used or no longer useful.",
    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter une vérification importante.":
      "A repair, bill, or obligation may cost more than expected. Avoid postponing an important check.",
    "Le mois convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "The month is well suited to reducing invisible expenses that accumulate without bringing real satisfaction.",
    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "You may be tempted to spend in order to improve your mood temporarily. First look for a solution that does not weaken your budget.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Comparing prices or negotiating could help you save more than expected.",
    "Les dépenses liées au confort ou aux loisirs devront rester proportionnelles à vos autres responsabilités.":
      "Expenses related to comfort or leisure should remain proportionate to your other responsibilities.",
    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Avoid lending or advancing an amount that you could not afford to lose.",
    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "A major expense should be examined from several angles before being confirmed.",
    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Your budget will become more stable if you set a clear limit on non-essential purchases.",
    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "An interesting opportunity may appear in a subtle form. Take time to assess its true potential.",
    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "A well-prepared negotiation could improve your financial conditions or reduce a significant expense.",
    "Le mois favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "The month favors finding more economical solutions without sacrificing quality.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "An idea related to your skills could become an additional source of income.",
    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "You may receive a proposal worth considering, even if it does not exactly match your original plan.",
    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Financial improvement may come from better organization rather than an immediate increase in income.",
    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Useful information could help you benefit from a program, reimbursement, or discount.",
    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre budget.":
      "A sale, reimbursement, or unexpected amount could temporarily ease your budget.",
    "Le mois vous offre une occasion de poser une base plus solide pour les prochains mois.":
      "The month gives you an opportunity to build a stronger foundation for the coming months.",
    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "A reasonable choice made now could produce a lasting financial advantage.",
    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "The main risk will be making a financial decision to soothe an emotion or respond to outside pressure.",
    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "An attractive proposal may include conditions that are less favorable than they appear.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Avoid relying on income that has not yet been confirmed.",
    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "A lack of verification could lead to an avoidable expense or a misunderstanding of a contract.",
    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "The desire to move too quickly may push you to accept a commitment that is difficult to sustain.",
    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis.":
      "Someone may minimize the risks of a decision. Rely on precise facts.",
    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "The need to please others may lead you to exceed your financial limits.",
    "Une dépense répétée de faible montant pourrait devenir plus importante que prévu à la fin du mois.":
      "A small recurring expense could become more significant than expected by the end of the month.",
    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "The main risk will be postponing a financial question that requires a clear answer.",
    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Overconfidence may cause you to overlook an important detail. Review the conditions before signing or paying.",
    "Établissez un montant précis pour les dépenses non essentielles et respectez-le jusqu’à la fin du mois.":
      "Set a specific amount for non-essential expenses and respect it until the end of the month.",
    "Vérifiez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Review your subscriptions, automatic payments, and recurring expenses.",
    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Keep a reserve available for unexpected events instead of immediately using every amount you receive.",
    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compare several options before making an important financial decision.",
    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Avoid mixing emotional urgency with financial urgency.",
    "Notez vos dépenses pendant quelques semaines afin d’identifier les habitudes qui fragilisent votre budget.":
      "Track your expenses for a few weeks to identify habits that weaken your budget.",
    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Do not commit based on a vague promise. Ask for precise figures, dates, and conditions.",
    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Focus on a realistic improvement rather than an instant financial transformation.",
    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Protect your stability before seeking a higher return.",
    "Prenez une décision qui vous apportera encore de la tranquillité dans plusieurs mois.":
      "Make a decision that will still bring you peace of mind several months from now.",
    "Ce mois peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "This month can improve your financial stability if you proceed with method, moderation, and clarity.",
    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Your situation will evolve favorably through simple, consistent, and carefully checked choices.",
    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "A better understanding of your priorities will help you use your resources with greater confidence.",
    "Les prochaines semaines peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "The coming weeks may help you regain control over a financial matter that has become too burdensome or unclear.",
    "Vous pourriez terminer le mois avec une vision plus réaliste et plus rassurante de votre situation.":
      "You may end the month with a more realistic and reassuring view of your situation.",
    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Your financial progress will depend mainly on your ability to avoid impulsive decisions.",
    "Ce mois vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "This month reminds you that security is built more through consistency than through quick solutions.",
    "Une décision prudente prise maintenant pourrait devenir l’un des choix les plus utiles de cette période.":
      "A cautious decision made now could become one of the most useful choices of this period.",
    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Your relationship with money is evolving toward greater maturity and discernment.",
    "En respectant vos limites et vos priorités, vous pourrez traverser le mois avec plus de stabilité.":
      "By respecting your limits and priorities, you will be able to move through the month with greater stability.",
  },
  es: {
    "Votre situation financière demande ce mois-ci davantage de structure et de prévoyance. Quelques ajustements simples pourraient améliorer votre sentiment de sécurité.":
      "Su situación financiera requiere este mes más estructura y previsión. Algunos ajustes sencillos podrían mejorar su sensación de seguridad.",
    "Le climat financier du mois vous invite à revoir certaines habitudes. Une meilleure vision de vos dépenses vous aidera à prendre des décisions plus sereines.":
      "El clima financiero del mes le invita a revisar ciertos hábitos. Una visión más clara de sus gastos le ayudará a tomar decisiones más serenas.",
    "Les prochaines semaines favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction produit un effet plus important que prévu.":
      "Las próximas semanas favorecen una gestión más consciente de sus recursos. Podría descubrir que un pequeño ajuste produce un efecto mayor de lo previsto.",
    "Ce mois met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Este mes pone de relieve su relación con el dinero, la seguridad y las prioridades materiales. Una decisión reflexiva podría aliviar una presión persistente.",
    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses nécessaires de celles qui répondent surtout à une impulsion.":
      "Comienza un período de reorganización financiera. Le ayudará a distinguir mejor los gastos necesarios de aquellos que responden sobre todo a un impulso.",
    "Votre attention se porte davantage sur la stabilité financière. Le mois convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Su atención se dirige más hacia la estabilidad financiera. El mes es adecuado para planificar, verificar y tomar decisiones a largo plazo.",
    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochaines semaines.":
      "Una toma de conciencia sobre sus finanzas podría cambiar positivamente la forma en que gestiona las próximas semanas.",
    "Le mois vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions seront simples.":
      "El mes le anima a recuperar el control de un aspecto financiero que ha permanecido poco claro. Cuanto más claras sean sus cifras, más sencillas serán sus decisiones.",
    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Su relación con los gastos y el ahorro evoluciona hacia un mayor realismo. Podría sentir la necesidad de proteger sus recursos con más seriedad.",
    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Un nuevo enfoque financiero podría aportarle mayor tranquilidad. El objetivo no será restringirlo todo, sino elegir mejor.",
    "La stabilité dépendra surtout de votre capacité à suivre vos dépenses réelles plutôt qu’à vous fier à une impression générale.":
      "La estabilidad dependerá sobre todo de su capacidad para seguir sus gastos reales en lugar de confiar en una impresión general.",
    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion.":
      "Una planificación clara le ayudará a evitar decisiones tomadas con urgencia o bajo el efecto de una emoción.",
    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait finalement devenir secondaire.":
      "Podría tener que reequilibrar ciertas prioridades. Lo que parecía indispensable podría finalmente pasar a un segundo plano.",
    "Le mois favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "El mes favorece las decisiones prudentes y progresivas. Evite compromisos financieros difíciles de modificar posteriormente.",
    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur ou un oubli.":
      "Una mejor organización administrativa podría ahorrarle tiempo y prevenir un error u olvido.",
    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, annuler une dépense inutile ou revoir une échéance.":
      "Su situación podría mejorar gracias a una acción sencilla: comparar, negociar, cancelar un gasto innecesario o revisar un vencimiento.",
    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Una cuestión financiera pendiente podría finalmente aclararse. Sin embargo, espere a tener toda la información antes de actuar.",
    "Ce mois vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une décision spectaculaire.":
      "Este mes le recuerda que la seguridad se construye sobre todo con constancia. Los pequeños gestos regulares serán más útiles que una decisión espectacular.",
    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Un gasto imprevisto podría requerir un ajuste temporal. Mantenga un margen de maniobra en lugar de utilizar inmediatamente todos sus recursos.",
    "Votre capacité à faire des choix réalistes vous permettra de traverser le mois avec davantage de confiance.":
      "Su capacidad para tomar decisiones realistas le permitirá atravesar el mes con mayor confianza.",
    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Podría surgir una posibilidad de aumentar sus ingresos mediante una tarea adicional, una venta, un encargo o una nueva idea.",
    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Un ingreso esperado podría requerir más paciencia. Verifique los plazos antes de contar con ese dinero.",
    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Una habilidad personal podría utilizarse mejor para crear una fuente de ingresos complementaria.",
    "Le mois favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "El mes favorece las gestiones destinadas a valorar mejor su trabajo o revisar una tarifa que se ha vuelto demasiado baja.",
    "Une occasion financière pourrait naître d’un contact professionnel ou d’une ancienne relation.":
      "Una oportunidad financiera podría surgir de un contacto profesional o de una relación anterior.",
    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Podría comprobar que una actividad secundaria merece más atención. Su potencial podría ser mayor de lo que imaginaba.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Una conversación sobre su remuneración podría hacerse necesaria. Prepare argumentos precisos y realistas.",
    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à contrôler les coûts.":
      "Un proyecto que tardaba en arrancar podría comenzar a producir resultados. No obstante, siga controlando los costos.",
    "Une nouvelle façon d’utiliser vos ressources pourrait créer un avantage financier à moyen terme.":
      "Una nueva forma de utilizar sus recursos podría crear una ventaja financiera a medio plazo.",
    "Le mois vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "El mes le anima a diversificar sus posibilidades sin multiplicar riesgos innecesarios.",
    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer l’achat.":
      "Un gasto impulsivo podría parecer justificado en el momento. Dése un plazo antes de confirmar la compra.",
    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Algunos gastos recurrentes merecen ser revisados. Podría estar pagando por un servicio poco utilizado o que ya no resulta útil.",
    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter une vérification importante.":
      "Una reparación, factura u obligación podría costar más de lo previsto. Evite posponer una verificación importante.",
    "Le mois convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "El mes es adecuado para reducir los gastos invisibles que se acumulan sin aportar una satisfacción real.",
    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Podría sentirse tentado a gastar para mejorar temporalmente su estado de ánimo. Busque primero una solución que no debilite su presupuesto.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Comparar precios o negociar podría permitirle ahorrar más de lo esperado.",
    "Les dépenses liées au confort ou aux loisirs devront rester proportionnelles à vos autres responsabilités.":
      "Los gastos relacionados con el confort o el ocio deberán mantenerse proporcionales a sus demás responsabilidades.",
    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evite prestar o adelantar una cantidad que no podría permitirse perder.",
    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Un gasto importante debería examinarse desde varios ángulos antes de confirmarlo.",
    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Su presupuesto ganará estabilidad si fija un límite claro a las compras no esenciales.",
    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Una oportunidad interesante podría aparecer de forma discreta. Tómese el tiempo de evaluar su verdadero potencial.",
    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Una negociación bien preparada podría mejorar sus condiciones financieras o reducir un gasto importante.",
    "Le mois favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "El mes favorece la búsqueda de soluciones más económicas sin sacrificar la calidad.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Una idea relacionada con sus competencias podría convertirse en una fuente adicional de ingresos.",
    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Podría recibir una propuesta que merezca ser estudiada, aunque no corresponda exactamente a su plan inicial.",
    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Una mejora financiera podría provenir de una mejor organización en lugar de un aumento inmediato de los ingresos.",
    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Una información útil podría ayudarle a aprovechar un programa, un reembolso o un descuento.",
    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre budget.":
      "Una venta, un reembolso o una cantidad inesperada podría aliviar temporalmente su presupuesto.",
    "Le mois vous offre une occasion de poser une base plus solide pour les prochains mois.":
      "El mes le ofrece la oportunidad de establecer una base más sólida para los próximos meses.",
    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Una elección razonable hecha ahora podría generar una ventaja financiera duradera.",
    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "El principal riesgo será tomar una decisión financiera para calmar una emoción o responder a una presión externa.",
    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Una propuesta atractiva podría incluir condiciones menos favorables de lo que parecen.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evite contar con un ingreso que todavía no esté confirmado.",
    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "La falta de verificación podría provocar un gasto evitable o una mala comprensión de un contrato.",
    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "El deseo de avanzar demasiado rápido podría llevarle a aceptar un compromiso difícil de sostener.",
    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis.":
      "Alguien podría minimizar los riesgos de una decisión. Apóyese en hechos precisos.",
    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "La necesidad de complacer podría llevarle a superar sus límites financieros.",
    "Une dépense répétée de faible montant pourrait devenir plus importante que prévu à la fin du mois.":
      "Un gasto pequeño pero repetido podría volverse más importante de lo previsto al final del mes.",
    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "El principal riesgo será posponer una cuestión financiera que exige una respuesta clara.",
    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Un exceso de confianza podría hacerle pasar por alto un detalle importante. Revise las condiciones antes de firmar o pagar.",
    "Établissez un montant précis pour les dépenses non essentielles et respectez-le jusqu’à la fin du mois.":
      "Establezca una cantidad precisa para los gastos no esenciales y respétela hasta el final del mes.",
    "Vérifiez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Revise sus suscripciones, pagos automáticos y gastos recurrentes.",
    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantenga una reserva disponible para imprevistos en lugar de utilizar inmediatamente cada cantidad recibida.",
    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compare varias opciones antes de tomar una decisión financiera importante.",
    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evite mezclar urgencia emocional con urgencia financiera.",
    "Notez vos dépenses pendant quelques semaines afin d’identifier les habitudes qui fragilisent votre budget.":
      "Anote sus gastos durante algunas semanas para identificar los hábitos que debilitan su presupuesto.",
    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "No se comprometa basándose en una promesa vaga. Pida cifras, fechas y condiciones precisas.",
    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concéntrese en una mejora realista en lugar de una transformación financiera instantánea.",
    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Proteja su estabilidad antes de buscar un rendimiento más alto.",
    "Prenez une décision qui vous apportera encore de la tranquillité dans plusieurs mois.":
      "Tome una decisión que siga aportándole tranquilidad dentro de varios meses.",
    "Ce mois peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Este mes puede mejorar su estabilidad financiera si avanza con método, moderación y claridad.",
    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Su situación evolucionará favorablemente gracias a decisiones sencillas, constantes y bien verificadas.",
    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Una mejor comprensión de sus prioridades le ayudará a utilizar sus recursos con mayor confianza.",
    "Les prochaines semaines peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Las próximas semanas podrían permitirle recuperar el control de un aspecto financiero que se ha vuelto demasiado pesado o poco claro.",
    "Vous pourriez terminer le mois avec une vision plus réaliste et plus rassurante de votre situation.":
      "Podría terminar el mes con una visión más realista y tranquilizadora de su situación.",
    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Su progreso financiero dependerá sobre todo de su capacidad para evitar decisiones impulsivas.",
    "Ce mois vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Este mes le recuerda que la seguridad se construye más con constancia que con soluciones rápidas.",
    "Une décision prudente prise maintenant pourrait devenir l’un des choix les plus utiles de cette période.":
      "Una decisión prudente tomada ahora podría convertirse en una de las elecciones más útiles de este período.",
    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Su relación con el dinero evoluciona hacia una mayor madurez y discernimiento.",
    "En respectant vos limites et vos priorités, vous pourrez traverser le mois avec plus de stabilité.":
      "Respetando sus límites y prioridades, podrá atravesar el mes con mayor estabilidad.",
  },
  de: {
    "Votre situation financière demande ce mois-ci davantage de structure et de prévoyance. Quelques ajustements simples pourraient améliorer votre sentiment de sécurité.":
      "Ihre finanzielle Situation erfordert diesen Monat mehr Struktur und Voraussicht. Einige einfache Anpassungen könnten Ihr Sicherheitsgefühl verbessern.",
    "Le climat financier du mois vous invite à revoir certaines habitudes. Une meilleure vision de vos dépenses vous aidera à prendre des décisions plus sereines.":
      "Das finanzielle Klima des Monats lädt Sie dazu ein, bestimmte Gewohnheiten zu überprüfen. Ein klarerer Überblick über Ihre Ausgaben hilft Ihnen, ruhigere Entscheidungen zu treffen.",
    "Les prochaines semaines favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction produit un effet plus important que prévu.":
      "Die kommenden Wochen begünstigen einen bewussteren Umgang mit Ihren Ressourcen. Sie könnten feststellen, dass eine kleine Korrektur eine größere Wirkung hat als erwartet.",
    "Ce mois met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Dieser Monat rückt Ihr Verhältnis zu Geld, Sicherheit und materiellen Prioritäten in den Mittelpunkt. Eine überlegte Entscheidung könnte anhaltenden Druck mindern.",
    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses nécessaires de celles qui répondent surtout à une impulsion.":
      "Eine Phase der finanziellen Neuordnung beginnt. Sie hilft Ihnen, notwendige Ausgaben besser von solchen zu unterscheiden, die vor allem aus einem Impuls entstehen.",
    "Votre attention se porte davantage sur la stabilité financière. Le mois convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Ihre Aufmerksamkeit richtet sich stärker auf finanzielle Stabilität. Der Monat eignet sich gut für Planung, Überprüfungen und langfristige Entscheidungen.",
    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochaines semaines.":
      "Eine Erkenntnis in Bezug auf Ihre Finanzen könnte Ihren Umgang mit den kommenden Wochen positiv verändern.",
    "Le mois vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions seront simples.":
      "Der Monat ermutigt Sie, die Kontrolle über einen unklar gebliebenen finanziellen Bereich zurückzugewinnen. Je klarer Ihre Zahlen sind, desto einfacher werden Ihre Entscheidungen.",
    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Ihr Verhältnis zu Ausgaben und Sparen wird realistischer. Sie könnten das Bedürfnis verspüren, Ihre Ressourcen ernster zu schützen.",
    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Ein neuer finanzieller Ansatz könnte Ihnen mehr Ruhe bringen. Ziel ist nicht, alles einzuschränken, sondern besser zu wählen.",
    "La stabilité dépendra surtout de votre capacité à suivre vos dépenses réelles plutôt qu’à vous fier à une impression générale.":
      "Stabilität hängt vor allem davon ab, dass Sie Ihre tatsächlichen Ausgaben verfolgen, anstatt sich auf einen allgemeinen Eindruck zu verlassen.",
    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion.":
      "Eine klare Planung hilft Ihnen, Entscheidungen aus Zeitdruck oder unter dem Einfluss von Emotionen zu vermeiden.",
    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait finalement devenir secondaire.":
      "Sie könnten bestimmte Prioritäten neu ausbalancieren müssen. Was unverzichtbar schien, könnte letztlich zweitrangig werden.",
    "Le mois favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "Der Monat begünstigt vorsichtige und schrittweise Entscheidungen. Vermeiden Sie finanzielle Verpflichtungen, die später schwer zu ändern sind.",
    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur ou un oubli.":
      "Eine bessere administrative Organisation könnte Ihnen Zeit sparen und Fehler oder Versäumnisse verhindern.",
    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, annuler une dépense inutile ou revoir une échéance.":
      "Ihre Situation könnte sich durch einen einfachen Schritt verbessern: vergleichen, verhandeln, eine unnötige Ausgabe streichen oder einen Termin überprüfen.",
    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Eine bislang offene finanzielle Frage könnte endlich klarer werden. Warten Sie jedoch, bis Sie alle Informationen haben, bevor Sie handeln.",
    "Ce mois vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une décision spectaculaire.":
      "Dieser Monat erinnert Sie daran, dass Sicherheit vor allem durch Beständigkeit entsteht. Kleine regelmäßige Schritte sind hilfreicher als eine spektakuläre Entscheidung.",
    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Eine unerwartete Ausgabe könnte eine vorübergehende Anpassung erfordern. Bewahren Sie einen Spielraum, anstatt sofort alle Ressourcen einzusetzen.",
    "Votre capacité à faire des choix réalistes vous permettra de traverser le mois avec davantage de confiance.":
      "Ihre Fähigkeit, realistische Entscheidungen zu treffen, hilft Ihnen, den Monat mit mehr Vertrauen zu durchlaufen.",
    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Eine Möglichkeit, Ihr Einkommen zu erhöhen, könnte sich durch eine zusätzliche Aufgabe, einen Verkauf, einen Auftrag oder eine neue Idee ergeben.",
    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Ein erwartetes Einkommen könnte mehr Geduld erfordern. Prüfen Sie die Fristen, bevor Sie mit diesem Geld rechnen.",
    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Eine persönliche Fähigkeit könnte besser genutzt werden, um eine zusätzliche Einnahmequelle zu schaffen.",
    "Le mois favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "Der Monat begünstigt Schritte, mit denen Sie Ihre Arbeit besser vergüten lassen oder einen zu niedrigen Preis überprüfen.",
    "Une occasion financière pourrait naître d’un contact professionnel ou d’une ancienne relation.":
      "Eine finanzielle Gelegenheit könnte durch einen beruflichen Kontakt oder eine frühere Verbindung entstehen.",
    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Sie könnten feststellen, dass eine Nebentätigkeit mehr Aufmerksamkeit verdient. Ihr Potenzial könnte größer sein als gedacht.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Ein Gespräch über Ihre Vergütung könnte notwendig werden. Bereiten Sie präzise und realistische Argumente vor.",
    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à contrôler les coûts.":
      "Ein langsam gestartetes Projekt könnte beginnen, Ergebnisse zu liefern. Kontrollieren Sie jedoch weiterhin die Kosten.",
    "Une nouvelle façon d’utiliser vos ressources pourrait créer un avantage financier à moyen terme.":
      "Eine neue Art, Ihre Ressourcen zu nutzen, könnte mittelfristig einen finanziellen Vorteil schaffen.",
    "Le mois vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "Der Monat ermutigt Sie, Ihre Möglichkeiten zu diversifizieren, ohne unnötige Risiken zu vervielfachen.",
    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer l’achat.":
      "Eine impulsive Ausgabe könnte im Moment gerechtfertigt erscheinen. Geben Sie sich etwas Zeit, bevor Sie den Kauf bestätigen.",
    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Einige wiederkehrende Kosten sollten überprüft werden. Möglicherweise zahlen Sie für einen Dienst, den Sie kaum nutzen oder nicht mehr benötigen.",
    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter une vérification importante.":
      "Eine Reparatur, Rechnung oder Verpflichtung könnte mehr kosten als erwartet. Verschieben Sie eine wichtige Überprüfung nicht.",
    "Le mois convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "Der Monat eignet sich gut, um unsichtbare Ausgaben zu reduzieren, die sich ansammeln, ohne echte Zufriedenheit zu bringen.",
    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Sie könnten versucht sein, Geld auszugeben, um Ihre Stimmung kurzfristig zu verbessern. Suchen Sie zuerst nach einer Lösung, die Ihr Budget nicht schwächt.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Ein Preisvergleich oder eine Verhandlung könnte Ihnen helfen, mehr zu sparen als erwartet.",
    "Les dépenses liées au confort ou aux loisirs devront rester proportionnelles à vos autres responsabilités.":
      "Ausgaben für Komfort oder Freizeit sollten im Verhältnis zu Ihren anderen Verpflichtungen bleiben.",
    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Verleihen oder strecken Sie keinen Betrag vor, dessen Verlust Sie sich nicht leisten könnten.",
    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Eine größere Ausgabe sollte vor der Bestätigung aus mehreren Blickwinkeln geprüft werden.",
    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Ihr Budget wird stabiler, wenn Sie eine klare Grenze für nicht notwendige Käufe setzen.",
    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Eine interessante Gelegenheit könnte sich in unauffälliger Form zeigen. Nehmen Sie sich Zeit, ihr tatsächliches Potenzial zu bewerten.",
    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Eine gut vorbereitete Verhandlung könnte Ihre finanziellen Bedingungen verbessern oder eine bedeutende Ausgabe reduzieren.",
    "Le mois favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "Der Monat begünstigt die Suche nach günstigeren Lösungen, ohne auf Qualität zu verzichten.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Eine Idee im Zusammenhang mit Ihren Fähigkeiten könnte zu einer zusätzlichen Einnahmequelle werden.",
    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Sie könnten ein Angebot erhalten, das es wert ist, geprüft zu werden, auch wenn es nicht genau Ihrem ursprünglichen Plan entspricht.",
    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Eine finanzielle Verbesserung könnte eher aus besserer Organisation als aus einer sofortigen Einkommenssteigerung entstehen.",
    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Nützliche Informationen könnten Ihnen helfen, von einem Programm, einer Rückerstattung oder einem Rabatt zu profitieren.",
    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre budget.":
      "Ein Verkauf, eine Rückerstattung oder ein unerwarteter Betrag könnte Ihr Budget vorübergehend entlasten.",
    "Le mois vous offre une occasion de poser une base plus solide pour les prochains mois.":
      "Der Monat bietet Ihnen die Gelegenheit, eine solidere Grundlage für die kommenden Monate zu schaffen.",
    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Eine vernünftige Entscheidung jetzt könnte einen langfristigen finanziellen Vorteil bringen.",
    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "Das größte Risiko besteht darin, eine finanzielle Entscheidung zu treffen, um eine Emotion zu beruhigen oder auf äußeren Druck zu reagieren.",
    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Ein verlockendes Angebot könnte weniger günstige Bedingungen enthalten, als es zunächst scheint.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Verlassen Sie sich nicht auf Einkommen, das noch nicht bestätigt ist.",
    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "Fehlende Überprüfung könnte zu vermeidbaren Ausgaben oder zu einem Missverständnis eines Vertrags führen.",
    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "Der Wunsch, zu schnell voranzukommen, könnte Sie dazu bringen, eine schwer tragbare Verpflichtung einzugehen.",
    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis.":
      "Jemand könnte die Risiken einer Entscheidung herunterspielen. Stützen Sie sich auf genaue Fakten.",
    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "Das Bedürfnis, anderen zu gefallen, könnte dazu führen, dass Sie Ihre finanziellen Grenzen überschreiten.",
    "Une dépense répétée de faible montant pourrait devenir plus importante que prévu à la fin du mois.":
      "Eine kleine wiederkehrende Ausgabe könnte bis zum Monatsende größer werden als erwartet.",
    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "Das größte Risiko besteht darin, eine finanzielle Frage aufzuschieben, die eine klare Antwort verlangt.",
    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Zu großes Vertrauen könnte dazu führen, dass Sie ein wichtiges Detail übersehen. Prüfen Sie die Bedingungen vor einer Unterschrift oder Zahlung.",
    "Établissez un montant précis pour les dépenses non essentielles et respectez-le jusqu’à la fin du mois.":
      "Legen Sie einen konkreten Betrag für nicht notwendige Ausgaben fest und halten Sie ihn bis zum Monatsende ein.",
    "Vérifiez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Überprüfen Sie Ihre Abonnements, automatischen Abbuchungen und wiederkehrenden Ausgaben.",
    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Halten Sie eine Reserve für Unvorhergesehenes bereit, anstatt jeden eingehenden Betrag sofort zu verwenden.",
    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Vergleichen Sie mehrere Optionen, bevor Sie eine wichtige finanzielle Entscheidung treffen.",
    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Vermischen Sie emotionale Dringlichkeit nicht mit finanzieller Dringlichkeit.",
    "Notez vos dépenses pendant quelques semaines afin d’identifier les habitudes qui fragilisent votre budget.":
      "Notieren Sie einige Wochen lang Ihre Ausgaben, um Gewohnheiten zu erkennen, die Ihr Budget schwächen.",
    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Gehen Sie keine Verpflichtung aufgrund eines vagen Versprechens ein. Verlangen Sie genaue Zahlen, Daten und Bedingungen.",
    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Konzentrieren Sie sich auf eine realistische Verbesserung statt auf eine sofortige finanzielle Veränderung.",
    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Schützen Sie Ihre Stabilität, bevor Sie nach einer höheren Rendite suchen.",
    "Prenez une décision qui vous apportera encore de la tranquillité dans plusieurs mois.":
      "Treffen Sie eine Entscheidung, die Ihnen auch in einigen Monaten noch Ruhe bringt.",
    "Ce mois peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Dieser Monat kann Ihre finanzielle Stabilität verbessern, wenn Sie methodisch, maßvoll und mit Klarheit vorgehen.",
    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Ihre Situation wird sich durch einfache, regelmäßige und sorgfältig geprüfte Entscheidungen günstig entwickeln.",
    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Ein besseres Verständnis Ihrer Prioritäten hilft Ihnen, Ihre Ressourcen mit mehr Vertrauen einzusetzen.",
    "Les prochaines semaines peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Die kommenden Wochen könnten Ihnen helfen, die Kontrolle über einen finanziellen Bereich zurückzugewinnen, der zu belastend oder unklar geworden ist.",
    "Vous pourriez terminer le mois avec une vision plus réaliste et plus rassurante de votre situation.":
      "Sie könnten den Monat mit einer realistischeren und beruhigenderen Sicht auf Ihre Situation beenden.",
    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Ihr finanzieller Fortschritt hängt vor allem davon ab, impulsive Entscheidungen zu vermeiden.",
    "Ce mois vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Dieser Monat erinnert Sie daran, dass Sicherheit eher durch Beständigkeit als durch schnelle Lösungen entsteht.",
    "Une décision prudente prise maintenant pourrait devenir l’un des choix les plus utiles de cette période.":
      "Eine vorsichtige Entscheidung jetzt könnte zu einer der nützlichsten Entscheidungen dieser Phase werden.",
    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Ihr Verhältnis zu Geld entwickelt sich hin zu mehr Reife und Urteilsvermögen.",
    "En respectant vos limites et vos priorités, vous pourrez traverser le mois avec plus de stabilité.":
      "Wenn Sie Ihre Grenzen und Prioritäten respektieren, können Sie den Monat mit mehr Stabilität durchlaufen.",
  },
  it: {
    "Votre situation financière demande ce mois-ci davantage de structure et de prévoyance. Quelques ajustements simples pourraient améliorer votre sentiment de sécurité.":
      "La tua situazione finanziaria richiede questo mese più struttura e lungimiranza. Alcuni semplici aggiustamenti potrebbero aumentare il tuo senso di sicurezza.",
    "Le climat financier du mois vous invite à revoir certaines habitudes. Une meilleure vision de vos dépenses vous aidera à prendre des décisions plus sereines.":
      "Il clima finanziario del mese ti invita a rivedere alcune abitudini. Una visione più chiara delle tue spese ti aiuterà a prendere decisioni più serene.",
    "Les prochaines semaines favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction produit un effet plus important que prévu.":
      "Le prossime settimane favoriscono una gestione più consapevole delle tue risorse. Potresti scoprire che una piccola correzione produce un effetto maggiore del previsto.",
    "Ce mois met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Questo mese mette in luce il tuo rapporto con il denaro, la sicurezza e le priorità materiali. Una decisione ponderata potrebbe alleviare una pressione persistente.",
    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses nécessaires de celles qui répondent surtout à une impulsion.":
      "Inizia un periodo di riorganizzazione finanziaria. Ti aiuterà a distinguere meglio le spese necessarie da quelle dettate soprattutto da un impulso.",
    "Votre attention se porte davantage sur la stabilité financière. Le mois convient bien à la planification, aux vérifications et aux choix à long terme.":
      "La tua attenzione si concentra maggiormente sulla stabilità finanziaria. Il mese è adatto alla pianificazione, alle verifiche e alle scelte a lungo termine.",
    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochaines semaines.":
      "Una presa di coscienza sulle tue finanze potrebbe cambiare positivamente il modo in cui gestisci le prossime settimane.",
    "Le mois vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions seront simples.":
      "Il mese ti incoraggia a riprendere il controllo di un aspetto finanziario rimasto poco chiaro. Più i tuoi numeri saranno chiari, più semplici saranno le decisioni.",
    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Il tuo rapporto con le spese e il risparmio evolve verso un maggiore realismo. Potresti sentire il bisogno di proteggere più seriamente le tue risorse.",
    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Un nuovo approccio finanziario potrebbe darti maggiore tranquillità. L'obiettivo non sarà limitare tutto, ma scegliere meglio.",
    "La stabilité dépendra surtout de votre capacité à suivre vos dépenses réelles plutôt qu’à vous fier à une impression générale.":
      "La stabilità dipenderà soprattutto dalla tua capacità di seguire le spese reali invece di affidarti a un'impressione generale.",
    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion.":
      "Una pianificazione chiara ti aiuterà a evitare decisioni prese nell'urgenza o sotto l'effetto di un'emozione.",
    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait finalement devenir secondaire.":
      "Potresti dover riequilibrare alcune priorità. Ciò che sembrava indispensabile potrebbe infine diventare secondario.",
    "Le mois favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "Il mese favorisce decisioni prudenti e progressive. Evita impegni finanziari difficili da modificare in seguito.",
    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur ou un oubli.":
      "Una migliore organizzazione amministrativa potrebbe farti risparmiare tempo e prevenire un errore o una dimenticanza.",
    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, annuler une dépense inutile ou revoir une échéance.":
      "La tua situazione potrebbe migliorare grazie a un'azione semplice: confrontare, negoziare, eliminare una spesa inutile o rivedere una scadenza.",
    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Una questione finanziaria rimasta in sospeso potrebbe finalmente diventare più chiara. Aspetta comunque di avere tutte le informazioni prima di agire.",
    "Ce mois vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une décision spectaculaire.":
      "Questo mese ti ricorda che la sicurezza si costruisce soprattutto con la costanza. Piccoli gesti regolari saranno più utili di una decisione spettacolare.",
    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Una spesa imprevista potrebbe richiedere un aggiustamento temporaneo. Mantieni un margine di manovra invece di utilizzare subito tutte le tue risorse.",
    "Votre capacité à faire des choix réalistes vous permettra de traverser le mois avec davantage de confiance.":
      "La tua capacità di fare scelte realistiche ti permetterà di affrontare il mese con maggiore fiducia.",
    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Potrebbe presentarsi un'opportunità per aumentare le tue entrate attraverso un'attività aggiuntiva, una vendita, un incarico o una nuova idea.",
    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Un'entrata attesa potrebbe richiedere più pazienza. Verifica le tempistiche prima di fare affidamento su quel denaro.",
    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Una competenza personale potrebbe essere utilizzata meglio per creare una fonte di reddito aggiuntiva.",
    "Le mois favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "Il mese favorisce le iniziative volte a valorizzare meglio il tuo lavoro o a rivedere una tariffa diventata troppo bassa.",
    "Une occasion financière pourrait naître d’un contact professionnel ou d’une ancienne relation.":
      "Un'opportunità finanziaria potrebbe nascere da un contatto professionale o da una vecchia relazione.",
    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Potresti accorgerti che un'attività secondaria merita maggiore attenzione. Il suo potenziale potrebbe essere superiore a quanto immaginavi.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Potrebbe diventare necessaria una conversazione sulla tua retribuzione. Prepara argomenti precisi e realistici.",
    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à contrôler les coûts.":
      "Un progetto lento a partire potrebbe iniziare a produrre risultati. Continua comunque a controllare i costi.",
    "Une nouvelle façon d’utiliser vos ressources pourrait créer un avantage financier à moyen terme.":
      "Un nuovo modo di utilizzare le tue risorse potrebbe creare un vantaggio finanziario a medio termine.",
    "Le mois vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "Il mese ti incoraggia a diversificare le possibilità senza moltiplicare rischi inutili.",
    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer l’achat.":
      "Una spesa impulsiva potrebbe sembrare giustificata sul momento. Concediti un po' di tempo prima di confermare l'acquisto.",
    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Alcune spese ricorrenti meritano di essere controllate. Potresti pagare per un servizio poco utilizzato o diventato inutile.",
    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter une vérification importante.":
      "Una riparazione, una bolletta o un obbligo potrebbero costare più del previsto. Evita di rimandare una verifica importante.",
    "Le mois convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "Il mese è adatto a ridurre le spese invisibili che si accumulano senza dare una reale soddisfazione.",
    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Potresti essere tentato di spendere per migliorare temporaneamente il tuo umore. Cerca prima una soluzione che non indebolisca il budget.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Un confronto dei prezzi o una trattativa potrebbero permetterti di risparmiare più del previsto.",
    "Les dépenses liées au confort ou aux loisirs devront rester proportionnelles à vos autres responsabilités.":
      "Le spese legate al comfort o al tempo libero dovranno rimanere proporzionate alle altre responsabilità.",
    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evita di prestare o anticipare una somma che non potresti permetterti di perdere.",
    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Una spesa importante dovrebbe essere esaminata da più angolazioni prima di essere confermata.",
    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Il tuo budget acquisterà stabilità se stabilirai un limite chiaro agli acquisti non essenziali.",
    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Un'opportunità interessante potrebbe presentarsi in modo discreto. Prenditi il tempo di valutarne il reale potenziale.",
    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Una trattativa ben preparata potrebbe migliorare le tue condizioni finanziarie o ridurre una spesa importante.",
    "Le mois favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "Il mese favorisce la ricerca di soluzioni più economiche senza sacrificare la qualità.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Un'idea legata alle tue competenze potrebbe diventare una fonte di reddito aggiuntiva.",
    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Potresti ricevere una proposta che merita di essere valutata, anche se non corrisponde esattamente al piano iniziale.",
    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Un miglioramento finanziario potrebbe derivare da una migliore organizzazione piuttosto che da un aumento immediato delle entrate.",
    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Un'informazione utile potrebbe aiutarti a beneficiare di un programma, un rimborso o uno sconto.",
    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre budget.":
      "Una vendita, un rimborso o una somma inattesa potrebbero alleggerire temporaneamente il tuo budget.",
    "Le mois vous offre une occasion de poser une base plus solide pour les prochains mois.":
      "Il mese ti offre l'occasione di creare una base più solida per i prossimi mesi.",
    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Una scelta ragionevole fatta ora potrebbe produrre un vantaggio finanziario duraturo.",
    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "Il rischio principale sarà prendere una decisione finanziaria per calmare un'emozione o rispondere a una pressione esterna.",
    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Una proposta allettante potrebbe includere condizioni meno vantaggiose di quanto sembrino.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evita di fare affidamento su un'entrata che non è ancora stata confermata.",
    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "Una mancanza di verifica potrebbe causare una spesa evitabile o una comprensione errata di un contratto.",
    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "Il desiderio di andare troppo in fretta potrebbe spingerti ad accettare un impegno difficile da sostenere.",
    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis.":
      "Qualcuno potrebbe minimizzare i rischi di una decisione. Basati su fatti precisi.",
    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "Il bisogno di compiacere gli altri potrebbe portarti a superare i tuoi limiti finanziari.",
    "Une dépense répétée de faible montant pourrait devenir plus importante que prévu à la fin du mois.":
      "Una piccola spesa ricorrente potrebbe diventare più importante del previsto alla fine del mese.",
    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "Il rischio principale sarà rimandare una questione finanziaria che richiede una risposta chiara.",
    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Un eccesso di fiducia potrebbe farti trascurare un dettaglio importante. Rileggi le condizioni prima di firmare o pagare.",
    "Établissez un montant précis pour les dépenses non essentielles et respectez-le jusqu’à la fin du mois.":
      "Stabilisci un importo preciso per le spese non essenziali e rispettalo fino alla fine del mese.",
    "Vérifiez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Controlla abbonamenti, addebiti automatici e spese ricorrenti.",
    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantieni una riserva disponibile per gli imprevisti invece di utilizzare subito ogni somma ricevuta.",
    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Confronta diverse opzioni prima di prendere una decisione finanziaria importante.",
    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evita di confondere l'urgenza emotiva con quella finanziaria.",
    "Notez vos dépenses pendant quelques semaines afin d’identifier les habitudes qui fragilisent votre budget.":
      "Annota le tue spese per alcune settimane per individuare le abitudini che indeboliscono il budget.",
    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Non impegnarti sulla base di una promessa vaga. Chiedi cifre, date e condizioni precise.",
    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concentrati su un miglioramento realistico invece che su una trasformazione finanziaria immediata.",
    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Proteggi la tua stabilità prima di cercare un rendimento più elevato.",
    "Prenez une décision qui vous apportera encore de la tranquillité dans plusieurs mois.":
      "Prendi una decisione che possa darti tranquillità anche tra diversi mesi.",
    "Ce mois peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Questo mese può migliorare la tua stabilità finanziaria se procedi con metodo, moderazione e lucidità.",
    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "La tua situazione evolverà favorevolmente grazie a scelte semplici, costanti e ben verificate.",
    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Una migliore comprensione delle tue priorità ti aiuterà a utilizzare le risorse con maggiore fiducia.",
    "Les prochaines semaines peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "Le prossime settimane potrebbero permetterti di riprendere il controllo di un aspetto finanziario diventato troppo pesante o poco chiaro.",
    "Vous pourriez terminer le mois avec une vision plus réaliste et plus rassurante de votre situation.":
      "Potresti concludere il mese con una visione più realistica e rassicurante della tua situazione.",
    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "I tuoi progressi finanziari dipenderanno soprattutto dalla capacità di evitare decisioni impulsive.",
    "Ce mois vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Questo mese ti ricorda che la sicurezza si costruisce più con la costanza che con soluzioni rapide.",
    "Une décision prudente prise maintenant pourrait devenir l’un des choix les plus utiles de cette période.":
      "Una decisione prudente presa ora potrebbe diventare una delle scelte più utili di questo periodo.",
    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Il tuo rapporto con il denaro evolve verso una maggiore maturità e capacità di giudizio.",
    "En respectant vos limites et vos priorités, vous pourrez traverser le mois avec plus de stabilité.":
      "Rispettando i tuoi limiti e le tue priorità, potrai affrontare il mese con maggiore stabilità.",
  },
  pt: {
    "Votre situation financière demande ce mois-ci davantage de structure et de prévoyance. Quelques ajustements simples pourraient améliorer votre sentiment de sécurité.":
      "Sua situação financeira exige neste mês mais estrutura e planejamento. Alguns ajustes simples poderão aumentar sua sensação de segurança.",
    "Le climat financier du mois vous invite à revoir certaines habitudes. Une meilleure vision de vos dépenses vous aidera à prendre des décisions plus sereines.":
      "O clima financeiro do mês convida você a rever alguns hábitos. Uma visão mais clara de suas despesas ajudará a tomar decisões mais serenas.",
    "Les prochaines semaines favorisent une gestion plus consciente de vos ressources. Vous pourriez découvrir qu’une petite correction produit un effet plus important que prévu.":
      "As próximas semanas favorecem uma gestão mais consciente de seus recursos. Você poderá descobrir que uma pequena correção produz um efeito maior do que o esperado.",
    "Ce mois met en lumière votre rapport à l’argent, à la sécurité et aux priorités matérielles. Une décision réfléchie pourrait alléger une pression persistante.":
      "Este mês destaca sua relação com dinheiro, segurança e prioridades materiais. Uma decisão ponderada poderá aliviar uma pressão persistente.",
    "Une période de réorganisation financière commence. Elle vous aidera à mieux distinguer les dépenses nécessaires de celles qui répondent surtout à une impulsion.":
      "Começa um período de reorganização financeira. Ele ajudará você a distinguir melhor as despesas necessárias daquelas motivadas principalmente por impulso.",
    "Votre attention se porte davantage sur la stabilité financière. Le mois convient bien à la planification, aux vérifications et aux choix à long terme.":
      "Sua atenção se volta mais para a estabilidade financeira. O mês é adequado para planejamento, verificações e escolhas de longo prazo.",
    "Une prise de conscience concernant vos finances pourrait modifier positivement votre manière de gérer les prochaines semaines.":
      "Uma tomada de consciência sobre suas finanças poderá mudar positivamente a forma como você administra as próximas semanas.",
    "Le mois vous encourage à reprendre le contrôle sur un aspect financier resté flou. Plus vos chiffres seront clairs, plus vos décisions seront simples.":
      "O mês incentiva você a retomar o controle de um aspecto financeiro que permaneceu pouco claro. Quanto mais claros forem seus números, mais simples serão suas decisões.",
    "Votre rapport aux dépenses et à l’épargne évolue vers davantage de réalisme. Vous pourriez ressentir le besoin de protéger plus sérieusement vos ressources.":
      "Sua relação com gastos e poupança evolui para mais realismo. Você poderá sentir a necessidade de proteger seus recursos com mais seriedade.",
    "Une nouvelle approche financière pourrait vous apporter davantage de tranquillité. Le but ne sera pas de tout restreindre, mais de mieux choisir.":
      "Uma nova abordagem financeira poderá trazer mais tranquilidade. O objetivo não será restringir tudo, mas escolher melhor.",
    "La stabilité dépendra surtout de votre capacité à suivre vos dépenses réelles plutôt qu’à vous fier à une impression générale.":
      "A estabilidade dependerá principalmente de sua capacidade de acompanhar as despesas reais em vez de confiar em uma impressão geral.",
    "Une planification claire vous aidera à éviter les décisions prises dans l’urgence ou sous l’effet d’une émotion.":
      "Um planejamento claro ajudará você a evitar decisões tomadas com urgência ou sob o efeito de uma emoção.",
    "Vous pourriez être amené à rééquilibrer certaines priorités. Ce qui semblait indispensable pourrait finalement devenir secondaire.":
      "Talvez seja necessário reequilibrar algumas prioridades. O que parecia indispensável poderá acabar se tornando secundário.",
    "Le mois favorise les décisions prudentes et progressives. Évitez les engagements financiers difficiles à modifier par la suite.":
      "O mês favorece decisões prudentes e graduais. Evite compromissos financeiros difíceis de alterar posteriormente.",
    "Une meilleure organisation administrative pourrait vous faire gagner du temps et prévenir une erreur ou un oubli.":
      "Uma organização administrativa melhor poderá economizar tempo e evitar um erro ou esquecimento.",
    "Votre situation pourrait s’améliorer grâce à une démarche simple : comparer, négocier, annuler une dépense inutile ou revoir une échéance.":
      "Sua situação poderá melhorar com uma medida simples: comparar, negociar, cancelar uma despesa desnecessária ou rever um vencimento.",
    "Une question financière restée en suspens pourrait enfin devenir plus claire. Attendez toutefois d’avoir toutes les informations avant d’agir.":
      "Uma questão financeira que permaneceu pendente poderá finalmente ficar mais clara. Ainda assim, espere ter todas as informações antes de agir.",
    "Ce mois vous rappelle que la sécurité se construit surtout par la constance. De petits gestes réguliers seront plus utiles qu’une décision spectaculaire.":
      "Este mês lembra que a segurança é construída principalmente pela constância. Pequenas ações regulares serão mais úteis do que uma decisão espetacular.",
    "Une dépense imprévue pourrait demander un ajustement temporaire. Gardez une marge de manœuvre au lieu d’utiliser toutes vos ressources immédiatement.":
      "Uma despesa inesperada poderá exigir um ajuste temporário. Preserve uma margem de manobra em vez de usar imediatamente todos os seus recursos.",
    "Votre capacité à faire des choix réalistes vous permettra de traverser le mois avec davantage de confiance.":
      "Sua capacidade de fazer escolhas realistas permitirá atravessar o mês com mais confiança.",
    "Une possibilité d’augmenter vos revenus pourrait apparaître par une tâche supplémentaire, une vente, un mandat ou une nouvelle idée.":
      "Uma possibilidade de aumentar sua renda poderá surgir por meio de uma tarefa extra, uma venda, um trabalho ou uma nova ideia.",
    "Un revenu attendu pourrait demander davantage de patience. Vérifiez les délais avant de compter sur cet argent.":
      "Uma renda esperada poderá exigir mais paciência. Verifique os prazos antes de contar com esse dinheiro.",
    "Une compétence personnelle pourrait être mieux utilisée pour créer une source de revenu complémentaire.":
      "Uma habilidade pessoal poderá ser melhor utilizada para criar uma fonte complementar de renda.",
    "Le mois favorise les démarches visant à mieux valoriser votre travail ou à revoir un tarif devenu trop faible.":
      "O mês favorece iniciativas destinadas a valorizar melhor seu trabalho ou rever uma tarifa que ficou baixa demais.",
    "Une occasion financière pourrait naître d’un contact professionnel ou d’une ancienne relation.":
      "Uma oportunidade financeira poderá surgir de um contato profissional ou de uma relação antiga.",
    "Vous pourriez constater qu’une activité secondaire mérite davantage d’attention. Son potentiel pourrait être supérieur à ce que vous imaginiez.":
      "Você poderá perceber que uma atividade paralela merece mais atenção. Seu potencial poderá ser maior do que imaginava.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "Uma conversa sobre sua remuneração poderá se tornar necessária. Prepare argumentos precisos e realistas.",
    "Un projet lent à démarrer pourrait commencer à produire des résultats. Continuez toutefois à contrôler les coûts.":
      "Um projeto que demorou a começar poderá passar a produzir resultados. Continue, porém, controlando os custos.",
    "Une nouvelle façon d’utiliser vos ressources pourrait créer un avantage financier à moyen terme.":
      "Uma nova forma de utilizar seus recursos poderá criar uma vantagem financeira no médio prazo.",
    "Le mois vous encourage à diversifier vos possibilités sans multiplier les risques inutiles.":
      "O mês incentiva você a diversificar suas possibilidades sem multiplicar riscos desnecessários.",
    "Une dépense impulsive pourrait sembler justifiée sur le moment. Accordez-vous un délai avant de confirmer l’achat.":
      "Uma despesa impulsiva poderá parecer justificada no momento. Dê a si mesmo um prazo antes de confirmar a compra.",
    "Certains frais récurrents méritent d’être vérifiés. Vous pourriez payer pour un service peu utilisé ou devenu inutile.":
      "Alguns gastos recorrentes merecem ser verificados. Você poderá estar pagando por um serviço pouco usado ou que já se tornou desnecessário.",
    "Une réparation, une facture ou une obligation pourrait demander plus que prévu. Évitez de reporter une vérification importante.":
      "Um conserto, uma conta ou uma obrigação poderá custar mais do que o previsto. Evite adiar uma verificação importante.",
    "Le mois convient bien à la réduction des dépenses invisibles qui s’accumulent sans apporter de réelle satisfaction.":
      "O mês é adequado para reduzir despesas invisíveis que se acumulam sem trazer satisfação real.",
    "Vous pourriez être tenté de dépenser pour améliorer temporairement votre humeur. Cherchez d’abord une solution qui ne fragilise pas votre budget.":
      "Você poderá sentir vontade de gastar para melhorar temporariamente o humor. Procure primeiro uma solução que não enfraqueça seu orçamento.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "Comparar preços ou negociar poderá permitir que você economize mais do que esperava.",
    "Les dépenses liées au confort ou aux loisirs devront rester proportionnelles à vos autres responsabilités.":
      "As despesas ligadas ao conforto ou lazer deverão permanecer proporcionais às suas outras responsabilidades.",
    "Évitez de prêter ou d’avancer une somme que vous ne pourriez pas vous permettre de perdre.":
      "Evite emprestar ou adiantar uma quantia que você não poderia se permitir perder.",
    "Une dépense importante devrait être examinée sous plusieurs angles avant d’être confirmée.":
      "Uma despesa importante deverá ser analisada de vários ângulos antes de ser confirmada.",
    "Votre budget gagnera en stabilité si vous fixez une limite claire aux achats non essentiels.":
      "Seu orçamento ganhará estabilidade se você estabelecer um limite claro para compras não essenciais.",
    "Une occasion intéressante pourrait apparaître sous une forme discrète. Prenez le temps d’évaluer son potentiel réel.":
      "Uma oportunidade interessante poderá surgir de forma discreta. Reserve tempo para avaliar seu verdadeiro potencial.",
    "Une négociation bien préparée pourrait améliorer vos conditions financières ou réduire une dépense importante.":
      "Uma negociação bem preparada poderá melhorar suas condições financeiras ou reduzir uma despesa importante.",
    "Le mois favorise la recherche de solutions plus économiques sans sacrifier la qualité.":
      "O mês favorece a busca por soluções mais econômicas sem sacrificar a qualidade.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "Uma ideia ligada às suas habilidades poderá se tornar uma fonte adicional de renda.",
    "Vous pourriez recevoir une proposition qui mérite d’être étudiée, même si elle ne correspond pas exactement à votre plan initial.":
      "Você poderá receber uma proposta que merece ser analisada, mesmo que não corresponda exatamente ao seu plano inicial.",
    "Une amélioration financière pourrait venir d’une meilleure organisation plutôt que d’une hausse immédiate des revenus.":
      "Uma melhora financeira poderá vir de uma organização melhor, e não de um aumento imediato da renda.",
    "Une information utile pourrait vous aider à profiter d’un programme, d’un remboursement ou d’une réduction.":
      "Uma informação útil poderá ajudar você a aproveitar um programa, reembolso ou desconto.",
    "Une vente, un remboursement ou un montant inattendu pourrait alléger temporairement votre budget.":
      "Uma venda, um reembolso ou um valor inesperado poderá aliviar temporariamente seu orçamento.",
    "Le mois vous offre une occasion de poser une base plus solide pour les prochains mois.":
      "O mês oferece uma oportunidade de criar uma base mais sólida para os próximos meses.",
    "Un choix raisonnable fait maintenant pourrait produire un avantage financier durable.":
      "Uma escolha razoável feita agora poderá gerar uma vantagem financeira duradoura.",
    "Le principal risque sera de prendre une décision financière pour calmer une émotion ou répondre à une pression extérieure.":
      "O principal risco será tomar uma decisão financeira para acalmar uma emoção ou responder a uma pressão externa.",
    "Une proposition séduisante pourrait comporter des conditions moins avantageuses qu’elles ne le paraissent.":
      "Uma proposta atraente poderá conter condições menos vantajosas do que parecem.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Evite contar com uma renda que ainda não foi confirmada.",
    "Un manque de vérification pourrait entraîner une dépense évitable ou une mauvaise compréhension d’un contrat.":
      "A falta de verificação poderá provocar uma despesa evitável ou uma compreensão incorreta de um contrato.",
    "Le désir d’aller trop vite pourrait vous pousser à accepter un engagement difficile à soutenir.":
      "A vontade de avançar rápido demais poderá levar você a aceitar um compromisso difícil de sustentar.",
    "Une personne pourrait minimiser les risques d’une décision. Appuyez-vous sur des faits précis.":
      "Alguém poderá minimizar os riscos de uma decisão. Apoie-se em fatos precisos.",
    "Le besoin de faire plaisir pourrait vous amener à dépasser vos limites financières.":
      "A necessidade de agradar poderá levar você a ultrapassar seus limites financeiros.",
    "Une dépense répétée de faible montant pourrait devenir plus importante que prévu à la fin du mois.":
      "Uma pequena despesa recorrente poderá se tornar mais importante do que o previsto no fim do mês.",
    "Le risque principal sera de remettre à plus tard une question financière qui exige une réponse claire.":
      "O principal risco será adiar uma questão financeira que exige uma resposta clara.",
    "Une confiance excessive pourrait vous faire négliger un détail important. Relisez les conditions avant de signer ou de payer.":
      "Excesso de confiança poderá fazer você ignorar um detalhe importante. Reveja as condições antes de assinar ou pagar.",
    "Établissez un montant précis pour les dépenses non essentielles et respectez-le jusqu’à la fin du mois.":
      "Defina um valor específico para despesas não essenciais e respeite-o até o fim do mês.",
    "Vérifiez vos abonnements, vos prélèvements automatiques et vos dépenses récurrentes.":
      "Verifique suas assinaturas, débitos automáticos e despesas recorrentes.",
    "Gardez une réserve disponible pour les imprévus plutôt que d’utiliser immédiatement chaque montant reçu.":
      "Mantenha uma reserva disponível para imprevistos em vez de usar imediatamente cada valor recebido.",
    "Comparez plusieurs options avant de prendre une décision financière importante.":
      "Compare várias opções antes de tomar uma decisão financeira importante.",
    "Évitez de mélanger urgence émotionnelle et urgence financière.":
      "Evite misturar urgência emocional com urgência financeira.",
    "Notez vos dépenses pendant quelques semaines afin d’identifier les habitudes qui fragilisent votre budget.":
      "Anote suas despesas durante algumas semanas para identificar hábitos que enfraquecem seu orçamento.",
    "Ne vous engagez pas sur la base d’une promesse vague. Demandez des chiffres, des dates et des conditions précises.":
      "Não assuma um compromisso com base em uma promessa vaga. Peça números, datas e condições precisas.",
    "Concentrez-vous sur une amélioration réaliste plutôt que sur une transformation financière instantanée.":
      "Concentre-se em uma melhora realista em vez de uma transformação financeira instantânea.",
    "Protégez votre stabilité avant de chercher un rendement plus élevé.":
      "Proteja sua estabilidade antes de buscar um rendimento maior.",
    "Prenez une décision qui vous apportera encore de la tranquillité dans plusieurs mois.":
      "Tome uma decisão que ainda traga tranquilidade daqui a vários meses.",
    "Ce mois peut améliorer votre stabilité financière si vous avancez avec méthode, modération et lucidité.":
      "Este mês pode melhorar sua estabilidade financeira se você avançar com método, moderação e clareza.",
    "Votre situation évoluera favorablement grâce à des choix simples, réguliers et bien vérifiés.":
      "Sua situação evoluirá favoravelmente graças a escolhas simples, constantes e bem verificadas.",
    "Une meilleure compréhension de vos priorités vous aidera à utiliser vos ressources avec davantage de confiance.":
      "Uma compreensão melhor de suas prioridades ajudará você a usar seus recursos com mais confiança.",
    "Les prochaines semaines peuvent vous permettre de reprendre le contrôle sur un aspect financier devenu trop lourd ou trop flou.":
      "As próximas semanas poderão permitir que você retome o controle de um aspecto financeiro que ficou pesado demais ou pouco claro.",
    "Vous pourriez terminer le mois avec une vision plus réaliste et plus rassurante de votre situation.":
      "Você poderá terminar o mês com uma visão mais realista e tranquilizadora de sua situação.",
    "Votre progression financière dépendra surtout de votre capacité à éviter les décisions impulsives.":
      "Seu progresso financeiro dependerá principalmente de sua capacidade de evitar decisões impulsivas.",
    "Ce mois vous rappelle que la sécurité se construit davantage par la constance que par les solutions rapides.":
      "Este mês lembra que a segurança é construída mais pela constância do que por soluções rápidas.",
    "Une décision prudente prise maintenant pourrait devenir l’un des choix les plus utiles de cette période.":
      "Uma decisão prudente tomada agora poderá se tornar uma das escolhas mais úteis deste período.",
    "Votre rapport à l’argent évolue vers davantage de maturité et de discernement.":
      "Sua relação com o dinheiro evolui para mais maturidade e discernimento.",
    "En respectant vos limites et vos priorités, vous pourrez traverser le mois avec plus de stabilité.":
      "Respeitando seus limites e prioridades, você poderá atravessar o mês com mais estabilidade.",
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
      "monthly-finance.ts",
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

export function localizeMonthlyFinanceBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    FINANCE_TITLES[
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

export function localizeMonthlyFinanceTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    FINANCE_TEXTS[
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
