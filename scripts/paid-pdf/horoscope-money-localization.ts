import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Une période favorable à consolider":
      "A favorable period to consolidate",
    "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.":
      "Your financial climate appears favorable. Use this stability to strengthen what already works, negotiate methodically, and prepare for what comes next without giving in to impulsive spending.",

    "Un équilibre à préserver":
      "A balance to preserve",
    "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.":
      "The potential is promising, but it requires vigilance. Compare your options, check the details, and protect your safety margin before making a commitment.",

    "Une période qui demande de la prudence":
      "A period that calls for caution",
    "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.":
      "Slow down and return to the essentials. Prioritize important expenses, avoid decisions made under pressure, and seek greater clarity about your resources.",

    "Prudence": "Caution",
    "Vérification": "Verification",
    "Sécurité": "Security",
    "Organisation": "Organization",
    "Prévision": "Planning",
    "Contrôle": "Control",
    "Occasion": "Opportunity",
    "Analyse": "Analysis",
    "Patience": "Patience",
    "Stabilité": "Stability",
    "Développement": "Development",
    "Priorités": "Priorities",
    "Marge de sécurité": "Safety margin",
    "Décision réfléchie": "Thoughtful decision",
    "Vision à long terme": "Long-term vision",

    "Prenez le temps de vérifier les montants, les conditions et les conséquences avant toute dépense importante.":
      "Take time to verify the amounts, conditions, and consequences before any major expense.",
    "Conservez une marge de sécurité et évitez les décisions financières prises sous pression.":
      "Maintain a safety margin and avoid financial decisions made under pressure.",
    "Relisez les détails, comparez les options et assurez-vous qu’aucun coût important ne vous échappe.":
      "Review the details, compare your options, and make sure no significant cost is overlooked.",
    "Avant de vous engager, confirmez les chiffres, les échéances et les conditions qui pourraient influencer votre budget.":
      "Before committing, confirm the figures, deadlines, and conditions that could affect your budget.",
    "Protégez votre stabilité en conservant une réserve et en limitant les engagements difficiles à soutenir.":
      "Protect your stability by maintaining a reserve and limiting commitments that may be difficult to sustain.",
    "Privilégiez les décisions qui renforcent votre marge de manœuvre plutôt que les gains rapides.":
      "Favor decisions that strengthen your financial flexibility rather than quick gains.",
    "Révisez vos dépenses récurrentes et classez vos priorités afin de retrouver une meilleure vue d’ensemble.":
      "Review your recurring expenses and organize your priorities to gain a clearer overall view.",
    "Planifiez les prochaines échéances et regroupez vos décisions financières autour d’objectifs précis.":
      "Plan upcoming deadlines and organize your financial decisions around specific goals.",
    "Anticipez les dépenses à venir afin d’éviter qu’une échéance prévisible fragilise votre équilibre.":
      "Anticipate upcoming expenses so that a foreseeable payment does not weaken your financial balance.",
    "Préparez les prochaines semaines en tenant compte des paiements fixes et des imprévus possibles.":
      "Prepare for the coming weeks by considering fixed payments and possible unexpected expenses.",
    "Gardez une vision claire de vos entrées et sorties d’argent avant d’ajouter une nouvelle dépense.":
      "Keep a clear view of your income and expenses before adding a new expense.",
    "Réduisez ce qui apporte peu de valeur et concentrez vos ressources sur vos véritables priorités.":
      "Reduce what provides little value and focus your resources on your true priorities.",
    "Une possibilité intéressante peut se présenter, mais elle mérite une analyse complète avant toute décision.":
      "An interesting opportunity may arise, but it deserves a complete analysis before any decision.",
    "Évaluez le potentiel réel de la proposition sans vous laisser influencer uniquement par l’urgence.":
      "Evaluate the proposal's true potential without being influenced solely by urgency.",
    "Comparez les avantages, les risques et les coûts à long terme avant de choisir votre prochaine direction.":
      "Compare the benefits, risks, and long-term costs before choosing your next direction.",
    "Appuyez votre décision sur des chiffres précis plutôt que sur une impression momentanée.":
      "Base your decision on precise figures rather than a momentary impression.",
    "Attendez d’avoir toutes les informations nécessaires avant de vous engager ou de modifier votre stratégie.":
      "Wait until you have all the necessary information before committing or changing your strategy.",
    "Une décision légèrement reportée peut vous permettre d’obtenir de meilleures conditions ou une vision plus claire.":
      "A slightly delayed decision may allow you to obtain better terms or a clearer perspective.",
    "Consolidez ce qui fonctionne déjà avant de chercher à accélérer votre progression financière.":
      "Consolidate what already works before trying to accelerate your financial progress.",
    "Privilégiez les choix durables qui respectent votre budget et votre niveau de sécurité.":
      "Favor sustainable choices that respect your budget and your desired level of security.",
    "Repérez les actions capables d’améliorer progressivement vos revenus, vos projets ou votre autonomie.":
      "Identify actions that can gradually improve your income, projects, or independence.",
    "Concentrez vos ressources sur les dépenses et les projets qui soutiennent réellement vos objectifs.":
      "Focus your resources on expenses and projects that genuinely support your goals.",
    "Conservez une réserve suffisante avant d’accepter un nouvel engagement ou une dépense importante.":
      "Maintain a sufficient reserve before accepting a new commitment or major expense.",
    "Comparez les options et vérifiez les conditions complètes avant de confirmer votre choix.":
      "Compare your options and review all the terms before confirming your choice.",
    "Privilégiez les décisions capables de renforcer votre stabilité au-delà de cette seule période.":
      "Favor decisions that can strengthen your stability beyond this period.",

    "Votre climat financier":
      "Your financial climate",
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.":
      "This period highlights your relationship with security, resources, and material decisions.",
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.":
      "Your financial situation benefits from a methodical approach. The best decisions will respect your true priorities, your pace, and your need for stability.",
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.":
      "Choose one simple and concrete financial action to complete during this period.",

    "Développer": "Develop",
    "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.":
      "Identify opportunities that can support your resources, projects, or independence over the longer term.",
    "Sécuriser": "Secure",
    "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.":
      "Protect your financial flexibility by checking the figures, conditions, and recurring commitments.",

    "Finances et sécurité":
      "Finances and security",
    "Lecture personnalisée":
      "Personalized insight",
    "potentiel financier":
      "financial potential",
    "Potentiel financier de la période":
      "Financial potential for this period",
    "Points financiers importants":
      "Important financial points",
    "Tendance financière":
      "Financial trend",
    "Conseil de la période":
      "Guidance for this period",
  },

  es: {
    "Une période favorable à consolider":
      "Un período favorable para consolidar",
    "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.":
      "Su clima financiero parece favorable. Aproveche esta estabilidad para reforzar lo que ya funciona, negociar con método y preparar el futuro sin ceder a gastos impulsivos.",
    "Un équilibre à préserver":
      "Un equilibrio que preservar",
    "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.":
      "El potencial es interesante, pero requiere vigilancia. Compare las opciones, revise los detalles y proteja su margen de seguridad antes de comprometerse.",
    "Une période qui demande de la prudence":
      "Un período que exige prudencia",
    "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.":
      "Reduzca el ritmo y vuelva a lo esencial. Priorice los gastos importantes, evite decisiones bajo presión y busque una visión más clara de sus recursos.",

    "Prudence": "Prudencia",
    "Vérification": "Verificación",
    "Sécurité": "Seguridad",
    "Organisation": "Organización",
    "Prévision": "Previsión",
    "Contrôle": "Control",
    "Occasion": "Oportunidad",
    "Analyse": "Análisis",
    "Patience": "Paciencia",
    "Stabilité": "Estabilidad",
    "Développement": "Desarrollo",
    "Priorités": "Prioridades",
    "Marge de sécurité": "Margen de seguridad",
    "Décision réfléchie": "Decisión meditada",
    "Vision à long terme": "Visión a largo plazo",

    "Prenez le temps de vérifier les montants, les conditions et les conséquences avant toute dépense importante.":
      "Tómese el tiempo para verificar los importes, las condiciones y las consecuencias antes de realizar un gasto importante.",
    "Conservez une marge de sécurité et évitez les décisions financières prises sous pression.":
      "Mantenga un margen de seguridad y evite tomar decisiones financieras bajo presión.",
    "Relisez les détails, comparez les options et assurez-vous qu’aucun coût important ne vous échappe.":
      "Revise los detalles, compare las opciones y asegúrese de no pasar por alto ningún coste importante.",
    "Avant de vous engager, confirmez les chiffres, les échéances et les conditions qui pourraient influencer votre budget.":
      "Antes de comprometerse, confirme las cifras, los plazos y las condiciones que podrían afectar su presupuesto.",
    "Protégez votre stabilité en conservant une réserve et en limitant les engagements difficiles à soutenir.":
      "Proteja su estabilidad manteniendo una reserva y limitando los compromisos difíciles de sostener.",
    "Privilégiez les décisions qui renforcent votre marge de manœuvre plutôt que les gains rapides.":
      "Priorice las decisiones que refuercen su margen de maniobra en lugar de buscar ganancias rápidas.",
    "Révisez vos dépenses récurrentes et classez vos priorités afin de retrouver une meilleure vue d’ensemble.":
      "Revise sus gastos recurrentes y ordene sus prioridades para obtener una mejor visión de conjunto.",
    "Planifiez les prochaines échéances et regroupez vos décisions financières autour d’objectifs précis.":
      "Planifique los próximos vencimientos y organice sus decisiones financieras en torno a objetivos concretos.",
    "Anticipez les dépenses à venir afin d’éviter qu’une échéance prévisible fragilise votre équilibre.":
      "Anticipe los próximos gastos para evitar que un vencimiento previsible debilite su equilibrio.",
    "Préparez les prochaines semaines en tenant compte des paiements fixes et des imprévus possibles.":
      "Prepare las próximas semanas teniendo en cuenta los pagos fijos y los posibles imprevistos.",
    "Gardez une vision claire de vos entrées et sorties d’argent avant d’ajouter une nouvelle dépense.":
      "Mantenga una visión clara de sus ingresos y gastos antes de añadir un nuevo gasto.",
    "Réduisez ce qui apporte peu de valeur et concentrez vos ressources sur vos véritables priorités.":
      "Reduzca lo que aporta poco valor y concentre sus recursos en sus verdaderas prioridades.",
    "Une possibilité intéressante peut se présenter, mais elle mérite une analyse complète avant toute décision.":
      "Puede surgir una oportunidad interesante, pero merece un análisis completo antes de tomar una decisión.",
    "Évaluez le potentiel réel de la proposition sans vous laisser influencer uniquement par l’urgence.":
      "Evalúe el verdadero potencial de la propuesta sin dejarse influir únicamente por la urgencia.",
    "Comparez les avantages, les risques et les coûts à long terme avant de choisir votre prochaine direction.":
      "Compare las ventajas, los riesgos y los costes a largo plazo antes de elegir su próxima dirección.",
    "Appuyez votre décision sur des chiffres précis plutôt que sur une impression momentanée.":
      "Base su decisión en cifras precisas y no en una impresión momentánea.",
    "Attendez d’avoir toutes les informations nécessaires avant de vous engager ou de modifier votre stratégie.":
      "Espere a disponer de toda la información necesaria antes de comprometerse o modificar su estrategia.",
    "Une décision légèrement reportée peut vous permettre d’obtenir de meilleures conditions ou une vision plus claire.":
      "Aplazar ligeramente una decisión puede permitirle obtener mejores condiciones o una visión más clara.",
    "Consolidez ce qui fonctionne déjà avant de chercher à accélérer votre progression financière.":
      "Consolide lo que ya funciona antes de intentar acelerar su progreso financiero.",
    "Privilégiez les choix durables qui respectent votre budget et votre niveau de sécurité.":
      "Priorice opciones sostenibles que respeten su presupuesto y su nivel de seguridad.",
    "Repérez les actions capables d’améliorer progressivement vos revenus, vos projets ou votre autonomie.":
      "Identifique acciones capaces de mejorar progresivamente sus ingresos, sus proyectos o su autonomía.",
    "Concentrez vos ressources sur les dépenses et les projets qui soutiennent réellement vos objectifs.":
      "Concentre sus recursos en los gastos y proyectos que realmente apoyan sus objetivos.",
    "Conservez une réserve suffisante avant d’accepter un nouvel engagement ou une dépense importante.":
      "Mantenga una reserva suficiente antes de aceptar un nuevo compromiso o gasto importante.",
    "Comparez les options et vérifiez les conditions complètes avant de confirmer votre choix.":
      "Compare las opciones y revise todas las condiciones antes de confirmar su elección.",
    "Privilégiez les décisions capables de renforcer votre stabilité au-delà de cette seule période.":
      "Priorice decisiones capaces de reforzar su estabilidad más allá de este período.",

    "Votre climat financier":
      "Su clima financiero",
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.":
      "Este período pone de relieve su relación con la seguridad, los recursos y las decisiones materiales.",
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.":
      "Conviene abordar su situación financiera con método. Las mejores decisiones serán aquellas que respeten sus verdaderas prioridades, su ritmo y su necesidad de estabilidad.",
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.":
      "Elija una acción financiera sencilla y concreta para realizar durante este período.",

    "Développer": "Desarrollar",
    "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.":
      "Identifique oportunidades capaces de apoyar sus recursos, sus proyectos o su autonomía a largo plazo.",
    "Sécuriser": "Proteger",
    "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.":
      "Proteja su margen de maniobra verificando las cifras, las condiciones y los compromisos recurrentes.",

    "Finances et sécurité":
      "Finanzas y seguridad",
    "Lecture personnalisée":
      "Lectura personalizada",
    "potentiel financier":
      "potencial financiero",
    "Potentiel financier de la période":
      "Potencial financiero del período",
    "Points financiers importants":
      "Puntos financieros importantes",
    "Tendance financière":
      "Tendencia financiera",
    "Conseil de la période":
      "Consejo del período",
  },

  de: {
    "Une période favorable à consolider":
      "Eine günstige Phase zur Festigung",
    "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.":
      "Ihre finanzielle Lage wirkt günstig. Nutzen Sie diese Stabilität, um Bewährtes zu stärken, methodisch zu verhandeln und die nächsten Schritte vorzubereiten, ohne impulsiven Ausgaben nachzugeben.",
    "Un équilibre à préserver":
      "Ein Gleichgewicht, das bewahrt werden sollte",
    "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.":
      "Das Potenzial ist interessant, erfordert jedoch Wachsamkeit. Vergleichen Sie die Optionen, prüfen Sie die Details und schützen Sie Ihre Sicherheitsreserve, bevor Sie sich festlegen.",
    "Une période qui demande de la prudence":
      "Eine Phase, die Vorsicht erfordert",
    "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.":
      "Verlangsamen Sie das Tempo und konzentrieren Sie sich auf das Wesentliche. Priorisieren Sie wichtige Ausgaben, vermeiden Sie Entscheidungen unter Druck und verschaffen Sie sich einen besseren Überblick über Ihre Ressourcen.",

    "Prudence": "Vorsicht",
    "Vérification": "Überprüfung",
    "Sécurité": "Sicherheit",
    "Organisation": "Organisation",
    "Prévision": "Vorausschau",
    "Contrôle": "Kontrolle",
    "Occasion": "Gelegenheit",
    "Analyse": "Analyse",
    "Patience": "Geduld",
    "Stabilité": "Stabilität",
    "Développement": "Entwicklung",
    "Priorités": "Prioritäten",
    "Marge de sécurité": "Sicherheitsreserve",
    "Décision réfléchie": "Überlegte Entscheidung",
    "Vision à long terme": "Langfristige Perspektive",

    "Prenez le temps de vérifier les montants, les conditions et les conséquences avant toute dépense importante.":
      "Nehmen Sie sich Zeit, Beträge, Bedingungen und Folgen vor jeder größeren Ausgabe zu prüfen.",
    "Conservez une marge de sécurité et évitez les décisions financières prises sous pression.":
      "Bewahren Sie eine Sicherheitsreserve und vermeiden Sie finanzielle Entscheidungen unter Druck.",
    "Relisez les détails, comparez les options et assurez-vous qu’aucun coût important ne vous échappe.":
      "Prüfen Sie die Details erneut, vergleichen Sie die Optionen und stellen Sie sicher, dass keine wichtigen Kosten übersehen werden.",
    "Avant de vous engager, confirmez les chiffres, les échéances et les conditions qui pourraient influencer votre budget.":
      "Bevor Sie sich festlegen, bestätigen Sie Zahlen, Fristen und Bedingungen, die Ihr Budget beeinflussen könnten.",
    "Protégez votre stabilité en conservant une réserve et en limitant les engagements difficiles à soutenir.":
      "Schützen Sie Ihre Stabilität, indem Sie eine Reserve bewahren und schwer tragbare Verpflichtungen begrenzen.",
    "Privilégiez les décisions qui renforcent votre marge de manœuvre plutôt que les gains rapides.":
      "Bevorzugen Sie Entscheidungen, die Ihren finanziellen Spielraum stärken, statt schnelle Gewinne anzustreben.",
    "Révisez vos dépenses récurrentes et classez vos priorités afin de retrouver une meilleure vue d’ensemble.":
      "Überprüfen Sie Ihre wiederkehrenden Ausgaben und ordnen Sie Ihre Prioritäten, um einen besseren Gesamtüberblick zu erhalten.",
    "Planifiez les prochaines échéances et regroupez vos décisions financières autour d’objectifs précis.":
      "Planen Sie kommende Fälligkeiten und richten Sie Ihre finanziellen Entscheidungen an konkreten Zielen aus.",
    "Anticipez les dépenses à venir afin d’éviter qu’une échéance prévisible fragilise votre équilibre.":
      "Planen Sie kommende Ausgaben voraus, damit eine vorhersehbare Fälligkeit Ihr Gleichgewicht nicht beeinträchtigt.",
    "Préparez les prochaines semaines en tenant compte des paiements fixes et des imprévus possibles.":
      "Planen Sie die kommenden Wochen unter Berücksichtigung fester Zahlungen und möglicher unerwarteter Ausgaben.",
    "Gardez une vision claire de vos entrées et sorties d’argent avant d’ajouter une nouvelle dépense.":
      "Behalten Sie Ihre Einnahmen und Ausgaben klar im Blick, bevor Sie eine neue Ausgabe hinzufügen.",
    "Réduisez ce qui apporte peu de valeur et concentrez vos ressources sur vos véritables priorités.":
      "Reduzieren Sie Ausgaben mit geringem Nutzen und konzentrieren Sie Ihre Ressourcen auf Ihre wirklichen Prioritäten.",
    "Une possibilité intéressante peut se présenter, mais elle mérite une analyse complète avant toute décision.":
      "Eine interessante Möglichkeit kann sich ergeben, sollte jedoch vor jeder Entscheidung gründlich analysiert werden.",
    "Évaluez le potentiel réel de la proposition sans vous laisser influencer uniquement par l’urgence.":
      "Bewerten Sie das tatsächliche Potenzial des Angebots, ohne sich allein von Dringlichkeit beeinflussen zu lassen.",
    "Comparez les avantages, les risques et les coûts à long terme avant de choisir votre prochaine direction.":
      "Vergleichen Sie Vorteile, Risiken und langfristige Kosten, bevor Sie Ihre nächste Richtung wählen.",
    "Appuyez votre décision sur des chiffres précis plutôt que sur une impression momentanée.":
      "Stützen Sie Ihre Entscheidung auf genaue Zahlen statt auf einen momentanen Eindruck.",
    "Attendez d’avoir toutes les informations nécessaires avant de vous engager ou de modifier votre stratégie.":
      "Warten Sie, bis Ihnen alle notwendigen Informationen vorliegen, bevor Sie sich festlegen oder Ihre Strategie ändern.",
    "Une décision légèrement reportée peut vous permettre d’obtenir de meilleures conditions ou une vision plus claire.":
      "Eine leicht aufgeschobene Entscheidung kann Ihnen bessere Bedingungen oder einen klareren Überblick ermöglichen.",
    "Consolidez ce qui fonctionne déjà avant de chercher à accélérer votre progression financière.":
      "Festigen Sie zunächst, was bereits funktioniert, bevor Sie versuchen, Ihren finanziellen Fortschritt zu beschleunigen.",
    "Privilégiez les choix durables qui respectent votre budget et votre niveau de sécurité.":
      "Bevorzugen Sie nachhaltige Entscheidungen, die Ihr Budget und Ihr Sicherheitsbedürfnis berücksichtigen.",
    "Repérez les actions capables d’améliorer progressivement vos revenus, vos projets ou votre autonomie.":
      "Identifizieren Sie Maßnahmen, die Ihre Einnahmen, Projekte oder Unabhängigkeit schrittweise verbessern können.",
    "Concentrez vos ressources sur les dépenses et les projets qui soutiennent réellement vos objectifs.":
      "Konzentrieren Sie Ihre Ressourcen auf Ausgaben und Projekte, die Ihre Ziele tatsächlich unterstützen.",
    "Conservez une réserve suffisante avant d’accepter un nouvel engagement ou une dépense importante.":
      "Bewahren Sie eine ausreichende Reserve, bevor Sie eine neue Verpflichtung oder größere Ausgabe eingehen.",
    "Comparez les options et vérifiez les conditions complètes avant de confirmer votre choix.":
      "Vergleichen Sie die Optionen und prüfen Sie sämtliche Bedingungen, bevor Sie Ihre Wahl bestätigen.",
    "Privilégiez les décisions capables de renforcer votre stabilité au-delà de cette seule période.":
      "Bevorzugen Sie Entscheidungen, die Ihre Stabilität über diesen Zeitraum hinaus stärken können.",

    "Votre climat financier":
      "Ihr finanzielles Klima",
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.":
      "Diese Phase beleuchtet Ihren Umgang mit Sicherheit, Ressourcen und materiellen Entscheidungen.",
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.":
      "Ihre finanzielle Situation sollte methodisch angegangen werden. Die besten Entscheidungen berücksichtigen Ihre tatsächlichen Prioritäten, Ihr Tempo und Ihr Bedürfnis nach Stabilität.",
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.":
      "Wählen Sie eine einfache und konkrete finanzielle Maßnahme, die Sie in diesem Zeitraum umsetzen.",

    "Développer": "Entwickeln",
    "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.":
      "Erkennen Sie Möglichkeiten, die Ihre Ressourcen, Projekte oder Unabhängigkeit langfristig unterstützen können.",
    "Sécuriser": "Absichern",
    "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.":
      "Schützen Sie Ihren finanziellen Spielraum, indem Sie Zahlen, Bedingungen und wiederkehrende Verpflichtungen prüfen.",

    "Finances et sécurité":
      "Finanzen und Sicherheit",
    "Lecture personnalisée":
      "Persönliche Deutung",
    "potentiel financier":
      "finanzielles Potenzial",
    "Potentiel financier de la période":
      "Finanzielles Potenzial dieses Zeitraums",
    "Points financiers importants":
      "Wichtige finanzielle Punkte",
    "Tendance financière":
      "Finanzielle Tendenz",
    "Conseil de la période":
      "Rat für diesen Zeitraum",
  },

  it: {
    "Une période favorable à consolider":
      "Un periodo favorevole da consolidare",
    "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.":
      "Il tuo clima finanziario appare favorevole. Usa questa stabilità per rafforzare ciò che funziona già, negoziare con metodo e preparare i prossimi passi senza cedere alle spese impulsive.",
    "Un équilibre à préserver":
      "Un equilibrio da preservare",
    "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.":
      "Il potenziale è interessante, ma richiede attenzione. Confronta le opzioni, verifica i dettagli e proteggi il tuo margine di sicurezza prima di impegnarti.",
    "Une période qui demande de la prudence":
      "Un periodo che richiede prudenza",
    "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.":
      "Rallenta e torna all'essenziale. Dai priorità alle spese importanti, evita decisioni sotto pressione e cerca una visione più chiara delle tue risorse.",

    "Prudence": "Prudenza",
    "Vérification": "Verifica",
    "Sécurité": "Sicurezza",
    "Organisation": "Organizzazione",
    "Prévision": "Previsione",
    "Contrôle": "Controllo",
    "Occasion": "Opportunità",
    "Analyse": "Analisi",
    "Patience": "Pazienza",
    "Stabilité": "Stabilità",
    "Développement": "Sviluppo",
    "Priorités": "Priorità",
    "Marge de sécurité": "Margine di sicurezza",
    "Décision réfléchie": "Decisione ponderata",
    "Vision à long terme": "Visione a lungo termine",

    "Prenez le temps de vérifier les montants, les conditions et les conséquences avant toute dépense importante.":
      "Prenditi il tempo di verificare importi, condizioni e conseguenze prima di qualsiasi spesa importante.",
    "Conservez une marge de sécurité et évitez les décisions financières prises sous pression.":
      "Mantieni un margine di sicurezza ed evita decisioni finanziarie prese sotto pressione.",
    "Relisez les détails, comparez les options et assurez-vous qu’aucun coût important ne vous échappe.":
      "Rivedi i dettagli, confronta le opzioni e assicurati che nessun costo importante venga trascurato.",
    "Avant de vous engager, confirmez les chiffres, les échéances et les conditions qui pourraient influencer votre budget.":
      "Prima di impegnarti, conferma cifre, scadenze e condizioni che potrebbero influenzare il tuo budget.",
    "Protégez votre stabilité en conservant une réserve et en limitant les engagements difficiles à soutenir.":
      "Proteggi la tua stabilità mantenendo una riserva e limitando gli impegni difficili da sostenere.",
    "Privilégiez les décisions qui renforcent votre marge de manœuvre plutôt que les gains rapides.":
      "Privilegia le decisioni che rafforzano il tuo margine di manovra invece dei guadagni rapidi.",
    "Révisez vos dépenses récurrentes et classez vos priorités afin de retrouver une meilleure vue d’ensemble.":
      "Rivedi le spese ricorrenti e organizza le priorità per ottenere una migliore visione d'insieme.",
    "Planifiez les prochaines échéances et regroupez vos décisions financières autour d’objectifs précis.":
      "Pianifica le prossime scadenze e organizza le decisioni finanziarie attorno a obiettivi precisi.",
    "Anticipez les dépenses à venir afin d’éviter qu’une échéance prévisible fragilise votre équilibre.":
      "Anticipa le spese future per evitare che una scadenza prevedibile indebolisca il tuo equilibrio.",
    "Préparez les prochaines semaines en tenant compte des paiements fixes et des imprévus possibles.":
      "Prepara le prossime settimane tenendo conto dei pagamenti fissi e dei possibili imprevisti.",
    "Gardez une vision claire de vos entrées et sorties d’argent avant d’ajouter une nouvelle dépense.":
      "Mantieni una visione chiara delle entrate e delle uscite prima di aggiungere una nuova spesa.",
    "Réduisez ce qui apporte peu de valeur et concentrez vos ressources sur vos véritables priorités.":
      "Riduci ciò che offre poco valore e concentra le tue risorse sulle vere priorità.",
    "Une possibilité intéressante peut se présenter, mais elle mérite une analyse complète avant toute décision.":
      "Può presentarsi un'opportunità interessante, ma merita un'analisi completa prima di qualsiasi decisione.",
    "Évaluez le potentiel réel de la proposition sans vous laisser influencer uniquement par l’urgence.":
      "Valuta il reale potenziale della proposta senza lasciarti influenzare soltanto dall'urgenza.",
    "Comparez les avantages, les risques et les coûts à long terme avant de choisir votre prochaine direction.":
      "Confronta vantaggi, rischi e costi a lungo termine prima di scegliere la prossima direzione.",
    "Appuyez votre décision sur des chiffres précis plutôt que sur une impression momentanée.":
      "Basa la tua decisione su cifre precise anziché su un'impressione momentanea.",
    "Attendez d’avoir toutes les informations nécessaires avant de vous engager ou de modifier votre stratégie.":
      "Aspetta di avere tutte le informazioni necessarie prima di impegnarti o modificare la tua strategia.",
    "Une décision légèrement reportée peut vous permettre d’obtenir de meilleures conditions ou une vision plus claire.":
      "Rimandare leggermente una decisione può permetterti di ottenere condizioni migliori o una visione più chiara.",
    "Consolidez ce qui fonctionne déjà avant de chercher à accélérer votre progression financière.":
      "Consolida ciò che funziona già prima di cercare di accelerare il tuo progresso finanziario.",
    "Privilégiez les choix durables qui respectent votre budget et votre niveau de sécurité.":
      "Privilegia scelte sostenibili che rispettino il tuo budget e il tuo livello di sicurezza.",
    "Repérez les actions capables d’améliorer progressivement vos revenus, vos projets ou votre autonomie.":
      "Individua le azioni capaci di migliorare progressivamente le tue entrate, i tuoi progetti o la tua autonomia.",
    "Concentrez vos ressources sur les dépenses et les projets qui soutiennent réellement vos objectifs.":
      "Concentra le tue risorse sulle spese e sui progetti che sostengono realmente i tuoi obiettivi.",
    "Conservez une réserve suffisante avant d’accepter un nouvel engagement ou une dépense importante.":
      "Mantieni una riserva sufficiente prima di accettare un nuovo impegno o una spesa importante.",
    "Comparez les options et vérifiez les conditions complètes avant de confirmer votre choix.":
      "Confronta le opzioni e verifica tutte le condizioni prima di confermare la tua scelta.",
    "Privilégiez les décisions capables de renforcer votre stabilité au-delà de cette seule période.":
      "Privilegia decisioni capaci di rafforzare la tua stabilità oltre questo singolo periodo.",

    "Votre climat financier":
      "Il tuo clima finanziario",
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.":
      "Questo periodo mette in luce il tuo rapporto con la sicurezza, le risorse e le decisioni materiali.",
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.":
      "La tua situazione finanziaria beneficia di un approccio metodico. Le decisioni migliori saranno quelle che rispettano le tue vere priorità, il tuo ritmo e il tuo bisogno di stabilità.",
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.":
      "Scegli un'azione finanziaria semplice e concreta da realizzare durante questo periodo.",

    "Développer": "Sviluppare",
    "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.":
      "Individua le opportunità capaci di sostenere le tue risorse, i tuoi progetti o la tua autonomia nel lungo periodo.",
    "Sécuriser": "Proteggere",
    "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.":
      "Proteggi il tuo margine di manovra verificando cifre, condizioni e impegni ricorrenti.",

    "Finances et sécurité":
      "Finanze e sicurezza",
    "Lecture personnalisée":
      "Lettura personalizzata",
    "potentiel financier":
      "potenziale finanziario",
    "Potentiel financier de la période":
      "Potenziale finanziario del periodo",
    "Points financiers importants":
      "Punti finanziari importanti",
    "Tendance financière":
      "Tendenza finanziaria",
    "Conseil de la période":
      "Consiglio per questo periodo",
  },

  pt: {
    "Une période favorable à consolider":
      "Um período favorável para consolidar",
    "Votre climat financier paraît porteur. Utilisez cette stabilité pour renforcer ce qui fonctionne déjà, négocier avec méthode et préparer la suite sans céder aux dépenses impulsives.":
      "Seu cenário financeiro parece favorável. Use essa estabilidade para fortalecer o que já funciona, negociar com método e preparar os próximos passos sem ceder a gastos impulsivos.",
    "Un équilibre à préserver":
      "Um equilíbrio a preservar",
    "Le potentiel est intéressant, mais il demande de la vigilance. Comparez les options, vérifiez les détails et protégez votre marge de sécurité avant de vous engager.":
      "O potencial é interessante, mas exige atenção. Compare as opções, verifique os detalhes e proteja sua margem de segurança antes de assumir um compromisso.",
    "Une période qui demande de la prudence":
      "Um período que exige prudência",
    "Ralentissez et revenez à l’essentiel. Priorisez les dépenses importantes, évitez les décisions sous pression et cherchez une meilleure visibilité sur vos ressources.":
      "Desacelere e volte ao essencial. Priorize as despesas importantes, evite decisões sob pressão e busque uma visão mais clara dos seus recursos.",

    "Prudence": "Prudência",
    "Vérification": "Verificação",
    "Sécurité": "Segurança",
    "Organisation": "Organização",
    "Prévision": "Previsão",
    "Contrôle": "Controle",
    "Occasion": "Oportunidade",
    "Analyse": "Análise",
    "Patience": "Paciência",
    "Stabilité": "Estabilidade",
    "Développement": "Desenvolvimento",
    "Priorités": "Prioridades",
    "Marge de sécurité": "Margem de segurança",
    "Décision réfléchie": "Decisão ponderada",
    "Vision à long terme": "Visão de longo prazo",

    "Prenez le temps de vérifier les montants, les conditions et les conséquences avant toute dépense importante.":
      "Reserve um tempo para verificar os valores, as condições e as consequências antes de qualquer despesa importante.",
    "Conservez une marge de sécurité et évitez les décisions financières prises sous pression.":
      "Mantenha uma margem de segurança e evite decisões financeiras tomadas sob pressão.",
    "Relisez les détails, comparez les options et assurez-vous qu’aucun coût important ne vous échappe.":
      "Revise os detalhes, compare as opções e certifique-se de que nenhum custo importante seja ignorado.",
    "Avant de vous engager, confirmez les chiffres, les échéances et les conditions qui pourraient influencer votre budget.":
      "Antes de assumir um compromisso, confirme os valores, os prazos e as condições que podem influenciar seu orçamento.",
    "Protégez votre stabilité en conservant une réserve et en limitant les engagements difficiles à soutenir.":
      "Proteja sua estabilidade mantendo uma reserva e limitando compromissos difíceis de sustentar.",
    "Privilégiez les décisions qui renforcent votre marge de manœuvre plutôt que les gains rapides.":
      "Priorize decisões que fortaleçam sua margem de manobra em vez de ganhos rápidos.",
    "Révisez vos dépenses récurrentes et classez vos priorités afin de retrouver une meilleure vue d’ensemble.":
      "Revise suas despesas recorrentes e organize suas prioridades para obter uma visão geral mais clara.",
    "Planifiez les prochaines échéances et regroupez vos décisions financières autour d’objectifs précis.":
      "Planeje os próximos vencimentos e organize suas decisões financeiras em torno de objetivos específicos.",
    "Anticipez les dépenses à venir afin d’éviter qu’une échéance prévisible fragilise votre équilibre.":
      "Antecipe as próximas despesas para evitar que um vencimento previsível comprometa seu equilíbrio.",
    "Préparez les prochaines semaines en tenant compte des paiements fixes et des imprévus possibles.":
      "Prepare as próximas semanas considerando os pagamentos fixos e possíveis imprevistos.",
    "Gardez une vision claire de vos entrées et sorties d’argent avant d’ajouter une nouvelle dépense.":
      "Mantenha uma visão clara das suas entradas e saídas de dinheiro antes de adicionar uma nova despesa.",
    "Réduisez ce qui apporte peu de valeur et concentrez vos ressources sur vos véritables priorités.":
      "Reduza o que oferece pouco valor e concentre seus recursos nas suas verdadeiras prioridades.",
    "Une possibilité intéressante peut se présenter, mais elle mérite une analyse complète avant toute décision.":
      "Uma oportunidade interessante pode surgir, mas merece uma análise completa antes de qualquer decisão.",
    "Évaluez le potentiel réel de la proposition sans vous laisser influencer uniquement par l’urgence.":
      "Avalie o verdadeiro potencial da proposta sem se deixar influenciar apenas pela urgência.",
    "Comparez les avantages, les risques et les coûts à long terme avant de choisir votre prochaine direction.":
      "Compare os benefícios, os riscos e os custos de longo prazo antes de escolher sua próxima direção.",
    "Appuyez votre décision sur des chiffres précis plutôt que sur une impression momentanée.":
      "Baseie sua decisão em números precisos, e não em uma impressão momentânea.",
    "Attendez d’avoir toutes les informations nécessaires avant de vous engager ou de modifier votre stratégie.":
      "Espere ter todas as informações necessárias antes de assumir um compromisso ou alterar sua estratégia.",
    "Une décision légèrement reportée peut vous permettre d’obtenir de meilleures conditions ou une vision plus claire.":
      "Adiar ligeiramente uma decisão pode permitir melhores condições ou uma visão mais clara.",
    "Consolidez ce qui fonctionne déjà avant de chercher à accélérer votre progression financière.":
      "Consolide o que já funciona antes de tentar acelerar seu progresso financeiro.",
    "Privilégiez les choix durables qui respectent votre budget et votre niveau de sécurité.":
      "Priorize escolhas sustentáveis que respeitem seu orçamento e seu nível de segurança.",
    "Repérez les actions capables d’améliorer progressivement vos revenus, vos projets ou votre autonomie.":
      "Identifique ações capazes de melhorar gradualmente sua renda, seus projetos ou sua autonomia.",
    "Concentrez vos ressources sur les dépenses et les projets qui soutiennent réellement vos objectifs.":
      "Concentre seus recursos nas despesas e nos projetos que realmente apoiam seus objetivos.",
    "Conservez une réserve suffisante avant d’accepter un nouvel engagement ou une dépense importante.":
      "Mantenha uma reserva suficiente antes de aceitar um novo compromisso ou uma despesa importante.",
    "Comparez les options et vérifiez les conditions complètes avant de confirmer votre choix.":
      "Compare as opções e verifique todas as condições antes de confirmar sua escolha.",
    "Privilégiez les décisions capables de renforcer votre stabilité au-delà de cette seule période.":
      "Priorize decisões capazes de fortalecer sua estabilidade além deste período.",

    "Votre climat financier":
      "Seu clima financeiro",
    "Cette période met en lumière votre rapport à la sécurité, aux ressources et aux décisions matérielles.":
      "Este período destaca sua relação com segurança, recursos e decisões materiais.",
    "Votre situation financière gagne à être abordée avec méthode. Les meilleures décisions seront celles qui respectent vos priorités réelles, votre rythme et votre besoin de stabilité.":
      "Sua situação financeira se beneficia de uma abordagem metódica. As melhores decisões serão aquelas que respeitam suas verdadeiras prioridades, seu ritmo e sua necessidade de estabilidade.",
    "Choisissez une action financière simple et concrète à accomplir pendant cette période.":
      "Escolha uma ação financeira simples e concreta para realizar durante este período.",

    "Développer": "Desenvolver",
    "Repérez les possibilités capables de soutenir vos ressources, vos projets ou votre autonomie à plus long terme.":
      "Identifique oportunidades capazes de apoiar seus recursos, seus projetos ou sua autonomia no longo prazo.",
    "Sécuriser": "Proteger",
    "Protégez votre marge de manœuvre en vérifiant les chiffres, les conditions et les engagements récurrents.":
      "Proteja sua margem de manobra verificando os números, as condições e os compromissos recorrentes.",

    "Finances et sécurité":
      "Finanças e segurança",
    "Lecture personnalisée":
      "Leitura personalizada",
    "potentiel financier":
      "potencial financeiro",
    "Potentiel financier de la période":
      "Potencial financeiro do período",
    "Points financiers importants":
      "Pontos financeiros importantes",
    "Tendance financière":
      "Tendência financeira",
    "Conseil de la période":
      "Conselho para este período",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December",
  ],

  es: [
    "enero", "febrero", "marzo",
    "abril", "mayo", "junio",
    "julio", "agosto", "septiembre",
    "octubre", "noviembre", "diciembre",
  ],

  de: [
    "Januar", "Februar", "März",
    "April", "Mai", "Juni",
    "Juli", "August", "September",
    "Oktober", "November", "Dezember",
  ],

  it: [
    "gennaio", "febbraio", "marzo",
    "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre",
    "ottobre", "novembre", "dicembre",
  ],

  pt: [
    "janeiro", "fevereiro", "março",
    "abril", "maio", "junho",
    "julho", "agosto", "setembro",
    "outubro", "novembro", "dezembro",
  ],
};

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

const ZODIAC_LABELS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Bélier: "Aries",
    Taureau: "Taurus",
    Gémeaux: "Gemini",
    Cancer: "Cancer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Scorpio",
    Sagittaire: "Sagittarius",
    Capricorne: "Capricorn",
    Verseau: "Aquarius",
    Poissons: "Pisces",
  },

  es: {
    Bélier: "Aries",
    Taureau: "Tauro",
    Gémeaux: "Géminis",
    Cancer: "Cáncer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Escorpio",
    Sagittaire: "Sagitario",
    Capricorne: "Capricornio",
    Verseau: "Acuario",
    Poissons: "Piscis",
  },

  de: {
    Bélier: "Widder",
    Taureau: "Stier",
    Gémeaux: "Zwillinge",
    Cancer: "Krebs",
    Lion: "Löwe",
    Vierge: "Jungfrau",
    Balance: "Waage",
    Scorpion: "Skorpion",
    Sagittaire: "Schütze",
    Capricorne: "Steinbock",
    Verseau: "Wassermann",
    Poissons: "Fische",
  },

  it: {
    Bélier: "Ariete",
    Taureau: "Toro",
    Gémeaux: "Gemelli",
    Cancer: "Cancro",
    Lion: "Leone",
    Vierge: "Vergine",
    Balance: "Bilancia",
    Scorpion: "Scorpione",
    Sagittaire: "Sagittario",
    Capricorne: "Capricorno",
    Verseau: "Acquario",
    Poissons: "Pesci",
  },

  pt: {
    Bélier: "Áries",
    Taureau: "Touro",
    Gémeaux: "Gêmeos",
    Cancer: "Câncer",
    Lion: "Leão",
    Vierge: "Virgem",
    Balance: "Libra",
    Scorpion: "Escorpião",
    Sagittaire: "Sagitário",
    Capricorne: "Capricórnio",
    Verseau: "Aquário",
    Poissons: "Peixes",
  },
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopeMoney.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(node: ts.Node): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (
        normalized &&
        typeof translated === "string"
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ?? "";

        const trailing =
          raw.match(/\s*$/)?.[0] ?? "";

        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value:
            `${leading}${translated}${trailing}`,
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return replacements
    .sort(
      (a, b) =>
        b.start - a.start,
    )
    .reduce(
      (output, replacement) =>
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

function replaceDynamicMoneyValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period\s*\);/g,
    `const periodLabel =
    __moneyLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__moneyLocalizeDynamicText(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{sectionTitle\}/g,
    "{__moneyLocalizeDynamicText(sectionTitle)}",
  );

  output = output.replace(
    /\{introduction\}/g,
    "{__moneyLocalizeDynamicText(introduction)}",
  );

  output = output.replace(
    /\{mainText\}/g,
    "{__moneyLocalizeDynamicText(mainText)}",
  );

  output = output.replace(
    /\{highlight\.title\}/g,
    "{__moneyLocalizeDynamicText(highlight.title)}",
  );

  output = output.replace(
    /\{highlight\.text\}/g,
    "{__moneyLocalizeDynamicText(highlight.text)}",
  );

  output = output.replace(
    /\{guidance\.title\}/g,
    "{__moneyLocalizeDynamicText(guidance.title)}",
  );

  output = output.replace(
    /\{guidance\.text\}/g,
    "{__moneyLocalizeDynamicText(guidance.text)}",
  );

  output = output.replace(
    /\{strategy\.title\}/g,
    "{__moneyLocalizeDynamicText(strategy.title)}",
  );

  output = output.replace(
    /\{strategy\.text\}/g,
    "{__moneyLocalizeDynamicText(strategy.text)}",
  );

  output = output.replace(
    /\{advice\}/g,
    "{__moneyLocalizeDynamicText(advice)}",
  );

  return output;
}

function injectMoneyHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __moneyLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE MONEY — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __MONEY_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __MONEY_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __MONEY_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

const __MONEY_TRANSLATIONS:
  Record<string, string> =
  ${JSON.stringify(TRANSLATIONS[locale], null, 2)};

function __moneyLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output =
    __MONEY_TRANSLATIONS[value] ??
    value;

  __MONEY_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __MONEY_MONTHS[index],
      );
    },
  );

  Object.entries(
    __MONEY_ZODIAC_LABELS,
  ).forEach(
    ([frenchSign, localizedSign]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchSign}\\\\b\`,
          "gi",
        ),
        localizedSign,
      );
    },
  );

  return output;
}

function __moneyFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __moneyLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__MONEY_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__MONEY_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__MONEY_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__MONEY_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__MONEY_MONTHS[month - 1]} ${year}`;'
  }
}

function __moneyLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __moneyFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __moneyLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__MONEY_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE MONEY — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeMoney";

  const index =
    source.indexOf(marker);

  if (index < 0) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

export function localizeHoroscopeMoney(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  let localized =
    replaceDynamicMoneyValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectMoneyHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
