import type {
  MonthlyMantraTexts,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Signes astrologiques pris en charge
|--------------------------------------------------------------------------
*/

type MonthlyMantraZodiacSign =
  | "belier"
  | "taureau"
  | "gemeaux"
  | "cancer"
  | "lion"
  | "vierge"
  | "balance"
  | "scorpion"
  | "sagittaire"
  | "capricorne"
  | "verseau"
  | "poissons";

/*
|--------------------------------------------------------------------------
| Normalisation du signe
|--------------------------------------------------------------------------
*/

function normalizeZodiacSign(
  zodiacSign: string,
): MonthlyMantraZodiacSign {
  const normalizedSign =
    zodiacSign
      .trim()
      .toLocaleLowerCase("fr-CA")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s_-]+/g, "");

  const zodiacSignAliases:
    Record<string, MonthlyMantraZodiacSign> = {
      belier: "belier",
      aries: "belier",
      taureau: "taureau",
      taurus: "taureau",
      gemeaux: "gemeaux",
      gemini: "gemeaux",
      cancer: "cancer",
      lion: "lion",
      leo: "lion",
      vierge: "vierge",
      virgo: "vierge",
      balance: "balance",
      libra: "balance",
      scorpion: "scorpion",
      scorpio: "scorpion",
      sagittaire: "sagittaire",
      sagittarius: "sagittaire",
      capricorne: "capricorne",
      capricorn: "capricorne",
      verseau: "verseau",
      aquarius: "verseau",
      poissons: "poissons",
      pisces: "poissons",
    };

  return zodiacSignAliases[normalizedSign] ?? "belier";
}

/*
|--------------------------------------------------------------------------
| Banque de textes — mantra du mois
|--------------------------------------------------------------------------
|
| Les mantras et les affirmations restent courts afin de conserver leur
| force. Les intentions et les messages sont développés pour remplir la
| page Premium et offrir une lecture plus personnalisée.
|
*/

const MONTHLY_MANTRA_TEXTS:
  Record<MonthlyMantraZodiacSign, MonthlyMantraTexts> = {
  /*
  |--------------------------------------------------------------------------
  | Bélier
  |--------------------------------------------------------------------------
  */

  belier: {
    mantra: [
      "J’avance avec courage sans avoir besoin de tout précipiter.",
      "Mon feu intérieur éclaire ma route avec force et conscience.",
      "Je transforme mon impulsion en mouvement juste et constructif.",
      "Je choisis les combats qui méritent réellement mon énergie.",
      "Ma détermination ouvre les chemins qui correspondent à mon évolution.",
      "Je peux agir avec puissance tout en respectant mon propre rythme.",
    ],

    intention: [
      "Diriger votre énergie vers une priorité claire plutôt que vous disperser. Ce mois-ci, cette direction vous aidera à mobiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Prenez toutefois le temps de éviter la précipitation, la dispersion ou les réactions trop immédiates. En revenant à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser.",
      "Créer un nouvel élan sans forcer les résultats avant leur heure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer et observez les moments où il devient nécessaire de éviter la précipitation, la dispersion ou les réactions trop immédiates. Votre progression se consolidera grâce à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.",
      "Faire preuve d’initiative tout en laissant une place à l’écoute. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre courage, votre capacité d’initiative et votre désir naturel d’avancer, à condition de éviter la précipitation, la dispersion ou les réactions trop immédiates. Un retour régulier vers un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra de transformer votre énergie en progrès concret sans vous épuiser.",
      "Utiliser votre courage pour dépasser une ancienne hésitation. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Lorsque la tension monte, rappelez-vous de éviter la précipitation, la dispersion ou les réactions trop immédiates et choisissez plutôt un objectif clair, une action réaliste et un rythme que vous pouvez soutenir.",
      "Avancer avec confiance sans confondre vitesse et progression. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre courage, votre capacité d’initiative et votre désir naturel d’avancer avec davantage de conscience, sans oublier de éviter la précipitation, la dispersion ou les réactions trop immédiates. Chaque geste relié à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir renforcera votre sentiment d’alignement.",
      "Canaliser votre intensité dans une action concrète et durable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre courage, votre capacité d’initiative et votre désir naturel d’avancer et à mieux traverser le défi suivant : éviter la précipitation, la dispersion ou les réactions trop immédiates. En privilégiant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous créerez les conditions nécessaires pour transformer votre énergie en progrès concret sans vous épuiser.",
    ],

    affirmation: [
      "Je possède la force nécessaire pour commencer ce qui compte vraiment.",
      "Je fais confiance à mon instinct tout en prenant le temps de réfléchir.",
      "Mon courage grandit chaque fois que j’agis en accord avec moi-même.",
      "Je mérite d’occuper ma place sans devoir constamment me battre.",
      "Je transforme les obstacles en occasions de révéler ma puissance.",
      "Je suis capable de créer un mouvement positif autour de moi.",
    ],

    message: [
      "Ce mois-ci, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée. Les semaines à venir vous invitent à mieux reconnaître votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Cette qualité devient particulièrement féconde lorsque vous acceptez de éviter la précipitation, la dispersion ou les réactions trop immédiates. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à un objectif clair, une action réaliste et un rythme que vous pouvez soutenir. Vous avancerez alors avec plus de clarté et pourrez transformer votre énergie en progrès concret sans vous épuiser.",
      "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Dans les moments de doute, gardez en tête qu’il est important de éviter la précipitation, la dispersion ou les réactions trop immédiates. Une décision fondée sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir pourrait modifier durablement votre manière d’aborder la suite.",
      "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre courage, votre capacité d’initiative et votre désir naturel d’avancer, mais votre véritable avancée viendra de votre capacité à éviter la précipitation, la dispersion ou les réactions trop immédiates. En choisissant un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous donnerez une direction plus juste à votre énergie.",
      "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre courage, votre capacité d’initiative et votre désir naturel d’avancer, puis veillez à éviter la précipitation, la dispersion ou les réactions trop immédiates. Cette approche vous aidera à transformer votre énergie en progrès concret sans vous épuiser.",
      "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Pour l’utiliser pleinement, il faudra parfois accepter de éviter la précipitation, la dispersion ou les réactions trop immédiates. Le choix de un objectif clair, une action réaliste et un rythme que vous pouvez soutenir vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre courage, votre capacité d’initiative et votre désir naturel d’avancer. Restez attentif(ve) au risque de éviter la précipitation, la dispersion ou les réactions trop immédiates. En vous recentrant sur un objectif clair, une action réaliste et un rythme que vous pouvez soutenir, vous pourrez transformer votre énergie en progrès concret sans vous épuiser et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Taureau
  |--------------------------------------------------------------------------
  */

  taureau: {
    mantra: [
      "Je construis ma sécurité sans fermer la porte au changement.",
      "Je mérite une vie stable, douce et profondément alignée.",
      "Je progresse avec patience vers ce qui possède une vraie valeur.",
      "Ma constance transforme mes intentions en réalités durables.",
      "Je peux accueillir la nouveauté sans perdre mes racines.",
      "Je choisis ce qui nourrit mon corps, mon cœur et mon avenir.",
    ],

    intention: [
      "Consolider ce qui vous apporte une sécurité réelle et apaisante. Ce mois-ci, cette direction vous aidera à mobiliser votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Prenez toutefois le temps de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. En revenant à des choix simples, stables et respectueux de vos besoins essentiels, vous pourrez créer une stabilité qui demeure vivante, agréable et réellement nourrissante.",
      "Créer davantage d’espace pour le plaisir, le repos et la simplicité. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre constance, votre sens pratique et votre capacité à bâtir dans la durée et observez les moments où il devient nécessaire de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Votre progression se consolidera grâce à des choix simples, stables et respectueux de vos besoins essentiels.",
      "Faire évoluer une habitude sans bouleverser tout votre équilibre. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre constance, votre sens pratique et votre capacité à bâtir dans la durée, à condition de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Un retour régulier vers des choix simples, stables et respectueux de vos besoins essentiels vous permettra de créer une stabilité qui demeure vivante, agréable et réellement nourrissante.",
      "Reconnaître la différence entre persévérance et attachement. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Lorsque la tension monte, rappelez-vous de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement et choisissez plutôt des choix simples, stables et respectueux de vos besoins essentiels.",
      "Investir votre énergie dans ce qui possède une valeur durable. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre constance, votre sens pratique et votre capacité à bâtir dans la durée avec davantage de conscience, sans oublier de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Chaque geste relié à des choix simples, stables et respectueux de vos besoins essentiels renforcera votre sentiment d’alignement.",
      "Avancer calmement vers un objectif concret et réalisable. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre constance, votre sens pratique et votre capacité à bâtir dans la durée et à mieux traverser le défi suivant : ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. En privilégiant des choix simples, stables et respectueux de vos besoins essentiels, vous créerez les conditions nécessaires pour créer une stabilité qui demeure vivante, agréable et réellement nourrissante.",
    ],

    affirmation: [
      "Je mérite de recevoir autant que je suis capable de donner.",
      "Je suis en sécurité lorsque je choisis ce qui respecte mes besoins.",
      "Ma patience est une force qui me permet de bâtir avec solidité.",
      "Je peux changer sans perdre ce qui constitue mon essence.",
      "J’attire naturellement les situations qui soutiennent ma stabilité.",
      "Je fais confiance au rythme naturel de mon évolution.",
    ],

    message: [
      "Ce mois-ci, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien. Les semaines à venir vous invitent à mieux reconnaître votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des choix simples, stables et respectueux de vos besoins essentiels. Vous avancerez alors avec plus de clarté et pourrez créer une stabilité qui demeure vivante, agréable et réellement nourrissante.",
      "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Dans les moments de doute, gardez en tête qu’il est important de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Une décision fondée sur des choix simples, stables et respectueux de vos besoins essentiels pourrait modifier durablement votre manière d’aborder la suite.",
      "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre constance, votre sens pratique et votre capacité à bâtir dans la durée, mais votre véritable avancée viendra de votre capacité à ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. En choisissant des choix simples, stables et respectueux de vos besoins essentiels, vous donnerez une direction plus juste à votre énergie.",
      "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre constance, votre sens pratique et votre capacité à bâtir dans la durée, puis veillez à ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Cette approche vous aidera à créer une stabilité qui demeure vivante, agréable et réellement nourrissante.",
      "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. Le choix de des choix simples, stables et respectueux de vos besoins essentiels vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre constance, votre sens pratique et votre capacité à bâtir dans la durée. Restez attentif(ve) au risque de ne pas confondre sécurité et immobilité lorsque la vie demande un ajustement. En vous recentrant sur des choix simples, stables et respectueux de vos besoins essentiels, vous pourrez créer une stabilité qui demeure vivante, agréable et réellement nourrissante et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Gémeaux
  |--------------------------------------------------------------------------
  */

  gemeaux: {
    mantra: [
      "Mes idées deviennent puissantes lorsque je leur donne une direction.",
      "Je communique avec clarté, curiosité et authenticité.",
      "Je peux explorer plusieurs possibilités sans perdre mon centre.",
      "Ma voix mérite d’être entendue lorsqu’elle exprime ma vérité.",
      "Je transforme ma curiosité en compréhension profonde.",
      "Je choisis les pensées qui ouvrent mon esprit et apaisent mon cœur.",
    ],

    intention: [
      "Clarifier une idée importante avant de la partager ou de l’appliquer. Ce mois-ci, cette direction vous aidera à mobiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Prenez toutefois le temps de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En revenant à une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.",
      "Créer des échanges plus sincères et moins dispersés. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et observez les moments où il devient nécessaire de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Votre progression se consolidera grâce à une priorité claire, une parole sincère et des moments de silence.",
      "Faire de la place au silence afin de mieux entendre votre intuition. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, à condition de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Un retour régulier vers une priorité claire, une parole sincère et des moments de silence vous permettra de transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.",
      "Approfondir un sujet plutôt que multiplier les directions. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Lorsque la tension monte, rappelez-vous de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités et choisissez plutôt une priorité claire, une parole sincère et des moments de silence.",
      "Utiliser votre parole pour rapprocher plutôt que simplement convaincre. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens avec davantage de conscience, sans oublier de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Chaque geste relié à une priorité claire, une parole sincère et des moments de silence renforcera votre sentiment d’alignement.",
      "Choisir une priorité intellectuelle ou créative et la développer. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens et à mieux traverser le défi suivant : ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En privilégiant une priorité claire, une parole sincère et des moments de silence, vous créerez les conditions nécessaires pour transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.",
    ],

    affirmation: [
      "Je sais exprimer mes idées avec confiance et précision.",
      "Ma curiosité m’aide à découvrir de nouvelles possibilités.",
      "Je peux ralentir mes pensées sans perdre ma vivacité.",
      "Je suis capable de transformer mes connaissances en actions utiles.",
      "Ma parole crée des liens lorsque je l’utilise avec sincérité.",
      "Je fais confiance à mon intelligence autant qu’à mon ressenti.",
    ],

    message: [
      "Ce mois-ci, une conversation pourrait transformer votre compréhension d’une situation importante. Les semaines à venir vous invitent à mieux reconnaître votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une priorité claire, une parole sincère et des moments de silence. Vous avancerez alors avec plus de clarté et pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.",
      "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Une décision fondée sur une priorité claire, une parole sincère et des moments de silence pourrait modifier durablement votre manière d’aborder la suite.",
      "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, mais votre véritable avancée viendra de votre capacité à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En choisissant une priorité claire, une parole sincère et des moments de silence, vous donnerez une direction plus juste à votre énergie.",
      "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens, puis veillez à ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Cette approche vous aidera à transformer vos idées en décisions utiles et vos échanges en véritables ouvertures.",
      "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. Le choix de une priorité claire, une parole sincère et des moments de silence vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre curiosité, votre vivacité d’esprit et votre talent pour créer des liens. Restez attentif(ve) au risque de ne pas vous disperser entre trop d’idées, de conversations ou de possibilités. En vous recentrant sur une priorité claire, une parole sincère et des moments de silence, vous pourrez transformer vos idées en décisions utiles et vos échanges en véritables ouvertures et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Cancer
  |--------------------------------------------------------------------------
  */

  cancer: {
    mantra: [
      "J’honore mes émotions sans leur abandonner tout mon pouvoir.",
      "Ma sensibilité est une force qui m’aide à reconnaître ce qui est vrai.",
      "Je crée en moi la sécurité que je recherche autour de moi.",
      "Je protège mon énergie sans fermer mon cœur.",
      "Je mérite des relations où je peux être pleinement moi-même.",
      "Mon intuition me guide vers ce qui nourrit réellement mon âme.",
    ],

    intention: [
      "Accueillir vos émotions sans les juger ni les laisser tout diriger. Ce mois-ci, cette direction vous aidera à mobiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Prenez toutefois le temps de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En revenant à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.",
      "Renforcer votre sentiment de sécurité intérieure. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et observez les moments où il devient nécessaire de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Votre progression se consolidera grâce à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.",
      "Prendre soin de vous avec la même attention que vous offrez aux autres. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, à condition de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Un retour régulier vers des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra de retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.",
      "Exprimer un besoin affectif avec simplicité et honnêteté. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Lorsque la tension monte, rappelez-vous de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent et choisissez plutôt des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins.",
      "Créer des limites qui protègent votre sensibilité. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte avec davantage de conscience, sans oublier de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Chaque geste relié à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins renforcera votre sentiment d’alignement.",
      "Vous rapprocher des personnes et des lieux qui vous apaisent. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte et à mieux traverser le défi suivant : ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En privilégiant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous créerez les conditions nécessaires pour retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.",
    ],

   affirmation: [
  "Mes émotions sont légitimes, et je les accueille avec douceur, confiance et compassion, car elles m’aident à mieux comprendre mes besoins les plus profonds.",

  "Je mérite de recevoir un amour stable, respectueux et rassurant, où je peux être pleinement moi-même sans avoir à cacher ma véritable sensibilité.",

  "Je peux poser des limites saines avec calme et bienveillance, tout en préservant mon équilibre émotionnel et le respect que je me porte.",

  "Mon intuition me guide avec justesse et me permet de reconnaître naturellement les personnes, les situations et les choix qui sont réellement bénéfiques pour moi.",

  "Je deviens chaque jour mon propre refuge en cultivant la paix intérieure, la confiance en moi et la sécurité dont j’ai profondément besoin.",

  "Je libère avec sérénité les souvenirs qui n’ont plus leur place dans ma vie afin d’avancer plus librement vers un avenir rempli de confiance et d’espoir.",
],

    message: [
      "Ce mois-ci, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître. Les semaines à venir vous invitent à mieux reconnaître votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins. Vous avancerez alors avec plus de clarté et pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.",
      "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Dans les moments de doute, gardez en tête qu’il est important de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Une décision fondée sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins pourrait modifier durablement votre manière d’aborder la suite.",
      "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, mais votre véritable avancée viendra de votre capacité à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En choisissant des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous donnerez une direction plus juste à votre énergie.",
      "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte, puis veillez à ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Cette approche vous aidera à retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement.",
      "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. Le choix de des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sensibilité, votre intuition et votre capacité à prendre soin de ce qui compte. Restez attentif(ve) au risque de ne pas porter seul(e) les émotions des autres ni laisser le passé diriger le présent. En vous recentrant sur des limites bienveillantes, un espace sécurisant et une écoute honnête de vos besoins, vous pourrez retrouver une sécurité intérieure qui ne dépend pas uniquement de votre environnement et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Lion
  |--------------------------------------------------------------------------
  */

  lion: {
    mantra: [
      "Je rayonne sans avoir besoin de diminuer la lumière des autres.",
      "Ma créativité mérite d’être vécue, exprimée et partagée.",
      "Je prends ma place avec cœur, confiance et générosité.",
      "Ma valeur ne dépend pas du regard que les autres portent sur moi.",
      "Je laisse mon authenticité devenir ma plus grande force.",
      "Je mérite d’être reconnu pour ce que je suis réellement.",
    ],

    intention: [
      "Exprimer votre créativité sans attendre une validation extérieure. Ce mois-ci, cette direction vous aidera à mobiliser votre créativité, votre chaleur et votre capacité naturelle à inspirer. Prenez toutefois le temps de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. En revenant à une expression authentique, un projet qui vous ressemble et le plaisir de créer, vous pourrez rayonner avec confiance sans avoir à forcer, prouver ou impressionner.",
      "Occuper votre place avec confiance et simplicité. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre créativité, votre chaleur et votre capacité naturelle à inspirer et observez les moments où il devient nécessaire de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Votre progression se consolidera grâce à une expression authentique, un projet qui vous ressemble et le plaisir de créer.",
      "Diriger votre énergie vers ce qui vous rend véritablement fier. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre créativité, votre chaleur et votre capacité naturelle à inspirer, à condition de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Un retour régulier vers une expression authentique, un projet qui vous ressemble et le plaisir de créer vous permettra de rayonner avec confiance sans avoir à forcer, prouver ou impressionner.",
      "Partager votre lumière sans vous épuiser à impressionner. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre créativité, votre chaleur et votre capacité naturelle à inspirer. Lorsque la tension monte, rappelez-vous de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur et choisissez plutôt une expression authentique, un projet qui vous ressemble et le plaisir de créer.",
      "Reconnaître votre valeur au-delà des résultats visibles. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre créativité, votre chaleur et votre capacité naturelle à inspirer avec davantage de conscience, sans oublier de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Chaque geste relié à une expression authentique, un projet qui vous ressemble et le plaisir de créer renforcera votre sentiment d’alignement.",
      "Faire un choix qui reflète davantage votre personnalité profonde. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre créativité, votre chaleur et votre capacité naturelle à inspirer et à mieux traverser le défi suivant : ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. En privilégiant une expression authentique, un projet qui vous ressemble et le plaisir de créer, vous créerez les conditions nécessaires pour rayonner avec confiance sans avoir à forcer, prouver ou impressionner.",
    ],

    affirmation: [
      "Je mérite d’être vu, entendu et apprécié tel que je suis.",
      "Ma présence apporte naturellement de la chaleur autour de moi.",
      "Je crée avec confiance lorsque je reste fidèle à mon inspiration.",
      "Je peux recevoir les compliments sans remettre ma valeur en question.",
      "Mon cœur me guide vers les projets qui méritent mon engagement.",
      "Je n’ai pas besoin de prouver ma lumière pour avoir le droit de briller.",
    ],

    message: [
      "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez. Les semaines à venir vous invitent à mieux reconnaître votre créativité, votre chaleur et votre capacité naturelle à inspirer. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une expression authentique, un projet qui vous ressemble et le plaisir de créer. Vous avancerez alors avec plus de clarté et pourrez rayonner avec confiance sans avoir à forcer, prouver ou impressionner.",
      "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre créativité, votre chaleur et votre capacité naturelle à inspirer. Dans les moments de doute, gardez en tête qu’il est important de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Une décision fondée sur une expression authentique, un projet qui vous ressemble et le plaisir de créer pourrait modifier durablement votre manière d’aborder la suite.",
      "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre créativité, votre chaleur et votre capacité naturelle à inspirer, mais votre véritable avancée viendra de votre capacité à ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. En choisissant une expression authentique, un projet qui vous ressemble et le plaisir de créer, vous donnerez une direction plus juste à votre énergie.",
      "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre créativité, votre chaleur et votre capacité naturelle à inspirer, puis veillez à ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Cette approche vous aidera à rayonner avec confiance sans avoir à forcer, prouver ou impressionner.",
      "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre créativité, votre chaleur et votre capacité naturelle à inspirer. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. Le choix de une expression authentique, un projet qui vous ressemble et le plaisir de créer vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre créativité, votre chaleur et votre capacité naturelle à inspirer. Restez attentif(ve) au risque de ne pas mesurer votre valeur uniquement à la reconnaissance ou au regard extérieur. En vous recentrant sur une expression authentique, un projet qui vous ressemble et le plaisir de créer, vous pourrez rayonner avec confiance sans avoir à forcer, prouver ou impressionner et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Vierge
  |--------------------------------------------------------------------------
  */

  vierge: {
    mantra: [
      "Je progresse sans exiger de moi une perfection impossible.",
      "Chaque petit geste conscient améliore durablement ma vie.",
      "Je mérite le repos même lorsque tout n’est pas terminé.",
      "Je transforme mon sens du détail en force plutôt qu’en pression.",
      "Je peux faire confiance à la vie sans vouloir tout contrôler.",
      "Je reconnais la valeur de mes efforts autant que celle de mes résultats.",
    ],

    intention: [
      "Simplifier une responsabilité devenue inutilement compliquée. Ce mois-ci, cette direction vous aidera à mobiliser votre discernement, votre sens du détail et votre capacité à améliorer les choses. Prenez toutefois le temps de ne pas transformer votre exigence en pression constante ou en autocritique. En revenant à une méthode simple, des attentes réalistes et une place véritable accordée au repos, vous pourrez avancer avec précision tout en préservant votre énergie et votre sérénité.",
      "Remplacer l’autocritique par une observation plus constructive. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre discernement, votre sens du détail et votre capacité à améliorer les choses et observez les moments où il devient nécessaire de ne pas transformer votre exigence en pression constante ou en autocritique. Votre progression se consolidera grâce à une méthode simple, des attentes réalistes et une place véritable accordée au repos.",
      "Créer une routine qui soutient réellement votre bien-être. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre discernement, votre sens du détail et votre capacité à améliorer les choses, à condition de ne pas transformer votre exigence en pression constante ou en autocritique. Un retour régulier vers une méthode simple, des attentes réalistes et une place véritable accordée au repos vous permettra de avancer avec précision tout en préservant votre énergie et votre sérénité.",
      "Accepter qu’une solution suffisamment bonne puisse être la meilleure. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre discernement, votre sens du détail et votre capacité à améliorer les choses. Lorsque la tension monte, rappelez-vous de ne pas transformer votre exigence en pression constante ou en autocritique et choisissez plutôt une méthode simple, des attentes réalistes et une place véritable accordée au repos.",
      "Vous libérer d’une tâche ou d’une attente qui vous épuise. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre discernement, votre sens du détail et votre capacité à améliorer les choses avec davantage de conscience, sans oublier de ne pas transformer votre exigence en pression constante ou en autocritique. Chaque geste relié à une méthode simple, des attentes réalistes et une place véritable accordée au repos renforcera votre sentiment d’alignement.",
      "Accorder autant d’importance à votre repos qu’à votre productivité. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre discernement, votre sens du détail et votre capacité à améliorer les choses et à mieux traverser le défi suivant : ne pas transformer votre exigence en pression constante ou en autocritique. En privilégiant une méthode simple, des attentes réalistes et une place véritable accordée au repos, vous créerez les conditions nécessaires pour avancer avec précision tout en préservant votre énergie et votre sérénité.",
    ],

    affirmation: [
      "Je suis digne de respect même lorsque je ne suis pas parfaite.",
      "Mon sens de l’organisation m’aide sans avoir à me limiter.",
      "Je peux avancer étape par étape sans connaître tout le chemin.",
      "Je mérite de célébrer les progrès que j’ai déjà accomplis.",
      "Je fais confiance à ma capacité de trouver des solutions concrètes.",
      "Je libère la pression qui ne m’aide plus à évoluer.",
    ],

    message: [
      "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète. Les semaines à venir vous invitent à mieux reconnaître votre discernement, votre sens du détail et votre capacité à améliorer les choses. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas transformer votre exigence en pression constante ou en autocritique. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une méthode simple, des attentes réalistes et une place véritable accordée au repos. Vous avancerez alors avec plus de clarté et pourrez avancer avec précision tout en préservant votre énergie et votre sérénité.",
      "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre discernement, votre sens du détail et votre capacité à améliorer les choses. Dans les moments de doute, gardez en tête qu’il est important de ne pas transformer votre exigence en pression constante ou en autocritique. Une décision fondée sur une méthode simple, des attentes réalistes et une place véritable accordée au repos pourrait modifier durablement votre manière d’aborder la suite.",
      "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre discernement, votre sens du détail et votre capacité à améliorer les choses, mais votre véritable avancée viendra de votre capacité à ne pas transformer votre exigence en pression constante ou en autocritique. En choisissant une méthode simple, des attentes réalistes et une place véritable accordée au repos, vous donnerez une direction plus juste à votre énergie.",
      "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre discernement, votre sens du détail et votre capacité à améliorer les choses, puis veillez à ne pas transformer votre exigence en pression constante ou en autocritique. Cette approche vous aidera à avancer avec précision tout en préservant votre énergie et votre sérénité.",
      "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre discernement, votre sens du détail et votre capacité à améliorer les choses. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas transformer votre exigence en pression constante ou en autocritique. Le choix de une méthode simple, des attentes réalistes et une place véritable accordée au repos vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre discernement, votre sens du détail et votre capacité à améliorer les choses. Restez attentif(ve) au risque de ne pas transformer votre exigence en pression constante ou en autocritique. En vous recentrant sur une méthode simple, des attentes réalistes et une place véritable accordée au repos, vous pourrez avancer avec précision tout en préservant votre énergie et votre sérénité et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Balance
  |--------------------------------------------------------------------------
  */

  balance: {
    mantra: [
      "Je crée l’harmonie sans sacrifier ma propre vérité.",
      "Je peux choisir clairement sans perdre ma douceur.",
      "Mes besoins méritent autant d’attention que ceux des autres.",
      "Je construis des relations fondées sur l’équilibre et la réciprocité.",
      "Je mérite une paix qui ne dépend pas de mon silence.",
      "Je reste fidèle à moi-même dans chacune de mes décisions.",
    ],

    intention: [
      "Prendre une décision en vous appuyant d’abord sur vos propres besoins. Ce mois-ci, cette direction vous aidera à mobiliser votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Prenez toutefois le temps de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. En revenant à une décision fidèle à vos valeurs, des limites claires et des échanges réciproques, vous pourrez construire une paix qui inclut votre propre voix au lieu de la faire disparaître.",
      "Rétablir l’équilibre dans une relation ou une responsabilité. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle et observez les moments où il devient nécessaire de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Votre progression se consolidera grâce à une décision fidèle à vos valeurs, des limites claires et des échanges réciproques.",
      "Exprimer votre désaccord sans chercher immédiatement à l’adoucir. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle, à condition de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Un retour régulier vers une décision fidèle à vos valeurs, des limites claires et des échanges réciproques vous permettra de construire une paix qui inclut votre propre voix au lieu de la faire disparaître.",
      "Créer davantage de beauté et de calme dans votre environnement. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Lorsque la tension monte, rappelez-vous de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle et choisissez plutôt une décision fidèle à vos valeurs, des limites claires et des échanges réciproques.",
      "Distinguer la véritable harmonie de l’évitement du conflit. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle avec davantage de conscience, sans oublier de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Chaque geste relié à une décision fidèle à vos valeurs, des limites claires et des échanges réciproques renforcera votre sentiment d’alignement.",
      "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle et à mieux traverser le défi suivant : ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. En privilégiant une décision fidèle à vos valeurs, des limites claires et des échanges réciproques, vous créerez les conditions nécessaires pour construire une paix qui inclut votre propre voix au lieu de la faire disparaître.",
    ],

    affirmation: [
      "Je peux être aimée sans renoncer à mes limites.",
      "Mes décisions deviennent plus simples lorsque je respecte mes valeurs.",
      "Je mérite des relations où les efforts sont partagés.",
      "Je sais créer la paix sans me rendre invisible.",
      "Mon opinion possède de la valeur même lorsqu’elle dérange.",
      "Je fais confiance à mon sens naturel de la justice et de l’équilibre.",
    ],

    message: [
      "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous. Les semaines à venir vous invitent à mieux reconnaître votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une décision fidèle à vos valeurs, des limites claires et des échanges réciproques. Vous avancerez alors avec plus de clarté et pourrez construire une paix qui inclut votre propre voix au lieu de la faire disparaître.",
      "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Une décision fondée sur une décision fidèle à vos valeurs, des limites claires et des échanges réciproques pourrait modifier durablement votre manière d’aborder la suite.",
      "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle, mais votre véritable avancée viendra de votre capacité à ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. En choisissant une décision fidèle à vos valeurs, des limites claires et des échanges réciproques, vous donnerez une direction plus juste à votre énergie.",
      "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle, puis veillez à ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Cette approche vous aidera à construire une paix qui inclut votre propre voix au lieu de la faire disparaître.",
      "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. Le choix de une décision fidèle à vos valeurs, des limites claires et des échanges réciproques vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à créer une paix qui ne demande plus votre effacement. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre sens de l’équilibre, votre diplomatie et votre intelligence relationnelle. Restez attentif(ve) au risque de ne pas vous effacer pour éviter un désaccord ou maintenir une harmonie superficielle. En vous recentrant sur une décision fidèle à vos valeurs, des limites claires et des échanges réciproques, vous pourrez construire une paix qui inclut votre propre voix au lieu de la faire disparaître et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Scorpion
  |--------------------------------------------------------------------------
  */

  scorpion: {
    mantra: [
      "Je transforme ce qui me blesse en puissance consciente.",
      "Ma profondeur est une force lorsque je l’accueille sans peur.",
      "Je libère ce qui n’a plus de pouvoir sur mon avenir.",
      "Je fais confiance à mon intuition sans nourrir mes inquiétudes.",
      "Je mérite des liens sincères, profonds et réciproques.",
      "Je renais chaque fois que je choisis la vérité plutôt que la peur.",
    ],

    intention: [
      "Libérer une émotion ou une situation devenue trop lourde. Ce mois-ci, cette direction vous aidera à mobiliser votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Prenez toutefois le temps de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. En revenant à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir, vous pourrez faire de votre intensité une force de guérison, de création et de renaissance.",
      "Transformer une peur en compréhension plus profonde. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et observez les moments où il devient nécessaire de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Votre progression se consolidera grâce à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.",
      "Choisir la transparence dans une relation importante. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation, à condition de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Un retour régulier vers une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir vous permettra de faire de votre intensité une force de guérison, de création et de renaissance.",
      "Protéger votre énergie sans construire de murs inutiles. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Lorsque la tension monte, rappelez-vous de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités et choisissez plutôt une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir.",
      "Accueillir un changement qui vous rapproche de votre vérité. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation avec davantage de conscience, sans oublier de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Chaque geste relié à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir renforcera votre sentiment d’alignement.",
      "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation et à mieux traverser le défi suivant : ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. En privilégiant une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir, vous créerez les conditions nécessaires pour faire de votre intensité une force de guérison, de création et de renaissance.",
    ],

    affirmation: [
      "Je suis capable de traverser les transformations avec courage.",
      "Ma vulnérabilité ne diminue pas ma puissance.",
      "Je mérite une confiance qui se construit dans la vérité.",
      "Je peux laisser partir sans perdre une partie de moi-même.",
      "Mon intuition m’aide à reconnaître ce qui demeure caché.",
      "Je transforme mon intensité en force créatrice et réparatrice.",
    ],

    message: [
      "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation. Les semaines à venir vous invitent à mieux reconnaître votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir. Vous avancerez alors avec plus de clarté et pourrez faire de votre intensité une force de guérison, de création et de renaissance.",
      "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Dans les moments de doute, gardez en tête qu’il est important de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Une décision fondée sur une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir pourrait modifier durablement votre manière d’aborder la suite.",
      "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation, mais votre véritable avancée viendra de votre capacité à ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. En choisissant une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir, vous donnerez une direction plus juste à votre énergie.",
      "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation, puis veillez à ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Cette approche vous aidera à faire de votre intensité une force de guérison, de création et de renaissance.",
      "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. Le choix de une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation. Restez attentif(ve) au risque de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités. En vous recentrant sur une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir, vous pourrez faire de votre intensité une force de guérison, de création et de renaissance et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Sagittaire
  |--------------------------------------------------------------------------
  */

  sagittaire: {
    mantra: [
      "Je suis libre lorsque mes choix respectent ma vérité profonde.",
      "Chaque expérience m’aide à élargir ma vision de la vie.",
      "Je poursuis mes rêves sans fuir les responsabilités qui les rendent possibles.",
      "Mon optimisme devient une force lorsque je l’accompagne d’actions concrètes.",
      "Je mérite un avenir plus vaste que les limites de mon passé.",
      "Je fais confiance au chemin même lorsque je ne vois pas encore sa destination.",
    ],

    intention: [
      "Explorer une possibilité nouvelle tout en gardant un objectif précis. Ce mois-ci, cette direction vous aidera à mobiliser votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Prenez toutefois le temps de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. En revenant à une direction précise, une action concrète et un enthousiasme soutenu par la constance, vous pourrez élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui.",
      "Transformer une inspiration en projet concret. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons et observez les moments où il devient nécessaire de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Votre progression se consolidera grâce à une direction précise, une action concrète et un enthousiasme soutenu par la constance.",
      "Élargir votre horizon par une rencontre, une lecture ou une expérience. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons, à condition de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Un retour régulier vers une direction précise, une action concrète et un enthousiasme soutenu par la constance vous permettra de élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui.",
      "Faire un choix qui augmente votre sentiment de liberté intérieure. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Lorsque la tension monte, rappelez-vous de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite et choisissez plutôt une direction précise, une action concrète et un enthousiasme soutenu par la constance.",
      "Cultiver l’optimisme sans ignorer les détails nécessaires. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons avec davantage de conscience, sans oublier de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Chaque geste relié à une direction précise, une action concrète et un enthousiasme soutenu par la constance renforcera votre sentiment d’alignement.",
      "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons et à mieux traverser le défi suivant : ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. En privilégiant une direction précise, une action concrète et un enthousiasme soutenu par la constance, vous créerez les conditions nécessaires pour élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui.",
    ],

    affirmation: [
      "Je suis capable de créer une vie riche de sens et d’expériences.",
      "Mon enthousiasme attire les possibilités qui correspondent à mon évolution.",
      "Je peux être libre tout en construisant quelque chose de durable.",
      "Je fais confiance à ma capacité de rebondir et d’apprendre.",
      "Ma vision de l’avenir mérite d’être soutenue par mes actions.",
      "Je choisis les chemins qui élargissent mon esprit et mon cœur.",
    ],

    message: [
      "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez. Les semaines à venir vous invitent à mieux reconnaître votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une direction précise, une action concrète et un enthousiasme soutenu par la constance. Vous avancerez alors avec plus de clarté et pourrez élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui.",
      "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Dans les moments de doute, gardez en tête qu’il est important de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Une décision fondée sur une direction précise, une action concrète et un enthousiasme soutenu par la constance pourrait modifier durablement votre manière d’aborder la suite.",
      "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons, mais votre véritable avancée viendra de votre capacité à ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. En choisissant une direction précise, une action concrète et un enthousiasme soutenu par la constance, vous donnerez une direction plus juste à votre énergie.",
      "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons, puis veillez à ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Cette approche vous aidera à élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui.",
      "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. Le choix de une direction précise, une action concrète et un enthousiasme soutenu par la constance vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre optimisme, votre vision et votre désir d’explorer de nouveaux horizons. Restez attentif(ve) au risque de ne pas fuir les détails, les engagements ou la patience nécessaires à la réussite. En vous recentrant sur une direction précise, une action concrète et un enthousiasme soutenu par la constance, vous pourrez élargir votre vie sans perdre le lien avec ce qui doit être construit aujourd’hui et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Capricorne
  |--------------------------------------------------------------------------
  */

  capricorne: {
    mantra: [
      "Je bâtis mon avenir sans oublier de vivre mon présent.",
      "Ma discipline soutient mes rêves sans devenir une prison.",
      "Je mérite le succès autant que le repos.",
      "Chaque étape patiente me rapproche d’une réussite durable.",
      "Je peux être ambitieuse tout en respectant mes limites.",
      "Ma valeur dépasse largement tout ce que je produis ou accomplis.",
    ],

    intention: [
      "Structurer un objectif important avec réalisme et patience. Ce mois-ci, cette direction vous aidera à mobiliser votre discipline, votre endurance et votre capacité à construire avec sérieux. Prenez toutefois le temps de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. En revenant à une structure réaliste, des priorités solides et une ambition respectueuse de vos limites, vous pourrez bâtir une réussite durable qui soutient autant votre avenir que votre bien-être.",
      "Alléger une responsabilité que vous portez seule depuis trop longtemps. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre discipline, votre endurance et votre capacité à construire avec sérieux et observez les moments où il devient nécessaire de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Votre progression se consolidera grâce à une structure réaliste, des priorités solides et une ambition respectueuse de vos limites.",
      "Créer un meilleur équilibre entre ambition et bien-être. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre discipline, votre endurance et votre capacité à construire avec sérieux, à condition de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Un retour régulier vers une structure réaliste, des priorités solides et une ambition respectueuse de vos limites vous permettra de bâtir une réussite durable qui soutient autant votre avenir que votre bien-être.",
      "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre discipline, votre endurance et votre capacité à construire avec sérieux. Lorsque la tension monte, rappelez-vous de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès et choisissez plutôt une structure réaliste, des priorités solides et une ambition respectueuse de vos limites.",
      "Prendre une décision qui renforce votre stabilité à long terme. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre discipline, votre endurance et votre capacité à construire avec sérieux avec davantage de conscience, sans oublier de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Chaque geste relié à une structure réaliste, des priorités solides et une ambition respectueuse de vos limites renforcera votre sentiment d’alignement.",
      "Transformer une obligation en choix plus conscient. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre discipline, votre endurance et votre capacité à construire avec sérieux et à mieux traverser le défi suivant : ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. En privilégiant une structure réaliste, des priorités solides et une ambition respectueuse de vos limites, vous créerez les conditions nécessaires pour bâtir une réussite durable qui soutient autant votre avenir que votre bien-être.",
    ],

    affirmation: [
      "Je possède la patience nécessaire pour construire ce qui compte.",
      "Je mérite de réussir sans m’épuiser.",
      "Mes efforts constants produisent des résultats durables.",
      "Je peux demander de l’aide sans perdre mon autonomie.",
      "Je suis fière du chemin que j’ai déjà parcouru.",
      "Je crée une réussite qui respecte mes valeurs et ma santé.",
    ],

    message: [
      "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir. Les semaines à venir vous invitent à mieux reconnaître votre discipline, votre endurance et votre capacité à construire avec sérieux. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une structure réaliste, des priorités solides et une ambition respectueuse de vos limites. Vous avancerez alors avec plus de clarté et pourrez bâtir une réussite durable qui soutient autant votre avenir que votre bien-être.",
      "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre discipline, votre endurance et votre capacité à construire avec sérieux. Dans les moments de doute, gardez en tête qu’il est important de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Une décision fondée sur une structure réaliste, des priorités solides et une ambition respectueuse de vos limites pourrait modifier durablement votre manière d’aborder la suite.",
      "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre discipline, votre endurance et votre capacité à construire avec sérieux, mais votre véritable avancée viendra de votre capacité à ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. En choisissant une structure réaliste, des priorités solides et une ambition respectueuse de vos limites, vous donnerez une direction plus juste à votre énergie.",
      "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre discipline, votre endurance et votre capacité à construire avec sérieux, puis veillez à ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Cette approche vous aidera à bâtir une réussite durable qui soutient autant votre avenir que votre bien-être.",
      "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre discipline, votre endurance et votre capacité à construire avec sérieux. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. Le choix de une structure réaliste, des priorités solides et une ambition respectueuse de vos limites vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre discipline, votre endurance et votre capacité à construire avec sérieux. Restez attentif(ve) au risque de ne pas reporter indéfiniment le repos, la joie ou la reconnaissance de vos progrès. En vous recentrant sur une structure réaliste, des priorités solides et une ambition respectueuse de vos limites, vous pourrez bâtir une réussite durable qui soutient autant votre avenir que votre bien-être et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Verseau
  |--------------------------------------------------------------------------
  */

  verseau: {
    mantra: [
      "Je respecte ma différence et j’en fais une force créatrice.",
      "Mes idées nouvelles peuvent transformer ma réalité.",
      "Je reste libre tout en créant des liens sincères.",
      "Je contribue au changement sans oublier mes propres besoins.",
      "Mon authenticité attire les personnes qui comprennent ma véritable nature.",
      "Je peux inventer une voie qui n’existait pas encore.",
    ],

    intention: [
      "Donner une forme concrète à une idée originale. Ce mois-ci, cette direction vous aidera à mobiliser votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Prenez toutefois le temps de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. En revenant à une innovation applicable, une collaboration stimulante et la liberté d’être vous-même, vous pourrez donner une forme concrète à votre différence et la mettre au service d’un changement utile.",
      "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir et observez les moments où il devient nécessaire de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Votre progression se consolidera grâce à une innovation applicable, une collaboration stimulante et la liberté d’être vous-même.",
      "Créer davantage de liberté dans votre quotidien. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir, à condition de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Un retour régulier vers une innovation applicable, une collaboration stimulante et la liberté d’être vous-même vous permettra de donner une forme concrète à votre différence et la mettre au service d’un changement utile.",
      "Exprimer une opinion différente sans vous isoler. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Lorsque la tension monte, rappelez-vous de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste et choisissez plutôt une innovation applicable, une collaboration stimulante et la liberté d’être vous-même.",
      "Faire évoluer une habitude devenue trop rigide. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir avec davantage de conscience, sans oublier de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Chaque geste relié à une innovation applicable, une collaboration stimulante et la liberté d’être vous-même renforcera votre sentiment d’alignement.",
      "Utiliser votre vision pour améliorer une situation réelle. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir et à mieux traverser le défi suivant : ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. En privilégiant une innovation applicable, une collaboration stimulante et la liberté d’être vous-même, vous créerez les conditions nécessaires pour donner une forme concrète à votre différence et la mettre au service d’un changement utile.",
    ],

    affirmation: [
      "Ma différence possède une valeur et une utilité.",
      "Je suis libre d’inventer une vie qui me ressemble.",
      "Mes idées méritent d’être développées et partagées.",
      "Je peux appartenir à un groupe sans renoncer à mon individualité.",
      "Je crée naturellement des solutions nouvelles.",
      "Je fais confiance à ma vision même lorsqu’elle précède celle des autres.",
    ],

    message: [
      "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique. Les semaines à venir vous invitent à mieux reconnaître votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à une innovation applicable, une collaboration stimulante et la liberté d’être vous-même. Vous avancerez alors avec plus de clarté et pourrez donner une forme concrète à votre différence et la mettre au service d’un changement utile.",
      "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Dans les moments de doute, gardez en tête qu’il est important de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Une décision fondée sur une innovation applicable, une collaboration stimulante et la liberté d’être vous-même pourrait modifier durablement votre manière d’aborder la suite.",
      "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir, mais votre véritable avancée viendra de votre capacité à ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. En choisissant une innovation applicable, une collaboration stimulante et la liberté d’être vous-même, vous donnerez une direction plus juste à votre énergie.",
      "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir, puis veillez à ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Cette approche vous aidera à donner une forme concrète à votre différence et la mettre au service d’un changement utile.",
      "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. Le choix de une innovation applicable, une collaboration stimulante et la liberté d’être vous-même vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre originalité, votre indépendance d’esprit et votre vision tournée vers l’avenir. Restez attentif(ve) au risque de ne pas vous isoler ni rester uniquement dans les idées lorsque la réalité demande un geste. En vous recentrant sur une innovation applicable, une collaboration stimulante et la liberté d’être vous-même, vous pourrez donner une forme concrète à votre différence et la mettre au service d’un changement utile et préparer la suite avec davantage de confiance.",
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Poissons
  |--------------------------------------------------------------------------
  */

  poissons: {
    mantra: [
      "Mon intuition m’éclaire lorsque je reste ancrée dans le présent.",
      "Je peux être sensible sans absorber tout ce qui m’entoure.",
      "Mon imagination ouvre des portes que la peur gardait fermées.",
      "Je mérite une vie où ma douceur est respectée.",
      "Je transforme mes rêves en gestes simples et concrets.",
      "Je laisse mon cœur me guider sans oublier mes limites.",
    ],

    intention: [
      "Écouter votre intuition tout en vérifiant ce qui est concret. Ce mois-ci, cette direction vous aidera à mobiliser votre intuition, votre imagination et votre grande réceptivité émotionnelle. Prenez toutefois le temps de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. En revenant à des limites douces, un ancrage concret et une première étape réalisable, vous pourrez transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée.",
      "Créer une limite claire face à une situation émotionnellement exigeante. Cette intention ne vous demande pas de tout transformer immédiatement, mais de poser un choix plus conscient dans votre quotidien. Appuyez-vous sur votre intuition, votre imagination et votre grande réceptivité émotionnelle et observez les moments où il devient nécessaire de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Votre progression se consolidera grâce à des limites douces, un ancrage concret et une première étape réalisable.",
      "Donner une forme réelle à une inspiration artistique ou spirituelle. Donnez à cette intention une place concrète dans vos décisions, vos relations et votre manière d’utiliser votre énergie. Votre meilleur soutien demeure votre intuition, votre imagination et votre grande réceptivité émotionnelle, à condition de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Un retour régulier vers des limites douces, un ancrage concret et une première étape réalisable vous permettra de transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée.",
      "Vous accorder davantage de calme et de solitude réparatrice. Durant ce mois, cherchez moins la perfection que la cohérence entre ce que vous ressentez, ce que vous dites et ce que vous faites. Vous pourrez compter sur votre intuition, votre imagination et votre grande réceptivité émotionnelle. Lorsque la tension monte, rappelez-vous de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions et choisissez plutôt des limites douces, un ancrage concret et une première étape réalisable.",
      "Distinguer vos émotions de celles que vous absorbez autour de vous. Cette orientation peut devenir un véritable fil conducteur pour le mois. Elle vous invite à utiliser votre intuition, votre imagination et votre grande réceptivité émotionnelle avec davantage de conscience, sans oublier de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Chaque geste relié à des limites douces, un ancrage concret et une première étape réalisable renforcera votre sentiment d’alignement.",
      "Faire un petit pas concret vers un rêve important. Faites de cette intention un repère plutôt qu’une obligation supplémentaire. Elle est là pour vous aider à reconnaître la puissance de votre intuition, votre imagination et votre grande réceptivité émotionnelle et à mieux traverser le défi suivant : ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. En privilégiant des limites douces, un ancrage concret et une première étape réalisable, vous créerez les conditions nécessaires pour transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée.",
    ],

    affirmation: [
      "Ma sensibilité est une force lorsque je la protège avec conscience.",
      "Je peux suivre mon intuition tout en restant ancrée.",
      "Mes rêves méritent une place dans ma réalité.",
      "Je suis capable de dire non avec douceur et fermeté.",
      "Je mérite des relations qui respectent ma profondeur émotionnelle.",
      "Mon imagination me permet de créer de nouvelles possibilités.",
    ],

    message: [
      "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore. Les semaines à venir vous invitent à mieux reconnaître votre intuition, votre imagination et votre grande réceptivité émotionnelle. Cette qualité devient particulièrement féconde lorsque vous acceptez de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Ne cherchez pas à tout régler en une seule fois : revenez plutôt à des limites douces, un ancrage concret et une première étape réalisable. Vous avancerez alors avec plus de clarté et pourrez transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée.",
      "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement. Ce passage du mois ne demande pas une réponse spectaculaire, mais une présence plus consciente à ce que vous vivez. Votre évolution s’appuie sur votre intuition, votre imagination et votre grande réceptivité émotionnelle. Dans les moments de doute, gardez en tête qu’il est important de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Une décision fondée sur des limites douces, un ancrage concret et une première étape réalisable pourrait modifier durablement votre manière d’aborder la suite.",
      "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète. Il est possible qu’une situation familière prenne soudainement un sens différent. Accueillez cette nouvelle lecture sans vous juger. Vous disposez déjà de votre intuition, votre imagination et votre grande réceptivité émotionnelle, mais votre véritable avancée viendra de votre capacité à ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. En choisissant des limites douces, un ancrage concret et une première étape réalisable, vous donnerez une direction plus juste à votre énergie.",
      "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion. Ce mois peut devenir un temps de recentrage important. Tout ce que vous ressentez n’exige pas une réaction immédiate; certaines réponses apparaissent lorsque vous laissez davantage d’espace à l’observation. Appuyez-vous sur votre intuition, votre imagination et votre grande réceptivité émotionnelle, puis veillez à ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Cette approche vous aidera à transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée.",
      "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle. Une porte s’ouvre lorsque vous cessez de répéter automatiquement une ancienne manière de penser ou d’agir. Votre potentiel réside dans votre intuition, votre imagination et votre grande réceptivité émotionnelle. Pour l’utiliser pleinement, il faudra parfois accepter de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. Le choix de des limites douces, un ancrage concret et une première étape réalisable vous permettra d’avancer sans trahir ce que vous ressentez profondément.",
      "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir. Luna Astralis vous invite à considérer ce mois comme une étape de maturation intérieure. Vous n’avez pas à devenir une autre personne, mais à employer plus consciemment votre intuition, votre imagination et votre grande réceptivité émotionnelle. Restez attentif(ve) au risque de ne pas absorber les émotions environnantes ni laisser le flou remplacer les décisions. En vous recentrant sur des limites douces, un ancrage concret et une première étape réalisable, vous pourrez transformer votre sensibilité et vos rêves en une direction inspirée mais solidement incarnée et préparer la suite avec davantage de confiance.",
    ],
  },

};

/*
|--------------------------------------------------------------------------
| Création de la banque correspondant au signe
|--------------------------------------------------------------------------
*/

export function createMonthlyMantraTexts(
  zodiacSign: string,
): MonthlyMantraTexts {
  const normalizedSign = normalizeZodiacSign(zodiacSign);

  return MONTHLY_MANTRA_TEXTS[normalizedSign];
}
