import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap = Record<string, string>;

/* =========================================================
   HELPERS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries = Object.entries(
    translations,
  ).sort(
    ([first], [second]) =>
      second.length - first.length,
  );

  for (const [from, to] of entries) {
    output = output
      .split(from)
      .join(to);
  }

  return output;
}

/* =========================================================
   FRENCH -> ENGLISH
   COMPLETE SOURCE TRANSLATION FOR
   buildYearAnnualPages.ts
========================================================= */

const FR_TO_EN: TranslationMap = {
  /* =======================================================
     ELEMENTS / MODALITIES
  ======================================================= */

  "Feu": "Fire",
  "Terre": "Earth",
  "Air": "Air",
  "Eau": "Water",

  "Cardinal": "Cardinal",
  "Fixe": "Fixed",
  "Mutable": "Mutable",

  /* =======================================================
     PLANETS
  ======================================================= */

  "Mercure": "Mercury",
  "Vénus": "Venus",
  "Mars": "Mars",
  "Jupiter": "Jupiter",
  "Saturne": "Saturn",
  "Uranus": "Uranus",
  "Neptune": "Neptune",
  "Pluton": "Pluto",
  "Lune": "Moon",
  "Soleil": "Sun",

  /* =======================================================
     ZODIAC PROFILE — KEYWORDS / STRENGTHS / CHALLENGES
  ======================================================= */

  "initiative": "initiative",
  "courage": "courage",
  "renouveau": "renewal",
  "affirmation": "self-assertion",
  "audace": "boldness",
  "rapidité d’action": "speed of action",
  "volonté": "willpower",
  "leadership": "leadership",
  "impatience": "impatience",
  "réactions impulsives": "impulsive reactions",
  "dispersion": "scattered focus",
  "confrontations": "confrontations",

  "stabilité": "stability",
  "construction": "building",
  "sécurité": "security",
  "plaisir": "pleasure",
  "persévérance": "perseverance",
  "patience": "patience",
  "fidélité": "loyalty",
  "sens pratique": "practical sense",
  "résistance au changement":
    "resistance to change",
  "attachement": "attachment",
  "lenteur": "slowness",
  "rigidité": "rigidity",

  "communication": "communication",
  "curiosité": "curiosity",
  "mouvement": "movement",
  "apprentissage": "learning",
  "adaptabilité": "adaptability",
  "intelligence": "intelligence",
  "souplesse": "flexibility",
  "sociabilité": "sociability",
  "indécision": "indecision",
  "nervosité": "nervousness",
  "superficialité": "superficiality",

  "émotions": "emotions",
  "famille": "family",
  "protection": "protection",
  "intimité": "intimacy",
  "intuition": "intuition",
  "sensibilité": "sensitivity",
  "loyauté": "loyalty",
  "empathie": "empathy",
  "hypersensibilité": "hypersensitivity",
  "repli": "withdrawal",
  "nostalgie": "nostalgia",
  "insécurité": "insecurity",

  "rayonnement": "radiance",
  "créativité": "creativity",
  "expression": "expression",
  "reconnaissance": "recognition",
  "générosité": "generosity",
  "charisme": "charisma",
  "confiance": "confidence",
  "orgueil": "pride",
  "besoin de validation":
    "need for validation",
  "dramatisation": "dramatization",
  "entêtement": "stubbornness",

  "organisation": "organization",
  "amélioration": "improvement",
  "service": "service",
  "précision": "precision",
  "analyse": "analysis",
  "discipline": "discipline",
  "fiabilité": "reliability",
  "méthode": "method",
  "perfectionnisme": "perfectionism",
  "inquiétude": "worry",
  "autocritique": "self-criticism",
  "contrôle": "control",

  "équilibre": "balance",
  "relations": "relationships",
  "harmonie": "harmony",
  "coopération": "cooperation",
  "diplomatie": "diplomacy",
  "élégance": "grace",
  "écoute": "listening",
  "sens de la justice":
    "sense of fairness",
  "évitement": "avoidance",
  "dépendance au regard":
    "dependence on others' approval",
  "compromis excessifs":
    "excessive compromises",

  "transformation": "transformation",
  "intensité": "intensity",
  "vérité": "truth",
  "régénération": "regeneration",
  "profondeur": "depth",
  "résilience": "resilience",
  "détermination": "determination",
  "méfiance": "distrust",
  "obsession": "obsession",
  "radicalité": "radicalism",

  "expansion": "expansion",
  "aventure": "adventure",
  "connaissance": "knowledge",
  "liberté": "freedom",
  "optimisme": "optimism",
  "vision": "vision",
  "enthousiasme": "enthusiasm",
  "franchise": "frankness",
  "excès": "excess",
  "imprudence": "recklessness",
  "manque de constance":
    "lack of consistency",

  "ambition": "ambition",
  "structure": "structure",
  "responsabilité": "responsibility",
  "accomplissement": "achievement",
  "endurance": "endurance",
  "maturité": "maturity",
  "stratégie": "strategy",
  "pessimisme": "pessimism",
  "surmenage": "overwork",
  "distance émotionnelle":
    "emotional distance",

  "innovation": "innovation",
  "indépendance": "independence",
  "avenir": "future",
  "collectif": "collective",
  "originalité": "originality",
  "autonomie": "autonomy",
  "inventivité": "inventiveness",
  "détachement": "detachment",
  "imprévisibilité": "unpredictability",
  "ruptures brusques":
    "sudden ruptures",

  "spiritualité": "spirituality",
  "compassion": "compassion",
  "imagination": "imagination",
  "réceptivité": "receptivity",
  "inspiration": "inspiration",
  "confusion": "confusion",
  "fuite": "escapism",
  "idéalisme": "idealism",
  "limites fragiles":
    "fragile boundaries",

  /* =======================================================
     GENERAL OVERVIEW TEXTS
  ======================================================= */

  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.":
    "This year opens a cycle of growth in which conscious choices will carry more weight than immediate reactions.",

  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
    "The year highlights several opportunities for reorientation, maturation, and personal consolidation.",

  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.":
    "A dynamic of gradual transformation accompanies this period and invites you to reassess your priorities.",

  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.":
    "This year favors a deeper understanding of your needs, ambitions, and relationships.",

  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.":
    "The climate of the year encourages you to combine intuition, clarity, and consistency so that you can move forward with greater control.",

  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.":
    "The coming months will alternate between periods of expansion and moments of refocusing. The most constructive periods will be those in which you allow yourself to move forward without rushing.",

  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
    "Your progress will depend less on the number of actions you take than on your ability to choose projects that are truly aligned with your growth.",

  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.":
    "The year asks you to strengthen what is solid, transform what no longer meets your needs, and preserve your energy.",

  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.":
    "Several important decisions may permanently alter your path. A clear understanding of your priorities will be your best guide.",

  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.":
    "This period favors thoughtful changes, realizations, and the creation of new foundations that are more aligned with your identity.",

  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.":
    "Move forward step by step and regularly check that your decisions still reflect your deepest priorities.",

  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.":
    "Maintain a clear direction, but give yourself the freedom to adjust your strategy as circumstances evolve.",

  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
    "Avoid scattering your energy. The most lasting results will come from steady commitment to a few essential goals.",

  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.":
    "Listen to your intuition without neglecting concrete facts. The balance between instinct and realism will help you make better choices.",

  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
    "Give more space to what nourishes your stability, confidence, and sense of progress.",

  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.":
    "This year can become a decisive stage if you transform your realizations into concrete decisions.",

  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.":
    "Your ability to remain faithful to your vision while adapting flexibly will be one of your greatest strengths.",

  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
    "The most important transformations will not always be immediately visible, but they will prepare a more coherent future.",

  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.":
    "By cultivating patience, discernment, and consistency, you can make this year a period of genuine growth.",

  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.":
    "The year gives you the opportunity to build a more conscious path that is better aligned with the person you are becoming.",

  /* =======================================================
     ENERGY TITLES
  ======================================================= */

  "Expansion personnelle":
    "Personal expansion",
  "Transformation intérieure":
    "Inner transformation",
  "Stabilité et construction":
    "Stability and building",
  "Ouverture relationnelle":
    "Relationship openness",
  "Réorientation professionnelle":
    "Professional reorientation",
  "Créativité et expression":
    "Creativity and expression",
  "Guérison émotionnelle":
    "Emotional healing",
  "Affirmation de soi":
    "Self-assertion",
  "Organisation et discipline":
    "Organization and discipline",
  "Intuition et compréhension":
    "Intuition and understanding",

  /* =======================================================
     ASPECT NAMES
  ======================================================= */

  "Jupiter et Soleil":
    "Jupiter and Sun",
  "Saturne et Soleil":
    "Saturn and Sun",
  "Vénus et Jupiter":
    "Venus and Jupiter",
  "Mars et Saturne":
    "Mars and Saturn",
  "Mercure et Uranus":
    "Mercury and Uranus",
  "Lune et Neptune":
    "Moon and Neptune",
  "Pluton et Soleil":
    "Pluto and Sun",
  "Jupiter et Saturne":
    "Jupiter and Saturn",

  "Aspect d’expansion":
    "Expansion aspect",
  "Aspect de structuration":
    "Structuring aspect",
  "Aspect d’harmonie":
    "Harmony aspect",
  "Aspect de maîtrise":
    "Mastery aspect",
  "Aspect d’innovation":
    "Innovation aspect",
  "Aspect d’intuition":
    "Intuition aspect",
  "Aspect de transformation":
    "Transformation aspect",
  "Aspect de consolidation":
    "Consolidation aspect",

  /* =======================================================
     PLANET AREAS
  ======================================================= */

  "identité, confiance et rayonnement":
    "identity, confidence and radiance",

  "émotions, intuition et sécurité intérieure":
    "emotions, intuition and inner security",

  "communication, décisions et apprentissage":
    "communication, decisions and learning",

  "relations, valeurs et harmonie":
    "relationships, values and harmony",

  "action, courage et affirmation":
    "action, courage and self-assertion",

  "expansion, opportunités et évolution":
    "expansion, opportunities and growth",

  "structure, responsabilités et maturité":
    "structure, responsibilities and maturity",

  "changement, liberté et innovation":
    "change, freedom and innovation",

  "intuition, imagination et spiritualité":
    "intuition, imagination and spirituality",

  "transformation, pouvoir personnel et régénération":
    "transformation, personal power and regeneration",

  "évolution personnelle et décisions importantes":
    "personal growth and important decisions",

  /* =======================================================
     HOUSE TITLES
  ======================================================= */

  "Identité et nouveaux départs":
    "Identity and new beginnings",

  "Ressources et sécurité":
    "Resources and security",

  "Communication et apprentissage":
    "Communication and learning",

  "Foyer et racines":
    "Home and roots",

  "Créativité et expression":
    "Creativity and expression",

  "Travail quotidien et bien-être":
    "Daily work and well-being",

  "Relations et engagements":
    "Relationships and commitments",

  "Transformation et intimité":
    "Transformation and intimacy",

  "Expansion et vision":
    "Expansion and vision",

  "Carrière et accomplissement":
    "Career and achievement",

  "Projets et vie sociale":
    "Projects and social life",

  "Intériorité et guérison":
    "Inner world and healing",

  /* =======================================================
     HOUSE AREAS
  ======================================================= */

  "votre identité, vos initiatives et votre manière de vous affirmer":
    "your identity, initiatives, and way of asserting yourself",

  "vos finances, vos valeurs et votre sentiment de sécurité":
    "your finances, values, and sense of security",

  "vos échanges, vos apprentissages et votre environnement proche":
    "your exchanges, learning, and immediate environment",

  "votre vie familiale, votre foyer et vos fondations émotionnelles":
    "your family life, home, and emotional foundations",

  "votre créativité, vos plaisirs et votre expression personnelle":
    "your creativity, pleasures, and personal expression",

  "vos habitudes, votre organisation et votre équilibre quotidien":
    "your habits, organization, and daily balance",

  "vos relations importantes, vos associations et vos engagements":
    "your important relationships, partnerships, and commitments",

  "vos transformations profondes, votre intimité et vos ressources partagées":
    "your deep transformations, intimacy, and shared resources",

  "vos projets d’expansion, vos convictions et votre ouverture au monde":
    "your expansion projects, beliefs, and openness to the world",

  "votre carrière, votre réputation et vos ambitions":
    "your career, reputation, and ambitions",

  "vos projets collectifs, vos amitiés et votre vision de l’avenir":
    "your collective projects, friendships, and vision of the future",

  "votre monde intérieur, votre intuition et vos processus de guérison":
    "your inner world, intuition, and healing processes",

  /* =======================================================
     OVERVIEW — DYNAMIC TEMPLATES
  ======================================================= */

  "${capitalize(keyword)} devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.":
    "${capitalize(keyword)} becomes an important theme of the year. You will be encouraged to give it a more conscious place in your decisions and personal growth.",

  "Le domaine ${withDeArticle(keyword)} connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
    "The area of ${keyword} will experience several shifts during the year. A gradual approach will help you get the best results from them.",

  "Votre rapport ${withAArticle(keyword)} évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
    "Your relationship with ${keyword} will evolve noticeably. Certain situations will help you better understand what truly deserves your energy.",

  "Cette année favorise une nouvelle façon d’aborder ${withDefiniteArticle(keyword)}. Les expériences vécues pourront modifier durablement vos priorités.":
    "This year favors a new way of approaching ${keyword}. Your experiences may permanently change your priorities.",

  "Votre année ${period.year}":
    "Your Year ${period.year}",

  "L’énergie dominante de votre année repose sur ${withDefiniteArticle(selectedKeywords[0])}, soutenue par votre élément ${profile.element} et par la dynamique ${profile.modality.toLowerCase()} de votre signe.":
    "The dominant energy of your year is based on ${selectedKeywords[0]}, supported by your ${profile.element} element and the ${profile.modality.toLowerCase()} modality of your sign.",

  /* =======================================================
     MAJOR ENERGIES — DYNAMIC TEMPLATES
  ======================================================= */

  "Cette énergie stimule votre ${strength} et vous encourage à développer une approche plus consciente de vos choix. Son influence pourra se manifester dans plusieurs domaines au fil de l’année.":
    "This energy stimulates your ${strength} and encourages you to develop a more conscious approach to your choices. Its influence may appear in several areas throughout the year.",

  "Le courant lié ${withAArticle(title.toLowerCase())} met en valeur votre ${strength}. Il vous invite à avancer avec plus de discernement et à reconnaître les occasions qui correspondent réellement à vos priorités.":
    "The current associated with ${title.toLowerCase()} highlights your ${strength}. It invites you to move forward with greater discernment and recognize opportunities that truly match your priorities.",

  "Au cours de l’année, cette dynamique renforcera votre capacité à agir avec ${strength}. Certaines situations vous demanderont toutefois de canaliser cette force afin de l’utiliser de façon constructive.":
    "During the year, this dynamic will strengthen your ability to act with ${strength}. Some situations will nevertheless require you to channel this strength constructively.",

  "Cette influence soutient une évolution fondée sur davantage ${withDe(strength)}. Elle pourra modifier votre manière d’aborder vos décisions, vos relations ou vos projets personnels.":
    "This influence supports growth based on greater ${strength}. It may change the way you approach your decisions, relationships, or personal projects.",

  "${capitalize(strength)} devient ici un véritable levier de progression. Plus vous exprimerez cette qualité avec équilibre, plus cette énergie vous aidera à construire des résultats durables.":
    "${capitalize(strength)} becomes a genuine driver of growth here. The more you express this quality with balance, the more this energy will help you build lasting results.",

  "La dynamique de ${title.toLowerCase()} vous pousse à mobiliser votre ${strength} d’une manière nouvelle. Elle favorise les choix réfléchis, les ajustements utiles et une meilleure maîtrise de votre direction.":
    "The dynamic of ${title.toLowerCase()} encourages you to use your ${strength} in a new way. It favors thoughtful choices, useful adjustments, and greater control over your direction.",

  "Appuyez-vous sur votre ${strength}, tout en évitant que ${withDefiniteArticle(challenge)} ne ralentisse votre progression.":
    "Rely on your ${strength}, while preventing ${challenge} from slowing your progress.",

  "Faites de votre ${strength} un point d’appui, mais surveillez les moments où ${withDefiniteArticle(challenge)} pourrait brouiller votre jugement.":
    "Make your ${strength} a source of support, but watch for moments when ${challenge} could cloud your judgment.",

  "Votre meilleure stratégie consiste à exprimer votre ${strength} avec mesure, sans laisser ${withDefiniteArticle(challenge)} dominer vos réactions.":
    "Your best strategy is to express your ${strength} with balance, without letting ${challenge} dominate your reactions.",

  "Cultivez votre ${strength} avec constance. Une attention particulière ${withAArticle(challenge)} vous aidera à préserver votre équilibre.":
    "Cultivate your ${strength} consistently. Paying particular attention to ${challenge} will help you preserve your balance.",

  "Utilisez votre ${strength} pour avancer, puis prenez du recul dès que ${withDefiniteArticle(challenge)} menace de vous éloigner de votre objectif principal.":
    "Use your ${strength} to move forward, then step back whenever ${challenge} threatens to pull you away from your main goal.",

  "Énergie dominante":
    "Dominant Energy",

  "Influence complémentaire ${index + 1}":
    "Complementary influence ${index + 1}",

  "Les grandes énergies de l’année":
    "The Major Energies of the Year",

  "Votre année ${period.year} est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
    "Your Year ${period.year} is shaped by several complementary currents. Some will favor expansion, while others will invite you to slow down, observe, and restructure your priorities.",

  "L’équilibre entre votre élément ${profile.element} et votre modalité ${profile.modality} vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
    "The balance between your ${profile.element} element and ${profile.modality} modality will allow you to alternate between action, adaptation, and consolidation. Your progress will be smoother when you respect your own rhythm.",

  "Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.":
    "These different energies will not all express themselves at the same time. Together, they will form the overall movement of your year and help you move toward a more self-assured version of yourself.",

  /* =======================================================
     MAJOR ASPECTS
  ======================================================= */

  "Début d’année":
    "Beginning of the year",
  "Printemps":
    "Spring",
  "Été":
    "Summer",
  "Automne":
    "Autumn",
  "Fin d’année":
    "End of the year",
  "Plusieurs périodes de l’année":
    "Several periods of the year",

  "Cet aspect agit sur votre capacité à développer davantage ${withDe(strength)}. Il peut provoquer une évolution importante dans votre manière de décider et d’organiser vos priorités.":
    "This aspect acts on your ability to develop greater ${strength}. It may lead to an important change in the way you make decisions and organize your priorities.",

  "La rencontre symbolique entre ${selectedAspect.planets} renforce votre ${strength}. Elle peut vous conduire à modifier une méthode, une habitude ou une orientation devenue trop limitée.":
    "The symbolic encounter between ${selectedAspect.planets} strengthens your ${strength}. It may lead you to change a method, habit, or direction that has become too limiting.",

  "Cette configuration met en mouvement le thème ${withDeArticle(keyword)}. Son influence favorise les prises de conscience capables de transformer durablement votre manière d’agir.":
    "This configuration activates the theme of ${keyword}. Its influence favors realizations capable of permanently transforming the way you act.",

  "Sous cet aspect, votre ${strength} devient un outil essentiel. Les événements de cette période pourront vous inciter à faire des choix plus précis et mieux alignés avec vos objectifs.":
    "Under this aspect, your ${strength} becomes an essential tool. Events during this period may encourage you to make more precise choices that are better aligned with your goals.",

  "L’influence de ${selectedAspect.planets} crée un climat propice à une évolution intérieure ou concrète. Elle vous demande d’unir votre instinct à une vision plus structurée.":
    "The influence of ${selectedAspect.planets} creates a climate favorable to inner or concrete growth. It asks you to unite your instinct with a more structured vision.",

  "Utiliser cette période pour renforcer votre ${keyword} et prendre des décisions capables de produire des résultats durables.":
    "Use this period to strengthen your ${keyword} and make decisions capable of producing lasting results.",

  "Transformer votre ${strength} en action concrète et faire progresser un projet qui demande davantage de clarté ou de constance.":
    "Transform your ${strength} into concrete action and move forward a project that requires greater clarity or consistency.",

  "Profiter de cette influence pour revoir vos priorités, consolider ce qui fonctionne et ouvrir une nouvelle voie là où un changement devient nécessaire.":
    "Use this influence to review your priorities, consolidate what works, and open a new path where change becomes necessary.",

  "Donner une place plus consciente ${withAArticle(keyword)} afin de construire des choix qui correspondent mieux à votre évolution actuelle.":
    "Give ${keyword} a more conscious place in order to make choices that better reflect your current growth.",

  "Saisir les occasions qui vous permettent d’exprimer votre ${strength} tout en développant une stratégie plus stable pour la suite.":
    "Seize opportunities that allow you to express your ${strength} while developing a more stable strategy for what comes next.",

  "Éviter que ${withDefiniteArticle(challenge)} ne vous pousse à réagir trop rapidement ou à perdre de vue votre objectif principal.":
    "Avoid letting ${challenge} push you to react too quickly or lose sight of your main goal.",

  "Rester attentif aux manifestations ${withDeArticle(challenge)}, surtout lorsque la pression vous incite à décider avant d’avoir toutes les informations.":
    "Stay attentive to signs of ${challenge}, especially when pressure encourages you to decide before you have all the information.",

  "Ne pas laisser ${withDefiniteArticle(challenge)} transformer une tension passagère en décision définitive. Le recul restera votre meilleur allié.":
    "Do not let ${challenge} turn a temporary tension into a final decision. Perspective will remain your best ally.",

  "Préserver votre énergie et vérifier que ${withDefiniteArticle(challenge)} ne déforme pas votre perception de la situation.":
    "Protect your energy and make sure ${challenge} does not distort your perception of the situation.",

  "Refuser les réactions automatiques liées à ${withDefiniteArticle(challenge)} et privilégier une réponse plus consciente, même lorsque les événements s’accélèrent.":
    "Reject automatic reactions linked to ${challenge} and favor a more conscious response, even when events accelerate.",

  "Les aspects majeurs de l’année":
    "The Major Aspects of the Year",

  "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ${period.year}. Ils indiquent les périodes de mouvement, de structuration et de transformation.":
    "The aspects presented here symbolize the main planetary dynamics shaping your Year ${period.year}. They indicate periods of movement, structuring, and transformation.",

  "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
    "All of these influences ask you to unite your natural instinct with a more strategic vision. The most intense periods can become particularly constructive if you accept adjusting your methods.",

  "Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.":
    "Observe recurring patterns in the events of the year. They may reveal the specific area where a transformation or decision becomes necessary.",

  "Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.":
    "The major aspects do not determine your choices, but they describe the climates accompanying your growth. Your awareness and adaptability will remain essential.",

  /* =======================================================
     DOMINANT PLANETS
  ======================================================= */

  "${planet} accentue votre rapport à ${withDefiniteArticle(keyword)}. Son influence vous encourage à développer plus consciemment votre ${strength}.":
    "${planet} emphasizes your relationship with ${keyword}. Its influence encourages you to develop your ${strength} more consciously.",

  "L’énergie de ${planet} met en lumière votre ${strength} et transforme votre façon d’aborder ${withDefiniteArticle(keyword)}.":
    "The energy of ${planet} highlights your ${strength} and transforms the way you approach ${keyword}.",

  "${planet} joue un rôle important dans votre évolution annuelle. Cette planète soutient votre ${strength} tout en vous invitant à clarifier vos intentions.":
    "${planet} plays an important role in your annual growth. This planet supports your ${strength} while inviting you to clarify your intentions.",

  "Sous l’influence de ${planet}, le thème ${withDeArticle(keyword)} prend une dimension nouvelle. Votre ${strength} pourra alors devenir une force particulièrement utile.":
    "Under the influence of ${planet}, the theme of ${keyword} takes on a new dimension. Your ${strength} can then become a particularly useful strength.",

  "La présence ${withDePlanet(planet)} renforce les situations qui sollicitent votre ${strength}. Elle vous aide à reconnaître ce qui doit être développé, corrigé ou dépassé.":
    "The presence of ${planet} strengthens situations that call upon your ${strength}. It helps you recognize what needs to be developed, corrected, or surpassed.",

  "La présence symbolique ${withDePlanet(planet)} vous rappelle que votre progression dépend autant de votre volonté que de votre capacité à comprendre le bon moment pour agir.":
    "The symbolic presence of ${planet} reminds you that your progress depends as much on your will as on your ability to understand the right time to act.",

  "${planet} vous invite à observer le rythme naturel des événements. Tout ne demande pas une action immédiate, mais chaque situation peut offrir une information utile.":
    "${planet} invites you to observe the natural rhythm of events. Not everything requires immediate action, but every situation can offer useful information.",

  "Le message ${withDePlanet(planet)} consiste à unir conscience et mouvement. Votre évolution deviendra plus fluide lorsque vos décisions respecteront à la fois vos besoins et la réalité.":
    "The message of ${planet} is to unite awareness and movement. Your growth will become smoother when your decisions respect both your needs and reality.",

  "À travers ${planet}, l’année vous demande de reconnaître votre pouvoir d’action sans chercher à tout contrôler. La justesse comptera davantage que la vitesse.":
    "Through ${planet}, the year asks you to recognize your power to act without trying to control everything. Accuracy will matter more than speed.",

  "${planet} souligne une leçon essentielle : les progrès les plus solides apparaissent lorsque l’intention, le moment et l’action avancent dans la même direction.":
    "${planet} highlights an essential lesson: the strongest progress appears when intention, timing, and action move in the same direction.",

  "Utilisez cette influence pour soutenir votre ${strength}, sans laisser ${withDefiniteArticle(challenge)} prendre trop de place.":
    "Use this influence to support your ${strength}, without letting ${challenge} take up too much space.",

  "Appuyez-vous sur votre ${strength}, puis prenez du recul lorsque ${withDefiniteArticle(challenge)} menace de déséquilibrer vos décisions.":
    "Rely on your ${strength}, then step back when ${challenge} threatens to unbalance your decisions.",

  "Exprimez votre ${strength} de façon constructive et observez les situations dans lesquelles ${withDefiniteArticle(challenge)} pourrait limiter votre progression.":
    "Express your ${strength} constructively and observe situations in which ${challenge} could limit your progress.",

  "Canalisez l’énergie de ${planet} vers des objectifs précis. Votre ${strength} sera plus efficace si elle n’est pas affaiblie par ${withDefiniteArticle(challenge)}.":
    "Channel the energy of ${planet} toward specific goals. Your ${strength} will be more effective if it is not weakened by ${challenge}.",

  "Faites de votre ${strength} une ressource consciente et transformez les manifestations ${withDeArticle(challenge)} en occasion d’ajustement.":
    "Make your ${strength} a conscious resource and turn manifestations of ${challenge} into opportunities for adjustment.",

  "Les planètes dominantes":
    "The Dominant Planets",

  "Certaines planètes exercent une influence plus marquée sur le climat de votre année ${period.year}. Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
    "Some planets exert a stronger influence on the climate of your Year ${period.year}. They represent the strengths you will be invited to develop, master, or integrate.",

  "${planets[0].planet} occupe une place centrale cette année. Son énergie est complétée par ${planets":
    "${planets[0].planet} plays a central role this year. Its energy is complemented by ${planets",

  "créant un mélange d’expansion, de réflexion et de transformation.":
    "creating a blend of expansion, reflection, and transformation.",

  "Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.":
    "Work with these influences rather than endure them. Each represents an inner capacity that you can use more consciously.",

  "Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.":
    "The dominant planets highlight the qualities you will need most this year. The more you express them with balance, the more harmonious your progress will be.",

  /* =======================================================
     ACTIVATED HOUSES
  ======================================================= */

  "Cette maison met l’accent sur ${area}. Plusieurs événements pourront vous amener à revoir vos habitudes, vos attentes ou votre manière d’agir dans ce secteur.":
    "This house emphasizes ${area}. Several events may lead you to review your habits, expectations, or way of acting in this area.",

  "Le secteur associé à cette maison prendra une importance particulière au cours de l’année. Les expériences vécues autour de ${area} pourront transformer vos priorités.":
    "The area associated with this house will take on particular importance during the year. Experiences related to ${area} may transform your priorities.",

  "Cette maison devient un point actif de votre évolution annuelle. Elle attire votre attention sur ${area} et vous encourage à y construire des repères plus adaptés à vos besoins actuels.":
    "This house becomes an active point in your annual growth. It draws your attention to ${area} and encourages you to build reference points that are better suited to your current needs.",

  "Les événements liés à ${area} pourront se multiplier ou gagner en intensité. Cette dynamique vous invitera à faire des choix plus conscients dans ce domaine.":
    "Events related to ${area} may multiply or intensify. This dynamic will invite you to make more conscious choices in this area.",

  "L’activation de cette maison met en lumière ${area}. Ce secteur pourra devenir le théâtre d’une décision, d’un changement ou d’une consolidation importante.":
    "The activation of this house highlights ${area}. This area may become the setting for an important decision, change, or consolidation.",

  "Une partie de votre progression passera cette année par ${area}. Vous pourriez y constater une évolution graduelle, mais suffisamment profonde pour modifier votre équilibre général.":
    "Part of your growth this year will involve ${area}. You may notice gradual but sufficiently deep changes to alter your overall balance.",

  "Faire évoluer ce domaine grâce à davantage ${withDe(strength)}. Les décisions prises avec constance pourront créer des effets durables.":
    "Develop this area through greater ${strength}. Decisions made consistently can create lasting effects.",

  "Utiliser votre ${strength} pour consolider ce secteur et transformer une situation encore fragile en base plus stable.":
    "Use your ${strength} to consolidate this area and transform a still-fragile situation into a more stable foundation.",

  "Profiter des changements dans ce domaine pour exprimer votre ${strength}, revoir vos priorités et ouvrir une voie plus cohérente.":
    "Use changes in this area to express your ${strength}, review your priorities, and open a more coherent path.",

  "Développer une nouvelle manière d’aborder ${area}, en vous appuyant sur votre ${strength} et sur des choix concrets.":
    "Develop a new way of approaching ${area}, relying on your ${strength} and concrete choices.",

  "Reconnaître les occasions de progression qui se présentent dans ce secteur et les soutenir avec votre ${strength}.":
    "Recognize opportunities for growth in this area and support them with your ${strength}.",

  "Créer un meilleur équilibre dans ce domaine en transformant votre ${strength} en actions régulières et mesurables.":
    "Create better balance in this area by transforming your ${strength} into regular, measurable actions.",

  "Évitez que ${withDefiniteArticle(challenge)} ne vous empêche de reconnaître les possibilités de progression présentes dans ce secteur.":
    "Avoid letting ${challenge} prevent you from recognizing opportunities for growth in this area.",

  "Restez attentif ${withAArticle(challenge)}, qui pourrait vous faire sous-estimer une occasion ou retarder une décision utile.":
    "Stay alert to ${challenge}, which could cause you to underestimate an opportunity or delay a useful decision.",

  "Ne laissez pas ${withDefiniteArticle(challenge)} définir votre manière de réagir. Un ajustement progressif sera souvent plus efficace qu’une rupture précipitée.":
    "Do not let ${challenge} define the way you react. A gradual adjustment will often be more effective than a rushed break.",

  "Dans ce secteur, votre principal défi sera de dépasser ${withDefiniteArticle(challenge)} sans perdre de vue vos besoins réels.":
    "In this area, your main challenge will be to move beyond ${challenge} without losing sight of your real needs.",

  "Prenez du recul lorsque ${withDefiniteArticle(challenge)} apparaît. Cette pause vous aidera à distinguer une véritable limite d’une résistance passagère.":
    "Step back when ${challenge} appears. This pause will help you distinguish a genuine limit from temporary resistance.",

  "Protégez votre progression contre les effets ${withDeArticle(challenge)} en revenant régulièrement à vos priorités essentielles.":
    "Protect your progress from the effects of ${challenge} by regularly returning to your essential priorities.",

  "Les maisons activées":
    "The Activated Houses",

  "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ${period.year}.":
    "The astrological houses represent the major areas of your life. Those shown here will be particularly important during your Year ${period.year}.",

  "La maison ${houses[0].house}, associée à ${houses[0].title.toLowerCase()}, forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
    "House ${houses[0].house}, associated with ${houses[0].title.toLowerCase()}, forms the heart of your annual growth. The other activated houses show how this dynamic will affect several dimensions of your life.",

  "Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.":
    "Observe in which areas changes occur most frequently. They will indicate where your energy needs to be used with greater awareness.",

  "Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.":
    "These activated houses outline a map of your main priorities. They invite you to build a better balance between your personal needs, responsibilities, and aspirations.",
};
