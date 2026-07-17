import type {
  HoroscopeSigneData,
  HoroscopeTextes,
} from "./types";

export function createHoroscopeTextes(
  signe: HoroscopeSigneData
): HoroscopeTextes {
  return {
    energie: [
      `Une énergie de ${signe.qualite} accompagne votre journée. Avancez avec confiance, sans chercher à tout contrôler immédiatement.`,

      `La journée vous invite à miser sur votre ${signe.qualite}. Une décision simple pourrait clarifier une situation restée floue.`,

      `Votre nature ${signe.element.toLowerCase()} vous aide à retrouver votre élan. Écoutez ce qui vous semble juste avant d’agir.`,

      `Un changement de rythme pourrait vous être bénéfique aujourd’hui. Accordez de la place à ce qui nourrit réellement votre équilibre.`,

      `Votre énergie évolue progressivement au fil de la journée. Prenez le temps d’observer avant de choisir votre prochaine direction.`,

      `Une nouvelle perspective pourrait vous aider à comprendre une situation autrement. Restez disponible aux idées inattendues.`,

      `La journée favorise les gestes simples et les décisions cohérentes. Votre ${signe.qualite} peut vous aider à avancer avec assurance.`,

      `Vous pourriez ressentir le besoin de revenir à l’essentiel. Ne vous dispersez pas dans des situations qui ne vous ressemblent plus.`,

      `Une énergie plus lumineuse vous accompagne aujourd’hui. Profitez-en pour reprendre confiance dans un projet ou une décision.`,

      `Votre sensibilité aux ambiances sera plus forte. Choisissez soigneusement les personnes et les environnements qui vous entourent.`,
    ],

    amour: [
      "Les échanges gagnent à rester simples et sincères. Une parole bien choisie peut rapprocher les cœurs.",

      "Prenez le temps d’écouter avant de répondre. La douceur favorisera une meilleure compréhension dans vos relations.",

      "Une belle occasion de créer de la complicité pourrait se présenter. Restez ouvert sans forcer les choses.",

      "Votre vie affective demande de la présence plus que de grandes promesses. Les petits gestes auront beaucoup de valeur.",

      "Une discussion honnête pourrait dissiper un doute. Exprimez vos besoins sans chercher à imposer votre point de vue.",

      "Une personne pourrait vous surprendre par son attention ou sa disponibilité. Accueillez ce geste avec simplicité.",

      "Vous pourriez ressentir le besoin d’être rassuré. Évitez toutefois de chercher des réponses dans chaque silence.",

      "Une énergie de rapprochement favorise les échanges. Célibataire, une rencontre légère pourrait éveiller votre curiosité.",

      "Votre intuition relationnelle sera particulièrement forte. Faites-lui confiance, mais évitez les conclusions trop rapides.",

      "L’harmonie passe aujourd’hui par un équilibre entre proximité et liberté. Respectez votre rythme autant que celui de l’autre.",
    ],

    travail: [
      "Une tâche qui semblait lourde pourrait avancer plus facilement avec une méthode claire et quelques priorités bien choisies.",

      "Votre concentration sera votre meilleure alliée. Évitez de disperser votre énergie dans trop de directions.",

      "Une idée mérite d’être notée ou partagée. Elle pourrait devenir plus importante que vous ne le pensez.",

      "Le climat favorise les ajustements intelligents. Corrigez ce qui doit l’être sans remettre tout votre plan en question.",

      "Une conversation professionnelle pourrait vous aider à mieux comprendre les attentes d’une personne ou d’un projet.",

      "Vous pourriez recevoir une information utile. Prenez le temps de l’analyser avant de modifier votre organisation.",

      "Votre constance portera davantage ses fruits que la précipitation. Avancez étape par étape.",

      "Une responsabilité supplémentaire pourrait se présenter. Vérifiez votre disponibilité avant de vous engager.",

      "Une solution plus simple pourrait remplacer une méthode devenue trop compliquée. Osez revoir votre façon de faire.",

      "Votre travail pourrait être remarqué aujourd’hui. Restez professionnel et laissez vos résultats parler pour vous.",
    ],

    finances: [
      "La prudence reste préférable pour les dépenses impulsives. Vérifiez vos priorités avant de prendre une décision.",

      "Une meilleure organisation de vos dépenses pourrait vous apporter un sentiment de contrôle et de tranquillité.",

      "Évitez les décisions prises sous le coup de l’émotion. Une courte réflexion peut faire une vraie différence.",

      "La journée convient davantage à la planification qu’aux grands risques financiers.",

      "Une petite économie réalisée aujourd’hui pourrait devenir plus importante avec le temps. Pensez à long terme.",

      "Vous pourriez être tenté de vous offrir quelque chose pour compenser une émotion. Accordez-vous quelques heures avant d’acheter.",

      "Un détail administratif ou financier mérite votre attention. Une vérification rapide pourrait éviter une erreur.",

      "La stabilité financière passe aujourd’hui par la modération. Vous n’avez pas besoin de tout régler immédiatement.",

      "Une discussion concernant l’argent gagnerait à être claire et précise. Évitez les suppositions.",

      "Votre intuition peut vous alerter sur une dépense ou une proposition. Prenez le temps de vérifier les conditions.",
    ],

    bienEtre: [
      "Votre corps pourrait réclamer un rythme plus régulier. Hydratation, mouvement doux et repos seront bénéfiques.",

      "Accordez-vous quelques minutes de calme pour relâcher la tension mentale accumulée.",

      "Une activité simple à l’extérieur pourrait vous aider à retrouver plus d’énergie.",

      "Respectez vos limites sans culpabilité. Votre équilibre dépend aussi de votre capacité à ralentir.",

      "Une routine légère pourrait vous faire beaucoup de bien. Évitez de surcharger votre journée inutilement.",

      "Votre énergie pourrait varier selon les moments. Adaptez votre rythme au lieu de lutter contre votre fatigue.",

      "Un moment loin des écrans vous aiderait à retrouver davantage de présence et de calme intérieur.",

      "Votre bien-être passe aujourd’hui par des choix simples : respirer, marcher, vous hydrater et dormir suffisamment.",

      "Une tension émotionnelle pourrait se manifester physiquement. Prenez le temps de relâcher votre corps.",

      "Vous pourriez bénéficier d’un environnement plus calme. Accordez-vous un espace où vous n’avez rien à prouver.",
    ],

    conseil: [
      "Faites aujourd’hui un pas concret plutôt que d’attendre le moment parfait.",

      "Choisissez ce qui vous apporte de la clarté, pas ce qui nourrit la confusion.",

      "Ne sous-estimez pas la puissance d’une décision calme et réfléchie.",

      "Votre intuition peut vous guider, mais prenez aussi le temps de vérifier les faits.",

      "Ne dépensez pas votre énergie à convaincre les personnes qui refusent de vous comprendre.",

      "Ce qui avance lentement peut tout de même avancer dans la bonne direction.",

      "Une limite clairement exprimée vaut mieux qu’un silence rempli de frustration.",

      "Faites confiance à ce que vous ressentez, sans laisser la peur décider à votre place.",

      "Donnez votre attention à ce que vous pouvez réellement améliorer aujourd’hui.",

      "Vous n’avez pas besoin de tout comprendre immédiatement pour continuer à avancer.",
    ],
  };
}
