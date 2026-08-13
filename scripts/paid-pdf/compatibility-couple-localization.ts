import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type CoupleLocaleData = {
  text: Record<string, string>;

  signs: Record<string, string>;

  planets: Record<string, string>;

  aspects: Record<string, string>;

  elements: Record<string, string>;

  modalities: Record<string, string>;

  saturnIn: string;

  orbWord: string;

  saturnCompatibility: {
    missing: string;
    sameSign: string;
    sameSignEnd: string;
    sameElement: string;
    sameElementEnd: string;
    sameModality: string;
    sameModalityEnd: string;
    different: string;
    differentEnd: string;
  };

  growthText: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  CoupleLocaleData
> = {
  en: {
    text: {
      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",

      "Durée, structure et responsabilité":
        "Longevity, structure and responsibility",

      "Saturne et votre engagement":
        "Saturn and your commitment",

      "Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps.":
        "Saturn reveals what your relationship needs in order to become stable, reliable, and capable of lasting over time.",

      "Engagement, maturité et long terme":
        "Commitment, maturity and long-term potential",

      "La rencontre de vos deux Saturne":
        "The meeting of your two Saturn placements",

      "Cette comparaison montre comment chacun construit la confiance, assume les responsabilités et envisage la durée du lien.":
        "This comparison shows how each person builds trust, assumes responsibility, and approaches the long-term future of the relationship.",

      "Votre manière de construire":
        "Your way of building together",

      "Vos principales interactions d’engagement":
        "Your main commitment interactions",

      "Votre clé de stabilité":
        "Your key to stability",

      "Transformez les attentes implicites en accords concrets. Parlez clairement du temps, de l’argent, des responsabilités, des limites et des projets afin que la sécurité repose sur une réalité partagée.":
        "Turn unspoken expectations into concrete agreements. Talk clearly about time, money, responsibilities, boundaries, and plans so that security rests on a shared reality.",

      "Tensions, différences et ajustements":
        "Tensions, differences and adjustments",

      "Les défis de votre couple":
        "The challenges in your relationship",

      "Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles.":
        "Challenging aspects do not condemn a relationship. They reveal the areas where awareness, communication, and maturity become essential.",

      "Ce que les tensions cherchent à révéler":
        "What tensions are trying to reveal",

      "Un défi relationnel apparaît souvent lorsqu’un besoin important s’exprime sous une forme défensive. Derrière la critique, le retrait, l’impatience ou le contrôle se trouve généralement une demande de sécurité, de reconnaissance, de liberté ou de proximité.":
        "A relationship challenge often appears when an important need is expressed defensively. Behind criticism, withdrawal, impatience, or control there is usually a need for security, recognition, freedom, or closeness.",

      "Vos principales zones de tension":
        "Your main areas of tension",

      "Une dynamique globalement souple":
        "An overall flexible dynamic",

      "Aucun aspect difficile majeur n’apparaît parmi les interactions personnelles les plus serrées. Cela n’élimine pas tous les désaccords, mais suggère que plusieurs tensions peuvent être résolues sans blocage durable.":
        "No major challenging aspect appears among your closest personal interactions. This does not eliminate all disagreements, but it suggests that many tensions can be resolved without lasting blockage.",

      "Éviter l’escalade":
        "Avoid escalation",

      "Lorsque l’émotion monte, cessez de chercher immédiatement qui a raison. Identifiez plutôt ce que chacun essaie de protéger ou de faire comprendre.":
        "When emotions rise, stop trying to determine immediately who is right. Instead, identify what each person is trying to protect or communicate.",

      "Respecter les rythmes":
        "Respect each other's pace",

      "L’un peut avoir besoin de parler tout de suite alors que l’autre doit d’abord retrouver son calme. Fixez un moment précis pour reprendre la discussion afin d’éviter le silence prolongé.":
        "One person may need to talk immediately while the other first needs time to calm down. Set a specific time to resume the discussion to avoid prolonged silence.",

      "Votre point de vigilance":
        "Your point of attention",

      "Ne transformez pas une différence de fonctionnement en jugement sur la valeur, l’amour ou les intentions de l’autre.":
        "Do not turn a difference in how you function into a judgment about the other person's worth, love, or intentions.",

      "Votre potentiel":
        "Your potential",

      "Chaque tension comprise peut devenir une compétence relationnelle durable et rendre le couple plus solide qu’avant le conflit.":
        "Every tension that is understood can become a lasting relationship skill and make the relationship stronger than it was before the conflict.",

      "Votre clé face aux défis":
        "Your key when facing challenges",

      "Utilisez des phrases centrées sur votre expérience : « je ressens », « j’ai besoin », « je comprends ». Elles réduisent la défensive et permettent d’aborder le vrai sujet sans attaquer l’identité de l’autre.":
        "Use statements centered on your own experience: “I feel,” “I need,” “I understand.” They reduce defensiveness and make it possible to address the real issue without attacking the other person's identity.",

      "Soutien, complicité et ressources communes":
        "Support, connection and shared resources",

      "Les forces de votre couple":
        "The strengths of your relationship",

      "Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante.":
        "Your strengths reveal what flows naturally between you and what can support the relationship when life becomes more demanding.",

      "Votre capital relationnel":
        "Your relationship resources",

      "Une relation durable ne repose pas uniquement sur l’absence de conflits. Elle se construit aussi grâce aux gestes, aux valeurs et aux qualités qui donnent envie de revenir l’un vers l’autre après les périodes plus difficiles.":
        "A lasting relationship is not based only on the absence of conflict. It is also built through gestures, values, and qualities that make you want to return to one another after difficult periods.",

      "Vos principales ressources astrologiques":
        "Your main astrological strengths",

      "Une force à construire consciemment":
        "A strength to build consciously",

      "Les aspects les plus fluides ne dominent pas nécessairement votre synastrie. Votre force peut alors venir de la volonté commune, de la fidélité aux engagements et de la capacité à apprendre réellement de vos différences.":
        "The most harmonious aspects do not necessarily dominate your synastry. Your strength may instead come from shared determination, commitment, and the ability to genuinely learn from your differences.",

      "Votre lien affectif":
        "Your emotional bond",

      "La tendresse, la reconnaissance et les gestes simples nourrissent la sécurité du couple bien davantage que les grandes déclarations occasionnelles.":
        "Tenderness, appreciation, and simple gestures nourish the relationship's security far more than occasional grand declarations.",

      "Votre esprit d’équipe":
        "Your teamwork",

      "Vous devenez particulièrement forts lorsque le problème est placé devant vous plutôt qu’entre vous et que chacun contribue selon ses capacités.":
        "You become particularly strong when the problem is placed in front of you rather than between you, and each person contributes according to their abilities.",

      "Ce qui vous unit":
        "What unites you",

      "Le sentiment d’être compris, choisi et soutenu peut devenir une base très puissante pour vos décisions communes.":
        "The feeling of being understood, chosen, and supported can become a very powerful foundation for your shared decisions.",

      "Ce qui vous protège":
        "What protects your relationship",

      "Votre capacité à vous rappeler les qualités de l’autre empêche les tensions temporaires de définir toute la relation.":
        "Your ability to remember each other's qualities prevents temporary tensions from defining the entire relationship.",

      "Votre clé de complicité":
        "Your key to connection",

      "N’attendez pas une crise pour parler de ce qui fonctionne. Nommez régulièrement les gestes que vous appréciez et les moments où vous vous êtes sentis soutenus, désirés ou compris.":
        "Do not wait for a crisis to talk about what works. Regularly acknowledge the gestures you appreciate and the moments when you felt supported, desired, or understood.",

      "Apprentissage, maturité et avenir commun":
        "Learning, maturity and a shared future",

      "Votre évolution ensemble":
        "Your growth together",

      "Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité.":
        "Your relationship can become a space for transformation where each person learns to love with greater awareness, freedom, and responsibility.",

      "Le chemin relationnel":
        "The relationship journey",

      "Ce que votre lien vous apprend":
        "What your relationship teaches you",

      "La croissance apparaît lorsque les forces sont utilisées consciemment et que les défis cessent d’être vécus comme des preuves d’incompatibilité.":
        "Growth appears when strengths are used consciously and challenges are no longer experienced as proof of incompatibility.",

      "Vos moteurs d’évolution":
        "Your drivers of growth",

      "Grandir individuellement":
        "Growing individually",

      "Une relation saine permet à chacun de conserver son identité, ses intérêts et sa capacité de décision sans menacer la proximité affective.":
        "A healthy relationship allows each person to preserve their identity, interests, and decision-making ability without threatening emotional closeness.",

      "Grandir ensemble":
        "Growing together",

      "Les projets communs donnent une direction au couple lorsqu’ils sont choisis librement et révisés à mesure que vos réalités évoluent.":
        "Shared projects give the relationship direction when they are freely chosen and revised as your realities evolve.",

      "Votre prochaine étape":
        "Your next step",

      "Définir un objectif commun concret qui nourrit à la fois la sécurité du lien et le développement personnel de chacun.":
        "Define a concrete shared goal that supports both the security of the relationship and each person's personal development.",

      "Votre potentiel à long terme":
        "Your long-term potential",

      "La durée devient réelle lorsque l’engagement reste vivant : choisi, exprimé et adapté plutôt que simplement supposé.":
        "Long-term stability becomes real when commitment remains alive: chosen, expressed, and adapted rather than simply assumed.",

      "Votre vision commune":
        "Your shared vision",

      "Votre relation n’a pas besoin d’être parfaite pour être profondément constructive. Elle a surtout besoin d’un espace où les besoins peuvent évoluer, où les erreurs peuvent être réparées et où les décisions importantes restent alignées sur vos valeurs communes.":
        "Your relationship does not need to be perfect to be deeply constructive. Above all, it needs a space where needs can evolve, mistakes can be repaired, and important decisions remain aligned with your shared values.",

      "Votre clé d’évolution":
        "Your key to growth",

      "Une fois par mois, prenez un moment pour répondre ensemble à trois questions : qu’est-ce qui nous rapproche actuellement, qu’est-ce qui nous éloigne, et quel petit changement concret voulons-nous essayer?":
        "Once a month, take time to answer three questions together: what is bringing us closer right now, what is creating distance, and what small concrete change do we want to try?",

      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.":
        "Commits through action and prefers to build the relationship without losing independence or personal momentum.",

      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.":
        "Seeks a stable, loyal, and practical relationship supported by reliable habits and shared security.",

      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.":
        "Needs a flexible, lively commitment nourished by dialogue, curiosity, and intellectual growth.",

      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.":
        "Takes commitment seriously when a climate of trust, protection, and belonging has been established.",

      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.":
        "Wants to build a loyal, proud, and lasting bond where each person feels recognized, valued, and fully chosen.",

      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.":
        "Shows commitment through presence, helpfulness, organization, and consistent attention to detail.",

      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.":
        "Builds longevity through fairness, cooperation, and decisions genuinely made together.",

      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.":
        "Commits intensely and requires deep loyalty, emotional honesty, and unambiguous trust.",

      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.":
        "Needs lasting commitment to leave room for freedom, projects, and shared expansion.",

      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.":
        "Values responsibility, consistency, and the ability to patiently build a solid relationship over time.",

      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.":
        "Seeks authentic commitment based on friendship, respect for differences, and a shared vision.",

      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.":
        "Commits through compassion and devotion but needs clear boundaries to avoid absorbing everything.",

      "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée.":
        "More astrological data is needed to describe this approach to commitment precisely.",

      "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.":
        "This aspect supports reliability, patience, and the ability to move through important stages with maturity.",

      "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.":
        "This aspect can create a feeling of pressure, judgment, or limitation, but it also reveals what needs to be strengthened.",

      "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.":
        "This connection gives the relationship particular weight and can strengthen the feeling of mutual responsibility.",

      "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.":
        "This interaction requires genuine adjustment. Automatic reactions can create tension until they are recognized.",

      "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.":
        "Even harmonious energy can become automatic. Awareness of this dynamic prevents you from taking the other person's needs for granted.",

      "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.":
        "This interaction naturally supports cooperation, affection, and the ability to find common ground.",

      "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.":
        "This conjunction concentrates strong shared energy and gives the relationship significant power to act together.",

      "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.":
        "This difference can become a strength when each person contributes their perspective without trying to erase the other's.",

      "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.":
        "This interaction helps the relationship transform experiences into learning and move forward with greater confidence.",

      "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.":
        "This tension acts as a driver of growth. It invites each person to move beyond an old reaction and create a more conscious response.",

      "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.":
        "This connection marks an important stage in the relationship journey and encourages deeper self-understanding through the other person.",
    },

    signs: {
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
      "Non précisé": "Not specified",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Mercure: "Mercury",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptune",
      Pluton: "Pluto",
    },

    aspects: {
      Conjonction: "Conjunction",
      Opposition: "Opposition",
      Trigone: "Trine",
      Carré: "Square",
      Sextile: "Sextile",
      Quinconce: "Quincunx",
    },

    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
      "Non précisé": "Not specified",
    },

    modalities: {
      Cardinal: "Cardinal",
      Fixe: "Fixed",
      Mutable: "Mutable",
      "Non précisé": "Not specified",
    },

    saturnIn:
      "Saturn in",

    orbWord:
      "orb",

    saturnCompatibility: {
      missing:
        "Not all Saturn positions are available. The analysis of stability and commitment therefore remains partial.",

      sameSign:
        "Both Saturn placements in {sign1} indicate a very similar approach to responsibility. ",

      sameSignEnd:
        "You can build with the same priorities, but you may also reinforce the same rigidities or fears.",

      sameElement:
        "Your Saturn placements in {sign1} and {sign2} belong to the same element, {element1}. ",

      sameElementEnd:
        "Your relationship with time, effort, and security rests on a compatible foundation that supports long-term projects.",

      sameModality:
        "Your Saturn placements share the {modality1} modality. ",

      sameModalityEnd:
        "You may recognize a familiar pace of commitment in each other, even if the concrete ways you create security differ.",

      different:
        "Your Saturn placements in {sign1} and {sign2} do not build security in the same way. ",

      differentEnd:
        "Longevity becomes possible when the relationship's rules, responsibilities, and expectations are clearly expressed rather than assumed.",
    },

    growthText:
      "With Saturn in {sign1} and {sign2}, your relationship learns to define its own form of stability. The relationship grows when you replace automatic reactions with clear, repeated choices that are consistent with the relationship you truly want to build.",
  },

  es: {
    text: {
      "Première personne": "Primera persona",
      "Deuxième personne": "Segunda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",

      "Durée, structure et responsabilité":
        "Duración, estructura y responsabilidad",

      "Saturne et votre engagement":
        "Saturno y su compromiso",

      "Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps.":
        "Saturno revela lo que su relación necesita para volverse estable, fiable y capaz de perdurar en el tiempo.",

      "Engagement, maturité et long terme":
        "Compromiso, madurez y largo plazo",

      "La rencontre de vos deux Saturne":
        "El encuentro de sus dos Saturnos",

      "Cette comparaison montre comment chacun construit la confiance, assume les responsabilités et envisage la durée du lien.":
        "Esta comparación muestra cómo cada persona construye la confianza, asume responsabilidades y contempla la duración del vínculo.",

      "Votre manière de construire":
        "Su manera de construir",

      "Vos principales interactions d’engagement":
        "Sus principales interacciones de compromiso",

      "Votre clé de stabilité":
        "Su clave de estabilidad",

      "Transformez les attentes implicites en accords concrets. Parlez clairement du temps, de l’argent, des responsabilités, des limites et des projets afin que la sécurité repose sur une réalité partagée.":
        "Transformen las expectativas implícitas en acuerdos concretos. Hablen claramente del tiempo, el dinero, las responsabilidades, los límites y los proyectos para que la seguridad repose sobre una realidad compartida.",

      "Tensions, différences et ajustements":
        "Tensiones, diferencias y ajustes",

      "Les défis de votre couple":
        "Los desafíos de su relación",

      "Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles.":
        "Los aspectos difíciles no condenan una relación. Muestran las áreas donde la conciencia, la comunicación y la madurez se vuelven esenciales.",

      "Ce que les tensions cherchent à révéler":
        "Lo que las tensiones buscan revelar",

      "Un défi relationnel apparaît souvent lorsqu’un besoin important s’exprime sous une forme défensive. Derrière la critique, le retrait, l’impatience ou le contrôle se trouve généralement une demande de sécurité, de reconnaissance, de liberté ou de proximité.":
        "Un desafío relacional suele aparecer cuando una necesidad importante se expresa de forma defensiva. Detrás de la crítica, el distanciamiento, la impaciencia o el control suele haber una necesidad de seguridad, reconocimiento, libertad o cercanía.",

      "Vos principales zones de tension":
        "Sus principales zonas de tensión",

      "Une dynamique globalement souple":
        "Una dinámica generalmente flexible",

      "Aucun aspect difficile majeur n’apparaît parmi les interactions personnelles les plus serrées. Cela n’élimine pas tous les désaccords, mais suggère que plusieurs tensions peuvent être résolues sans blocage durable.":
        "No aparece ningún aspecto difícil importante entre las interacciones personales más estrechas. Esto no elimina todos los desacuerdos, pero sugiere que muchas tensiones pueden resolverse sin bloqueos duraderos.",

      "Éviter l’escalade":
        "Evitar la escalada",

      "Lorsque l’émotion monte, cessez de chercher immédiatement qui a raison. Identifiez plutôt ce que chacun essaie de protéger ou de faire comprendre.":
        "Cuando aumente la emoción, dejen de buscar inmediatamente quién tiene razón. Identifiquen más bien lo que cada persona intenta proteger o hacer comprender.",

      "Respecter les rythmes":
        "Respetar los ritmos",

      "L’un peut avoir besoin de parler tout de suite alors que l’autre doit d’abord retrouver son calme. Fixez un moment précis pour reprendre la discussion afin d’éviter le silence prolongé.":
        "Una persona puede necesitar hablar inmediatamente mientras la otra necesita primero recuperar la calma. Fijen un momento concreto para retomar la conversación y evitar un silencio prolongado.",

      "Votre point de vigilance":
        "Su punto de atención",

      "Ne transformez pas une différence de fonctionnement en jugement sur la valeur, l’amour ou les intentions de l’autre.":
        "No conviertan una diferencia de funcionamiento en un juicio sobre el valor, el amor o las intenciones de la otra persona.",

      "Votre potentiel":
        "Su potencial",

      "Chaque tension comprise peut devenir une compétence relationnelle durable et rendre le couple plus solide qu’avant le conflit.":
        "Cada tensión comprendida puede convertirse en una habilidad relacional duradera y hacer que la relación sea más sólida que antes del conflicto.",

      "Votre clé face aux défis":
        "Su clave ante los desafíos",

      "Utilisez des phrases centrées sur votre expérience : « je ressens », « j’ai besoin », « je comprends ». Elles réduisent la défensive et permettent d’aborder le vrai sujet sans attaquer l’identité de l’autre.":
        "Utilicen frases centradas en su propia experiencia: «siento», «necesito», «comprendo». Reducen la actitud defensiva y permiten abordar el verdadero tema sin atacar la identidad de la otra persona.",

      "Soutien, complicité et ressources communes":
        "Apoyo, complicidad y recursos compartidos",

      "Les forces de votre couple":
        "Las fortalezas de su relación",

      "Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante.":
        "Sus fortalezas muestran lo que fluye naturalmente entre ustedes y lo que puede sostener la relación cuando la vida se vuelve más exigente.",

      "Votre capital relationnel":
        "Su capital relacional",

      "Une relation durable ne repose pas uniquement sur l’absence de conflits. Elle se construit aussi grâce aux gestes, aux valeurs et aux qualités qui donnent envie de revenir l’un vers l’autre après les périodes plus difficiles.":
        "Una relación duradera no se basa únicamente en la ausencia de conflictos. También se construye mediante gestos, valores y cualidades que hacen que quieran volver el uno hacia el otro después de los períodos más difíciles.",

      "Vos principales ressources astrologiques":
        "Sus principales recursos astrológicos",

      "Une force à construire consciemment":
        "Una fortaleza que construir conscientemente",

      "Les aspects les plus fluides ne dominent pas nécessairement votre synastrie. Votre force peut alors venir de la volonté commune, de la fidélité aux engagements et de la capacité à apprendre réellement de vos différences.":
        "Los aspectos más fluidos no dominan necesariamente su sinastría. Su fortaleza puede surgir entonces de la voluntad común, la fidelidad a los compromisos y la capacidad de aprender realmente de sus diferencias.",

      "Votre lien affectif":
        "Su vínculo afectivo",

      "La tendresse, la reconnaissance et les gestes simples nourrissent la sécurité du couple bien davantage que les grandes déclarations occasionnelles.":
        "La ternura, el reconocimiento y los gestos sencillos alimentan la seguridad de la relación mucho más que las grandes declaraciones ocasionales.",

      "Votre esprit d’équipe":
        "Su espíritu de equipo",

      "Vous devenez particulièrement forts lorsque le problème est placé devant vous plutôt qu’entre vous et que chacun contribue selon ses capacités.":
        "Se vuelven especialmente fuertes cuando el problema se coloca frente a ustedes y no entre ustedes, y cada persona contribuye según sus capacidades.",

      "Ce qui vous unit":
        "Lo que los une",

      "Le sentiment d’être compris, choisi et soutenu peut devenir une base très puissante pour vos décisions communes.":
        "La sensación de ser comprendidos, elegidos y apoyados puede convertirse en una base muy poderosa para sus decisiones comunes.",

      "Ce qui vous protège":
        "Lo que protege su relación",

      "Votre capacité à vous rappeler les qualités de l’autre empêche les tensions temporaires de définir toute la relation.":
        "Su capacidad para recordar las cualidades del otro evita que las tensiones temporales definan toda la relación.",

      "Votre clé de complicité":
        "Su clave de complicidad",

      "N’attendez pas une crise pour parler de ce qui fonctionne. Nommez régulièrement les gestes que vous appréciez et les moments où vous vous êtes sentis soutenus, désirés ou compris.":
        "No esperen una crisis para hablar de lo que funciona. Reconozcan regularmente los gestos que valoran y los momentos en los que se sintieron apoyados, deseados o comprendidos.",

      "Apprentissage, maturité et avenir commun":
        "Aprendizaje, madurez y futuro común",

      "Votre évolution ensemble":
        "Su evolución juntos",

      "Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité.":
        "Su relación puede convertirse en un espacio de transformación donde cada persona aprende a amar con mayor conciencia, libertad y responsabilidad.",

      "Le chemin relationnel":
        "El camino de la relación",

      "Ce que votre lien vous apprend":
        "Lo que su vínculo les enseña",

      "La croissance apparaît lorsque les forces sont utilisées consciemment et que les défis cessent d’être vécus comme des preuves d’incompatibilité.":
        "El crecimiento aparece cuando las fortalezas se utilizan conscientemente y los desafíos dejan de vivirse como pruebas de incompatibilidad.",

      "Vos moteurs d’évolution":
        "Sus motores de evolución",

      "Grandir individuellement":
        "Crecer individualmente",

      "Une relation saine permet à chacun de conserver son identité, ses intérêts et sa capacité de décision sans menacer la proximité affective.":
        "Una relación sana permite que cada persona conserve su identidad, sus intereses y su capacidad de decisión sin amenazar la cercanía afectiva.",

      "Grandir ensemble":
        "Crecer juntos",

      "Les projets communs donnent une direction au couple lorsqu’ils sont choisis librement et révisés à mesure que vos réalités évoluent.":
        "Los proyectos comunes dan dirección a la relación cuando se eligen libremente y se revisan a medida que sus realidades evolucionan.",

      "Votre prochaine étape":
        "Su próximo paso",

      "Définir un objectif commun concret qui nourrit à la fois la sécurité du lien et le développement personnel de chacun.":
        "Definir un objetivo común concreto que alimente tanto la seguridad del vínculo como el desarrollo personal de cada uno.",

      "Votre potentiel à long terme":
        "Su potencial a largo plazo",

      "La durée devient réelle lorsque l’engagement reste vivant : choisi, exprimé et adapté plutôt que simplement supposé.":
        "La duración se vuelve real cuando el compromiso permanece vivo: elegido, expresado y adaptado en lugar de simplemente supuesto.",

      "Votre vision commune":
        "Su visión común",

      "Votre relation n’a pas besoin d’être parfaite pour être profondément constructive. Elle a surtout besoin d’un espace où les besoins peuvent évoluer, où les erreurs peuvent être réparées et où les décisions importantes restent alignées sur vos valeurs communes.":
        "Su relación no necesita ser perfecta para ser profundamente constructiva. Sobre todo necesita un espacio donde las necesidades puedan evolucionar, los errores puedan repararse y las decisiones importantes permanezcan alineadas con sus valores comunes.",

      "Votre clé d’évolution":
        "Su clave de evolución",

      "Une fois par mois, prenez un moment pour répondre ensemble à trois questions : qu’est-ce qui nous rapproche actuellement, qu’est-ce qui nous éloigne, et quel petit changement concret voulons-nous essayer?":
        "Una vez al mes, tómense un momento para responder juntos tres preguntas: ¿qué nos acerca actualmente?, ¿qué nos aleja?, y ¿qué pequeño cambio concreto queremos probar?",

      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.":
        "Se compromete a través de la acción y prefiere construir el vínculo sin perder su autonomía ni su impulso personal.",

      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.":
        "Busca una relación estable, fiel y concreta, apoyada en hábitos fiables y una seguridad compartida.",

      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.":
        "Necesita un compromiso flexible, vivo y alimentado por el diálogo, la curiosidad y la evolución intelectual.",

      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.":
        "Se toma el compromiso en serio cuando existe un clima de confianza, protección y pertenencia familiar.",

      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.":
        "Desea construir un vínculo leal, orgulloso y duradero donde cada persona se sienta reconocida, valorada y plenamente elegida.",

      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.":
        "Demuestra su compromiso mediante la presencia, el servicio, la organización y la atención constante a los detalles.",

      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.":
        "Construye la duración mediante la equidad, la cooperación y decisiones realmente tomadas entre ambos.",

      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.":
        "Se compromete intensamente y exige una lealtad profunda, honestidad emocional y una confianza sin ambigüedades.",

      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.":
        "Necesita que un compromiso duradero deje espacio para la libertad, los proyectos y la expansión conjunta.",

      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.":
        "Valora la responsabilidad, la constancia y la capacidad de construir pacientemente una relación sólida con el tiempo.",

      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.":
        "Busca un compromiso auténtico basado en la amistad, el respeto de las diferencias y una visión común.",

      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.":
        "Se compromete mediante la compasión y la entrega, pero necesita mantener límites claros para no absorberlo todo.",

      "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée.":
        "Se necesitan más datos astrológicos para precisar esta manera de abordar el compromiso.",

      "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.":
        "Este aspecto favorece la fiabilidad, la paciencia y la capacidad de atravesar etapas importantes con madurez.",

      "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.":
        "Este aspecto puede crear una sensación de presión, juicio o limitación, pero también revela lo que necesita consolidarse.",

      "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.":
        "Esta conexión da al vínculo un peso especial y puede reforzar el sentimiento de responsabilidad mutua.",

      "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.":
        "Esta interacción requiere un verdadero ajuste. Las reacciones automáticas pueden generar tensión mientras no sean reconocidas.",

      "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.":
        "Incluso una energía fluida puede convertirse en un automatismo. Ser conscientes de esta dinámica evita dar por sentadas las necesidades del otro.",

      "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.":
        "Esta interacción favorece naturalmente la cooperación, el afecto y la capacidad de encontrar un terreno común.",

      "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.":
        "Esta conjunción concentra una gran energía compartida y proporciona a la relación una importante fuerza de movilización.",

      "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.":
        "Esta diferencia puede convertirse en una fortaleza cuando cada persona aporta su perspectiva sin intentar borrar la del otro.",

      "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.":
        "Esta interacción ayuda a la pareja a transformar las experiencias en aprendizaje y avanzar con mayor confianza.",

      "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.":
        "Esta tensión actúa como motor de evolución. Invita a cada persona a superar una antigua reacción y crear una respuesta más consciente.",

      "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.":
        "Esta conexión marca una etapa importante del camino relacional y favorece una comprensión más profunda de uno mismo a través del otro.",
    },

    signs: {
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
      "Non précisé": "No especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Neptuno",
      Pluton: "Plutón",
    },

    aspects: {
      Conjonction: "Conjunción",
      Opposition: "Oposición",
      Trigone: "Trígono",
      Carré: "Cuadratura",
      Sextile: "Sextil",
      Quinconce: "Quincuncio",
    },

    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
      "Non précisé": "No especificado",
    },

    modalities: {
      Cardinal: "Cardinal",
      Fixe: "Fija",
      Mutable: "Mutable",
      "Non précisé": "No especificada",
    },

    saturnIn:
      "Saturno en",

    orbWord:
      "orbe",

    saturnCompatibility: {
      missing:
        "No están disponibles todas las posiciones de Saturno. Por lo tanto, el análisis de la estabilidad y del compromiso sigue siendo parcial.",

      sameSign:
        "Sus dos Saturnos en {sign1} indican una concepción muy similar de las responsabilidades. ",

      sameSignEnd:
        "Pueden construir con las mismas prioridades, pero también reforzar las mismas rigideces o temores.",

      sameElement:
        "Sus Saturnos en {sign1} y {sign2} pertenecen al mismo elemento, {element1}. ",

      sameElementEnd:
        "Su relación con el tiempo, el esfuerzo y la seguridad se apoya en una base compatible que facilita los proyectos duraderos.",

      sameModality:
        "Sus Saturnos comparten una modalidad {modality1}. ",

      sameModalityEnd:
        "Pueden reconocer en el otro un ritmo de compromiso familiar, aunque las formas concretas de asegurar el vínculo sean diferentes.",

      different:
        "Sus Saturnos en {sign1} y {sign2} no construyen la seguridad de la misma manera. ",

      differentEnd:
        "La duración se vuelve posible cuando las reglas de la relación, las responsabilidades y las expectativas se expresan claramente en lugar de darse por supuestas.",
    },

    growthText:
      "Con Saturno en {sign1} y {sign2}, su relación aprende a definir su propia forma de estabilidad. El vínculo evoluciona cuando reemplazan las reacciones automáticas por decisiones claras, repetidas y coherentes con la relación que realmente desean construir.",
  },

  de: {
    text: {
      "Première personne": "Erste Person",
      "Deuxième personne": "Zweite Person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",

      "Durée, structure et responsabilité":
        "Dauer, Struktur und Verantwortung",

      "Saturne et votre engagement":
        "Saturn und Ihre Bindung",

      "Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps.":
        "Saturn zeigt, was Ihre Beziehung braucht, um stabil, verlässlich und langfristig tragfähig zu werden.",

      "Engagement, maturité et long terme":
        "Bindung, Reife und Langfristigkeit",

      "La rencontre de vos deux Saturne":
        "Die Begegnung Ihrer beiden Saturn-Positionen",

      "Cette comparaison montre comment chacun construit la confiance, assume les responsabilités et envisage la durée du lien.":
        "Dieser Vergleich zeigt, wie jeder von Ihnen Vertrauen aufbaut, Verantwortung übernimmt und die Dauer der Beziehung betrachtet.",

      "Votre manière de construire":
        "Ihre Art, gemeinsam aufzubauen",

      "Vos principales interactions d’engagement":
        "Ihre wichtigsten Bindungsdynamiken",

      "Votre clé de stabilité":
        "Ihr Schlüssel zur Stabilität",

      "Transformez les attentes implicites en accords concrets. Parlez clairement du temps, de l’argent, des responsabilités, des limites et des projets afin que la sécurité repose sur une réalité partagée.":
        "Verwandeln Sie unausgesprochene Erwartungen in konkrete Vereinbarungen. Sprechen Sie klar über Zeit, Geld, Verantwortung, Grenzen und Pläne, damit Sicherheit auf einer gemeinsamen Realität beruht.",

      "Tensions, différences et ajustements":
        "Spannungen, Unterschiede und Anpassungen",

      "Les défis de votre couple":
        "Die Herausforderungen Ihrer Beziehung",

      "Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles.":
        "Herausfordernde Aspekte verurteilen eine Beziehung nicht. Sie zeigen die Bereiche, in denen Bewusstsein, Kommunikation und Reife besonders wichtig werden.",

      "Ce que les tensions cherchent à révéler":
        "Was Spannungen sichtbar machen wollen",

      "Un défi relationnel apparaît souvent lorsqu’un besoin important s’exprime sous une forme défensive. Derrière la critique, le retrait, l’impatience ou le contrôle se trouve généralement une demande de sécurité, de reconnaissance, de liberté ou de proximité.":
        "Eine Beziehungsschwierigkeit entsteht oft, wenn ein wichtiges Bedürfnis in defensiver Form ausgedrückt wird. Hinter Kritik, Rückzug, Ungeduld oder Kontrolle steht meist ein Wunsch nach Sicherheit, Anerkennung, Freiheit oder Nähe.",

      "Vos principales zones de tension":
        "Ihre wichtigsten Spannungsbereiche",

      "Une dynamique globalement souple":
        "Eine insgesamt flexible Dynamik",

      "Aucun aspect difficile majeur n’apparaît parmi les interactions personnelles les plus serrées. Cela n’élimine pas tous les désaccords, mais suggère que plusieurs tensions peuvent être résolues sans blocage durable.":
        "Unter den engsten persönlichen Wechselwirkungen zeigt sich kein bedeutender schwieriger Aspekt. Das beseitigt nicht alle Meinungsverschiedenheiten, deutet jedoch darauf hin, dass viele Spannungen ohne dauerhafte Blockaden gelöst werden können.",

      "Éviter l’escalade":
        "Eskalation vermeiden",

      "Lorsque l’émotion monte, cessez de chercher immédiatement qui a raison. Identifiez plutôt ce que chacun essaie de protéger ou de faire comprendre.":
        "Wenn die Emotionen steigen, hören Sie auf, sofort herausfinden zu wollen, wer recht hat. Erkennen Sie stattdessen, was jeder zu schützen oder verständlich zu machen versucht.",

      "Respecter les rythmes":
        "Unterschiedliche Rhythmen respektieren",

      "L’un peut avoir besoin de parler tout de suite alors que l’autre doit d’abord retrouver son calme. Fixez un moment précis pour reprendre la discussion afin d’éviter le silence prolongé.":
        "Einer möchte möglicherweise sofort reden, während der andere zunächst Ruhe braucht. Vereinbaren Sie einen konkreten Zeitpunkt, um das Gespräch fortzusetzen und langes Schweigen zu vermeiden.",

      "Votre point de vigilance":
        "Ihr Aufmerksamkeitspunkt",

      "Ne transformez pas une différence de fonctionnement en jugement sur la valeur, l’amour ou les intentions de l’autre.":
        "Machen Sie aus unterschiedlichen Verhaltensweisen kein Urteil über den Wert, die Liebe oder die Absichten des anderen.",

      "Votre potentiel":
        "Ihr Potenzial",

      "Chaque tension comprise peut devenir une compétence relationnelle durable et rendre le couple plus solide qu’avant le conflit.":
        "Jede verstandene Spannung kann zu einer dauerhaften Beziehungskompetenz werden und die Beziehung stärker machen als vor dem Konflikt.",

      "Votre clé face aux défis":
        "Ihr Schlüssel im Umgang mit Herausforderungen",

      "Utilisez des phrases centrées sur votre expérience : « je ressens », « j’ai besoin », « je comprends ». Elles réduisent la défensive et permettent d’aborder le vrai sujet sans attaquer l’identité de l’autre.":
        "Verwenden Sie Aussagen aus Ihrer eigenen Erfahrung: „Ich fühle“, „Ich brauche“, „Ich verstehe“. Sie verringern Abwehrreaktionen und ermöglichen es, das eigentliche Thema anzusprechen, ohne die Identität des anderen anzugreifen.",

      "Soutien, complicité et ressources communes":
        "Unterstützung, Verbundenheit und gemeinsame Ressourcen",

      "Les forces de votre couple":
        "Die Stärken Ihrer Beziehung",

      "Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante.":
        "Ihre Stärken zeigen, was zwischen Ihnen natürlich fließt und was die Beziehung tragen kann, wenn das Leben anspruchsvoller wird.",

      "Votre capital relationnel":
        "Ihre Beziehungsressourcen",

      "Une relation durable ne repose pas uniquement sur l’absence de conflits. Elle se construit aussi grâce aux gestes, aux valeurs et aux qualités qui donnent envie de revenir l’un vers l’autre après les périodes plus difficiles.":
        "Eine dauerhafte Beziehung beruht nicht nur auf der Abwesenheit von Konflikten. Sie entsteht auch durch Gesten, Werte und Eigenschaften, die dazu führen, dass man nach schwierigen Zeiten wieder aufeinander zugehen möchte.",

      "Vos principales ressources astrologiques":
        "Ihre wichtigsten astrologischen Ressourcen",

      "Une force à construire consciemment":
        "Eine Stärke, die bewusst aufgebaut wird",

      "Les aspects les plus fluides ne dominent pas nécessairement votre synastrie. Votre force peut alors venir de la volonté commune, de la fidélité aux engagements et de la capacité à apprendre réellement de vos différences.":
        "Die harmonischsten Aspekte dominieren Ihre Synastrie nicht unbedingt. Ihre Stärke kann daher aus gemeinsamem Willen, Verlässlichkeit und der Fähigkeit entstehen, wirklich aus Ihren Unterschieden zu lernen.",

      "Votre lien affectif":
        "Ihre emotionale Verbindung",

      "La tendresse, la reconnaissance et les gestes simples nourrissent la sécurité du couple bien davantage que les grandes déclarations occasionnelles.":
        "Zärtlichkeit, Wertschätzung und einfache Gesten stärken die Sicherheit der Beziehung weit mehr als gelegentliche große Erklärungen.",

      "Votre esprit d’équipe":
        "Ihr Teamgeist",

      "Vous devenez particulièrement forts lorsque le problème est placé devant vous plutôt qu’entre vous et que chacun contribue selon ses capacités.":
        "Sie werden besonders stark, wenn das Problem vor Ihnen liegt statt zwischen Ihnen und jeder entsprechend seiner Fähigkeiten beiträgt.",

      "Ce qui vous unit":
        "Was Sie verbindet",

      "Le sentiment d’être compris, choisi et soutenu peut devenir une base très puissante pour vos décisions communes.":
        "Das Gefühl, verstanden, gewählt und unterstützt zu werden, kann zu einer sehr starken Grundlage für gemeinsame Entscheidungen werden.",

      "Ce qui vous protège":
        "Was Ihre Beziehung schützt",

      "Votre capacité à vous rappeler les qualités de l’autre empêche les tensions temporaires de définir toute la relation.":
        "Ihre Fähigkeit, sich an die guten Eigenschaften des anderen zu erinnern, verhindert, dass vorübergehende Spannungen die gesamte Beziehung bestimmen.",

      "Votre clé de complicité":
        "Ihr Schlüssel zur Verbundenheit",

      "N’attendez pas une crise pour parler de ce qui fonctionne. Nommez régulièrement les gestes que vous appréciez et les moments où vous vous êtes sentis soutenus, désirés ou compris.":
        "Warten Sie nicht auf eine Krise, um über das zu sprechen, was funktioniert. Benennen Sie regelmäßig Gesten, die Sie schätzen, und Momente, in denen Sie sich unterstützt, begehrt oder verstanden gefühlt haben.",

      "Apprentissage, maturité et avenir commun":
        "Lernen, Reife und gemeinsame Zukunft",

      "Votre évolution ensemble":
        "Ihre gemeinsame Entwicklung",

      "Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité.":
        "Ihre Beziehung kann zu einem Raum der Veränderung werden, in dem jeder lernt, bewusster, freier und verantwortungsvoller zu lieben.",

      "Le chemin relationnel":
        "Der Beziehungsweg",

      "Ce que votre lien vous apprend":
        "Was Ihre Verbindung Sie lehrt",

      "La croissance apparaît lorsque les forces sont utilisées consciemment et que les défis cessent d’être vécus comme des preuves d’incompatibilité.":
        "Wachstum entsteht, wenn Stärken bewusst eingesetzt werden und Herausforderungen nicht mehr als Beweis für Unvereinbarkeit erlebt werden.",

      "Vos moteurs d’évolution":
        "Ihre Wachstumskräfte",

      "Grandir individuellement":
        "Individuell wachsen",

      "Une relation saine permet à chacun de conserver son identité, ses intérêts et sa capacité de décision sans menacer la proximité affective.":
        "Eine gesunde Beziehung ermöglicht es jedem, seine Identität, Interessen und Entscheidungsfähigkeit zu bewahren, ohne die emotionale Nähe zu gefährden.",

      "Grandir ensemble":
        "Gemeinsam wachsen",

      "Les projets communs donnent une direction au couple lorsqu’ils sont choisis librement et révisés à mesure que vos réalités évoluent.":
        "Gemeinsame Projekte geben der Beziehung eine Richtung, wenn sie frei gewählt und angepasst werden, während sich Ihre Lebensrealitäten verändern.",

      "Votre prochaine étape":
        "Ihr nächster Schritt",

      "Définir un objectif commun concret qui nourrit à la fois la sécurité du lien et le développement personnel de chacun.":
        "Ein konkretes gemeinsames Ziel definieren, das sowohl die Sicherheit der Beziehung als auch die persönliche Entwicklung jedes Einzelnen unterstützt.",

      "Votre potentiel à long terme":
        "Ihr langfristiges Potenzial",

      "La durée devient réelle lorsque l’engagement reste vivant : choisi, exprimé et adapté plutôt que simplement supposé.":
        "Beständigkeit wird real, wenn Bindung lebendig bleibt: bewusst gewählt, ausgesprochen und angepasst, statt einfach vorausgesetzt.",

      "Votre vision commune":
        "Ihre gemeinsame Vision",

      "Votre relation n’a pas besoin d’être parfaite pour être profondément constructive. Elle a surtout besoin d’un espace où les besoins peuvent évoluer, où les erreurs peuvent être réparées et où les décisions importantes restent alignées sur vos valeurs communes.":
        "Ihre Beziehung muss nicht perfekt sein, um tiefgehend konstruktiv zu sein. Sie braucht vor allem einen Raum, in dem Bedürfnisse sich entwickeln, Fehler repariert werden können und wichtige Entscheidungen mit Ihren gemeinsamen Werten übereinstimmen.",

      "Votre clé d’évolution":
        "Ihr Schlüssel zur Entwicklung",

      "Une fois par mois, prenez un moment pour répondre ensemble à trois questions : qu’est-ce qui nous rapproche actuellement, qu’est-ce qui nous éloigne, et quel petit changement concret voulons-nous essayer?":
        "Nehmen Sie sich einmal im Monat Zeit, gemeinsam drei Fragen zu beantworten: Was bringt uns derzeit näher zusammen? Was entfernt uns voneinander? Und welche kleine konkrete Veränderung möchten wir ausprobieren?",

      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.":
        "Bindet sich durch Handeln und möchte die Beziehung aufbauen, ohne Autonomie oder persönlichen Antrieb zu verlieren.",

      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.":
        "Sucht eine stabile, treue und konkrete Beziehung, die auf verlässlichen Gewohnheiten und gemeinsamer Sicherheit beruht.",

      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.":
        "Braucht eine flexible und lebendige Bindung, die durch Dialog, Neugier und geistige Entwicklung genährt wird.",

      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.":
        "Nimmt Bindung ernst, wenn Vertrauen, Schutz und ein Gefühl familiärer Zugehörigkeit entstanden sind.",

      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.":
        "Möchte eine loyale, stolze und dauerhafte Verbindung aufbauen, in der sich jeder anerkannt, wertgeschätzt und vollständig gewählt fühlt.",

      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.":
        "Zeigt Bindung durch Präsenz, Hilfsbereitschaft, Organisation und beständige Aufmerksamkeit für Details.",

      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.":
        "Schafft Beständigkeit durch Fairness, Zusammenarbeit und Entscheidungen, die wirklich gemeinsam getroffen werden.",

      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.":
        "Bindet sich intensiv und verlangt tiefe Loyalität, emotionale Ehrlichkeit und eindeutiges Vertrauen.",

      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.":
        "Braucht eine langfristige Bindung, die zugleich Raum für Freiheit, Projekte und gemeinsames Wachstum lässt.",

      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.":
        "Schätzt Verantwortung, Beständigkeit und die Fähigkeit, geduldig eine solide Beziehung aufzubauen.",

      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.":
        "Sucht eine authentische Bindung, die auf Freundschaft, Respekt vor Unterschieden und einer gemeinsamen Vision beruht.",

      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.":
        "Bindet sich durch Mitgefühl und Hingabe, braucht aber klare Grenzen, um nicht alles in sich aufzunehmen.",

      "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée.":
        "Für eine genauere Beschreibung dieser Art von Bindung werden weitere astrologische Daten benötigt.",

      "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.":
        "Dieser Aspekt fördert Verlässlichkeit, Geduld und die Fähigkeit, wichtige Phasen mit Reife zu bewältigen.",

      "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.":
        "Dieser Aspekt kann Druck, Bewertung oder Einschränkung erzeugen, zeigt aber auch, was gefestigt werden muss.",

      "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.":
        "Diese Verbindung verleiht der Beziehung besonderes Gewicht und kann das Gefühl gegenseitiger Verantwortung verstärken.",

      "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.":
        "Diese Wechselwirkung erfordert echte Anpassung. Automatische Reaktionen können Spannung erzeugen, solange sie nicht erkannt werden.",

      "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.":
        "Auch harmonische Energie kann zum Automatismus werden. Bewusstsein für diese Dynamik verhindert, dass die Bedürfnisse des anderen als selbstverständlich angesehen werden.",

      "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.":
        "Diese Wechselwirkung unterstützt auf natürliche Weise Zusammenarbeit, Zuneigung und die Fähigkeit, gemeinsamen Boden zu finden.",

      "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.":
        "Diese Konjunktion bündelt starke gemeinsame Energie und verleiht der Beziehung große gemeinsame Handlungskraft.",

      "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.":
        "Dieser Unterschied kann zu einer Stärke werden, wenn jeder seine Perspektive einbringt, ohne die des anderen auslöschen zu wollen.",

      "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.":
        "Diese Wechselwirkung hilft der Beziehung, Erfahrungen in Lernprozesse zu verwandeln und mit mehr Vertrauen voranzukommen.",

      "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.":
        "Diese Spannung wirkt als Entwicklungsmotor. Sie lädt beide dazu ein, alte Reaktionsweisen zu überwinden und bewusster zu reagieren.",

      "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.":
        "Diese Verbindung markiert eine wichtige Etappe des Beziehungswegs und fördert ein tieferes Selbstverständnis durch den anderen.",
    },

    signs: {
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
      "Non précisé": "Nicht angegeben",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptun",
      Pluton: "Pluto",
    },

    aspects: {
      Conjonction: "Konjunktion",
      Opposition: "Opposition",
      Trigone: "Trigon",
      Carré: "Quadrat",
      Sextile: "Sextil",
      Quinconce: "Quinkunx",
    },

    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
      "Non précisé": "Nicht angegeben",
    },

    modalities: {
      Cardinal: "Kardinal",
      Fixe: "Fix",
      Mutable: "Veränderlich",
      "Non précisé": "Nicht angegeben",
    },

    saturnIn:
      "Saturn in",

    orbWord:
      "Orb",

    saturnCompatibility: {
      missing:
        "Nicht alle Saturn-Positionen sind verfügbar. Die Analyse von Stabilität und Bindung bleibt daher teilweise.",

      sameSign:
        "Ihre beiden Saturn-Positionen in {sign1} weisen auf ein sehr ähnliches Verständnis von Verantwortung hin. ",

      sameSignEnd:
        "Sie können mit denselben Prioritäten aufbauen, aber auch dieselben Starrheiten oder Ängste verstärken.",

      sameElement:
        "Ihre Saturn-Positionen in {sign1} und {sign2} gehören zum selben Element, {element1}. ",

      sameElementEnd:
        "Ihr Umgang mit Zeit, Anstrengung und Sicherheit beruht auf einer kompatiblen Grundlage, die langfristige Projekte erleichtert.",

      sameModality:
        "Ihre Saturn-Positionen teilen die Modalität {modality1}. ",

      sameModalityEnd:
        "Sie können im anderen einen vertrauten Bindungsrhythmus erkennen, auch wenn sich Ihre konkreten Wege zur Sicherung der Beziehung unterscheiden.",

      different:
        "Ihre Saturn-Positionen in {sign1} und {sign2} schaffen Sicherheit auf unterschiedliche Weise. ",

      differentEnd:
        "Beständigkeit wird möglich, wenn Regeln, Verantwortlichkeiten und Erwartungen der Beziehung klar ausgesprochen statt vorausgesetzt werden.",
    },

    growthText:
      "Mit Saturn in {sign1} und {sign2} lernt Ihre Beziehung, ihre eigene Form von Stabilität zu definieren. Die Verbindung entwickelt sich, wenn automatische Reaktionen durch klare, wiederholte Entscheidungen ersetzt werden, die mit der Beziehung übereinstimmen, die Sie wirklich aufbauen möchten.",
  },

  it: {
    text: {
      "Première personne": "Prima persona",
      "Deuxième personne": "Seconda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",

      "Durée, structure et responsabilité":
        "Durata, struttura e responsabilità",

      "Saturne et votre engagement":
        "Saturno e il vostro impegno",

      "Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps.":
        "Saturno rivela ciò di cui la vostra relazione ha bisogno per diventare stabile, affidabile e capace di durare nel tempo.",

      "Engagement, maturité et long terme":
        "Impegno, maturità e lungo termine",

      "La rencontre de vos deux Saturne":
        "L'incontro dei vostri due Saturno",

      "Cette comparaison montre comment chacun construit la confiance, assume les responsabilités et envisage la durée du lien.":
        "Questo confronto mostra come ciascuno costruisce la fiducia, assume le responsabilità e considera la durata del legame.",

      "Votre manière de construire":
        "Il vostro modo di costruire",

      "Vos principales interactions d’engagement":
        "Le vostre principali dinamiche di impegno",

      "Votre clé de stabilité":
        "La vostra chiave di stabilità",

      "Transformez les attentes implicites en accords concrets. Parlez clairement du temps, de l’argent, des responsabilités, des limites et des projets afin que la sécurité repose sur une réalité partagée.":
        "Trasformate le aspettative implicite in accordi concreti. Parlate chiaramente di tempo, denaro, responsabilità, limiti e progetti affinché la sicurezza si basi su una realtà condivisa.",

      "Tensions, différences et ajustements":
        "Tensioni, differenze e adattamenti",

      "Les défis de votre couple":
        "Le sfide della vostra relazione",

      "Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles.":
        "Gli aspetti difficili non condannano una relazione. Mostrano le aree in cui consapevolezza, comunicazione e maturità diventano essenziali.",

      "Ce que les tensions cherchent à révéler":
        "Ciò che le tensioni cercano di rivelare",

      "Un défi relationnel apparaît souvent lorsqu’un besoin important s’exprime sous une forme défensive. Derrière la critique, le retrait, l’impatience ou le contrôle se trouve généralement une demande de sécurité, de reconnaissance, de liberté ou de proximité.":
        "Una difficoltà relazionale appare spesso quando un bisogno importante viene espresso in modo difensivo. Dietro la critica, il ritiro, l'impazienza o il controllo si trova generalmente un bisogno di sicurezza, riconoscimento, libertà o vicinanza.",

      "Vos principales zones de tension":
        "Le vostre principali aree di tensione",

      "Une dynamique globalement souple":
        "Una dinamica complessivamente flessibile",

      "Aucun aspect difficile majeur n’apparaît parmi les interactions personnelles les plus serrées. Cela n’élimine pas tous les désaccords, mais suggère que plusieurs tensions peuvent être résolues sans blocage durable.":
        "Nessun aspetto difficile importante emerge tra le interazioni personali più strette. Questo non elimina tutti i disaccordi, ma suggerisce che molte tensioni possono essere risolte senza blocchi duraturi.",

      "Éviter l’escalade":
        "Evitare l'escalation",

      "Lorsque l’émotion monte, cessez de chercher immédiatement qui a raison. Identifiez plutôt ce que chacun essaie de protéger ou de faire comprendre.":
        "Quando l'emozione aumenta, smettete di cercare immediatamente chi ha ragione. Cercate invece di capire ciò che ciascuno sta tentando di proteggere o comunicare.",

      "Respecter les rythmes":
        "Rispettare i ritmi",

      "L’un peut avoir besoin de parler tout de suite alors que l’autre doit d’abord retrouver son calme. Fixez un moment précis pour reprendre la discussion afin d’éviter le silence prolongé.":
        "Uno può aver bisogno di parlare subito mentre l'altro deve prima ritrovare la calma. Stabilite un momento preciso per riprendere la conversazione ed evitare un silenzio prolungato.",

      "Votre point de vigilance":
        "Il vostro punto di attenzione",

      "Ne transformez pas une différence de fonctionnement en jugement sur la valeur, l’amour ou les intentions de l’autre.":
        "Non trasformate una differenza nel modo di funzionare in un giudizio sul valore, sull'amore o sulle intenzioni dell'altro.",

      "Votre potentiel":
        "Il vostro potenziale",

      "Chaque tension comprise peut devenir une compétence relationnelle durable et rendre le couple plus solide qu’avant le conflit.":
        "Ogni tensione compresa può diventare una competenza relazionale duratura e rendere la relazione più solida di prima del conflitto.",

      "Votre clé face aux défis":
        "La vostra chiave di fronte alle sfide",

      "Utilisez des phrases centrées sur votre expérience : « je ressens », « j’ai besoin », « je comprends ». Elles réduisent la défensive et permettent d’aborder le vrai sujet sans attaquer l’identité de l’autre.":
        "Usate frasi centrate sulla vostra esperienza: «sento», «ho bisogno», «capisco». Riducono la difensiva e permettono di affrontare il vero problema senza attaccare l'identità dell'altro.",

      "Soutien, complicité et ressources communes":
        "Sostegno, complicità e risorse comuni",

      "Les forces de votre couple":
        "I punti di forza della vostra relazione",

      "Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante.":
        "I vostri punti di forza mostrano ciò che fluisce naturalmente tra voi e ciò che può sostenere la relazione quando la vita diventa più impegnativa.",

      "Votre capital relationnel":
        "Le vostre risorse relazionali",

      "Une relation durable ne repose pas uniquement sur l’absence de conflits. Elle se construit aussi grâce aux gestes, aux valeurs et aux qualités qui donnent envie de revenir l’un vers l’autre après les périodes plus difficiles.":
        "Una relazione duratura non si basa soltanto sull'assenza di conflitti. Si costruisce anche grazie ai gesti, ai valori e alle qualità che fanno desiderare di tornare l'uno verso l'altro dopo i periodi più difficili.",

      "Vos principales ressources astrologiques":
        "Le vostre principali risorse astrologiche",

      "Une force à construire consciemment":
        "Una forza da costruire consapevolmente",

      "Les aspects les plus fluides ne dominent pas nécessairement votre synastrie. Votre force peut alors venir de la volonté commune, de la fidélité aux engagements et de la capacité à apprendre réellement de vos différences.":
        "Gli aspetti più armoniosi non dominano necessariamente la vostra sinastria. La vostra forza può quindi derivare dalla volontà comune, dalla fedeltà agli impegni e dalla capacità di imparare realmente dalle vostre differenze.",

      "Votre lien affectif":
        "Il vostro legame affettivo",

      "La tendresse, la reconnaissance et les gestes simples nourrissent la sécurité du couple bien davantage que les grandes déclarations occasionnelles.":
        "La tenerezza, il riconoscimento e i gesti semplici alimentano la sicurezza della relazione molto più delle grandi dichiarazioni occasionali.",

      "Votre esprit d’équipe":
        "Il vostro spirito di squadra",

      "Vous devenez particulièrement forts lorsque le problème est placé devant vous plutôt qu’entre vous et que chacun contribue selon ses capacités.":
        "Diventate particolarmente forti quando il problema viene posto davanti a voi anziché tra voi e ciascuno contribuisce secondo le proprie capacità.",

      "Ce qui vous unit":
        "Ciò che vi unisce",

      "Le sentiment d’être compris, choisi et soutenu peut devenir une base très puissante pour vos décisions communes.":
        "La sensazione di essere compresi, scelti e sostenuti può diventare una base molto potente per le vostre decisioni comuni.",

      "Ce qui vous protège":
        "Ciò che protegge la vostra relazione",

      "Votre capacité à vous rappeler les qualités de l’autre empêche les tensions temporaires de définir toute la relation.":
        "La vostra capacità di ricordare le qualità dell'altro impedisce alle tensioni temporanee di definire l'intera relazione.",

      "Votre clé de complicité":
        "La vostra chiave di complicità",

      "N’attendez pas une crise pour parler de ce qui fonctionne. Nommez régulièrement les gestes que vous appréciez et les moments où vous vous êtes sentis soutenus, désirés ou compris.":
        "Non aspettate una crisi per parlare di ciò che funziona. Riconoscete regolarmente i gesti che apprezzate e i momenti in cui vi siete sentiti sostenuti, desiderati o compresi.",

      "Apprentissage, maturité et avenir commun":
        "Apprendimento, maturità e futuro comune",

      "Votre évolution ensemble":
        "La vostra evoluzione insieme",

      "Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité.":
        "La vostra relazione può diventare uno spazio di trasformazione in cui ciascuno impara ad amare con maggiore consapevolezza, libertà e responsabilità.",

      "Le chemin relationnel":
        "Il percorso relazionale",

      "Ce que votre lien vous apprend":
        "Ciò che il vostro legame vi insegna",

      "La croissance apparaît lorsque les forces sont utilisées consciemment et que les défis cessent d’être vécus comme des preuves d’incompatibilité.":
        "La crescita appare quando i punti di forza vengono utilizzati consapevolmente e le sfide smettono di essere vissute come prove di incompatibilità.",

      "Vos moteurs d’évolution":
        "I vostri motori di crescita",

      "Grandir individuellement":
        "Crescere individualmente",

      "Une relation saine permet à chacun de conserver son identité, ses intérêts et sa capacité de décision sans menacer la proximité affective.":
        "Una relazione sana permette a ciascuno di conservare la propria identità, i propri interessi e la capacità decisionale senza minacciare la vicinanza affettiva.",

      "Grandir ensemble":
        "Crescere insieme",

      "Les projets communs donnent une direction au couple lorsqu’ils sont choisis librement et révisés à mesure que vos réalités évoluent.":
        "I progetti comuni danno una direzione alla relazione quando vengono scelti liberamente e rivisti man mano che le vostre realtà evolvono.",

      "Votre prochaine étape":
        "Il vostro prossimo passo",

      "Définir un objectif commun concret qui nourrit à la fois la sécurité du lien et le développement personnel de chacun.":
        "Definire un obiettivo comune concreto che alimenti sia la sicurezza del legame sia lo sviluppo personale di ciascuno.",

      "Votre potentiel à long terme":
        "Il vostro potenziale a lungo termine",

      "La durée devient réelle lorsque l’engagement reste vivant : choisi, exprimé et adapté plutôt que simplement supposé.":
        "La durata diventa reale quando l'impegno rimane vivo: scelto, espresso e adattato anziché semplicemente dato per scontato.",

      "Votre vision commune":
        "La vostra visione comune",

      "Votre relation n’a pas besoin d’être parfaite pour être profondément constructive. Elle a surtout besoin d’un espace où les besoins peuvent évoluer, où les erreurs peuvent être réparées et où les décisions importantes restent alignées sur vos valeurs communes.":
        "La vostra relazione non deve essere perfetta per essere profondamente costruttiva. Ha soprattutto bisogno di uno spazio in cui i bisogni possano evolvere, gli errori possano essere riparati e le decisioni importanti restino allineate ai vostri valori comuni.",

      "Votre clé d’évolution":
        "La vostra chiave di evoluzione",

      "Une fois par mois, prenez un moment pour répondre ensemble à trois questions : qu’est-ce qui nous rapproche actuellement, qu’est-ce qui nous éloigne, et quel petit changement concret voulons-nous essayer?":
        "Una volta al mese, prendetevi un momento per rispondere insieme a tre domande: cosa ci avvicina in questo momento, cosa ci allontana e quale piccolo cambiamento concreto vogliamo provare?",

      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.":
        "Si impegna attraverso l'azione e preferisce costruire il legame senza perdere autonomia o slancio personale.",

      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.":
        "Cerca una relazione stabile, fedele e concreta, sostenuta da abitudini affidabili e da una sicurezza condivisa.",

      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.":
        "Ha bisogno di un impegno flessibile e vivo, alimentato dal dialogo, dalla curiosità e dalla crescita intellettuale.",

      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.":
        "Prende seriamente l'impegno quando esiste un clima di fiducia, protezione e senso di appartenenza.",

      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.":
        "Desidera costruire un legame leale, fiero e duraturo in cui ciascuno si senta riconosciuto, valorizzato e pienamente scelto.",

      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.":
        "Dimostra il proprio impegno attraverso la presenza, il servizio, l'organizzazione e l'attenzione costante ai dettagli.",

      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.":
        "Costruisce la durata attraverso equità, cooperazione e decisioni realmente prese insieme.",

      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.":
        "Si impegna intensamente e richiede profonda lealtà, onestà emotiva e fiducia senza ambiguità.",

      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.":
        "Ha bisogno che un impegno duraturo lasci spazio anche alla libertà, ai progetti e alla crescita comune.",

      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.":
        "Valorizza la responsabilità, la costanza e la capacità di costruire pazientemente una relazione solida nel tempo.",

      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.":
        "Cerca un impegno autentico fondato sull'amicizia, sul rispetto delle differenze e su una visione comune.",

      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.":
        "Si impegna attraverso compassione e dedizione, ma deve mantenere limiti chiari per non assorbire tutto.",

      "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée.":
        "Sono necessari ulteriori dati astrologici per precisare questo modo di vivere l'impegno.",

      "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.":
        "Questo aspetto favorisce affidabilità, pazienza e capacità di attraversare le fasi importanti con maturità.",

      "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.":
        "Questo aspetto può creare una sensazione di pressione, giudizio o limitazione, ma rivela anche ciò che deve essere consolidato.",

      "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.":
        "Questa connessione conferisce al legame un peso particolare e può rafforzare il senso di responsabilità reciproca.",

      "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.":
        "Questa interazione richiede un vero adattamento. Le reazioni automatiche possono creare tensione finché non vengono riconosciute.",

      "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.":
        "Anche un'energia armoniosa può diventare automatica. La consapevolezza di questa dinamica evita di dare per scontati i bisogni dell'altro.",

      "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.":
        "Questa interazione sostiene naturalmente la cooperazione, l'affetto e la capacità di ritrovare un terreno comune.",

      "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.":
        "Questa congiunzione concentra una grande energia comune e conferisce alla relazione una notevole capacità di agire insieme.",

      "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.":
        "Questa differenza può diventare una forza quando ciascuno porta la propria prospettiva senza cercare di cancellare quella dell'altro.",

      "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.":
        "Questa interazione aiuta la relazione a trasformare le esperienze in apprendimento e a progredire con maggiore fiducia.",

      "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.":
        "Questa tensione agisce come motore di evoluzione. Invita ciascuno a superare una vecchia reazione e a creare una risposta più consapevole.",

      "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.":
        "Questa connessione segna una tappa importante del percorso relazionale e favorisce una comprensione più profonda di sé attraverso l'altro.",
    },

    signs: {
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
      "Non précisé": "Non specificato",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
      Jupiter: "Giove",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Nettuno",
      Pluton: "Plutone",
    },

    aspects: {
      Conjonction: "Congiunzione",
      Opposition: "Opposizione",
      Trigone: "Trigono",
      Carré: "Quadratura",
      Sextile: "Sestile",
      Quinconce: "Quinconce",
    },

    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
      "Non précisé": "Non specificato",
    },

    modalities: {
      Cardinal: "Cardinale",
      Fixe: "Fissa",
      Mutable: "Mutevole",
      "Non précisé": "Non specificata",
    },

    saturnIn:
      "Saturno in",

    orbWord:
      "orbita",

    saturnCompatibility: {
      missing:
        "Non tutte le posizioni di Saturno sono disponibili. L'analisi della stabilità e dell'impegno rimane quindi parziale.",

      sameSign:
        "I vostri due Saturno in {sign1} indicano una concezione molto simile delle responsabilità. ",

      sameSignEnd:
        "Potete costruire con le stesse priorità, ma anche rafforzare le stesse rigidità o paure.",

      sameElement:
        "I vostri Saturno in {sign1} e {sign2} appartengono allo stesso elemento, {element1}. ",

      sameElementEnd:
        "Il vostro rapporto con il tempo, gli sforzi e la sicurezza poggia su una base compatibile che facilita i progetti duraturi.",

      sameModality:
        "I vostri Saturno condividono la modalità {modality1}. ",

      sameModalityEnd:
        "Potete riconoscere nell'altro un ritmo di impegno familiare, anche se i modi concreti di rendere sicuro il legame sono diversi.",

      different:
        "I vostri Saturno in {sign1} e {sign2} non costruiscono la sicurezza nello stesso modo. ",

      differentEnd:
        "La durata diventa possibile quando le regole della relazione, le responsabilità e le aspettative vengono espresse chiaramente invece di essere date per scontate.",
    },

    growthText:
      "Con Saturno in {sign1} e {sign2}, la vostra relazione impara a definire la propria forma di stabilità. Il legame evolve quando sostituite le reazioni automatiche con scelte chiare, ripetute e coerenti con la relazione che desiderate realmente costruire.",
  },

  pt: {
    text: {
      "Première personne": "Primeira pessoa",
      "Deuxième personne": "Segunda pessoa",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",

      "Durée, structure et responsabilité":
        "Duração, estrutura e responsabilidade",

      "Saturne et votre engagement":
        "Saturno e o seu compromisso",

      "Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps.":
        "Saturno revela aquilo de que a sua relação necessita para se tornar estável, fiável e capaz de resistir ao tempo.",

      "Engagement, maturité et long terme":
        "Compromisso, maturidade e longo prazo",

      "La rencontre de vos deux Saturne":
        "O encontro dos seus dois Saturnos",

      "Cette comparaison montre comment chacun construit la confiance, assume les responsabilités et envisage la durée du lien.":
        "Esta comparação mostra como cada pessoa constrói confiança, assume responsabilidades e encara a duração da ligação.",

      "Votre manière de construire":
        "A sua forma de construir",

      "Vos principales interactions d’engagement":
        "As suas principais dinâmicas de compromisso",

      "Votre clé de stabilité":
        "A sua chave de estabilidade",

      "Transformez les attentes implicites en accords concrets. Parlez clairement du temps, de l’argent, des responsabilités, des limites et des projets afin que la sécurité repose sur une réalité partagée.":
        "Transformem expectativas implícitas em acordos concretos. Falem claramente sobre tempo, dinheiro, responsabilidades, limites e projetos para que a segurança assente numa realidade partilhada.",

      "Tensions, différences et ajustements":
        "Tensões, diferenças e ajustes",

      "Les défis de votre couple":
        "Os desafios da sua relação",

      "Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles.":
        "Os aspetos difíceis não condenam uma relação. Mostram as áreas onde a consciência, a comunicação e a maturidade se tornam essenciais.",

      "Ce que les tensions cherchent à révéler":
        "O que as tensões procuram revelar",

      "Un défi relationnel apparaît souvent lorsqu’un besoin important s’exprime sous une forme défensive. Derrière la critique, le retrait, l’impatience ou le contrôle se trouve généralement une demande de sécurité, de reconnaissance, de liberté ou de proximité.":
        "Um desafio relacional surge muitas vezes quando uma necessidade importante é expressa de forma defensiva. Por trás da crítica, do afastamento, da impaciência ou do controlo existe geralmente uma necessidade de segurança, reconhecimento, liberdade ou proximidade.",

      "Vos principales zones de tension":
        "As suas principais áreas de tensão",

      "Une dynamique globalement souple":
        "Uma dinâmica globalmente flexível",

      "Aucun aspect difficile majeur n’apparaît parmi les interactions personnelles les plus serrées. Cela n’élimine pas tous les désaccords, mais suggère que plusieurs tensions peuvent être résolues sans blocage durable.":
        "Nenhum aspeto difícil importante aparece entre as interações pessoais mais próximas. Isto não elimina todos os desacordos, mas sugere que muitas tensões podem ser resolvidas sem bloqueios duradouros.",

      "Éviter l’escalade":
        "Evitar a escalada",

      "Lorsque l’émotion monte, cessez de chercher immédiatement qui a raison. Identifiez plutôt ce que chacun essaie de protéger ou de faire comprendre.":
        "Quando a emoção aumenta, deixem de procurar imediatamente quem tem razão. Identifiquem antes aquilo que cada pessoa procura proteger ou fazer compreender.",

      "Respecter les rythmes":
        "Respeitar os ritmos",

      "L’un peut avoir besoin de parler tout de suite alors que l’autre doit d’abord retrouver son calme. Fixez un moment précis pour reprendre la discussion afin d’éviter le silence prolongé.":
        "Uma pessoa pode precisar de falar imediatamente enquanto a outra necessita primeiro de recuperar a calma. Marquem um momento específico para retomar a conversa e evitar um silêncio prolongado.",

      "Votre point de vigilance":
        "O seu ponto de atenção",

      "Ne transformez pas une différence de fonctionnement en jugement sur la valeur, l’amour ou les intentions de l’autre.":
        "Não transformem uma diferença de funcionamento num julgamento sobre o valor, o amor ou as intenções da outra pessoa.",

      "Votre potentiel":
        "O seu potencial",

      "Chaque tension comprise peut devenir une compétence relationnelle durable et rendre le couple plus solide qu’avant le conflit.":
        "Cada tensão compreendida pode tornar-se uma competência relacional duradoura e tornar a relação mais sólida do que antes do conflito.",

      "Votre clé face aux défis":
        "A sua chave perante os desafios",

      "Utilisez des phrases centrées sur votre expérience : « je ressens », « j’ai besoin », « je comprends ». Elles réduisent la défensive et permettent d’aborder le vrai sujet sans attaquer l’identité de l’autre.":
        "Utilizem frases centradas na vossa própria experiência: «eu sinto», «eu preciso», «eu compreendo». Elas reduzem a defensividade e permitem abordar o verdadeiro assunto sem atacar a identidade da outra pessoa.",

      "Soutien, complicité et ressources communes":
        "Apoio, cumplicidade e recursos comuns",

      "Les forces de votre couple":
        "Os pontos fortes da sua relação",

      "Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante.":
        "Os seus pontos fortes mostram aquilo que flui naturalmente entre vocês e o que pode sustentar a relação quando a vida se torna mais exigente.",

      "Votre capital relationnel":
        "Os seus recursos relacionais",

      "Une relation durable ne repose pas uniquement sur l’absence de conflits. Elle se construit aussi grâce aux gestes, aux valeurs et aux qualités qui donnent envie de revenir l’un vers l’autre après les périodes plus difficiles.":
        "Uma relação duradoura não depende apenas da ausência de conflitos. Também se constrói através dos gestos, valores e qualidades que fazem com que desejem voltar um para o outro depois de períodos mais difíceis.",

      "Vos principales ressources astrologiques":
        "Os seus principais recursos astrológicos",

      "Une force à construire consciemment":
        "Uma força a construir conscientemente",

      "Les aspects les plus fluides ne dominent pas nécessairement votre synastrie. Votre force peut alors venir de la volonté commune, de la fidélité aux engagements et de la capacité à apprendre réellement de vos différences.":
        "Os aspetos mais harmoniosos não dominam necessariamente a sua sinastria. A sua força pode então vir da vontade comum, da fidelidade aos compromissos e da capacidade de aprender verdadeiramente com as diferenças.",

      "Votre lien affectif":
        "A sua ligação afetiva",

      "La tendresse, la reconnaissance et les gestes simples nourrissent la sécurité du couple bien davantage que les grandes déclarations occasionnelles.":
        "A ternura, o reconhecimento e os gestos simples alimentam a segurança da relação muito mais do que grandes declarações ocasionais.",

      "Votre esprit d’équipe":
        "O seu espírito de equipa",

      "Vous devenez particulièrement forts lorsque le problème est placé devant vous plutôt qu’entre vous et que chacun contribue selon ses capacités.":
        "Tornam-se particularmente fortes quando o problema é colocado à vossa frente em vez de entre vocês e cada pessoa contribui de acordo com as suas capacidades.",

      "Ce qui vous unit":
        "O que vos une",

      "Le sentiment d’être compris, choisi et soutenu peut devenir une base très puissante pour vos décisions communes.":
        "A sensação de serem compreendidos, escolhidos e apoiados pode tornar-se uma base muito poderosa para as vossas decisões comuns.",

      "Ce qui vous protège":
        "O que protege a relação",

      "Votre capacité à vous rappeler les qualités de l’autre empêche les tensions temporaires de définir toute la relation.":
        "A capacidade de se lembrarem das qualidades um do outro impede que tensões temporárias definam toda a relação.",

      "Votre clé de complicité":
        "A sua chave de cumplicidade",

      "N’attendez pas une crise pour parler de ce qui fonctionne. Nommez régulièrement les gestes que vous appréciez et les moments où vous vous êtes sentis soutenus, désirés ou compris.":
        "Não esperem por uma crise para falar do que funciona. Reconheçam regularmente os gestos que apreciam e os momentos em que se sentiram apoiados, desejados ou compreendidos.",

      "Apprentissage, maturité et avenir commun":
        "Aprendizagem, maturidade e futuro comum",

      "Votre évolution ensemble":
        "A sua evolução em conjunto",

      "Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité.":
        "A sua relação pode tornar-se um espaço de transformação onde cada pessoa aprende a amar com maior consciência, liberdade e responsabilidade.",

      "Le chemin relationnel":
        "O caminho da relação",

      "Ce que votre lien vous apprend":
        "O que a sua ligação vos ensina",

      "La croissance apparaît lorsque les forces sont utilisées consciemment et que les défis cessent d’être vécus comme des preuves d’incompatibilité.":
        "O crescimento surge quando os pontos fortes são utilizados conscientemente e os desafios deixam de ser vividos como provas de incompatibilidade.",

      "Vos moteurs d’évolution":
        "Os seus motores de evolução",

      "Grandir individuellement":
        "Crescer individualmente",

      "Une relation saine permet à chacun de conserver son identité, ses intérêts et sa capacité de décision sans menacer la proximité affective.":
        "Uma relação saudável permite que cada pessoa preserve a sua identidade, interesses e capacidade de decisão sem ameaçar a proximidade afetiva.",

      "Grandir ensemble":
        "Crescer juntos",

      "Les projets communs donnent une direction au couple lorsqu’ils sont choisis librement et révisés à mesure que vos réalités évoluent.":
        "Os projetos comuns dão direção à relação quando são escolhidos livremente e revistos à medida que as vossas realidades evoluem.",

      "Votre prochaine étape":
        "O seu próximo passo",

      "Définir un objectif commun concret qui nourrit à la fois la sécurité du lien et le développement personnel de chacun.":
        "Definir um objetivo comum concreto que alimente tanto a segurança da ligação como o desenvolvimento pessoal de cada um.",

      "Votre potentiel à long terme":
        "O seu potencial a longo prazo",

      "La durée devient réelle lorsque l’engagement reste vivant : choisi, exprimé et adapté plutôt que simplement supposé.":
        "A duração torna-se real quando o compromisso permanece vivo: escolhido, expresso e adaptado em vez de simplesmente presumido.",

      "Votre vision commune":
        "A sua visão comum",

      "Votre relation n’a pas besoin d’être parfaite pour être profondément constructive. Elle a surtout besoin d’un espace où les besoins peuvent évoluer, où les erreurs peuvent être réparées et où les décisions importantes restent alignées sur vos valeurs communes.":
        "A sua relação não precisa de ser perfeita para ser profundamente construtiva. Precisa sobretudo de um espaço onde as necessidades possam evoluir, os erros possam ser reparados e as decisões importantes permaneçam alinhadas com os vossos valores comuns.",

      "Votre clé d’évolution":
        "A sua chave de evolução",

      "Une fois par mois, prenez un moment pour répondre ensemble à trois questions : qu’est-ce qui nous rapproche actuellement, qu’est-ce qui nous éloigne, et quel petit changement concret voulons-nous essayer?":
        "Uma vez por mês, reservem um momento para responder juntos a três perguntas: o que nos aproxima atualmente, o que nos afasta e que pequena mudança concreta queremos experimentar?",

      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.":
        "Compromete-se através da ação e prefere construir a ligação sem perder autonomia nem impulso pessoal.",

      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.":
        "Procura uma relação estável, fiel e concreta, apoiada em hábitos fiáveis e numa segurança partilhada.",

      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.":
        "Precisa de um compromisso flexível e vivo, alimentado pelo diálogo, pela curiosidade e pelo crescimento intelectual.",

      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.":
        "Leva o compromisso a sério quando existe um ambiente de confiança, proteção e sentimento de pertença.",

      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.":
        "Deseja construir uma ligação leal, orgulhosa e duradoura onde cada pessoa se sinta reconhecida, valorizada e plenamente escolhida.",

      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.":
        "Demonstra o compromisso através da presença, do apoio, da organização e da atenção constante aos detalhes.",

      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.":
        "Constrói a duração através da equidade, da cooperação e de decisões verdadeiramente tomadas em conjunto.",

      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.":
        "Compromete-se intensamente e exige lealdade profunda, honestidade emocional e confiança sem ambiguidades.",

      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.":
        "Precisa que um compromisso duradouro deixe também espaço para liberdade, projetos e crescimento conjunto.",

      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.":
        "Valoriza a responsabilidade, a constância e a capacidade de construir pacientemente uma relação sólida ao longo do tempo.",

      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.":
        "Procura um compromisso autêntico baseado na amizade, no respeito pelas diferenças e numa visão comum.",

      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.":
        "Compromete-se através da compaixão e dedicação, mas precisa de manter limites claros para não absorver tudo.",

      "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée.":
        "São necessários mais dados astrológicos para precisar esta forma de abordar o compromisso.",

      "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.":
        "Este aspeto favorece a fiabilidade, a paciência e a capacidade de atravessar etapas importantes com maturidade.",

      "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.":
        "Este aspeto pode criar uma sensação de pressão, julgamento ou limitação, mas também revela aquilo que precisa de ser consolidado.",

      "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.":
        "Esta conexão dá à ligação um peso particular e pode reforçar o sentimento de responsabilidade mútua.",

      "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.":
        "Esta interação exige um verdadeiro ajuste. As reações automáticas podem criar tensão enquanto não forem reconhecidas.",

      "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.":
        "Mesmo uma energia harmoniosa pode tornar-se automática. A consciência desta dinâmica evita dar por garantidas as necessidades da outra pessoa.",

      "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.":
        "Esta interação apoia naturalmente a cooperação, o afeto e a capacidade de encontrar um terreno comum.",

      "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.":
        "Esta conjunção concentra uma grande energia comum e dá à relação uma importante capacidade de ação conjunta.",

      "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.":
        "Esta diferença pode tornar-se uma força quando cada pessoa apresenta a sua perspetiva sem tentar apagar a da outra.",

      "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.":
        "Esta interação ajuda a relação a transformar experiências em aprendizagem e a avançar com maior confiança.",

      "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.":
        "Esta tensão atua como motor de evolução. Convida cada pessoa a ultrapassar uma antiga reação e a criar uma resposta mais consciente.",

      "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.":
        "Esta conexão marca uma etapa importante do caminho relacional e favorece uma compreensão mais profunda de si através da outra pessoa.",
    },

    signs: {
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
      "Non précisé": "Não especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Netuno",
      Pluton: "Plutão",
    },

    aspects: {
      Conjonction: "Conjunção",
      Opposition: "Oposição",
      Trigone: "Trígono",
      Carré: "Quadratura",
      Sextile: "Sextil",
      Quinconce: "Quincúncio",
    },

    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
      "Non précisé": "Não especificado",
    },

    modalities: {
      Cardinal: "Cardinal",
      Fixe: "Fixa",
      Mutable: "Mutável",
      "Non précisé": "Não especificada",
    },

    saturnIn:
      "Saturno em",

    orbWord:
      "orbe",

    saturnCompatibility: {
      missing:
        "Nem todas as posições de Saturno estão disponíveis. A análise da estabilidade e do compromisso permanece, portanto, parcial.",

      sameSign:
        "Os seus dois Saturnos em {sign1} indicam uma conceção muito semelhante das responsabilidades. ",

      sameSignEnd:
        "Podem construir com as mesmas prioridades, mas também reforçar as mesmas rigidezes ou receios.",

      sameElement:
        "Os seus Saturnos em {sign1} e {sign2} pertencem ao mesmo elemento, {element1}. ",

      sameElementEnd:
        "A sua relação com o tempo, os esforços e a segurança assenta numa base compatível que facilita projetos duradouros.",

      sameModality:
        "Os seus Saturnos partilham a modalidade {modality1}. ",

      sameModalityEnd:
        "Podem reconhecer na outra pessoa um ritmo de compromisso familiar, mesmo que as formas concretas de criar segurança sejam diferentes.",

      different:
        "Os seus Saturnos em {sign1} e {sign2} não constroem segurança da mesma forma. ",

      differentEnd:
        "A duração torna-se possível quando as regras da relação, as responsabilidades e as expectativas são claramente expressas em vez de presumidas.",
    },

    growthText:
      "Com Saturno em {sign1} e {sign2}, a sua relação aprende a definir a sua própria forma de estabilidade. A ligação evolui quando substituem reações automáticas por escolhas claras, repetidas e coerentes com a relação que realmente desejam construir.",
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (
    const replacement
    of sorted
  ) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

/*
 * IMPORTANT :
 *
 * On traduit seulement :
 *
 * - les textes JSX visibles;
 * - les attributs JSX texte;
 * - les fallbacks de noms.
 *
 * On ne traduit PAS les valeurs
 * techniques utilisées par :
 *
 * getElement()
 * getModality()
 * isPlanet()
 * etc.
 */
function localizeSafeLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityCouple.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isJsxText(node)
    ) {
      const original =
        normalizeVisibleText(
          node.getText(
            sourceFile,
          ),
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              translated,
            )}}`,
        });
      }
    }

    if (
      ts.isStringLiteral(node) &&
      ts.isJsxAttribute(
        node.parent,
      )
    ) {
      const original =
        normalizeVisibleText(
          node.text,
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
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

    /*
     * Les deux fallbacks sont
     * uniquement des noms visibles.
     */
    if (
      ts.isStringLiteral(node) &&
      (
        node.text ===
          "Première personne" ||
        node.text ===
          "Deuxième personne"
      )
    ) {
      const translated =
        translations[node.text];

      if (translated) {
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
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  data: CoupleLocaleData,
): string {
  return `
const __COUPLE_TEXT =
  ${JSON.stringify(
    data.text,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_MODALITIES =
  ${JSON.stringify(
    data.modalities,
    null,
    2,
  )} as Record<string, string>;

const __COUPLE_SATURN_IN =
  ${JSON.stringify(
    data.saturnIn,
  )};

const __COUPLE_ORB_WORD =
  ${JSON.stringify(
    data.orbWord,
  )};

const __COUPLE_SATURN_COMPATIBILITY =
  ${JSON.stringify(
    data.saturnCompatibility,
    null,
    2,
  )};

const __COUPLE_GROWTH_TEXT =
  ${JSON.stringify(
    data.growthText,
  )};

function localizeCoupleText(
  value: string,
): string {
  return (
    __COUPLE_TEXT[value] ??
    value
  );
}

function localizeCoupleSign(
  value: string,
): string {
  return (
    __COUPLE_SIGNS[value] ??
    value
  );
}

function localizeCouplePlanet(
  value: string,
): string {
  return (
    __COUPLE_PLANETS[value] ??
    value
  );
}

function localizeCoupleAspect(
  value: string,
): string {
  return (
    __COUPLE_ASPECTS[value] ??
    value
  );
}

function localizeCoupleElement(
  value: string,
): string {
  return (
    __COUPLE_ELEMENTS[value] ??
    value
  );
}

function localizeCoupleModality(
  value: string,
): string {
  return (
    __COUPLE_MODALITIES[value] ??
    value
  );
}

function buildLocalizedSaturnCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      __COUPLE_SATURN_COMPATIBILITY
        .missing
    );
  }

  const element1 =
    getElement(sign1);

  const element2 =
    getElement(sign2);

  const modality1 =
    getModality(sign1);

  const modality2 =
    getModality(sign2);

  const displaySign1 =
    localizeCoupleSign(
      sign1,
    );

  const displaySign2 =
    localizeCoupleSign(
      sign2,
    );

  if (
    normalizeValue(sign1) ===
    normalizeValue(sign2)
  ) {
    return (
      __COUPLE_SATURN_COMPATIBILITY
        .sameSign
        .replace(
          "{sign1}",
          displaySign1,
        ) +
      __COUPLE_SATURN_COMPATIBILITY
        .sameSignEnd
    );
  }

  if (
    element1 === element2
  ) {
    return (
      __COUPLE_SATURN_COMPATIBILITY
        .sameElement
        .replace(
          "{sign1}",
          displaySign1,
        )
        .replace(
          "{sign2}",
          displaySign2,
        )
        .replace(
          "{element1}",
          localizeCoupleElement(
            element1,
          ),
        ) +
      __COUPLE_SATURN_COMPATIBILITY
        .sameElementEnd
    );
  }

  if (
    modality1 === modality2
  ) {
    return (
      __COUPLE_SATURN_COMPATIBILITY
        .sameModality
        .replace(
          "{modality1}",
          localizeCoupleModality(
            modality1,
          ).toLowerCase(),
        ) +
      __COUPLE_SATURN_COMPATIBILITY
        .sameModalityEnd
    );
  }

  return (
    __COUPLE_SATURN_COMPATIBILITY
      .different
      .replace(
        "{sign1}",
        displaySign1,
      )
      .replace(
        "{sign2}",
        displaySign2,
      ) +
    __COUPLE_SATURN_COMPATIBILITY
      .differentEnd
  );
}

function buildLocalizedGrowthText(
  sign1: string,
  sign2: string,
): string {
  return __COUPLE_GROWTH_TEXT
    .replace(
      "{sign1}",
      localizeCoupleSign(
        sign1,
      ),
    )
    .replace(
      "{sign2}",
      localizeCoupleSign(
        sign2,
      ),
    );
}
`;
}

function injectHelpers(
  source: string,
  data: CoupleLocaleData,
): string {
  const marker =
    "function getPersonName(";

  if (
    !source.includes(
      marker,
    )
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
    )}\n${marker}`,
  );
}

function replaceDynamicDisplay(
  source: string,
): string {
  let output = source;

  /*
   * Saturne + signe.
   */
  output =
    output.replace(
      /Saturne en \{saturn1\}/g,
      "{__COUPLE_SATURN_IN} {localizeCoupleSign(saturn1)}",
    );

  output =
    output.replace(
      /Saturne en \{saturn2\}/g,
      "{__COUPLE_SATURN_IN} {localizeCoupleSign(saturn2)}",
    );

  /*
   * Élément + modalité.
   *
   * Les valeurs françaises restent
   * utilisées pour les calculs.
   */
  output =
    output.replace(
      /\{getElement\(saturn1\)\} •\{" "\}\s*\{getModality\(saturn1\)\}/g,
      "{localizeCoupleElement(getElement(saturn1))} •{\" \"}{localizeCoupleModality(getModality(saturn1))}",
    );

  output =
    output.replace(
      /\{getElement\(saturn2\)\} •\{" "\}\s*\{getModality\(saturn2\)\}/g,
      "{localizeCoupleElement(getElement(saturn2))} •{\" \"}{localizeCoupleModality(getModality(saturn2))}",
    );

  /*
   * Texte dynamique Saturne.
   */
  output =
    output.replace(
      /\{getSaturnCompatibilityText\(\s*saturn1,\s*saturn2,\s*\)\}/g,
      "{buildLocalizedSaturnCompatibilityText(saturn1, saturn2)}",
    );

  /*
   * Styles Saturne retournés
   * par la fonction française.
   */
  output =
    output.replace(
      /\{getSaturnStyle\(saturn1\)\}/g,
      "{localizeCoupleText(getSaturnStyle(saturn1))}",
    );

  output =
    output.replace(
      /\{getSaturnStyle\(saturn2\)\}/g,
      "{localizeCoupleText(getSaturnStyle(saturn2))}",
    );

  /*
   * Interprétation des aspects.
   */
  output =
    output.replace(
      /\{getAspectInterpretation\(\s*aspect,\s*mode,\s*\)\}/g,
      "{localizeCoupleText(getAspectInterpretation(aspect, mode))}",
    );

  /*
   * Planètes visibles dans
   * les cartes d'aspects.
   */
  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\)\}/g,
      "{localizeCouplePlanet(translateCompatibilityPlanet(aspect.person1Planet))}",
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\)\}/g,
      "{localizeCouplePlanet(translateCompatibilityPlanet(aspect.person2Planet))}",
    );

  /*
   * Aspect visible.
   */
  output =
    output.replace(
      /\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}/g,
      "{localizeCoupleAspect(translateCompatibilityAspect(aspect.type))}",
    );

  /*
   * Orbe.
   */
  output =
    output.replace(
      /• orbe \{aspect\.orb\.toFixed\(1\)\}°/g,
      "• {__COUPLE_ORB_WORD} {aspect.orb.toFixed(1)}°",
    );

  /*
   * Page Évolution :
   * paragraphe Saturne dynamique.
   */
  output =
    output.replace(
      /Avec Saturne en \{saturn1\} et en\{" "\}\s*\{saturn2\}, votre couple apprend à\s*définir sa propre forme de stabilité\.\s*Le lien évolue lorsque vous remplacez\s*les réactions automatiques par des\s*choix clairs, répétés et cohérents avec\s*la relation que vous souhaitez\s*réellement construire\./g,
      "{buildLocalizedGrowthText(saturn1, saturn2)}",
    );

  return output;
}

export function localizeCompatibilityCouple(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  let localized =
    localizeSafeLiterals(
      source,
      data.text,
    );

  localized =
    injectHelpers(
      localized,
      data,
    );

  localized =
    replaceDynamicDisplay(
      localized,
    );

  return localized;
}
