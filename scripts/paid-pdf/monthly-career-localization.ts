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

const CAREER_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Un mois pour faire avancer vos ambitions":
      "A month to move your ambitions forward",
    "Votre carrière entre dans une phase d’évolution":
      "Your career is entering a phase of growth",
    "Des décisions importantes se précisent":
      "Important decisions are becoming clearer",
    "Vos efforts commencent à porter leurs fruits":
      "Your efforts are beginning to pay off",
    "Une période favorable à la progression":
      "A favorable period for progress",
    "Votre vie professionnelle gagne en clarté":
      "Your professional life is becoming clearer",
    "Un nouveau cap professionnel se dessine":
      "A new professional direction is taking shape",
    "Vos projets demandent structure et confiance":
      "Your projects require structure and confidence",
  },

  es: {
    "Un mois pour faire avancer vos ambitions":
      "Un mes para impulsar sus ambiciones",
    "Votre carrière entre dans une phase d’évolution":
      "Su carrera entra en una etapa de evolución",
    "Des décisions importantes se précisent":
      "Las decisiones importantes se vuelven más claras",
    "Vos efforts commencent à porter leurs fruits":
      "Sus esfuerzos comienzan a dar frutos",
    "Une période favorable à la progression":
      "Un período favorable para progresar",
    "Votre vie professionnelle gagne en clarté":
      "Su vida profesional gana claridad",
    "Un nouveau cap professionnel se dessine":
      "Se perfila una nueva dirección profesional",
    "Vos projets demandent structure et confiance":
      "Sus proyectos requieren estructura y confianza",
  },

  de: {
    "Un mois pour faire avancer vos ambitions":
      "Ein Monat, um Ihre Ambitionen voranzubringen",
    "Votre carrière entre dans une phase d’évolution":
      "Ihre Karriere tritt in eine Entwicklungsphase ein",
    "Des décisions importantes se précisent":
      "Wichtige Entscheidungen werden klarer",
    "Vos efforts commencent à porter leurs fruits":
      "Ihre Anstrengungen beginnen Früchte zu tragen",
    "Une période favorable à la progression":
      "Eine günstige Zeit für Fortschritt",
    "Votre vie professionnelle gagne en clarté":
      "Ihr Berufsleben gewinnt an Klarheit",
    "Un nouveau cap professionnel se dessine":
      "Eine neue berufliche Richtung zeichnet sich ab",
    "Vos projets demandent structure et confiance":
      "Ihre Projekte erfordern Struktur und Vertrauen",
  },

  it: {
    "Un mois pour faire avancer vos ambitions":
      "Un mese per far avanzare le tue ambizioni",
    "Votre carrière entre dans une phase d’évolution":
      "La tua carriera entra in una fase di evoluzione",
    "Des décisions importantes se précisent":
      "Le decisioni importanti diventano più chiare",
    "Vos efforts commencent à porter leurs fruits":
      "I tuoi sforzi iniziano a dare frutti",
    "Une période favorable à la progression":
      "Un periodo favorevole alla crescita",
    "Votre vie professionnelle gagne en clarté":
      "La tua vita professionale acquista chiarezza",
    "Un nouveau cap professionnel se dessine":
      "Si delinea una nuova direzione professionale",
    "Vos projets demandent structure et confiance":
      "I tuoi progetti richiedono struttura e fiducia",
  },

  pt: {
    "Un mois pour faire avancer vos ambitions":
      "Um mês para impulsionar suas ambições",
    "Votre carrière entre dans une phase d’évolution":
      "Sua carreira entra em uma fase de evolução",
    "Des décisions importantes se précisent":
      "Decisões importantes ficam mais claras",
    "Vos efforts commencent à porter leurs fruits":
      "Seus esforços começam a dar frutos",
    "Une période favorable à la progression":
      "Um período favorável ao progresso",
    "Votre vie professionnelle gagne en clarté":
      "Sua vida profissional ganha clareza",
    "Un nouveau cap professionnel se dessine":
      "Uma nova direção profissional começa a se definir",
    "Vos projets demandent structure et confiance":
      "Seus projetos exigem estrutura e confiança",
  },
};

/* =========================================================
   BANQUE DE TEXTES — TRADUCTIONS
========================================================= */

const CAREER_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre vie professionnelle entre dans une période où la clarté et l’organisation feront une réelle différence. Les prochaines semaines vous aideront à mieux définir vos priorités.":
      "Your professional life is entering a period where clarity and organization will make a real difference. The coming weeks will help you define your priorities more clearly.",
    "Ce mois favorise une progression réfléchie dans votre travail. Vous pourriez constater que certaines décisions prises récemment commencent enfin à produire des résultats.":
      "This month favors thoughtful progress in your work. You may notice that some recent decisions are finally beginning to produce results.",
    "Le climat professionnel vous invite à revoir votre manière d’investir votre temps et votre énergie. Une meilleure structure pourrait alléger considérablement votre charge mentale.":
      "The professional climate invites you to reconsider how you invest your time and energy. Better structure could significantly lighten your mental load.",
    "Votre carrière pourrait connaître un mouvement important au cours des prochaines semaines. Il ne s’agira pas nécessairement d’un changement spectaculaire, mais d’une évolution utile.":
      "Your career may experience an important shift over the coming weeks. It may not be a dramatic change, but rather a useful evolution.",
    "Une période de consolidation commence dans votre vie professionnelle. Vous serez amené à protéger ce qui fonctionne tout en corrigeant ce qui ralentit votre progression.":
      "A period of consolidation begins in your professional life. You will be encouraged to protect what works while correcting what slows your progress.",
    "Ce mois met en lumière vos ambitions et votre rapport à la réussite. Vous pourriez ressentir le besoin de travailler sur un projet plus stimulant ou plus fidèle à vos valeurs.":
      "This month highlights your ambitions and your relationship with success. You may feel the need to work on a project that is more stimulating or more aligned with your values.",
    "Votre environnement professionnel pourrait vous demander davantage d’adaptation. Une approche souple vous permettra de transformer les changements en occasions de progression.":
      "Your professional environment may require greater adaptability. A flexible approach will help you turn changes into opportunities for progress.",
    "Les prochaines semaines vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d’être présenté avec davantage de confiance.":
      "The coming weeks encourage you to better recognize the value of your skills. Your work deserves to be presented with greater confidence.",
    "Une nouvelle dynamique pourrait s’installer dans votre quotidien professionnel. Certains efforts jusque-là discrets pourraient enfin devenir plus visibles.":
      "A new dynamic may develop in your professional routine. Some efforts that have remained discreet until now may finally become more visible.",
    "Le mois vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière. Une décision simple pourrait ouvrir une voie plus intéressante.":
      "The month encourages you to reflect on the direction you truly want to give your career. A simple decision could open a more interesting path.",

    "Votre efficacité dépendra surtout de votre capacité à distinguer les tâches urgentes des tâches réellement importantes.":
      "Your effectiveness will depend mainly on your ability to distinguish urgent tasks from truly important ones.",
    "Une meilleure organisation vous permettra d’avancer avec davantage de constance. Évitez de commencer plusieurs projets sans terminer les plus essentiels.":
      "Better organization will help you move forward more consistently. Avoid starting several projects without finishing the most essential ones.",
    "Votre travail pourrait être remarqué par une personne en mesure de vous offrir du soutien, une responsabilité ou une nouvelle possibilité.":
      "Your work may be noticed by someone in a position to offer you support, responsibility, or a new opportunity.",
    "Un changement dans vos méthodes pourrait améliorer votre productivité. Ne restez pas attaché à une façon de faire simplement parce qu’elle vous est familière.":
      "A change in your methods could improve your productivity. Do not remain attached to a way of doing things simply because it is familiar.",
    "Vous pourriez ressentir un besoin croissant d’autonomie. Cherchez à obtenir davantage de liberté tout en respectant vos engagements actuels.":
      "You may feel a growing need for autonomy. Seek greater freedom while respecting your current commitments.",
    "La progression sera plus visible dans la seconde partie du mois. Les premières semaines serviront surtout à préparer le terrain.":
      "Progress will be more visible in the second half of the month. The first weeks will mainly serve to prepare the ground.",
    "Une tâche exigeante pourrait vous demander davantage de concentration. En avançant étape par étape, vous éviterez une fatigue inutile.":
      "A demanding task may require greater concentration. By moving forward step by step, you will avoid unnecessary fatigue.",
    "Votre capacité à résoudre un problème concret renforcera votre crédibilité. Faites confiance à votre expérience et à votre jugement.":
      "Your ability to solve a concrete problem will strengthen your credibility. Trust your experience and judgment.",
    "Ce mois vous invite à travailler avec plus de stratégie. Il ne sera pas nécessaire d’en faire davantage, mais plutôt de mieux choisir vos efforts.":
      "This month invites you to work more strategically. You will not need to do more, but rather choose your efforts more carefully.",
    "Une situation professionnelle pourrait devenir plus claire après une discussion ou l’arrivée d’une nouvelle information.":
      "A professional situation may become clearer after a discussion or the arrival of new information.",

    "Un projet qui avançait lentement pourrait retrouver un nouvel élan. Revoyez les étapes restantes et concentrez-vous sur la prochaine action concrète.":
      "A project that was moving slowly may regain momentum. Review the remaining steps and focus on the next concrete action.",
    "Une idée mérite d’être développée davantage. Prenez le temps de la structurer avant de la présenter ou de demander l’avis de votre entourage.":
      "An idea deserves further development. Take time to structure it before presenting it or asking others for feedback.",
    "Vous pourriez devoir modifier une partie de votre plan initial. Cet ajustement ne représente pas un échec, mais une manière plus efficace d’atteindre votre objectif.":
      "You may need to modify part of your original plan. This adjustment is not a failure, but a more effective way to reach your goal.",
    "Le mois favorise les projets qui demandent de la patience, de la méthode et une vision à long terme.":
      "The month favors projects that require patience, method, and a long-term vision.",
    "Une collaboration pourrait accélérer votre progression. Choisissez toutefois une personne dont les attentes et les méthodes sont compatibles avec les vôtres.":
      "A collaboration could accelerate your progress. However, choose someone whose expectations and methods are compatible with yours.",
    "Un projet personnel pourrait commencer à prendre davantage de place. Assurez-vous de lui réserver régulièrement du temps.":
      "A personal project may begin to take up more space. Make sure to reserve time for it regularly.",
    "Vous pourriez recevoir une réponse ou une confirmation attendue depuis quelque temps. Préparez-vous à agir rapidement lorsque la situation se débloquera.":
      "You may receive an answer or confirmation you have been waiting for. Be ready to act quickly when the situation moves forward.",
    "Une nouvelle responsabilité pourrait vous obliger à réorganiser votre emploi du temps. Cette adaptation sera bénéfique si vous protégez vos priorités.":
      "A new responsibility may require you to reorganize your schedule. This adjustment will be beneficial if you protect your priorities.",
    "Le mois convient bien à la finalisation d’une tâche importante. Évitez de repousser les derniers détails simplement parce que l’essentiel est déjà terminé.":
      "The month is well suited to completing an important task. Avoid postponing the final details simply because the essential work is already done.",
    "Une occasion de montrer votre créativité pourrait apparaître. Proposez une solution concrète plutôt que d’attendre qu’on vous demande votre opinion.":
      "An opportunity to show your creativity may arise. Offer a concrete solution rather than waiting to be asked for your opinion.",

    "Les échanges professionnels gagneront à rester clairs et précis. Une consigne mal comprise pourrait créer un retard évitable.":
      "Professional exchanges will benefit from remaining clear and precise. A misunderstood instruction could create an avoidable delay.",
    "Une personne de votre entourage professionnel pourrait vous offrir une information ou un conseil particulièrement utile.":
      "Someone in your professional circle may offer you particularly useful information or advice.",
    "Une tension pourrait s’apaiser grâce à une discussion directe. Concentrez-vous sur les faits plutôt que sur les réactions émotionnelles.":
      "A tension may ease through a direct discussion. Focus on facts rather than emotional reactions.",
    "Votre diplomatie vous aidera à défendre votre point de vue sans créer de conflit inutile.":
      "Your diplomacy will help you defend your point of view without creating unnecessary conflict.",
    "Vous pourriez devoir travailler avec une personne dont le rythme diffère du vôtre. Définissez clairement les responsabilités de chacun.":
      "You may need to work with someone whose pace differs from yours. Clearly define each person's responsibilities.",
    "Une collaboration prometteuse pourrait commencer de manière informelle. Restez attentif aux conversations qui ouvrent de nouvelles perspectives.":
      "A promising collaboration may begin informally. Stay attentive to conversations that open new perspectives.",
    "Votre professionnalisme sera apprécié dans une situation où les autres pourraient manquer de constance ou d’organisation.":
      "Your professionalism will be appreciated in a situation where others may lack consistency or organization.",
    "Évitez de prendre personnellement une remarque liée au travail. Elle pourrait contenir une information utile malgré une formulation maladroite.":
      "Avoid taking a work-related remark personally. It may contain useful information despite awkward wording.",
    "Une personne pourrait vous demander davantage que ce qui avait été convenu. Vérifiez vos limites avant d’accepter une nouvelle tâche.":
      "Someone may ask more of you than was originally agreed. Check your limits before accepting a new task.",
    "Votre réseau professionnel pourrait jouer un rôle plus important ce mois-ci. Une ancienne connaissance pourrait reprendre contact.":
      "Your professional network may play a more important role this month. A former acquaintance may get back in touch.",

    "Une possibilité de progression pourrait apparaître sous la forme d’une nouvelle responsabilité, d’un mandat ou d’une proposition inattendue.":
      "An opportunity for progress may appear in the form of a new responsibility, assignment, or unexpected proposal.",
    "Une compétence que vous utilisez rarement pourrait devenir particulièrement utile. N’hésitez pas à la mettre en avant.":
      "A skill you rarely use may become particularly useful. Do not hesitate to highlight it.",
    "Le mois favorise les démarches liées à une candidature, une négociation, une présentation ou une demande professionnelle.":
      "The month favors steps related to an application, negotiation, presentation, or professional request.",
    "Une occasion intéressante pourrait d’abord sembler modeste. Prenez le temps d’évaluer son potentiel à long terme.":
      "An interesting opportunity may initially seem modest. Take time to assess its long-term potential.",
    "Vous pourriez être invité à participer à un projet qui vous permettra d’élargir votre expérience ou votre visibilité.":
      "You may be invited to participate in a project that allows you to broaden your experience or visibility.",
    "Une amélioration de vos conditions de travail pourrait devenir possible si vous exprimez clairement vos besoins.":
      "An improvement in your working conditions may become possible if you clearly express your needs.",
    "Une nouvelle idée de revenu ou de développement professionnel pourrait commencer à prendre forme.":
      "A new income or professional development idea may begin to take shape.",
    "Une formation, une lecture ou un apprentissage ciblé pourrait vous donner un avantage important dans les prochains mois.":
      "Training, reading, or targeted learning could give you an important advantage in the coming months.",
    "Votre capacité à prendre une initiative au bon moment pourrait vous démarquer positivement.":
      "Your ability to take initiative at the right moment could set you apart positively.",
    "Une conversation avec une personne expérimentée pourrait vous aider à voir votre avenir professionnel sous un angle plus ambitieux.":
      "A conversation with an experienced person may help you see your professional future from a more ambitious perspective.",

    "Le principal défi sera d’éviter la dispersion. Trop de responsabilités simultanées pourraient diminuer la qualité de votre travail.":
      "The main challenge will be to avoid spreading yourself too thin. Too many simultaneous responsibilities could reduce the quality of your work.",
    "Vous pourriez avoir tendance à accepter une tâche supplémentaire avant d’évaluer votre charge actuelle.":
      "You may tend to accept an additional task before evaluating your current workload.",
    "Une impatience face à la lenteur des résultats pourrait vous pousser à modifier trop rapidement une stratégie pourtant solide.":
      "Impatience with slow results may push you to change a solid strategy too quickly.",
    "Évitez de confondre productivité et épuisement. Travailler plus longtemps ne signifie pas toujours avancer davantage.":
      "Avoid confusing productivity with exhaustion. Working longer does not always mean making more progress.",
    "Une critique pourrait momentanément affecter votre confiance. Prenez ce qui est utile sans remettre toute votre valeur en question.":
      "Criticism may temporarily affect your confidence. Take what is useful without questioning your entire value.",
    "Le besoin de tout contrôler pourrait compliquer une collaboration. Laissez de la place aux compétences des autres.":
      "The need to control everything could complicate a collaboration. Leave room for other people's skills.",
    "Une situation ambiguë pourrait créer des inquiétudes inutiles. Demandez des précisions plutôt que de tirer des conclusions.":
      "An ambiguous situation could create unnecessary worries. Ask for clarification rather than drawing conclusions.",
    "Vous devrez protéger votre concentration contre les interruptions et les demandes secondaires.":
      "You will need to protect your concentration from interruptions and secondary demands.",
    "Le perfectionnisme pourrait ralentir la finalisation d’un projet. Un résultat solide vaut mieux qu’un projet éternellement inachevé.":
      "Perfectionism could slow the completion of a project. A solid result is better than a project that remains unfinished forever.",
    "Le défi consistera à ne pas porter seul une responsabilité qui devrait être partagée.":
      "The challenge will be not to carry alone a responsibility that should be shared.",

    "Définissez trois priorités principales pour le mois et revenez-y chaque fois que votre attention se disperse.":
      "Define three main priorities for the month and return to them whenever your attention strays.",
    "Présentez vos idées avec confiance, mais accompagnez-les d’un plan concret et réaliste.":
      "Present your ideas with confidence, but support them with a concrete and realistic plan.",
    "Ne promettez pas un délai que vous ne pourrez pas respecter simplement pour éviter de décevoir quelqu’un.":
      "Do not promise a deadline you cannot meet simply to avoid disappointing someone.",
    "Consacrez vos meilleures heures de concentration aux tâches qui ont le plus de valeur.":
      "Devote your best hours of concentration to the tasks that have the greatest value.",
    "Conservez une trace écrite des décisions, des échéances et des responsabilités importantes.":
      "Keep a written record of important decisions, deadlines, and responsibilities.",
    "Acceptez les ajustements nécessaires sans abandonner votre objectif principal.":
      "Accept necessary adjustments without abandoning your main goal.",
    "Demandez de l’aide ou des précisions avant qu’un problème mineur devienne plus difficile à corriger.":
      "Ask for help or clarification before a minor problem becomes harder to correct.",
    "Prenez le temps de reconnaître vos progrès. Votre motivation dépend aussi de votre capacité à voir le chemin déjà parcouru.":
      "Take time to recognize your progress. Your motivation also depends on your ability to see how far you have already come.",
    "Investissez votre énergie dans les projets qui peuvent réellement améliorer votre avenir professionnel.":
      "Invest your energy in projects that can truly improve your professional future.",
    "Protégez vos limites afin que votre disponibilité ne soit pas considérée comme illimitée.":
      "Protect your boundaries so that your availability is not considered unlimited.",

    "Ce mois peut renforcer votre position professionnelle si vous avancez avec méthode, confiance et discernement.":
      "This month can strengthen your professional position if you proceed with method, confidence, and discernment.",
    "Votre progression dépendra moins de la vitesse que de la qualité de vos décisions et de la constance de vos efforts.":
      "Your progress will depend less on speed than on the quality of your decisions and the consistency of your efforts.",
    "Une nouvelle étape pourrait commencer dans votre carrière. Préparez-la avec sérieux sans sous-estimer votre capacité à réussir.":
      "A new stage may begin in your career. Prepare for it seriously without underestimating your ability to succeed.",
    "Les prochaines semaines vous aideront à mieux comprendre où votre énergie professionnelle mérite réellement d’être investie.":
      "The coming weeks will help you better understand where your professional energy truly deserves to be invested.",
    "Vous pourriez terminer le mois avec une organisation plus solide et une vision plus claire de vos prochaines actions.":
      "You may end the month with stronger organization and a clearer vision of your next actions.",
    "Une occasion de démontrer vos compétences pourrait modifier positivement la manière dont votre travail est perçu.":
      "An opportunity to demonstrate your skills could positively change how your work is perceived.",
    "Votre carrière évoluera favorablement si vous osez défendre vos idées tout en restant ouvert aux ajustements.":
      "Your career will evolve favorably if you dare to defend your ideas while remaining open to adjustments.",
    "Ce mois vous rappelle que la réussite se construit autant par les décisions refusées que par les occasions acceptées.":
      "This month reminds you that success is built as much by the decisions you decline as by the opportunities you accept.",
    "Une progression discrète, mais durable, pourrait devenir l’un des résultats les plus importants de cette période.":
      "Quiet but lasting progress may become one of the most important results of this period.",
    "Votre avenir professionnel gagnera en clarté à mesure que vous choisirez des objectifs réellement alignés avec vos ambitions.":
      "Your professional future will become clearer as you choose goals that are truly aligned with your ambitions.",
  },

  es: {
    "Votre vie professionnelle entre dans une période où la clarté et l’organisation feront une réelle différence. Les prochaines semaines vous aideront à mieux définir vos priorités.":
      "Su vida profesional entra en un período en el que la claridad y la organización marcarán una verdadera diferencia. Las próximas semanas le ayudarán a definir mejor sus prioridades.",
    "Ce mois favorise une progression réfléchie dans votre travail. Vous pourriez constater que certaines décisions prises récemment commencent enfin à produire des résultats.":
      "Este mes favorece un progreso reflexivo en su trabajo. Podría comprobar que algunas decisiones tomadas recientemente empiezan por fin a producir resultados.",
    "Le climat professionnel vous invite à revoir votre manière d’investir votre temps et votre énergie. Une meilleure structure pourrait alléger considérablement votre charge mentale.":
      "El clima profesional le invita a revisar la forma en que invierte su tiempo y energía. Una mejor estructura podría aliviar considerablemente su carga mental.",
    "Votre carrière pourrait connaître un mouvement important au cours des prochaines semaines. Il ne s’agira pas nécessairement d’un changement spectaculaire, mais d’une évolution utile.":
      "Su carrera podría experimentar un movimiento importante durante las próximas semanas. No será necesariamente un cambio espectacular, sino una evolución útil.",
    "Une période de consolidation commence dans votre vie professionnelle. Vous serez amené à protéger ce qui fonctionne tout en corrigeant ce qui ralentit votre progression.":
      "Comienza un período de consolidación en su vida profesional. Tendrá que proteger lo que funciona mientras corrige lo que frena su progreso.",
    "Ce mois met en lumière vos ambitions et votre rapport à la réussite. Vous pourriez ressentir le besoin de travailler sur un projet plus stimulant ou plus fidèle à vos valeurs.":
      "Este mes pone de relieve sus ambiciones y su relación con el éxito. Podría sentir la necesidad de trabajar en un proyecto más estimulante o más fiel a sus valores.",
    "Votre environnement professionnel pourrait vous demander davantage d’adaptation. Une approche souple vous permettra de transformer les changements en occasions de progression.":
      "Su entorno profesional podría exigirle una mayor capacidad de adaptación. Un enfoque flexible le permitirá transformar los cambios en oportunidades de progreso.",
    "Les prochaines semaines vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d’être présenté avec davantage de confiance.":
      "Las próximas semanas le animan a reconocer mejor el valor de sus competencias. Su trabajo merece ser presentado con mayor confianza.",
    "Une nouvelle dynamique pourrait s’installer dans votre quotidien professionnel. Certains efforts jusque-là discrets pourraient enfin devenir plus visibles.":
      "Una nueva dinámica podría instalarse en su vida profesional cotidiana. Algunos esfuerzos hasta ahora discretos podrían hacerse por fin más visibles.",
    "Le mois vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière. Une décision simple pourrait ouvrir une voie plus intéressante.":
      "El mes le impulsa a reflexionar sobre la dirección que realmente desea dar a su carrera. Una decisión sencilla podría abrir un camino más interesante.",

    "Votre efficacité dépendra surtout de votre capacité à distinguer les tâches urgentes des tâches réellement importantes.":
      "Su eficacia dependerá sobre todo de su capacidad para distinguir las tareas urgentes de las realmente importantes.",
    "Une meilleure organisation vous permettra d’avancer avec davantage de constance. Évitez de commencer plusieurs projets sans terminer les plus essentiels.":
      "Una mejor organización le permitirá avanzar con mayor constancia. Evite comenzar varios proyectos sin terminar los más esenciales.",
    "Votre travail pourrait être remarqué par une personne en mesure de vous offrir du soutien, une responsabilité ou une nouvelle possibilité.":
      "Su trabajo podría llamar la atención de una persona capaz de ofrecerle apoyo, una responsabilidad o una nueva oportunidad.",
    "Un changement dans vos méthodes pourrait améliorer votre productivité. Ne restez pas attaché à une façon de faire simplement parce qu’elle vous est familière.":
      "Un cambio en sus métodos podría mejorar su productividad. No se aferre a una forma de hacer las cosas simplemente porque le resulte familiar.",
    "Vous pourriez ressentir un besoin croissant d’autonomie. Cherchez à obtenir davantage de liberté tout en respectant vos engagements actuels.":
      "Podría sentir una necesidad creciente de autonomía. Busque más libertad respetando al mismo tiempo sus compromisos actuales.",
    "La progression sera plus visible dans la seconde partie du mois. Les premières semaines serviront surtout à préparer le terrain.":
      "El progreso será más visible en la segunda mitad del mes. Las primeras semanas servirán principalmente para preparar el terreno.",
    "Une tâche exigeante pourrait vous demander davantage de concentration. En avançant étape par étape, vous éviterez une fatigue inutile.":
      "Una tarea exigente podría requerir una mayor concentración. Avanzando paso a paso evitará un cansancio innecesario.",
    "Votre capacité à résoudre un problème concret renforcera votre crédibilité. Faites confiance à votre expérience et à votre jugement.":
      "Su capacidad para resolver un problema concreto reforzará su credibilidad. Confíe en su experiencia y en su criterio.",
    "Ce mois vous invite à travailler avec plus de stratégie. Il ne sera pas nécessaire d’en faire davantage, mais plutôt de mieux choisir vos efforts.":
      "Este mes le invita a trabajar con más estrategia. No será necesario hacer más, sino elegir mejor dónde concentrar sus esfuerzos.",
    "Une situation professionnelle pourrait devenir plus claire après une discussion ou l’arrivée d’une nouvelle information.":
      "Una situación profesional podría aclararse después de una conversación o de la llegada de nueva información.",

    "Un projet qui avançait lentement pourrait retrouver un nouvel élan. Revoyez les étapes restantes et concentrez-vous sur la prochaine action concrète.":
      "Un proyecto que avanzaba lentamente podría recuperar impulso. Revise las etapas restantes y concéntrese en la próxima acción concreta.",
    "Une idée mérite d’être développée davantage. Prenez le temps de la structurer avant de la présenter ou de demander l’avis de votre entourage.":
      "Una idea merece desarrollarse más. Tómese el tiempo de estructurarla antes de presentarla o pedir la opinión de otras personas.",
    "Vous pourriez devoir modifier une partie de votre plan initial. Cet ajustement ne représente pas un échec, mais une manière plus efficace d’atteindre votre objectif.":
      "Podría tener que modificar una parte de su plan inicial. Este ajuste no representa un fracaso, sino una manera más eficaz de alcanzar su objetivo.",
    "Le mois favorise les projets qui demandent de la patience, de la méthode et une vision à long terme.":
      "El mes favorece los proyectos que requieren paciencia, método y una visión a largo plazo.",
    "Une collaboration pourrait accélérer votre progression. Choisissez toutefois une personne dont les attentes et les méthodes sont compatibles avec les vôtres.":
      "Una colaboración podría acelerar su progreso. Sin embargo, elija a una persona cuyas expectativas y métodos sean compatibles con los suyos.",
    "Un projet personnel pourrait commencer à prendre davantage de place. Assurez-vous de lui réserver régulièrement du temps.":
      "Un proyecto personal podría empezar a ocupar más espacio. Asegúrese de dedicarle tiempo de manera regular.",
    "Vous pourriez recevoir une réponse ou une confirmation attendue depuis quelque temps. Préparez-vous à agir rapidement lorsque la situation se débloquera.":
      "Podría recibir una respuesta o confirmación que espera desde hace tiempo. Prepárese para actuar rápidamente cuando la situación se desbloquee.",
    "Une nouvelle responsabilité pourrait vous obliger à réorganiser votre emploi du temps. Cette adaptation sera bénéfique si vous protégez vos priorités.":
      "Una nueva responsabilidad podría obligarle a reorganizar su agenda. Esta adaptación será beneficiosa si protege sus prioridades.",
    "Le mois convient bien à la finalisation d’une tâche importante. Évitez de repousser les derniers détails simplement parce que l’essentiel est déjà terminé.":
      "El mes es adecuado para finalizar una tarea importante. Evite posponer los últimos detalles simplemente porque lo esencial ya esté terminado.",
    "Une occasion de montrer votre créativité pourrait apparaître. Proposez une solution concrète plutôt que d’attendre qu’on vous demande votre opinion.":
      "Podría surgir una oportunidad para mostrar su creatividad. Proponga una solución concreta en lugar de esperar a que le pidan su opinión.",

    "Les échanges professionnels gagneront à rester clairs et précis. Une consigne mal comprise pourrait créer un retard évitable.":
      "Los intercambios profesionales se beneficiarán de mantenerse claros y precisos. Una instrucción mal entendida podría crear un retraso evitable.",
    "Une personne de votre entourage professionnel pourrait vous offrir une information ou un conseil particulièrement utile.":
      "Una persona de su entorno profesional podría ofrecerle información o un consejo especialmente útil.",
    "Une tension pourrait s’apaiser grâce à une discussion directe. Concentrez-vous sur les faits plutôt que sur les réactions émotionnelles.":
      "Una tensión podría aliviarse gracias a una conversación directa. Concéntrese en los hechos más que en las reacciones emocionales.",
    "Votre diplomatie vous aidera à défendre votre point de vue sans créer de conflit inutile.":
      "Su diplomacia le ayudará a defender su punto de vista sin crear conflictos innecesarios.",
    "Vous pourriez devoir travailler avec une personne dont le rythme diffère du vôtre. Définissez clairement les responsabilités de chacun.":
      "Podría tener que trabajar con alguien cuyo ritmo difiere del suyo. Defina claramente las responsabilidades de cada persona.",
    "Une collaboration prometteuse pourrait commencer de manière informelle. Restez attentif aux conversations qui ouvrent de nouvelles perspectives.":
      "Una colaboración prometedora podría comenzar de manera informal. Manténgase atento a las conversaciones que abren nuevas perspectivas.",
    "Votre professionnalisme sera apprécié dans une situation où les autres pourraient manquer de constance ou d’organisation.":
      "Su profesionalidad será apreciada en una situación en la que otros podrían carecer de constancia u organización.",
    "Évitez de prendre personnellement une remarque liée au travail. Elle pourrait contenir une information utile malgré une formulation maladroite.":
      "Evite tomarse personalmente un comentario relacionado con el trabajo. Podría contener información útil a pesar de una formulación poco acertada.",
    "Une personne pourrait vous demander davantage que ce qui avait été convenu. Vérifiez vos limites avant d’accepter une nouvelle tâche.":
      "Alguien podría pedirle más de lo acordado. Revise sus límites antes de aceptar una nueva tarea.",
    "Votre réseau professionnel pourrait jouer un rôle plus important ce mois-ci. Une ancienne connaissance pourrait reprendre contact.":
      "Su red profesional podría desempeñar un papel más importante este mes. Un antiguo contacto podría volver a comunicarse.",

    "Une possibilité de progression pourrait apparaître sous la forme d’une nouvelle responsabilité, d’un mandat ou d’une proposition inattendue.":
      "Una posibilidad de progreso podría aparecer en forma de una nueva responsabilidad, un encargo o una propuesta inesperada.",
    "Une compétence que vous utilisez rarement pourrait devenir particulièrement utile. N’hésitez pas à la mettre en avant.":
      "Una competencia que utiliza pocas veces podría resultar especialmente útil. No dude en destacarla.",
    "Le mois favorise les démarches liées à une candidature, une négociation, une présentation ou une demande professionnelle.":
      "El mes favorece las gestiones relacionadas con una candidatura, negociación, presentación o solicitud profesional.",
    "Une occasion intéressante pourrait d’abord sembler modeste. Prenez le temps d’évaluer son potentiel à long terme.":
      "Una oportunidad interesante podría parecer modesta al principio. Tómese el tiempo de evaluar su potencial a largo plazo.",
    "Vous pourriez être invité à participer à un projet qui vous permettra d’élargir votre expérience ou votre visibilité.":
      "Podrían invitarle a participar en un proyecto que le permita ampliar su experiencia o visibilidad.",
    "Une amélioration de vos conditions de travail pourrait devenir possible si vous exprimez clairement vos besoins.":
      "Una mejora de sus condiciones de trabajo podría ser posible si expresa claramente sus necesidades.",
    "Une nouvelle idée de revenu ou de développement professionnel pourrait commencer à prendre forme.":
      "Una nueva idea de ingresos o desarrollo profesional podría empezar a tomar forma.",
    "Une formation, une lecture ou un apprentissage ciblé pourrait vous donner un avantage important dans les prochains mois.":
      "Una formación, lectura o aprendizaje específico podría darle una ventaja importante en los próximos meses.",
    "Votre capacité à prendre une initiative au bon moment pourrait vous démarquer positivement.":
      "Su capacidad para tomar la iniciativa en el momento adecuado podría hacerle destacar positivamente.",
    "Une conversation avec une personne expérimentée pourrait vous aider à voir votre avenir professionnel sous un angle plus ambitieux.":
      "Una conversación con una persona experimentada podría ayudarle a ver su futuro profesional desde una perspectiva más ambiciosa.",

    "Le principal défi sera d’éviter la dispersion. Trop de responsabilités simultanées pourraient diminuer la qualité de votre travail.":
      "El principal desafío será evitar la dispersión. Demasiadas responsabilidades simultáneas podrían reducir la calidad de su trabajo.",
    "Vous pourriez avoir tendance à accepter une tâche supplémentaire avant d’évaluer votre charge actuelle.":
      "Podría tender a aceptar una tarea adicional antes de evaluar su carga actual.",
    "Une impatience face à la lenteur des résultats pourrait vous pousser à modifier trop rapidement une stratégie pourtant solide.":
      "La impaciencia ante la lentitud de los resultados podría llevarle a modificar demasiado rápido una estrategia que, sin embargo, es sólida.",
    "Évitez de confondre productivité et épuisement. Travailler plus longtemps ne signifie pas toujours avancer davantage.":
      "Evite confundir productividad con agotamiento. Trabajar más tiempo no siempre significa avanzar más.",
    "Une critique pourrait momentanément affecter votre confiance. Prenez ce qui est utile sans remettre toute votre valeur en question.":
      "Una crítica podría afectar temporalmente su confianza. Tome lo que resulte útil sin poner en duda todo su valor.",
    "Le besoin de tout contrôler pourrait compliquer une collaboration. Laissez de la place aux compétences des autres.":
      "La necesidad de controlarlo todo podría complicar una colaboración. Deje espacio para las capacidades de los demás.",
    "Une situation ambiguë pourrait créer des inquiétudes inutiles. Demandez des précisions plutôt que de tirer des conclusions.":
      "Una situación ambigua podría generar preocupaciones innecesarias. Pida aclaraciones en lugar de sacar conclusiones.",
    "Vous devrez protéger votre concentration contre les interruptions et les demandes secondaires.":
      "Tendrá que proteger su concentración de las interrupciones y las solicitudes secundarias.",
    "Le perfectionnisme pourrait ralentir la finalisation d’un projet. Un résultat solide vaut mieux qu’un projet éternellement inachevé.":
      "El perfeccionismo podría ralentizar la finalización de un proyecto. Un resultado sólido es mejor que un proyecto eternamente inacabado.",
    "Le défi consistera à ne pas porter seul une responsabilité qui devrait être partagée.":
      "El desafío consistirá en no asumir en solitario una responsabilidad que debería ser compartida.",

    "Définissez trois priorités principales pour le mois et revenez-y chaque fois que votre attention se disperse.":
      "Defina tres prioridades principales para el mes y vuelva a ellas cada vez que su atención se disperse.",
    "Présentez vos idées avec confiance, mais accompagnez-les d’un plan concret et réaliste.":
      "Presente sus ideas con confianza, pero acompáñelas de un plan concreto y realista.",
    "Ne promettez pas un délai que vous ne pourrez pas respecter simplement pour éviter de décevoir quelqu’un.":
      "No prometa un plazo que no podrá cumplir simplemente para evitar decepcionar a alguien.",
    "Consacrez vos meilleures heures de concentration aux tâches qui ont le plus de valeur.":
      "Dedique sus mejores horas de concentración a las tareas que tienen mayor valor.",
    "Conservez une trace écrite des décisions, des échéances et des responsabilités importantes.":
      "Mantenga un registro escrito de las decisiones, los plazos y las responsabilidades importantes.",
    "Acceptez les ajustements nécessaires sans abandonner votre objectif principal.":
      "Acepte los ajustes necesarios sin abandonar su objetivo principal.",
    "Demandez de l’aide ou des précisions avant qu’un problème mineur devienne plus difficile à corriger.":
      "Pida ayuda o aclaraciones antes de que un problema menor se vuelva más difícil de corregir.",
    "Prenez le temps de reconnaître vos progrès. Votre motivation dépend aussi de votre capacité à voir le chemin déjà parcouru.":
      "Tómese el tiempo de reconocer su progreso. Su motivación también depende de su capacidad para ver el camino ya recorrido.",
    "Investissez votre énergie dans les projets qui peuvent réellement améliorer votre avenir professionnel.":
      "Invierta su energía en proyectos que realmente puedan mejorar su futuro profesional.",
    "Protégez vos limites afin que votre disponibilité ne soit pas considérée comme illimitée.":
      "Proteja sus límites para que su disponibilidad no sea considerada ilimitada.",

    "Ce mois peut renforcer votre position professionnelle si vous avancez avec méthode, confiance et discernement.":
      "Este mes puede reforzar su posición profesional si avanza con método, confianza y discernimiento.",
    "Votre progression dépendra moins de la vitesse que de la qualité de vos décisions et de la constance de vos efforts.":
      "Su progreso dependerá menos de la velocidad que de la calidad de sus decisiones y de la constancia de sus esfuerzos.",
    "Une nouvelle étape pourrait commencer dans votre carrière. Préparez-la avec sérieux sans sous-estimer votre capacité à réussir.":
      "Una nueva etapa podría comenzar en su carrera. Prepárela con seriedad sin subestimar su capacidad para tener éxito.",
    "Les prochaines semaines vous aideront à mieux comprendre où votre énergie professionnelle mérite réellement d’être investie.":
      "Las próximas semanas le ayudarán a comprender mejor dónde merece realmente invertir su energía profesional.",
    "Vous pourriez terminer le mois avec une organisation plus solide et une vision plus claire de vos prochaines actions.":
      "Podría terminar el mes con una organización más sólida y una visión más clara de sus próximas acciones.",
    "Une occasion de démontrer vos compétences pourrait modifier positivement la manière dont votre travail est perçu.":
      "Una oportunidad para demostrar sus competencias podría cambiar positivamente la forma en que se percibe su trabajo.",
    "Votre carrière évoluera favorablement si vous osez défendre vos idées tout en restant ouvert aux ajustements.":
      "Su carrera evolucionará favorablemente si se atreve a defender sus ideas mientras permanece abierto a los ajustes.",
    "Ce mois vous rappelle que la réussite se construit autant par les décisions refusées que par les occasions acceptées.":
      "Este mes le recuerda que el éxito se construye tanto con las decisiones que rechaza como con las oportunidades que acepta.",
    "Une progression discrète, mais durable, pourrait devenir l’un des résultats les plus importants de cette période.":
      "Un progreso discreto pero duradero podría convertirse en uno de los resultados más importantes de este período.",
    "Votre avenir professionnel gagnera en clarté à mesure que vous choisirez des objectifs réellement alignés avec vos ambitions.":
      "Su futuro profesional ganará claridad a medida que elija objetivos realmente alineados con sus ambiciones.",
  },

  de: {
    "Votre vie professionnelle entre dans une période où la clarté et l’organisation feront une réelle différence. Les prochaines semaines vous aideront à mieux définir vos priorités.":
      "Ihr Berufsleben tritt in eine Phase ein, in der Klarheit und Organisation einen echten Unterschied machen. Die kommenden Wochen helfen Ihnen, Ihre Prioritäten klarer zu definieren.",
    "Ce mois favorise une progression réfléchie dans votre travail. Vous pourriez constater que certaines décisions prises récemment commencent enfin à produire des résultats.":
      "Dieser Monat begünstigt ein überlegtes Vorankommen in Ihrer Arbeit. Sie könnten feststellen, dass einige kürzlich getroffene Entscheidungen endlich Ergebnisse zeigen.",
    "Le climat professionnel vous invite à revoir votre manière d’investir votre temps et votre énergie. Une meilleure structure pourrait alléger considérablement votre charge mentale.":
      "Das berufliche Klima lädt Sie dazu ein, zu überdenken, wie Sie Ihre Zeit und Energie einsetzen. Eine bessere Struktur könnte Ihre mentale Belastung deutlich verringern.",
    "Votre carrière pourrait connaître un mouvement important au cours des prochaines semaines. Il ne s’agira pas nécessairement d’un changement spectaculaire, mais d’une évolution utile.":
      "Ihre Karriere könnte in den kommenden Wochen eine wichtige Bewegung erfahren. Es muss keine spektakuläre Veränderung sein, sondern eher eine nützliche Entwicklung.",
    "Une période de consolidation commence dans votre vie professionnelle. Vous serez amené à protéger ce qui fonctionne tout en corrigeant ce qui ralentit votre progression.":
      "In Ihrem Berufsleben beginnt eine Phase der Konsolidierung. Sie werden dazu angehalten, das zu schützen, was funktioniert, und zugleich das zu korrigieren, was Ihren Fortschritt bremst.",
    "Ce mois met en lumière vos ambitions et votre rapport à la réussite. Vous pourriez ressentir le besoin de travailler sur un projet plus stimulant ou plus fidèle à vos valeurs.":
      "Dieser Monat rückt Ihre Ambitionen und Ihr Verhältnis zum Erfolg in den Mittelpunkt. Sie könnten das Bedürfnis verspüren, an einem anregenderen oder stärker Ihren Werten entsprechenden Projekt zu arbeiten.",
    "Votre environnement professionnel pourrait vous demander davantage d’adaptation. Une approche souple vous permettra de transformer les changements en occasions de progression.":
      "Ihr berufliches Umfeld könnte mehr Anpassungsfähigkeit von Ihnen verlangen. Ein flexibler Ansatz hilft Ihnen, Veränderungen in Chancen für Fortschritt zu verwandeln.",
    "Les prochaines semaines vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d’être présenté avec davantage de confiance.":
      "Die kommenden Wochen ermutigen Sie, den Wert Ihrer Fähigkeiten besser anzuerkennen. Ihre Arbeit verdient es, mit mehr Selbstvertrauen präsentiert zu werden.",
    "Une nouvelle dynamique pourrait s’installer dans votre quotidien professionnel. Certains efforts jusque-là discrets pourraient enfin devenir plus visibles.":
      "In Ihrem beruflichen Alltag könnte sich eine neue Dynamik entwickeln. Einige bislang unauffällige Bemühungen könnten endlich sichtbarer werden.",
    "Le mois vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière. Une décision simple pourrait ouvrir une voie plus intéressante.":
      "Der Monat bringt Sie dazu, über die Richtung nachzudenken, die Sie Ihrer Karriere wirklich geben möchten. Eine einfache Entscheidung könnte einen interessanteren Weg eröffnen.",

    "Votre efficacité dépendra surtout de votre capacité à distinguer les tâches urgentes des tâches réellement importantes.":
      "Ihre Effektivität hängt vor allem davon ab, dringende Aufgaben von wirklich wichtigen Aufgaben zu unterscheiden.",
    "Une meilleure organisation vous permettra d’avancer avec davantage de constance. Évitez de commencer plusieurs projets sans terminer les plus essentiels.":
      "Eine bessere Organisation ermöglicht Ihnen ein gleichmäßigeres Vorankommen. Vermeiden Sie es, mehrere Projekte zu beginnen, ohne die wichtigsten abzuschließen.",
    "Votre travail pourrait être remarqué par une personne en mesure de vous offrir du soutien, une responsabilité ou une nouvelle possibilité.":
      "Ihre Arbeit könnte von jemandem bemerkt werden, der Ihnen Unterstützung, Verantwortung oder eine neue Möglichkeit bieten kann.",
    "Un changement dans vos méthodes pourrait améliorer votre productivité. Ne restez pas attaché à une façon de faire simplement parce qu’elle vous est familière.":
      "Eine Veränderung Ihrer Methoden könnte Ihre Produktivität verbessern. Halten Sie nicht nur deshalb an einer Vorgehensweise fest, weil sie Ihnen vertraut ist.",
    "Vous pourriez ressentir un besoin croissant d’autonomie. Cherchez à obtenir davantage de liberté tout en respectant vos engagements actuels.":
      "Sie könnten ein wachsendes Bedürfnis nach Selbstständigkeit verspüren. Streben Sie nach mehr Freiheit und respektieren Sie zugleich Ihre aktuellen Verpflichtungen.",
    "La progression sera plus visible dans la seconde partie du mois. Les premières semaines serviront surtout à préparer le terrain.":
      "Der Fortschritt wird in der zweiten Monatshälfte sichtbarer. Die ersten Wochen dienen vor allem dazu, den Boden vorzubereiten.",
    "Une tâche exigeante pourrait vous demander davantage de concentration. En avançant étape par étape, vous éviterez une fatigue inutile.":
      "Eine anspruchsvolle Aufgabe könnte mehr Konzentration erfordern. Wenn Sie Schritt für Schritt vorgehen, vermeiden Sie unnötige Ermüdung.",
    "Votre capacité à résoudre un problème concret renforcera votre crédibilité. Faites confiance à votre expérience et à votre jugement.":
      "Ihre Fähigkeit, ein konkretes Problem zu lösen, stärkt Ihre Glaubwürdigkeit. Vertrauen Sie auf Ihre Erfahrung und Ihr Urteilsvermögen.",
    "Ce mois vous invite à travailler avec plus de stratégie. Il ne sera pas nécessaire d’en faire davantage, mais plutôt de mieux choisir vos efforts.":
      "Dieser Monat lädt Sie dazu ein, strategischer zu arbeiten. Es geht nicht darum, mehr zu tun, sondern Ihre Anstrengungen besser auszuwählen.",
    "Une situation professionnelle pourrait devenir plus claire après une discussion ou l’arrivée d’une nouvelle information.":
      "Eine berufliche Situation könnte nach einem Gespräch oder durch neue Informationen klarer werden.",

    "Un projet qui avançait lentement pourrait retrouver un nouvel élan. Revoyez les étapes restantes et concentrez-vous sur la prochaine action concrète.":
      "Ein Projekt, das nur langsam vorankam, könnte neuen Schwung bekommen. Überprüfen Sie die verbleibenden Schritte und konzentrieren Sie sich auf die nächste konkrete Handlung.",
    "Une idée mérite d’être développée davantage. Prenez le temps de la structurer avant de la présenter ou de demander l’avis de votre entourage.":
      "Eine Idee verdient es, weiterentwickelt zu werden. Nehmen Sie sich Zeit, sie zu strukturieren, bevor Sie sie vorstellen oder andere um ihre Meinung bitten.",
    "Vous pourriez devoir modifier une partie de votre plan initial. Cet ajustement ne représente pas un échec, mais une manière plus efficace d’atteindre votre objectif.":
      "Möglicherweise müssen Sie einen Teil Ihres ursprünglichen Plans ändern. Diese Anpassung ist kein Scheitern, sondern ein effizienterer Weg, Ihr Ziel zu erreichen.",
    "Le mois favorise les projets qui demandent de la patience, de la méthode et une vision à long terme.":
      "Der Monat begünstigt Projekte, die Geduld, Methode und eine langfristige Perspektive erfordern.",
    "Une collaboration pourrait accélérer votre progression. Choisissez toutefois une personne dont les attentes et les méthodes sont compatibles avec les vôtres.":
      "Eine Zusammenarbeit könnte Ihren Fortschritt beschleunigen. Wählen Sie jedoch jemanden, dessen Erwartungen und Methoden mit Ihren kompatibel sind.",
    "Un projet personnel pourrait commencer à prendre davantage de place. Assurez-vous de lui réserver régulièrement du temps.":
      "Ein persönliches Projekt könnte mehr Raum einnehmen. Achten Sie darauf, ihm regelmäßig Zeit zu widmen.",
    "Vous pourriez recevoir une réponse ou une confirmation attendue depuis quelque temps. Préparez-vous à agir rapidement lorsque la situation se débloquera.":
      "Sie könnten eine Antwort oder Bestätigung erhalten, auf die Sie schon länger warten. Seien Sie bereit, schnell zu handeln, sobald sich die Situation löst.",
    "Une nouvelle responsabilité pourrait vous obliger à réorganiser votre emploi du temps. Cette adaptation sera bénéfique si vous protégez vos priorités.":
      "Eine neue Verantwortung könnte Sie dazu zwingen, Ihren Zeitplan neu zu organisieren. Diese Anpassung wird hilfreich sein, wenn Sie Ihre Prioritäten schützen.",
    "Le mois convient bien à la finalisation d’une tâche importante. Évitez de repousser les derniers détails simplement parce que l’essentiel est déjà terminé.":
      "Der Monat eignet sich gut, um eine wichtige Aufgabe abzuschließen. Verschieben Sie die letzten Details nicht nur deshalb, weil das Wesentliche bereits erledigt ist.",
    "Une occasion de montrer votre créativité pourrait apparaître. Proposez une solution concrète plutôt que d’attendre qu’on vous demande votre opinion.":
      "Eine Gelegenheit, Ihre Kreativität zu zeigen, könnte sich ergeben. Schlagen Sie eine konkrete Lösung vor, anstatt darauf zu warten, nach Ihrer Meinung gefragt zu werden.",

    "Les échanges professionnels gagneront à rester clairs et précis. Une consigne mal comprise pourrait créer un retard évitable.":
      "Berufliche Kommunikation sollte klar und präzise bleiben. Eine missverstandene Anweisung könnte zu einer vermeidbaren Verzögerung führen.",
    "Une personne de votre entourage professionnel pourrait vous offrir une information ou un conseil particulièrement utile.":
      "Jemand aus Ihrem beruflichen Umfeld könnte Ihnen besonders hilfreiche Informationen oder Ratschläge geben.",
    "Une tension pourrait s’apaiser grâce à une discussion directe. Concentrez-vous sur les faits plutôt que sur les réactions émotionnelles.":
      "Eine Spannung könnte sich durch ein direktes Gespräch lösen. Konzentrieren Sie sich auf Fakten statt auf emotionale Reaktionen.",
    "Votre diplomatie vous aidera à défendre votre point de vue sans créer de conflit inutile.":
      "Ihr diplomatisches Geschick hilft Ihnen, Ihren Standpunkt zu vertreten, ohne unnötige Konflikte zu erzeugen.",
    "Vous pourriez devoir travailler avec une personne dont le rythme diffère du vôtre. Définissez clairement les responsabilités de chacun.":
      "Sie könnten mit jemandem arbeiten müssen, dessen Tempo sich von Ihrem unterscheidet. Definieren Sie die Verantwortlichkeiten klar.",
    "Une collaboration prometteuse pourrait commencer de manière informelle. Restez attentif aux conversations qui ouvrent de nouvelles perspectives.":
      "Eine vielversprechende Zusammenarbeit könnte informell beginnen. Achten Sie auf Gespräche, die neue Perspektiven eröffnen.",
    "Votre professionnalisme sera apprécié dans une situation où les autres pourraient manquer de constance ou d’organisation.":
      "Ihre Professionalität wird in einer Situation geschätzt, in der andere möglicherweise an Beständigkeit oder Organisation vermissen lassen.",
    "Évitez de prendre personnellement une remarque liée au travail. Elle pourrait contenir une information utile malgré une formulation maladroite.":
      "Nehmen Sie eine arbeitsbezogene Bemerkung nicht persönlich. Trotz ungeschickter Formulierung könnte sie nützliche Informationen enthalten.",
    "Une personne pourrait vous demander davantage que ce qui avait été convenu. Vérifiez vos limites avant d’accepter une nouvelle tâche.":
      "Jemand könnte mehr von Ihnen verlangen als vereinbart. Prüfen Sie Ihre Grenzen, bevor Sie eine neue Aufgabe annehmen.",
    "Votre réseau professionnel pourrait jouer un rôle plus important ce mois-ci. Une ancienne connaissance pourrait reprendre contact.":
      "Ihr berufliches Netzwerk könnte diesen Monat eine wichtigere Rolle spielen. Ein früherer Kontakt könnte sich wieder melden.",

    "Une possibilité de progression pourrait apparaître sous la forme d’une nouvelle responsabilité, d’un mandat ou d’une proposition inattendue.":
      "Eine Möglichkeit zum Fortschritt könnte in Form einer neuen Verantwortung, eines Auftrags oder eines unerwarteten Angebots erscheinen.",
    "Une compétence que vous utilisez rarement pourrait devenir particulièrement utile. N’hésitez pas à la mettre en avant.":
      "Eine Fähigkeit, die Sie selten nutzen, könnte besonders nützlich werden. Zögern Sie nicht, sie hervorzuheben.",
    "Le mois favorise les démarches liées à une candidature, une négociation, une présentation ou une demande professionnelle.":
      "Der Monat begünstigt Schritte im Zusammenhang mit einer Bewerbung, Verhandlung, Präsentation oder beruflichen Anfrage.",
    "Une occasion intéressante pourrait d’abord sembler modeste. Prenez le temps d’évaluer son potentiel à long terme.":
      "Eine interessante Gelegenheit könnte zunächst bescheiden wirken. Nehmen Sie sich Zeit, ihr langfristiges Potenzial zu bewerten.",
    "Vous pourriez être invité à participer à un projet qui vous permettra d’élargir votre expérience ou votre visibilité.":
      "Sie könnten eingeladen werden, an einem Projekt teilzunehmen, das Ihre Erfahrung oder Sichtbarkeit erweitert.",
    "Une amélioration de vos conditions de travail pourrait devenir possible si vous exprimez clairement vos besoins.":
      "Eine Verbesserung Ihrer Arbeitsbedingungen könnte möglich werden, wenn Sie Ihre Bedürfnisse klar äußern.",
    "Une nouvelle idée de revenu ou de développement professionnel pourrait commencer à prendre forme.":
      "Eine neue Idee für Einkommen oder berufliche Entwicklung könnte Gestalt annehmen.",
    "Une formation, une lecture ou un apprentissage ciblé pourrait vous donner un avantage important dans les prochains mois.":
      "Eine Weiterbildung, Lektüre oder gezieltes Lernen könnte Ihnen in den kommenden Monaten einen wichtigen Vorteil verschaffen.",
    "Votre capacité à prendre une initiative au bon moment pourrait vous démarquer positivement.":
      "Ihre Fähigkeit, im richtigen Moment Initiative zu ergreifen, könnte Sie positiv hervorheben.",
    "Une conversation avec une personne expérimentée pourrait vous aider à voir votre avenir professionnel sous un angle plus ambitieux.":
      "Ein Gespräch mit einer erfahrenen Person könnte Ihnen helfen, Ihre berufliche Zukunft aus einer ambitionierteren Perspektive zu sehen.",

    "Le principal défi sera d’éviter la dispersion. Trop de responsabilités simultanées pourraient diminuer la qualité de votre travail.":
      "Die größte Herausforderung besteht darin, Zerstreuung zu vermeiden. Zu viele gleichzeitige Verantwortlichkeiten könnten die Qualität Ihrer Arbeit mindern.",
    "Vous pourriez avoir tendance à accepter une tâche supplémentaire avant d’évaluer votre charge actuelle.":
      "Sie könnten dazu neigen, eine zusätzliche Aufgabe anzunehmen, bevor Sie Ihre aktuelle Belastung einschätzen.",
    "Une impatience face à la lenteur des résultats pourrait vous pousser à modifier trop rapidement une stratégie pourtant solide.":
      "Ungeduld wegen langsamer Ergebnisse könnte Sie dazu bringen, eine eigentlich solide Strategie zu schnell zu ändern.",
    "Évitez de confondre productivité et épuisement. Travailler plus longtemps ne signifie pas toujours avancer davantage.":
      "Verwechseln Sie Produktivität nicht mit Erschöpfung. Länger zu arbeiten bedeutet nicht immer, mehr Fortschritt zu machen.",
    "Une critique pourrait momentanément affecter votre confiance. Prenez ce qui est utile sans remettre toute votre valeur en question.":
      "Kritik könnte Ihr Selbstvertrauen vorübergehend beeinträchtigen. Nehmen Sie das Nützliche daraus mit, ohne Ihren gesamten Wert infrage zu stellen.",
    "Le besoin de tout contrôler pourrait compliquer une collaboration. Laissez de la place aux compétences des autres.":
      "Das Bedürfnis, alles zu kontrollieren, könnte eine Zusammenarbeit erschweren. Lassen Sie Raum für die Fähigkeiten anderer.",
    "Une situation ambiguë pourrait créer des inquiétudes inutiles. Demandez des précisions plutôt que de tirer des conclusions.":
      "Eine unklare Situation könnte unnötige Sorgen verursachen. Bitten Sie um Klarstellung, anstatt vorschnelle Schlüsse zu ziehen.",
    "Vous devrez protéger votre concentration contre les interruptions et les demandes secondaires.":
      "Sie müssen Ihre Konzentration vor Unterbrechungen und nebensächlichen Anforderungen schützen.",
    "Le perfectionnisme pourrait ralentir la finalisation d’un projet. Un résultat solide vaut mieux qu’un projet éternellement inachevé.":
      "Perfektionismus könnte den Abschluss eines Projekts verlangsamen. Ein solides Ergebnis ist besser als ein ewig unfertiges Projekt.",
    "Le défi consistera à ne pas porter seul une responsabilité qui devrait être partagée.":
      "Die Herausforderung besteht darin, eine Verantwortung nicht allein zu tragen, die geteilt werden sollte.",

    "Définissez trois priorités principales pour le mois et revenez-y chaque fois que votre attention se disperse.":
      "Definieren Sie drei Hauptprioritäten für den Monat und kehren Sie immer dann zu ihnen zurück, wenn Ihre Aufmerksamkeit abschweift.",
    "Présentez vos idées avec confiance, mais accompagnez-les d’un plan concret et réaliste.":
      "Präsentieren Sie Ihre Ideen selbstbewusst, aber untermauern Sie sie mit einem konkreten und realistischen Plan.",
    "Ne promettez pas un délai que vous ne pourrez pas respecter simplement pour éviter de décevoir quelqu’un.":
      "Versprechen Sie keine Frist, die Sie nicht einhalten können, nur um jemanden nicht zu enttäuschen.",
    "Consacrez vos meilleures heures de concentration aux tâches qui ont le plus de valeur.":
      "Widmen Sie Ihre besten Konzentrationsstunden den Aufgaben mit dem größten Wert.",
    "Conservez une trace écrite des décisions, des échéances et des responsabilités importantes.":
      "Halten Sie wichtige Entscheidungen, Fristen und Verantwortlichkeiten schriftlich fest.",
    "Acceptez les ajustements nécessaires sans abandonner votre objectif principal.":
      "Akzeptieren Sie notwendige Anpassungen, ohne Ihr Hauptziel aufzugeben.",
    "Demandez de l’aide ou des précisions avant qu’un problème mineur devienne plus difficile à corriger.":
      "Bitten Sie um Hilfe oder Klarstellung, bevor ein kleines Problem schwerer zu beheben ist.",
    "Prenez le temps de reconnaître vos progrès. Votre motivation dépend aussi de votre capacité à voir le chemin déjà parcouru.":
      "Nehmen Sie sich Zeit, Ihre Fortschritte anzuerkennen. Ihre Motivation hängt auch davon ab, wie gut Sie den bereits zurückgelegten Weg erkennen.",
    "Investissez votre énergie dans les projets qui peuvent réellement améliorer votre avenir professionnel.":
      "Investieren Sie Ihre Energie in Projekte, die Ihre berufliche Zukunft wirklich verbessern können.",
    "Protégez vos limites afin que votre disponibilité ne soit pas considérée comme illimitée.":
      "Schützen Sie Ihre Grenzen, damit Ihre Verfügbarkeit nicht als unbegrenzt angesehen wird.",

    "Ce mois peut renforcer votre position professionnelle si vous avancez avec méthode, confiance et discernement.":
      "Dieser Monat kann Ihre berufliche Position stärken, wenn Sie methodisch, selbstbewusst und mit Urteilsvermögen vorgehen.",
    "Votre progression dépendra moins de la vitesse que de la qualité de vos décisions et de la constance de vos efforts.":
      "Ihr Fortschritt hängt weniger von der Geschwindigkeit ab als von der Qualität Ihrer Entscheidungen und der Beständigkeit Ihrer Anstrengungen.",
    "Une nouvelle étape pourrait commencer dans votre carrière. Préparez-la avec sérieux sans sous-estimer votre capacité à réussir.":
      "Eine neue Etappe könnte in Ihrer Karriere beginnen. Bereiten Sie sich ernsthaft darauf vor, ohne Ihre Fähigkeit zum Erfolg zu unterschätzen.",
    "Les prochaines semaines vous aideront à mieux comprendre où votre énergie professionnelle mérite réellement d’être investie.":
      "Die kommenden Wochen helfen Ihnen besser zu verstehen, wo Ihre berufliche Energie wirklich investiert werden sollte.",
    "Vous pourriez terminer le mois avec une organisation plus solide et une vision plus claire de vos prochaines actions.":
      "Sie könnten den Monat mit einer solideren Organisation und einer klareren Vorstellung Ihrer nächsten Schritte beenden.",
    "Une occasion de démontrer vos compétences pourrait modifier positivement la manière dont votre travail est perçu.":
      "Eine Gelegenheit, Ihre Fähigkeiten zu zeigen, könnte die Wahrnehmung Ihrer Arbeit positiv verändern.",
    "Votre carrière évoluera favorablement si vous osez défendre vos idées tout en restant ouvert aux ajustements.":
      "Ihre Karriere wird sich günstig entwickeln, wenn Sie Ihre Ideen vertreten und zugleich offen für Anpassungen bleiben.",
    "Ce mois vous rappelle que la réussite se construit autant par les décisions refusées que par les occasions acceptées.":
      "Dieser Monat erinnert Sie daran, dass Erfolg ebenso durch abgelehnte Entscheidungen wie durch angenommene Chancen entsteht.",
    "Une progression discrète, mais durable, pourrait devenir l’un des résultats les plus importants de cette période.":
      "Ein stiller, aber nachhaltiger Fortschritt könnte zu einem der wichtigsten Ergebnisse dieser Phase werden.",
    "Votre avenir professionnel gagnera en clarté à mesure que vous choisirez des objectifs réellement alignés avec vos ambitions.":
      "Ihre berufliche Zukunft wird klarer, wenn Sie Ziele wählen, die wirklich mit Ihren Ambitionen übereinstimmen.",
  },

  it: {
    "Votre vie professionnelle entre dans une période où la clarté et l’organisation feront une réelle différence. Les prochaines semaines vous aideront à mieux définir vos priorités.":
      "La tua vita professionale entra in un periodo in cui chiarezza e organizzazione faranno davvero la differenza. Le prossime settimane ti aiuteranno a definire meglio le tue priorità.",
    "Ce mois favorise une progression réfléchie dans votre travail. Vous pourriez constater que certaines décisions prises récemment commencent enfin à produire des résultats.":
      "Questo mese favorisce un progresso ponderato nel lavoro. Potresti notare che alcune decisioni prese di recente iniziano finalmente a produrre risultati.",
    "Le climat professionnel vous invite à revoir votre manière d’investir votre temps et votre énergie. Une meilleure structure pourrait alléger considérablement votre charge mentale.":
      "Il clima professionale ti invita a rivedere il modo in cui investi tempo ed energia. Una struttura migliore potrebbe alleggerire notevolmente il tuo carico mentale.",
    "Votre carrière pourrait connaître un mouvement important au cours des prochaines semaines. Il ne s’agira pas nécessairement d’un changement spectaculaire, mais d’une évolution utile.":
      "La tua carriera potrebbe vivere un movimento importante nelle prossime settimane. Non sarà necessariamente un cambiamento spettacolare, ma un'evoluzione utile.",
    "Une période de consolidation commence dans votre vie professionnelle. Vous serez amené à protéger ce qui fonctionne tout en corrigeant ce qui ralentit votre progression.":
      "Inizia un periodo di consolidamento nella tua vita professionale. Sarai portato a proteggere ciò che funziona, correggendo al tempo stesso ciò che rallenta i tuoi progressi.",
    "Ce mois met en lumière vos ambitions et votre rapport à la réussite. Vous pourriez ressentir le besoin de travailler sur un projet plus stimulant ou plus fidèle à vos valeurs.":
      "Questo mese mette in luce le tue ambizioni e il tuo rapporto con il successo. Potresti sentire il bisogno di lavorare a un progetto più stimolante o più fedele ai tuoi valori.",
    "Votre environnement professionnel pourrait vous demander davantage d’adaptation. Une approche souple vous permettra de transformer les changements en occasions de progression.":
      "Il tuo ambiente professionale potrebbe richiederti una maggiore capacità di adattamento. Un approccio flessibile ti permetterà di trasformare i cambiamenti in opportunità di crescita.",
    "Les prochaines semaines vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d’être présenté avec davantage de confiance.":
      "Le prossime settimane ti incoraggiano a riconoscere meglio il valore delle tue competenze. Il tuo lavoro merita di essere presentato con maggiore fiducia.",
    "Une nouvelle dynamique pourrait s’installer dans votre quotidien professionnel. Certains efforts jusque-là discrets pourraient enfin devenir plus visibles.":
      "Una nuova dinamica potrebbe entrare nella tua quotidianità professionale. Alcuni sforzi finora discreti potrebbero finalmente diventare più visibili.",
    "Le mois vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière. Une décision simple pourrait ouvrir une voie plus intéressante.":
      "Il mese ti spinge a riflettere sulla direzione che desideri davvero dare alla tua carriera. Una decisione semplice potrebbe aprire una strada più interessante.",

    "Votre efficacité dépendra surtout de votre capacité à distinguer les tâches urgentes des tâches réellement importantes.":
      "La tua efficacia dipenderà soprattutto dalla capacità di distinguere i compiti urgenti da quelli realmente importanti.",
    "Une meilleure organisation vous permettra d’avancer avec davantage de constance. Évitez de commencer plusieurs projets sans terminer les plus essentiels.":
      "Una migliore organizzazione ti permetterà di avanzare con maggiore costanza. Evita di iniziare più progetti senza completare quelli più essenziali.",
    "Votre travail pourrait être remarqué par une personne en mesure de vous offrir du soutien, une responsabilité ou une nouvelle possibilité.":
      "Il tuo lavoro potrebbe essere notato da una persona in grado di offrirti sostegno, una responsabilità o una nuova opportunità.",
    "Un changement dans vos méthodes pourrait améliorer votre productivité. Ne restez pas attaché à une façon de faire simplement parce qu’elle vous est familière.":
      "Un cambiamento nei tuoi metodi potrebbe migliorare la produttività. Non restare legato a un modo di fare solo perché ti è familiare.",
    "Vous pourriez ressentir un besoin croissant d’autonomie. Cherchez à obtenir davantage de liberté tout en respectant vos engagements actuels.":
      "Potresti avvertire un bisogno crescente di autonomia. Cerca maggiore libertà rispettando comunque i tuoi impegni attuali.",
    "La progression sera plus visible dans la seconde partie du mois. Les premières semaines serviront surtout à préparer le terrain.":
      "I progressi saranno più visibili nella seconda metà del mese. Le prime settimane serviranno soprattutto a preparare il terreno.",
    "Une tâche exigeante pourrait vous demander davantage de concentration. En avançant étape par étape, vous éviterez une fatigue inutile.":
      "Un compito impegnativo potrebbe richiedere maggiore concentrazione. Procedendo passo dopo passo eviterai una stanchezza inutile.",
    "Votre capacité à résoudre un problème concret renforcera votre crédibilité. Faites confiance à votre expérience et à votre jugement.":
      "La tua capacità di risolvere un problema concreto rafforzerà la tua credibilità. Fidati della tua esperienza e del tuo giudizio.",
    "Ce mois vous invite à travailler avec plus de stratégie. Il ne sera pas nécessaire d’en faire davantage, mais plutôt de mieux choisir vos efforts.":
      "Questo mese ti invita a lavorare in modo più strategico. Non sarà necessario fare di più, ma scegliere meglio dove investire i tuoi sforzi.",
    "Une situation professionnelle pourrait devenir plus claire après une discussion ou l’arrivée d’une nouvelle information.":
      "Una situazione professionale potrebbe diventare più chiara dopo una conversazione o l'arrivo di nuove informazioni.",

    "Un projet qui avançait lentement pourrait retrouver un nouvel élan. Revoyez les étapes restantes et concentrez-vous sur la prochaine action concrète.":
      "Un progetto che avanzava lentamente potrebbe ritrovare slancio. Rivedi le fasi rimanenti e concentrati sulla prossima azione concreta.",
    "Une idée mérite d’être développée davantage. Prenez le temps de la structurer avant de la présenter ou de demander l’avis de votre entourage.":
      "Un'idea merita di essere sviluppata ulteriormente. Prenditi il tempo di strutturarla prima di presentarla o chiedere un parere.",
    "Vous pourriez devoir modifier une partie de votre plan initial. Cet ajustement ne représente pas un échec, mais une manière plus efficace d’atteindre votre objectif.":
      "Potresti dover modificare una parte del piano iniziale. Questo aggiustamento non rappresenta un fallimento, ma un modo più efficace per raggiungere il tuo obiettivo.",
    "Le mois favorise les projets qui demandent de la patience, de la méthode et une vision à long terme.":
      "Il mese favorisce i progetti che richiedono pazienza, metodo e una visione a lungo termine.",
    "Une collaboration pourrait accélérer votre progression. Choisissez toutefois une personne dont les attentes et les méthodes sont compatibles avec les vôtres.":
      "Una collaborazione potrebbe accelerare i tuoi progressi. Scegli però una persona le cui aspettative e i cui metodi siano compatibili con i tuoi.",
    "Un projet personnel pourrait commencer à prendre davantage de place. Assurez-vous de lui réserver régulièrement du temps.":
      "Un progetto personale potrebbe iniziare a occupare più spazio. Assicurati di dedicargli tempo con regolarità.",
    "Vous pourriez recevoir une réponse ou une confirmation attendue depuis quelque temps. Préparez-vous à agir rapidement lorsque la situation se débloquera.":
      "Potresti ricevere una risposta o una conferma attesa da tempo. Preparati ad agire rapidamente quando la situazione si sbloccherà.",
    "Une nouvelle responsabilité pourrait vous obliger à réorganiser votre emploi du temps. Cette adaptation sera bénéfique si vous protégez vos priorités.":
      "Una nuova responsabilità potrebbe obbligarti a riorganizzare il tuo tempo. Questo adattamento sarà utile se proteggerai le tue priorità.",
    "Le mois convient bien à la finalisation d’une tâche importante. Évitez de repousser les derniers détails simplement parce que l’essentiel est déjà terminé.":
      "Il mese è adatto a completare un compito importante. Evita di rimandare gli ultimi dettagli solo perché l'essenziale è già stato concluso.",
    "Une occasion de montrer votre créativité pourrait apparaître. Proposez une solution concrète plutôt que d’attendre qu’on vous demande votre opinion.":
      "Potrebbe presentarsi un'occasione per mostrare la tua creatività. Proponi una soluzione concreta invece di aspettare che ti venga chiesta un'opinione.",

    "Les échanges professionnels gagneront à rester clairs et précis. Une consigne mal comprise pourrait créer un retard évitable.":
      "Gli scambi professionali trarranno beneficio dalla chiarezza e dalla precisione. Un'istruzione fraintesa potrebbe creare un ritardo evitabile.",
    "Une personne de votre entourage professionnel pourrait vous offrir une information ou un conseil particulièrement utile.":
      "Una persona del tuo ambiente professionale potrebbe offrirti un'informazione o un consiglio particolarmente utile.",
    "Une tension pourrait s’apaiser grâce à une discussion directe. Concentrez-vous sur les faits plutôt que sur les réactions émotionnelles.":
      "Una tensione potrebbe attenuarsi grazie a una conversazione diretta. Concentrati sui fatti piuttosto che sulle reazioni emotive.",
    "Votre diplomatie vous aidera à défendre votre point de vue sans créer de conflit inutile.":
      "La tua diplomazia ti aiuterà a difendere il tuo punto di vista senza creare conflitti inutili.",
    "Vous pourriez devoir travailler avec une personne dont le rythme diffère du vôtre. Définissez clairement les responsabilités de chacun.":
      "Potresti dover lavorare con una persona il cui ritmo è diverso dal tuo. Definisci chiaramente le responsabilità di ciascuno.",
    "Une collaboration prometteuse pourrait commencer de manière informelle. Restez attentif aux conversations qui ouvrent de nouvelles perspectives.":
      "Una collaborazione promettente potrebbe iniziare in modo informale. Presta attenzione alle conversazioni che aprono nuove prospettive.",
    "Votre professionnalisme sera apprécié dans une situation où les autres pourraient manquer de constance ou d’organisation.":
      "La tua professionalità sarà apprezzata in una situazione in cui altri potrebbero mancare di costanza o organizzazione.",
    "Évitez de prendre personnellement une remarque liée au travail. Elle pourrait contenir une information utile malgré une formulation maladroite.":
      "Evita di prendere sul personale un'osservazione legata al lavoro. Potrebbe contenere informazioni utili nonostante una formulazione poco felice.",
    "Une personne pourrait vous demander davantage que ce qui avait été convenu. Vérifiez vos limites avant d’accepter une nouvelle tâche.":
      "Qualcuno potrebbe chiederti più di quanto concordato. Verifica i tuoi limiti prima di accettare un nuovo compito.",
    "Votre réseau professionnel pourrait jouer un rôle plus important ce mois-ci. Une ancienne connaissance pourrait reprendre contact.":
      "La tua rete professionale potrebbe avere un ruolo più importante questo mese. Una vecchia conoscenza potrebbe ricontattarti.",

    "Une possibilité de progression pourrait apparaître sous la forme d’une nouvelle responsabilité, d’un mandat ou d’une proposition inattendue.":
      "Una possibilità di crescita potrebbe presentarsi sotto forma di una nuova responsabilità, incarico o proposta inattesa.",
    "Une compétence que vous utilisez rarement pourrait devenir particulièrement utile. N’hésitez pas à la mettre en avant.":
      "Una competenza che usi raramente potrebbe diventare particolarmente utile. Non esitare a valorizzarla.",
    "Le mois favorise les démarches liées à une candidature, une négociation, une présentation ou une demande professionnelle.":
      "Il mese favorisce le iniziative legate a una candidatura, una negoziazione, una presentazione o una richiesta professionale.",
    "Une occasion intéressante pourrait d’abord sembler modeste. Prenez le temps d’évaluer son potentiel à long terme.":
      "Un'opportunità interessante potrebbe sembrare modesta all'inizio. Prenditi il tempo di valutarne il potenziale a lungo termine.",
    "Vous pourriez être invité à participer à un projet qui vous permettra d’élargir votre expérience ou votre visibilité.":
      "Potresti essere invitato a partecipare a un progetto che ti permetterà di ampliare la tua esperienza o visibilità.",
    "Une amélioration de vos conditions de travail pourrait devenir possible si vous exprimez clairement vos besoins.":
      "Un miglioramento delle tue condizioni di lavoro potrebbe diventare possibile se esprimi chiaramente le tue esigenze.",
    "Une nouvelle idée de revenu ou de développement professionnel pourrait commencer à prendre forme.":
      "Una nuova idea di reddito o sviluppo professionale potrebbe iniziare a prendere forma.",
    "Une formation, une lecture ou un apprentissage ciblé pourrait vous donner un avantage important dans les prochains mois.":
      "Una formazione, una lettura o un apprendimento mirato potrebbe darti un vantaggio importante nei prossimi mesi.",
    "Votre capacité à prendre une initiative au bon moment pourrait vous démarquer positivement.":
      "La tua capacità di prendere l'iniziativa al momento giusto potrebbe distinguerti positivamente.",
    "Une conversation avec une personne expérimentée pourrait vous aider à voir votre avenir professionnel sous un angle plus ambitieux.":
      "Una conversazione con una persona esperta potrebbe aiutarti a vedere il tuo futuro professionale da una prospettiva più ambiziosa.",

    "Le principal défi sera d’éviter la dispersion. Trop de responsabilités simultanées pourraient diminuer la qualité de votre travail.":
      "La sfida principale sarà evitare la dispersione. Troppe responsabilità contemporanee potrebbero ridurre la qualità del tuo lavoro.",
    "Vous pourriez avoir tendance à accepter une tâche supplémentaire avant d’évaluer votre charge actuelle.":
      "Potresti avere la tendenza ad accettare un compito aggiuntivo prima di valutare il carico attuale.",
    "Une impatience face à la lenteur des résultats pourrait vous pousser à modifier trop rapidement une stratégie pourtant solide.":
      "L'impazienza per la lentezza dei risultati potrebbe spingerti a modificare troppo rapidamente una strategia comunque solida.",
    "Évitez de confondre productivité et épuisement. Travailler plus longtemps ne signifie pas toujours avancer davantage.":
      "Evita di confondere produttività e sfinimento. Lavorare più a lungo non significa sempre fare più progressi.",
    "Une critique pourrait momentanément affecter votre confiance. Prenez ce qui est utile sans remettre toute votre valeur en question.":
      "Una critica potrebbe influire temporaneamente sulla tua fiducia. Prendi ciò che è utile senza mettere in discussione tutto il tuo valore.",
    "Le besoin de tout contrôler pourrait compliquer une collaboration. Laissez de la place aux compétences des autres.":
      "Il bisogno di controllare tutto potrebbe complicare una collaborazione. Lascia spazio alle competenze degli altri.",
    "Une situation ambiguë pourrait créer des inquiétudes inutiles. Demandez des précisions plutôt que de tirer des conclusions.":
      "Una situazione ambigua potrebbe creare preoccupazioni inutili. Chiedi chiarimenti invece di trarre conclusioni.",
    "Vous devrez protéger votre concentration contre les interruptions et les demandes secondaires.":
      "Dovrai proteggere la tua concentrazione dalle interruzioni e dalle richieste secondarie.",
    "Le perfectionnisme pourrait ralentir la finalisation d’un projet. Un résultat solide vaut mieux qu’un projet éternellement inachevé.":
      "Il perfezionismo potrebbe rallentare il completamento di un progetto. Un risultato solido vale più di un progetto eternamente incompiuto.",
    "Le défi consistera à ne pas porter seul une responsabilité qui devrait être partagée.":
      "La sfida sarà non assumerti da solo una responsabilità che dovrebbe essere condivisa.",

    "Définissez trois priorités principales pour le mois et revenez-y chaque fois que votre attention se disperse.":
      "Definisci tre priorità principali per il mese e torna a esse ogni volta che la tua attenzione si disperde.",
    "Présentez vos idées avec confiance, mais accompagnez-les d’un plan concret et réaliste.":
      "Presenta le tue idee con fiducia, ma accompagnale con un piano concreto e realistico.",
    "Ne promettez pas un délai que vous ne pourrez pas respecter simplement pour éviter de décevoir quelqu’un.":
      "Non promettere una scadenza che non puoi rispettare solo per evitare di deludere qualcuno.",
    "Consacrez vos meilleures heures de concentration aux tâches qui ont le plus de valeur.":
      "Dedica le tue ore migliori di concentrazione ai compiti che hanno più valore.",
    "Conservez une trace écrite des décisions, des échéances et des responsabilités importantes.":
      "Mantieni una traccia scritta delle decisioni, delle scadenze e delle responsabilità importanti.",
    "Acceptez les ajustements nécessaires sans abandonner votre objectif principal.":
      "Accetta gli aggiustamenti necessari senza abbandonare il tuo obiettivo principale.",
    "Demandez de l’aide ou des précisions avant qu’un problème mineur devienne plus difficile à corriger.":
      "Chiedi aiuto o chiarimenti prima che un piccolo problema diventi più difficile da correggere.",
    "Prenez le temps de reconnaître vos progrès. Votre motivation dépend aussi de votre capacité à voir le chemin déjà parcouru.":
      "Prenditi il tempo di riconoscere i tuoi progressi. La tua motivazione dipende anche dalla capacità di vedere il percorso già compiuto.",
    "Investissez votre énergie dans les projets qui peuvent réellement améliorer votre avenir professionnel.":
      "Investi la tua energia nei progetti che possono realmente migliorare il tuo futuro professionale.",
    "Protégez vos limites afin que votre disponibilité ne soit pas considérée comme illimitée.":
      "Proteggi i tuoi limiti affinché la tua disponibilità non venga considerata illimitata.",

    "Ce mois peut renforcer votre position professionnelle si vous avancez avec méthode, confiance et discernement.":
      "Questo mese può rafforzare la tua posizione professionale se procedi con metodo, fiducia e discernimento.",
    "Votre progression dépendra moins de la vitesse que de la qualité de vos décisions et de la constance de vos efforts.":
      "I tuoi progressi dipenderanno meno dalla velocità che dalla qualità delle decisioni e dalla costanza dei tuoi sforzi.",
    "Une nouvelle étape pourrait commencer dans votre carrière. Préparez-la avec sérieux sans sous-estimer votre capacité à réussir.":
      "Potrebbe iniziare una nuova fase nella tua carriera. Preparala con serietà senza sottovalutare la tua capacità di riuscire.",
    "Les prochaines semaines vous aideront à mieux comprendre où votre énergie professionnelle mérite réellement d’être investie.":
      "Le prossime settimane ti aiuteranno a capire meglio dove merita davvero di essere investita la tua energia professionale.",
    "Vous pourriez terminer le mois avec une organisation plus solide et une vision plus claire de vos prochaines actions.":
      "Potresti concludere il mese con un'organizzazione più solida e una visione più chiara delle tue prossime azioni.",
    "Une occasion de démontrer vos compétences pourrait modifier positivement la manière dont votre travail est perçu.":
      "Un'occasione per dimostrare le tue competenze potrebbe cambiare positivamente il modo in cui viene percepito il tuo lavoro.",
    "Votre carrière évoluera favorablement si vous osez défendre vos idées tout en restant ouvert aux ajustements.":
      "La tua carriera evolverà favorevolmente se avrai il coraggio di difendere le tue idee restando aperto agli aggiustamenti.",
    "Ce mois vous rappelle que la réussite se construit autant par les décisions refusées que par les occasions acceptées.":
      "Questo mese ti ricorda che il successo si costruisce tanto attraverso le decisioni rifiutate quanto attraverso le opportunità accettate.",
    "Une progression discrète, mais durable, pourrait devenir l’un des résultats les plus importants de cette période.":
      "Un progresso discreto ma duraturo potrebbe diventare uno dei risultati più importanti di questo periodo.",
    "Votre avenir professionnel gagnera en clarté à mesure que vous choisirez des objectifs réellement alignés avec vos ambitions.":
      "Il tuo futuro professionale acquisterà chiarezza man mano che sceglierai obiettivi realmente allineati con le tue ambizioni.",
  },

  pt: {
    "Votre vie professionnelle entre dans une période où la clarté et l’organisation feront une réelle différence. Les prochaines semaines vous aideront à mieux définir vos priorités.":
      "Sua vida profissional entra em um período em que clareza e organização farão uma diferença real. As próximas semanas ajudarão você a definir melhor suas prioridades.",
    "Ce mois favorise une progression réfléchie dans votre travail. Vous pourriez constater que certaines décisions prises récemment commencent enfin à produire des résultats.":
      "Este mês favorece um progresso ponderado no trabalho. Você poderá perceber que algumas decisões tomadas recentemente finalmente começam a produzir resultados.",
    "Le climat professionnel vous invite à revoir votre manière d’investir votre temps et votre énergie. Une meilleure structure pourrait alléger considérablement votre charge mentale.":
      "O clima profissional convida você a rever a forma como investe seu tempo e sua energia. Uma estrutura melhor poderá reduzir consideravelmente sua carga mental.",
    "Votre carrière pourrait connaître un mouvement important au cours des prochaines semaines. Il ne s’agira pas nécessairement d’un changement spectaculaire, mais d’une évolution utile.":
      "Sua carreira poderá passar por um movimento importante nas próximas semanas. Não será necessariamente uma mudança espetacular, mas uma evolução útil.",
    "Une période de consolidation commence dans votre vie professionnelle. Vous serez amené à protéger ce qui fonctionne tout en corrigeant ce qui ralentit votre progression.":
      "Um período de consolidação começa em sua vida profissional. Você será levado a proteger o que funciona enquanto corrige o que atrasa seu progresso.",
    "Ce mois met en lumière vos ambitions et votre rapport à la réussite. Vous pourriez ressentir le besoin de travailler sur un projet plus stimulant ou plus fidèle à vos valeurs.":
      "Este mês destaca suas ambições e sua relação com o sucesso. Você poderá sentir a necessidade de trabalhar em um projeto mais estimulante ou mais alinhado aos seus valores.",
    "Votre environnement professionnel pourrait vous demander davantage d’adaptation. Une approche souple vous permettra de transformer les changements en occasions de progression.":
      "Seu ambiente profissional poderá exigir mais adaptação. Uma abordagem flexível permitirá transformar mudanças em oportunidades de progresso.",
    "Les prochaines semaines vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d’être présenté avec davantage de confiance.":
      "As próximas semanas incentivam você a reconhecer melhor o valor de suas competências. Seu trabalho merece ser apresentado com mais confiança.",
    "Une nouvelle dynamique pourrait s’installer dans votre quotidien professionnel. Certains efforts jusque-là discrets pourraient enfin devenir plus visibles.":
      "Uma nova dinâmica poderá se instalar em sua rotina profissional. Alguns esforços até agora discretos poderão finalmente se tornar mais visíveis.",
    "Le mois vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière. Une décision simple pourrait ouvrir une voie plus intéressante.":
      "O mês leva você a refletir sobre a direção que realmente deseja dar à sua carreira. Uma decisão simples poderá abrir um caminho mais interessante.",

    "Votre efficacité dépendra surtout de votre capacité à distinguer les tâches urgentes des tâches réellement importantes.":
      "Sua eficácia dependerá principalmente da capacidade de distinguir tarefas urgentes de tarefas realmente importantes.",
    "Une meilleure organisation vous permettra d’avancer avec davantage de constance. Évitez de commencer plusieurs projets sans terminer les plus essentiels.":
      "Uma organização melhor permitirá avançar com mais constância. Evite começar vários projetos sem concluir os mais essenciais.",
    "Votre travail pourrait être remarqué par une personne en mesure de vous offrir du soutien, une responsabilité ou une nouvelle possibilité.":
      "Seu trabalho poderá ser notado por alguém capaz de oferecer apoio, responsabilidade ou uma nova oportunidade.",
    "Un changement dans vos méthodes pourrait améliorer votre productivité. Ne restez pas attaché à une façon de faire simplement parce qu’elle vous est familière.":
      "Uma mudança em seus métodos poderá melhorar sua produtividade. Não permaneça preso a uma maneira de fazer as coisas apenas porque ela é familiar.",
    "Vous pourriez ressentir un besoin croissant d’autonomie. Cherchez à obtenir davantage de liberté tout en respectant vos engagements actuels.":
      "Você poderá sentir uma necessidade crescente de autonomia. Busque mais liberdade respeitando seus compromissos atuais.",
    "La progression sera plus visible dans la seconde partie du mois. Les premières semaines serviront surtout à préparer le terrain.":
      "O progresso será mais visível na segunda metade do mês. As primeiras semanas servirão principalmente para preparar o terreno.",
    "Une tâche exigeante pourrait vous demander davantage de concentration. En avançant étape par étape, vous éviterez une fatigue inutile.":
      "Uma tarefa exigente poderá exigir mais concentração. Avançando passo a passo, você evitará um cansaço desnecessário.",
    "Votre capacité à résoudre un problème concret renforcera votre crédibilité. Faites confiance à votre expérience et à votre jugement.":
      "Sua capacidade de resolver um problema concreto fortalecerá sua credibilidade. Confie em sua experiência e em seu julgamento.",
    "Ce mois vous invite à travailler avec plus de stratégie. Il ne sera pas nécessaire d’en faire davantage, mais plutôt de mieux choisir vos efforts.":
      "Este mês convida você a trabalhar de forma mais estratégica. Não será necessário fazer mais, mas escolher melhor onde concentrar seus esforços.",
    "Une situation professionnelle pourrait devenir plus claire après une discussion ou l’arrivée d’une nouvelle information.":
      "Uma situação profissional poderá ficar mais clara após uma conversa ou a chegada de novas informações.",

    "Un projet qui avançait lentement pourrait retrouver un nouvel élan. Revoyez les étapes restantes et concentrez-vous sur la prochaine action concrète.":
      "Um projeto que avançava lentamente poderá recuperar impulso. Reveja as etapas restantes e concentre-se na próxima ação concreta.",
    "Une idée mérite d’être développée davantage. Prenez le temps de la structurer avant de la présenter ou de demander l’avis de votre entourage.":
      "Uma ideia merece ser desenvolvida mais a fundo. Reserve tempo para estruturá-la antes de apresentá-la ou pedir a opinião de outras pessoas.",
    "Vous pourriez devoir modifier une partie de votre plan initial. Cet ajustement ne représente pas un échec, mais une manière plus efficace d’atteindre votre objectif.":
      "Talvez seja necessário modificar parte do plano inicial. Esse ajuste não representa fracasso, mas uma forma mais eficaz de alcançar seu objetivo.",
    "Le mois favorise les projets qui demandent de la patience, de la méthode et une vision à long terme.":
      "O mês favorece projetos que exigem paciência, método e visão de longo prazo.",
    "Une collaboration pourrait accélérer votre progression. Choisissez toutefois une personne dont les attentes et les méthodes sont compatibles avec les vôtres.":
      "Uma colaboração poderá acelerar seu progresso. No entanto, escolha alguém cujas expectativas e métodos sejam compatíveis com os seus.",
    "Un projet personnel pourrait commencer à prendre davantage de place. Assurez-vous de lui réserver régulièrement du temps.":
      "Um projeto pessoal poderá começar a ocupar mais espaço. Certifique-se de reservar tempo para ele regularmente.",
    "Vous pourriez recevoir une réponse ou une confirmation attendue depuis quelque temps. Préparez-vous à agir rapidement lorsque la situation se débloquera.":
      "Você poderá receber uma resposta ou confirmação aguardada há algum tempo. Prepare-se para agir rapidamente quando a situação se destravar.",
    "Une nouvelle responsabilité pourrait vous obliger à réorganiser votre emploi du temps. Cette adaptation sera bénéfique si vous protégez vos priorités.":
      "Uma nova responsabilidade poderá obrigar você a reorganizar sua agenda. Essa adaptação será benéfica se suas prioridades forem protegidas.",
    "Le mois convient bien à la finalisation d’une tâche importante. Évitez de repousser les derniers détails simplement parce que l’essentiel est déjà terminé.":
      "O mês é adequado para concluir uma tarefa importante. Evite adiar os últimos detalhes apenas porque o essencial já foi terminado.",
    "Une occasion de montrer votre créativité pourrait apparaître. Proposez une solution concrète plutôt que d’attendre qu’on vous demande votre opinion.":
      "Uma oportunidade de mostrar sua criatividade poderá surgir. Proponha uma solução concreta em vez de esperar que peçam sua opinião.",

    "Les échanges professionnels gagneront à rester clairs et précis. Une consigne mal comprise pourrait créer un retard évitable.":
      "As trocas profissionais se beneficiarão de clareza e precisão. Uma orientação mal compreendida poderá gerar um atraso evitável.",
    "Une personne de votre entourage professionnel pourrait vous offrir une information ou un conseil particulièrement utile.":
      "Alguém de seu ambiente profissional poderá oferecer uma informação ou conselho especialmente útil.",
    "Une tension pourrait s’apaiser grâce à une discussion directe. Concentrez-vous sur les faits plutôt que sur les réactions émotionnelles.":
      "Uma tensão poderá diminuir graças a uma conversa direta. Concentre-se nos fatos em vez das reações emocionais.",
    "Votre diplomatie vous aidera à défendre votre point de vue sans créer de conflit inutile.":
      "Sua diplomacia ajudará você a defender seu ponto de vista sem criar conflitos desnecessários.",
    "Vous pourriez devoir travailler avec une personne dont le rythme diffère du vôtre. Définissez clairement les responsabilités de chacun.":
      "Talvez seja necessário trabalhar com alguém cujo ritmo seja diferente do seu. Defina claramente as responsabilidades de cada pessoa.",
    "Une collaboration prometteuse pourrait commencer de manière informelle. Restez attentif aux conversations qui ouvrent de nouvelles perspectives.":
      "Uma colaboração promissora poderá começar de maneira informal. Fique atento às conversas que abrem novas perspectivas.",
    "Votre professionnalisme sera apprécié dans une situation où les autres pourraient manquer de constance ou d’organisation.":
      "Seu profissionalismo será valorizado em uma situação em que outras pessoas poderão demonstrar falta de constância ou organização.",
    "Évitez de prendre personnellement une remarque liée au travail. Elle pourrait contenir une information utile malgré une formulation maladroite.":
      "Evite levar para o lado pessoal um comentário relacionado ao trabalho. Ele poderá conter informações úteis apesar de uma formulação inadequada.",
    "Une personne pourrait vous demander davantage que ce qui avait été convenu. Vérifiez vos limites avant d’accepter une nouvelle tâche.":
      "Alguém poderá pedir mais do que havia sido combinado. Verifique seus limites antes de aceitar uma nova tarefa.",
    "Votre réseau professionnel pourrait jouer un rôle plus important ce mois-ci. Une ancienne connaissance pourrait reprendre contact.":
      "Sua rede profissional poderá desempenhar um papel mais importante neste mês. Um contato antigo poderá voltar a procurar você.",

    "Une possibilité de progression pourrait apparaître sous la forme d’une nouvelle responsabilité, d’un mandat ou d’une proposition inattendue.":
      "Uma possibilidade de progresso poderá surgir na forma de uma nova responsabilidade, tarefa ou proposta inesperada.",
    "Une compétence que vous utilisez rarement pourrait devenir particulièrement utile. N’hésitez pas à la mettre en avant.":
      "Uma habilidade que você usa raramente poderá se tornar especialmente útil. Não hesite em destacá-la.",
    "Le mois favorise les démarches liées à une candidature, une négociation, une présentation ou une demande professionnelle.":
      "O mês favorece iniciativas ligadas a candidatura, negociação, apresentação ou solicitação profissional.",
    "Une occasion intéressante pourrait d’abord sembler modeste. Prenez le temps d’évaluer son potentiel à long terme.":
      "Uma oportunidade interessante poderá parecer modesta no início. Reserve tempo para avaliar seu potencial de longo prazo.",
    "Vous pourriez être invité à participer à un projet qui vous permettra d’élargir votre expérience ou votre visibilité.":
      "Você poderá ser convidado a participar de um projeto que permita ampliar sua experiência ou visibilidade.",
    "Une amélioration de vos conditions de travail pourrait devenir possible si vous exprimez clairement vos besoins.":
      "Uma melhoria em suas condições de trabalho poderá se tornar possível se você expressar claramente suas necessidades.",
    "Une nouvelle idée de revenu ou de développement professionnel pourrait commencer à prendre forme.":
      "Uma nova ideia de renda ou desenvolvimento profissional poderá começar a tomar forma.",
    "Une formation, une lecture ou un apprentissage ciblé pourrait vous donner un avantage important dans les prochains mois.":
      "Uma formação, leitura ou aprendizado direcionado poderá oferecer uma vantagem importante nos próximos meses.",
    "Votre capacité à prendre une initiative au bon moment pourrait vous démarquer positivement.":
      "Sua capacidade de tomar iniciativa no momento certo poderá destacar você de forma positiva.",
    "Une conversation avec une personne expérimentée pourrait vous aider à voir votre avenir professionnel sous un angle plus ambitieux.":
      "Uma conversa com uma pessoa experiente poderá ajudar você a enxergar seu futuro profissional de uma perspectiva mais ambiciosa.",

    "Le principal défi sera d’éviter la dispersion. Trop de responsabilités simultanées pourraient diminuer la qualité de votre travail.":
      "O principal desafio será evitar a dispersão. Responsabilidades demais ao mesmo tempo poderão reduzir a qualidade do seu trabalho.",
    "Vous pourriez avoir tendance à accepter une tâche supplémentaire avant d’évaluer votre charge actuelle.":
      "Você poderá ter a tendência de aceitar uma tarefa adicional antes de avaliar sua carga atual.",
    "Une impatience face à la lenteur des résultats pourrait vous pousser à modifier trop rapidement une stratégie pourtant solide.":
      "A impaciência diante da lentidão dos resultados poderá levar você a mudar rápido demais uma estratégia que, no entanto, é sólida.",
    "Évitez de confondre productivité et épuisement. Travailler plus longtemps ne signifie pas toujours avancer davantage.":
      "Evite confundir produtividade com esgotamento. Trabalhar por mais tempo nem sempre significa avançar mais.",
    "Une critique pourrait momentanément affecter votre confiance. Prenez ce qui est utile sans remettre toute votre valeur en question.":
      "Uma crítica poderá afetar temporariamente sua confiança. Aproveite o que for útil sem questionar todo o seu valor.",
    "Le besoin de tout contrôler pourrait compliquer une collaboration. Laissez de la place aux compétences des autres.":
      "A necessidade de controlar tudo poderá complicar uma colaboração. Dê espaço às competências das outras pessoas.",
    "Une situation ambiguë pourrait créer des inquiétudes inutiles. Demandez des précisions plutôt que de tirer des conclusions.":
      "Uma situação ambígua poderá criar preocupações desnecessárias. Peça esclarecimentos em vez de tirar conclusões.",
    "Vous devrez protéger votre concentration contre les interruptions et les demandes secondaires.":
      "Você precisará proteger sua concentração contra interrupções e solicitações secundárias.",
    "Le perfectionnisme pourrait ralentir la finalisation d’un projet. Un résultat solide vaut mieux qu’un projet éternellement inachevé.":
      "O perfeccionismo poderá atrasar a conclusão de um projeto. Um resultado sólido vale mais do que um projeto eternamente inacabado.",
    "Le défi consistera à ne pas porter seul une responsabilité qui devrait être partagée.":
      "O desafio será não carregar sozinho uma responsabilidade que deveria ser compartilhada.",

    "Définissez trois priorités principales pour le mois et revenez-y chaque fois que votre attention se disperse.":
      "Defina três prioridades principais para o mês e volte a elas sempre que sua atenção se dispersar.",
    "Présentez vos idées avec confiance, mais accompagnez-les d’un plan concret et réaliste.":
      "Apresente suas ideias com confiança, mas acompanhe-as de um plano concreto e realista.",
    "Ne promettez pas un délai que vous ne pourrez pas respecter simplement pour éviter de décevoir quelqu’un.":
      "Não prometa um prazo que não poderá cumprir apenas para evitar decepcionar alguém.",
    "Consacrez vos meilleures heures de concentration aux tâches qui ont le plus de valeur.":
      "Dedique suas melhores horas de concentração às tarefas de maior valor.",
    "Conservez une trace écrite des décisions, des échéances et des responsabilités importantes.":
      "Mantenha um registro escrito das decisões, prazos e responsabilidades importantes.",
    "Acceptez les ajustements nécessaires sans abandonner votre objectif principal.":
      "Aceite os ajustes necessários sem abandonar seu objetivo principal.",
    "Demandez de l’aide ou des précisions avant qu’un problème mineur devienne plus difficile à corriger.":
      "Peça ajuda ou esclarecimentos antes que um problema pequeno se torne mais difícil de corrigir.",
    "Prenez le temps de reconnaître vos progrès. Votre motivation dépend aussi de votre capacité à voir le chemin déjà parcouru.":
      "Reserve tempo para reconhecer seu progresso. Sua motivação também depende da capacidade de enxergar o caminho já percorrido.",
    "Investissez votre énergie dans les projets qui peuvent réellement améliorer votre avenir professionnel.":
      "Invista sua energia em projetos que realmente possam melhorar seu futuro profissional.",
    "Protégez vos limites afin que votre disponibilité ne soit pas considérée comme illimitée.":
      "Proteja seus limites para que sua disponibilidade não seja considerada ilimitada.",

    "Ce mois peut renforcer votre position professionnelle si vous avancez avec méthode, confiance et discernement.":
      "Este mês pode fortalecer sua posição profissional se você avançar com método, confiança e discernimento.",
    "Votre progression dépendra moins de la vitesse que de la qualité de vos décisions et de la constance de vos efforts.":
      "Seu progresso dependerá menos da velocidade do que da qualidade de suas decisões e da constância de seus esforços.",
    "Une nouvelle étape pourrait commencer dans votre carrière. Préparez-la avec sérieux sans sous-estimer votre capacité à réussir.":
      "Uma nova etapa poderá começar em sua carreira. Prepare-a com seriedade sem subestimar sua capacidade de ter sucesso.",
    "Les prochaines semaines vous aideront à mieux comprendre où votre énergie professionnelle mérite réellement d’être investie.":
      "As próximas semanas ajudarão você a entender melhor onde sua energia profissional realmente merece ser investida.",
    "Vous pourriez terminer le mois avec une organisation plus solide et une vision plus claire de vos prochaines actions.":
      "Você poderá terminar o mês com uma organização mais sólida e uma visão mais clara de suas próximas ações.",
    "Une occasion de démontrer vos compétences pourrait modifier positivement la manière dont votre travail est perçu.":
      "Uma oportunidade de demonstrar suas competências poderá mudar positivamente a maneira como seu trabalho é percebido.",
    "Votre carrière évoluera favorablement si vous osez défendre vos idées tout en restant ouvert aux ajustements.":
      "Sua carreira evoluirá favoravelmente se você defender suas ideias sem deixar de permanecer aberto a ajustes.",
    "Ce mois vous rappelle que la réussite se construit autant par les décisions refusées que par les occasions acceptées.":
      "Este mês lembra que o sucesso é construído tanto pelas decisões recusadas quanto pelas oportunidades aceitas.",
    "Une progression discrète, mais durable, pourrait devenir l’un des résultats les plus importants de cette période.":
      "Um progresso discreto, mas duradouro, poderá se tornar um dos resultados mais importantes deste período.",
    "Votre avenir professionnel gagnera en clarté à mesure que vous choisirez des objectifs réellement alignés avec vos ambitions.":
      "Seu futuro profissional ficará mais claro à medida que você escolher objetivos realmente alinhados às suas ambições.",
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
      "monthly-career.ts",
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

export function localizeMonthlyCareerBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    CAREER_TITLES[
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

export function localizeMonthlyCareerTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    CAREER_TEXTS[
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
