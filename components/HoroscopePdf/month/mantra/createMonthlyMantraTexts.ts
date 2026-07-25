import type {
  MonthlyMantraTexts,
} from "../types";

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
|
| Le signe peut arriver avec :
|
| - une majuscule;
| - un accent;
| - des espaces;
| - un trait d’union;
|
| Cette fonction transforme toujours la valeur reçue en clé compatible
| avec la banque de textes.
|
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

  return (
    zodiacSignAliases[normalizedSign] ??
    "belier"
  );
}

/*
|--------------------------------------------------------------------------
| Banque de textes — mantra du mois
|--------------------------------------------------------------------------
|
| Chaque signe possède plusieurs variantes pour :
|
| - le mantra;
| - l’intention;
| - l’affirmation;
| - le message de Luna Astralis.
|
| Le générateur choisira ensuite une variante déterministe à partir du
| signe, du mois, de l’année et de la graine personnalisée.
|
*/

const MONTHLY_MANTRA_TEXTS:
  Record<
    MonthlyMantraZodiacSign,
    MonthlyMantraTexts
  > = {
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
        "Diriger votre énergie vers une priorité claire plutôt que vous disperser.",
        "Créer un nouvel élan sans forcer les résultats avant leur heure.",
        "Faire preuve d’initiative tout en laissant une place à l’écoute.",
        "Utiliser votre courage pour dépasser une ancienne hésitation.",
        "Avancer avec confiance sans confondre vitesse et progression.",
        "Canaliser votre intensité dans une action concrète et durable.",
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
        "Ce mois-ci, votre plus grande victoire pourrait naître d’une action simple, pleinement assumée.",
        "Votre énergie naturelle vous ouvre des portes lorsque vous lui donnez une direction précise.",
        "Vous n’avez pas besoin de courir plus vite que la vie : votre courage suffit déjà à faire avancer les choses.",
        "Une décision prise avec calme pourrait avoir davantage de portée qu’un grand geste impulsif.",
        "Votre force ne se mesure pas seulement à votre capacité d’agir, mais aussi à celle de choisir le bon moment.",
        "Laissez votre feu intérieur devenir une lumière qui guide plutôt qu’une urgence qui consume.",
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
        "Consolider ce qui vous apporte une sécurité réelle et apaisante.",
        "Créer davantage d’espace pour le plaisir, le repos et la simplicité.",
        "Faire évoluer une habitude sans bouleverser tout votre équilibre.",
        "Reconnaître la différence entre persévérance et attachement.",
        "Investir votre énergie dans ce qui possède une valeur durable.",
        "Avancer calmement vers un objectif concret et réalisable.",
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
        "Ce mois-ci, la stabilité ne consiste pas à tout maintenir intact, mais à renforcer ce qui vous fait réellement du bien.",
        "Une évolution douce pourrait vous conduire plus loin qu’un changement imposé trop rapidement.",
        "Votre constance devient particulièrement puissante lorsqu’elle sert un désir profondément personnel.",
        "Prenez le temps d’apprécier ce qui fonctionne déjà avant de chercher ce qui manque.",
        "Une décision pratique pourrait également vous apporter un soulagement émotionnel inattendu.",
        "Vous êtes invité à bâtir une vie qui ne soit pas seulement solide, mais également agréable à habiter.",
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
        "Clarifier une idée importante avant de la partager ou de l’appliquer.",
        "Créer des échanges plus sincères et moins dispersés.",
        "Faire de la place au silence afin de mieux entendre votre intuition.",
        "Approfondir un sujet plutôt que multiplier les directions.",
        "Utiliser votre parole pour rapprocher plutôt que simplement convaincre.",
        "Choisir une priorité intellectuelle ou créative et la développer.",
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
        "Ce mois-ci, une conversation pourrait transformer votre compréhension d’une situation importante.",
        "Vos idées ont besoin d’espace, mais également d’une structure pour révéler tout leur potentiel.",
        "Une réponse que vous cherchez pourrait apparaître lorsque vous cesserez momentanément de la poursuivre.",
        "Votre souplesse mentale vous aide à vous adapter, à condition de ne pas oublier ce que vous voulez réellement.",
        "Une information nouvelle pourrait ouvrir une voie que vous n’aviez pas encore envisagée.",
        "Votre voix devient plus influente lorsque vos mots reflètent clairement vos intentions.",
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
        "Accueillir vos émotions sans les juger ni les laisser tout diriger.",
        "Renforcer votre sentiment de sécurité intérieure.",
        "Prendre soin de vous avec la même attention que vous offrez aux autres.",
        "Exprimer un besoin affectif avec simplicité et honnêteté.",
        "Créer des limites qui protègent votre sensibilité.",
        "Vous rapprocher des personnes et des lieux qui vous apaisent.",
      ],

      affirmation: [
        "Mes émotions sont légitimes et je sais les traverser avec douceur.",
        "Je mérite de recevoir un amour stable, respectueux et rassurant.",
        "Je peux poser mes limites sans renoncer à ma bienveillance.",
        "Mon intuition me permet de reconnaître ce qui est bon pour moi.",
        "Je suis mon propre refuge lorsque le monde devient trop intense.",
        "Je libère les souvenirs qui n’ont plus besoin de diriger mon présent.",
      ],

      message: [
        "Ce mois-ci, votre sensibilité pourrait vous révéler une vérité que votre esprit hésitait encore à reconnaître.",
        "Prendre soin de vous n’est pas un retrait du monde, mais une manière de mieux y revenir.",
        "Une relation peut évoluer lorsque vous exprimez clairement ce que vous retenez depuis trop longtemps.",
        "Votre passé possède des enseignements précieux, mais il n’a pas à décider de votre avenir.",
        "La sécurité que vous recherchez commence par la façon dont vous vous parlez dans les moments fragiles.",
        "Vous êtes invité à choisir les liens qui accueillent votre profondeur sans l’utiliser contre vous.",
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
        "Exprimer votre créativité sans attendre une validation extérieure.",
        "Occuper votre place avec confiance et simplicité.",
        "Diriger votre énergie vers ce qui vous rend véritablement fier.",
        "Partager votre lumière sans vous épuiser à impressionner.",
        "Reconnaître votre valeur au-delà des résultats visibles.",
        "Faire un choix qui reflète davantage votre personnalité profonde.",
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
        "Ce mois-ci, votre rayonnement vient moins de ce que vous montrez que de la sincérité avec laquelle vous le montrez.",
        "Une occasion de vous mettre en valeur pourrait apparaître lorsque vous cesserez de minimiser votre talent.",
        "Votre confiance grandit lorsque vous choisissez de créer pour vous-même avant de chercher à convaincre.",
        "Un geste généreux pourrait renforcer un lien, à condition qu’il ne vous oblige pas à vous oublier.",
        "Votre cœur reconnaît déjà la direction qui pourrait raviver votre enthousiasme.",
        "Vous êtes invité à occuper votre place sans vous excuser de la lumière que vous apportez.",
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
        "Simplifier une responsabilité devenue inutilement compliquée.",
        "Remplacer l’autocritique par une observation plus constructive.",
        "Créer une routine qui soutient réellement votre bien-être.",
        "Accepter qu’une solution suffisamment bonne puisse être la meilleure.",
        "Vous libérer d’une tâche ou d’une attente qui vous épuise.",
        "Accorder autant d’importance à votre repos qu’à votre productivité.",
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
        "Ce mois-ci, une amélioration simple pourrait avoir davantage d’effet qu’une transformation complète.",
        "Votre regard précis devient une force lorsque vous l’utilisez pour ajuster plutôt que pour vous juger.",
        "Vous n’avez pas besoin de tout réparer pour mériter un moment de paix.",
        "Une nouvelle organisation pourrait alléger autant votre esprit que votre quotidien.",
        "La perfection vous demande toujours davantage, tandis que la progression vous permet enfin d’avancer.",
        "Vous êtes invité à reconnaître tout ce que vous accomplissez déjà avec discrétion et constance.",
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
        "Prendre une décision en vous appuyant d’abord sur vos propres besoins.",
        "Rétablir l’équilibre dans une relation ou une responsabilité.",
        "Exprimer votre désaccord sans chercher immédiatement à l’adoucir.",
        "Créer davantage de beauté et de calme dans votre environnement.",
        "Distinguer la véritable harmonie de l’évitement du conflit.",
        "Choisir ce qui vous ressemble plutôt que ce qui plaît à tout le monde.",
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
        "Ce mois-ci, une décision importante pourrait devenir évidente lorsque vous cesserez de chercher l’accord de tous.",
        "L’harmonie véritable commence lorsque votre propre voix possède une place égale dans l’échange.",
        "Une relation pourrait gagner en profondeur grâce à une conversation honnête et respectueuse.",
        "Votre douceur est précieuse, mais elle ne vous oblige pas à accepter ce qui vous déséquilibre.",
        "Un choix esthétique, relationnel ou personnel pourrait raviver votre sentiment d’alignement.",
        "Vous êtes invité à créer une paix qui ne demande plus votre effacement.",
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
        "Libérer une émotion ou une situation devenue trop lourde.",
        "Transformer une peur en compréhension plus profonde.",
        "Choisir la transparence dans une relation importante.",
        "Protéger votre énergie sans construire de murs inutiles.",
        "Accueillir un changement qui vous rapproche de votre vérité.",
        "Utiliser votre intuition pour avancer plutôt que pour anticiper le pire.",
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
        "Ce mois-ci, une transformation intérieure pourrait modifier profondément votre manière d’aborder une situation.",
        "Ce que vous acceptez de regarder avec honnêteté perd progressivement son pouvoir sur vous.",
        "Une vérité émotionnelle pourrait vous libérer davantage que le contrôle que vous tentez de maintenir.",
        "Votre intuition est particulièrement précieuse lorsqu’elle reste séparée de vos anciennes peurs.",
        "Une relation pourrait devenir plus solide si chacun accepte de déposer ses défenses.",
        "Vous êtes invité à laisser mourir une ancienne version de vous afin de faire place à celle qui souhaite émerger.",
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
        "Explorer une possibilité nouvelle tout en gardant un objectif précis.",
        "Transformer une inspiration en projet concret.",
        "Élargir votre horizon par une rencontre, une lecture ou une expérience.",
        "Faire un choix qui augmente votre sentiment de liberté intérieure.",
        "Cultiver l’optimisme sans ignorer les détails nécessaires.",
        "Vous engager envers un désir qui mérite davantage qu’un enthousiasme passager.",
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
        "Ce mois-ci, une nouvelle perspective pourrait vous redonner l’élan que vous cherchiez.",
        "Votre désir de liberté devient créateur lorsque vous lui donnez une direction concrète.",
        "Une occasion inattendue pourrait apparaître à travers un échange, un déplacement ou une découverte.",
        "Votre optimisme ouvre les portes, mais votre constance vous permettra de les franchir.",
        "Une vérité simple pourrait vous aider à abandonner une direction qui ne vous ressemble plus.",
        "Vous êtes invité à croire en un horizon plus vaste tout en posant aujourd’hui le premier geste nécessaire.",
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
        "Structurer un objectif important avec réalisme et patience.",
        "Alléger une responsabilité que vous portez seule depuis trop longtemps.",
        "Créer un meilleur équilibre entre ambition et bien-être.",
        "Reconnaître les progrès accomplis avant d’ajouter une nouvelle exigence.",
        "Prendre une décision qui renforce votre stabilité à long terme.",
        "Transformer une obligation en choix plus conscient.",
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
        "Ce mois-ci, une décision stratégique pourrait renforcer votre sécurité pour les mois à venir.",
        "Votre ambition vous conduit loin lorsqu’elle ne vous oblige pas à ignorer vos besoins essentiels.",
        "Une responsabilité pourrait être réorganisée, partagée ou simplifiée plus facilement que prévu.",
        "Votre progression mérite d’être reconnue, même si l’objectif final n’est pas encore atteint.",
        "Une réussite durable se construit aussi avec des pauses, des ajustements et de la souplesse.",
        "Vous êtes invité à bâtir un avenir solide sans reporter constamment votre droit au bonheur.",
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
        "Donner une forme concrète à une idée originale.",
        "Vous rapprocher d’un groupe ou d’une personne qui partage vos valeurs.",
        "Créer davantage de liberté dans votre quotidien.",
        "Exprimer une opinion différente sans vous isoler.",
        "Faire évoluer une habitude devenue trop rigide.",
        "Utiliser votre vision pour améliorer une situation réelle.",
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
        "Ce mois-ci, une idée inhabituelle pourrait devenir la solution la plus logique.",
        "Votre besoin de liberté mérite d’être respecté, mais il peut également coexister avec l’engagement.",
        "Une rencontre ou une collaboration pourrait stimuler un projet que vous gardiez encore en réserve.",
        "Votre singularité devient une force lorsqu’elle vous rapproche de votre mission plutôt que de vous isoler.",
        "Un changement de perspective pourrait vous aider à sortir d’une situation devenue trop prévisible.",
        "Vous êtes invité à donner une forme réelle à la vision que vous portez depuis quelque temps.",
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
        "Écouter votre intuition tout en vérifiant ce qui est concret.",
        "Créer une limite claire face à une situation émotionnellement exigeante.",
        "Donner une forme réelle à une inspiration artistique ou spirituelle.",
        "Vous accorder davantage de calme et de solitude réparatrice.",
        "Distinguer vos émotions de celles que vous absorbez autour de vous.",
        "Faire un petit pas concret vers un rêve important.",
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
        "Ce mois-ci, votre intuition pourrait vous guider vers une vérité que les faits seuls ne révélaient pas encore.",
        "Votre sensibilité a besoin de limites afin de demeurer une force plutôt qu’une source d’épuisement.",
        "Une inspiration pourrait devenir un projet réel si vous lui accordez une première action concrète.",
        "Vous n’avez pas à porter les émotions de tout le monde pour prouver votre compassion.",
        "Un moment de calme pourrait vous permettre de reconnaître clairement la direction qui vous appelle.",
        "Vous êtes invité à croire en vos rêves tout en leur offrant une structure capable de les accueillir.",
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
  const normalizedSign =
    normalizeZodiacSign(
      zodiacSign,
    );

  return MONTHLY_MANTRA_TEXTS[
    normalizedSign
  ];
}
