import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

const translations: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Non précisé": "Not specified",
    "Feu": "Fire",
    "Terre": "Earth",
    "Air": "Air",
    "Eau": "Water",

    "Aime avec spontanéité, enthousiasme et franchise. Le sentiment doit rester vivant, stimulant et porté par un élan sincère.":
      "Loves with spontaneity, enthusiasm, and honesty. Feelings need to remain alive, stimulating, and driven by genuine momentum.",
    "Aime avec fidélité, sensualité et constance. La sécurité, la présence et les gestes concrets nourrissent profondément son attachement.":
      "Loves with loyalty, sensuality, and consistency. Security, presence, and tangible gestures deeply nurture attachment.",
    "Aime par les mots, la curiosité et la légèreté. L’échange intellectuel et la variété entretiennent son intérêt amoureux.":
      "Loves through words, curiosity, and lightness. Intellectual exchange and variety sustain romantic interest.",
    "Aime avec douceur, protection et sensibilité. La confiance émotionnelle et le sentiment de former un foyer sont essentiels.":
      "Loves with tenderness, protectiveness, and sensitivity. Emotional trust and the feeling of creating a home together are essential.",
    "Aime avec chaleur, générosité et fierté. Cette Vénus recherche une relation expressive, loyale et valorisante.":
      "Loves with warmth, generosity, and pride. This Venus seeks an expressive, loyal, and affirming relationship.",
    "Aime par l’attention, le service et la fiabilité. Les preuves discrètes comptent souvent davantage que les grandes déclarations.":
      "Loves through attentiveness, helpfulness, and reliability. Quiet demonstrations often matter more than grand declarations.",
    "Aime avec charme, diplomatie et romantisme. L’harmonie, le respect et la beauté du lien occupent une place centrale.":
      "Loves with charm, diplomacy, and romance. Harmony, respect, and the beauty of the bond are central.",
    "Aime avec intensité, profondeur et exclusivité. La loyauté et la vérité émotionnelle sont indispensables à son abandon.":
      "Loves with intensity, depth, and exclusivity. Loyalty and emotional truth are essential for fully opening up.",
    "Aime avec liberté, enthousiasme et sincérité. Le couple doit offrir de l’espace, des projets et un horizon commun.":
      "Loves with freedom, enthusiasm, and sincerity. The relationship needs space, shared projects, and a common horizon.",
    "Aime avec sérieux, prudence et engagement. La stabilité et la capacité de construire dans le temps définissent son attachement.":
      "Loves with seriousness, caution, and commitment. Stability and the ability to build over time define attachment.",
    "Aime avec indépendance, complicité et originalité. L’amitié, la liberté et l’authenticité soutiennent le sentiment.":
      "Loves with independence, companionship, and originality. Friendship, freedom, and authenticity support romantic feelings.",
    "Aime avec empathie, imagination et dévouement. La connexion émotionnelle et le rêve partagé donnent tout son sens à la relation.":
      "Loves with empathy, imagination, and devotion. Emotional connection and shared dreams give the relationship its meaning.",

    "Les données disponibles ne permettent pas encore de préciser entièrement sa manière d’aimer.":
      "The available data does not yet allow a complete description of this person's way of loving.",

    "Désir direct, rapide et conquérant. L’initiative, la spontanéité et le défi éveillent fortement son énergie.":
      "Direct, quick, and conquering desire. Initiative, spontaneity, and challenge strongly awaken this energy.",
    "Désir sensuel, constant et physique. Le rythme lent, la confiance et le confort favorisent l’abandon.":
      "Sensual, steady, and physical desire. A slower pace, trust, and comfort encourage openness.",
    "Désir curieux, joueur et mental. La parole, l’humour et la nouveauté stimulent l’attirance.":
      "Curious, playful, and mental desire. Conversation, humor, and novelty stimulate attraction.",
    "Désir protecteur, émotionnel et réceptif. La sécurité affective conditionne fortement l’ouverture intime.":
      "Protective, emotional, and receptive desire. Emotional security strongly influences intimate openness.",
    "Désir chaleureux, théâtral et passionné. La reconnaissance et l’admiration renforcent son élan.":
      "Warm, expressive, and passionate desire. Recognition and admiration strengthen this drive.",
    "Désir attentif, précis et réservé. La confiance se développe par les détails, le soin et la présence réelle.":
      "Attentive, precise, and reserved desire. Trust develops through details, care, and genuine presence.",
    "Désir charmeur, relationnel et harmonieux. La séduction et l’équilibre du partage sont essentiels.":
      "Charming, relational, and harmonious desire. Seduction and balance in the relationship are essential.",
    "Désir magnétique, intense et profond. L’intimité devient une expérience de fusion, de vérité et de transformation.":
      "Magnetic, intense, and deep desire. Intimacy becomes an experience of fusion, truth, and transformation.",
    "Désir libre, enthousiaste et aventureux. L’élan augmente lorsque la relation reste vivante et ouverte.":
      "Free, enthusiastic, and adventurous desire. Desire grows when the relationship remains lively and open.",
    "Désir maîtrisé, persévérant et solide. L’intensité grandit avec le temps, la confiance et l’engagement.":
      "Controlled, persistent, and steady desire. Intensity grows with time, trust, and commitment.",
    "Désir indépendant, imprévisible et original. La liberté et la stimulation mentale entretiennent l’attraction.":
      "Independent, unpredictable, and original desire. Freedom and mental stimulation sustain attraction.",
    "Désir intuitif, romantique et fusionnel. L’imaginaire et la sensibilité jouent un rôle majeur dans l’intimité.":
      "Intuitive, romantic, and deeply merging desire. Imagination and sensitivity play a major role in intimacy.",

    "Les données disponibles ne permettent pas encore de préciser entièrement son expression du désir.":
      "The available data does not yet allow a complete description of this person's expression of desire.",

    "Énergie fluide": "Flowing energy",
    "Lien puissant": "Powerful bond",
    "Polarité intense": "Intense polarity",
    "Tension créatrice": "Creative tension",
    "Ajustement subtil": "Subtle adjustment",
    "Influence relationnelle": "Relational influence",

    "L’affection et le désir se répondent naturellement. La séduction, la tendresse et l’attirance physique peuvent circuler avec beaucoup de fluidité.":
      "Affection and desire respond naturally to one another. Seduction, tenderness, and physical attraction can flow with great ease.",
    "L’attirance peut être très forte, mais les attentes affectives et le rythme du désir ne coïncident pas toujours. Cette tension nourrit la chimie autant qu’elle exige des ajustements.":
      "Attraction can be very strong, but emotional expectations and the rhythm of desire do not always align. This tension fuels chemistry while also requiring adjustment.",
    "Cette connexion renforce fortement le magnétisme, la séduction et le sentiment d’être attirés l’un vers l’autre.":
      "This connection strongly reinforces magnetism, seduction, and the feeling of being drawn toward one another.",
    "Cet aspect favorise la douceur, l’affection et la capacité de reconnaître les besoins amoureux de l’autre.":
      "This aspect encourages tenderness, affection, and the ability to recognize each other's romantic needs.",
    "Les attentes affectives peuvent différer. L’un peut donner de l’amour d’une manière que l’autre ne reconnaît pas immédiatement.":
      "Emotional expectations may differ. One person may express love in a way the other does not immediately recognize.",
    "Cette interaction donne une grande importance aux sentiments, aux valeurs et à la manière de construire l’harmonie.":
      "This interaction gives great importance to feelings, values, and the way harmony is built.",
    "Les énergies s’accordent avec naturel, favorisant le désir, l’initiative et la capacité d’agir ensemble.":
      "Your energies align naturally, encouraging desire, initiative, and the ability to act together.",
    "La passion peut s’accompagner de réactions vives, de compétition ou d’un décalage dans la manière de prendre l’initiative.":
      "Passion may come with strong reactions, competition, or differences in how each person takes initiative.",
    "Cette interaction intensifie l’action, la volonté, l’attirance et la manière dont vous réagissez sous pression.":
      "This interaction intensifies action, determination, attraction, and the way you react under pressure.",
    "Cet aspect soutient la confiance, la tendresse et la capacité de créer un espace intime où chacun peut se montrer vulnérable.":
      "This aspect supports trust, tenderness, and the ability to create an intimate space where each person can be vulnerable.",
    "Cette interaction peut révéler des peurs, des attentes implicites ou des réactions défensives qui demandent patience et honnêteté.":
      "This interaction may reveal fears, unspoken expectations, or defensive reactions that require patience and honesty.",
    "Cette connexion joue un rôle important dans votre proximité émotionnelle, votre confiance et votre manière de vous abandonner au lien.":
      "This connection plays an important role in your emotional closeness, trust, and ability to surrender to the bond.",

    "L’amour": "Love",
    "Le désir": "Desire",
    "Vénus": "Venus",
    "de": "of",
    "en": "in",
    "orbe": "orb",

    "Luna Astralis • Rapport de synastrie":
      "Luna Astralis • Synastry Report",

    "Première personne": "First person",
    "Deuxième personne": "Second person",
    "la première personne": "the first person",
    "la deuxième personne": "the second person",

    "Amour, valeurs et affection":
      "Love, values and affection",
    "Votre compatibilité amoureuse":
      "Your romantic compatibility",
    "Vénus révèle votre manière d’aimer, de séduire, de recevoir l’affection et de construire l’harmonie dans le couple.":
      "Venus reveals how you love, seduce, receive affection, and build harmony within the relationship.",
    "Sentiments, séduction et valeurs":
      "Feelings, seduction and values",
    "La rencontre de vos deux Vénus":
      "The meeting of your two Venuses",
    "Cette comparaison montre comment vous donnez de l’amour, ce que vous attendez d’une relation et les gestes qui vous permettent de vous sentir choisis.":
      "This comparison shows how you give love, what you expect from a relationship, and the gestures that help you feel chosen.",
    "Élément": "Element",
    "Votre langage amoureux":
      "Your love language",
    "Votre manière personnelle d’aimer":
      "Your personal way of loving",
    "Vos principales interactions amoureuses":
      "Your main romantic interactions",
    "Votre clé amoureuse":
      "Your key to love",
    "Ne mesurez pas uniquement l’amour à partir de votre propre langage affectif. Demandez clairement à l’autre ce qui lui permet de se sentir aimé, puis transformez cette réponse en gestes concrets et réguliers.":
      "Do not measure love only through your own emotional language. Ask clearly what helps the other person feel loved, then turn that answer into concrete and consistent gestures.",

    "Désir, action et passion":
      "Desire, action and passion",
    "Votre attirance et votre désir":
      "Your attraction and desire",
    "Mars décrit votre élan, votre manière de prendre l’initiative, votre expression du désir et vos réactions lorsque la tension monte.":
      "Mars describes your drive, the way you take initiative, your expression of desire, and your reactions when tension rises.",
    "Énergie, initiative et instinct":
      "Energy, initiative and instinct",
    "La rencontre de vos deux Mars":
      "The meeting of your two Mars",
    "Cette comparaison révèle votre rythme d’action, votre intensité, votre façon d’exprimer le désir et votre manière de réagir dans les moments de confrontation.":
      "This comparison reveals your pace of action, your intensity, how you express desire, and how you react during moments of confrontation.",
    "Votre dynamique de passion":
      "Your passion dynamic",
    "Votre expression personnelle du désir":
      "Your personal expression of desire",
    "Vos principales interactions de désir":
      "Your main desire interactions",
    "Votre force": "Your strength",
    "Votre attirance peut devenir une énergie de création, de motivation et de dépassement lorsque vous choisissez un objectif commun plutôt que la compétition.":
      "Your attraction can become a source of creativity, motivation, and growth when you choose a shared goal rather than competition.",
    "Votre point de vigilance":
      "Your point of attention",
    "Les réactions rapides, la frustration ou les différences de rythme peuvent amplifier les conflits. Une pause consciente évite que la passion ne se transforme en opposition.":
      "Quick reactions, frustration, or differences in pace can intensify conflict. A conscious pause can prevent passion from turning into opposition.",
    "Votre clé de passion":
      "Your key to passion",
    "Exprimez clairement vos envies et vos limites sans transformer le désir en épreuve de force. L’intensité devient constructive lorsqu’elle repose sur le consentement, l’écoute et la confiance.":
      "Express your desires and boundaries clearly without turning desire into a power struggle. Intensity becomes constructive when it rests on consent, listening, and trust.",

    "Chimie, séduction et magnétisme":
      "Chemistry, seduction and magnetism",
    "Votre alchimie Vénus × Mars":
      "Your Venus × Mars chemistry",
    "La rencontre de Vénus et de Mars montre comment la tendresse, la séduction, l’attirance et le désir se répondent entre vous.":
      "The meeting of Venus and Mars shows how tenderness, seduction, attraction, and desire interact between you.",
    "La rencontre entre l’amour et le désir":
      "The meeting of love and desire",
    "Vénus représente ce qui attire, apaise et donne envie de se rapprocher. Mars représente l’élan, l’initiative et l’intensité physique. Lorsque ces deux fonctions se répondent, elles créent la chimie du couple : la manière dont l’un séduit, dont l’autre réagit et dont la passion trouve sa place dans la tendresse.":
      "Venus represents what attracts, soothes, and creates the desire to grow closer. Mars represents drive, initiative, and physical intensity. When these two functions respond to each other, they create the couple's chemistry: how one seduces, how the other responds, and how passion finds its place within tenderness.",
    "Vos deux circuits d’attraction":
      "Your two attraction patterns",
    "recherche": "seeks",
    "exprime": "expresses",
    "Vos aspects Vénus–Mars les plus importants":
      "Your most important Venus–Mars aspects",
    "Une chimie qui se construit autrement":
      "Chemistry built in a different way",
    "Aucun aspect majeur Vénus–Mars ne ressort avec les orbes retenus. Cela ne signifie pas une absence d’attirance. La chimie peut plutôt se construire grâce aux signes, aux maisons, aux angles et à d’autres interactions entre la Lune, le Soleil, Pluton ou Neptune.":
      "No major Venus–Mars aspect stands out within the selected orbs. This does not mean there is no attraction. Chemistry may instead develop through signs, houses, angles, and other interactions involving the Moon, Sun, Pluto, or Neptune.",
    "Passion": "Passion",
    "L’attirance grandit lorsque chacun se sent libre d’exprimer son désir sans devoir jouer un rôle ou deviner les attentes de l’autre.":
      "Attraction grows when each person feels free to express desire without having to play a role or guess the other's expectations.",
    "Tendresse": "Tenderness",
    "La passion reste durable lorsque les gestes affectifs, la sécurité et le respect continuent d’exister en dehors des moments intenses.":
      "Passion remains sustainable when affectionate gestures, security, and respect continue to exist outside intense moments.",
    "Votre clé d’alchimie":
      "Your key to chemistry",
    "Entretenez à la fois le jeu de la séduction et la sécurité émotionnelle. La chimie se renouvelle lorsque le couple continue de créer de la nouveauté sans perdre la douceur ni la confiance.":
      "Nurture both playful seduction and emotional security. Chemistry renews itself when the couple continues creating novelty without losing tenderness or trust.",

    "Confiance, proximité et abandon":
      "Trust, closeness and openness",
    "Votre intimité et votre vie affective":
      "Your intimacy and emotional life",
    "L’intimité naît lorsque le désir, l’affection et la sécurité émotionnelle trouvent un espace commun où chacun peut se montrer vrai.":
      "Intimacy develops when desire, affection, and emotional security find a shared space where each person can be authentic.",
    "Votre espace intime":
      "Your intimate space",
    "La Lune montre ce qui rassure émotionnellement. Vénus révèle la manière de donner et de recevoir l’affection. Mars décrit le désir, l’initiative et la réaction instinctive. Ensemble, ces trois fonctions indiquent comment vous construisez la confiance, la proximité et la sécurité nécessaires à une intimité épanouie.":
      "The Moon shows what provides emotional reassurance. Venus reveals how affection is given and received. Mars describes desire, initiative, and instinctive reactions. Together, these three functions show how you build the trust, closeness, and security needed for fulfilling intimacy.",
    "Vos besoins affectifs essentiels":
      "Your essential emotional needs",
    "Cette combinaison montre que la sécurité émotionnelle, les preuves d’affection et le rythme du désir doivent être reconnus ensemble pour permettre un véritable abandon.":
      "This combination shows that emotional security, expressions of affection, and the rhythm of desire need to be recognized together to allow genuine openness.",
    "Cette combinaison montre que la confiance se développe lorsque les émotions, la tendresse et le désir peuvent être exprimés sans jugement ni pression.":
      "This combination shows that trust develops when emotions, tenderness, and desire can be expressed without judgment or pressure.",
    "Vos principales interactions intimes":
      "Your main intimate interactions",
    "Ce qui vous rapproche":
      "What brings you closer",
    "La proximité augmente lorsque chacun peut parler de ses besoins, de ses peurs et de ses limites sans se sentir faible, jugé ou rejeté.":
      "Closeness grows when each person can speak about needs, fears, and boundaries without feeling weak, judged, or rejected.",
    "Ce qui demande du soin":
      "What needs care",
    "Les attentes silencieuses, les blessures anciennes ou un décalage entre tendresse et désir peuvent créer de la distance lorsqu’ils ne sont pas nommés.":
      "Unspoken expectations, old wounds, or a mismatch between tenderness and desire can create distance when they remain unspoken.",
    "Votre langage intime commun":
      "Your shared language of intimacy",
    "Votre intimité devient plus profonde lorsque vous alternez les moments de dialogue, les gestes d’affection et les expériences partagées. La sécurité ne s’oppose pas à la passion : elle permet au désir de se renouveler sans peur et donne à chacun la liberté d’être pleinement présent.":
      "Your intimacy deepens when you alternate moments of dialogue, affectionate gestures, and shared experiences. Security does not oppose passion: it allows desire to renew itself without fear and gives each person the freedom to be fully present.",
    "Votre clé d’intimité":
      "Your key to intimacy",
    "Créez régulièrement un moment sans écrans, sans obligation et sans attente précise. Utilisez cet espace pour vous retrouver, vous écouter et dire ce qui vous rapproche réellement en ce moment.":
      "Regularly create time without screens, obligations, or specific expectations. Use this space to reconnect, listen to one another, and express what genuinely brings you closer right now.",
  },

  es: {},
  de: {},
  it: {},
  pt: {},
};

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  if (!from || from === to) {
    return source;
  }

  return source.split(from).join(to);
}

export function localizeCompatibilityLove(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const dictionary =
    translations[
      locale as NonFrenchLocale
    ];

  if (!dictionary) {
    return source;
  }

  let localized = source;

  /*
   * Les chaînes les plus longues passent
   * en premier pour éviter qu'un petit mot
   * soit remplacé à l'intérieur d'une phrase
   * avant la traduction de cette phrase.
   */
  const entries = Object.entries(
    dictionary,
  ).sort(
    ([a], [b]) =>
      b.length - a.length,
  );

  for (const [from, to] of entries) {
    localized = replaceAllLiteral(
      localized,
      from,
      to,
    );
  }

  return localized;
}
