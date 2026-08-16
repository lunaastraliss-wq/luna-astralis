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
    "Expérience complète":
      "Complete experience",

    "Gratuit":
      "Free",

    "L’univers Luna Astralis":
      "The Luna Astralis universe",

    "Continuez votre voyage astrologique":
      "Continue your astrological journey",

    "Une astrologie qui vous accompagne":
      "Astrology that guides you",

    "Découvrez les autres expériences Luna Astralis":
      "Discover more Luna Astralis experiences",

    "Explorez gratuitement votre univers astrologique ou approfondissez votre chemin grâce à nos rapports personnalisés, conçus pour éclairer vos choix, vos relations et les grandes étapes de votre vie.":
      "Explore your astrological universe for free or deepen your journey with our personalized reports, designed to shed light on your choices, relationships, and the major stages of your life.",

    "Vos outils gratuits":
      "Your free tools",

    "Horoscope quotidien":
      "Daily horoscope",

    "Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie.":
      "Discover the daily trends for your zodiac sign in the essential areas of your life.",

    "Carte du ciel":
      "Birth chart",

    "Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant.":
      "Get your astrological chart and discover your Sun, Moon, and Rising sign.",

    "Compatibilité amoureuse":
      "Love compatibility",

    "Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux.":
      "Compare two zodiac signs and get a first glimpse of their romantic potential.",

    "Vos rapports personnalisés":
      "Your personalized reports",

    "Horoscope du jour":
      "Daily horoscope",

    "Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités.":
      "A detailed reading of your energies, relationships, career, and opportunities.",

    "Horoscope du mois":
      "Monthly horoscope",

    "Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines.":
      "A complete overview of the trends, favorable periods, and challenges of the coming weeks.",

    "Horoscope de l’année":
      "Yearly horoscope",

    "Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année.":
      "Your astrological roadmap for understanding the major cycles and important moments of your year.",

    "Compatibilité Premium":
      "Premium Compatibility",

    "Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple.":
      "An in-depth analysis of your romantic connection, emotions, communication, and relationship potential.",

    "Carte du ciel Essentielle":
      "Essential Birth Chart",

    "Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances.":
      "The foundations of your birth chart, your main planets, elements, and major tendencies.",

    "Essentielle":
      "Essential",

    "Carte du ciel Premium":
      "Premium Birth Chart",

    "Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière.":
      "An in-depth exploration of your planets, houses, aspects, strengths, challenges, relationships, and career.",

    "Carte du ciel Signature":
      "Signature Birth Chart",

    "L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel.":
      "The most complete Luna Astralis experience for exploring your personality, life path, and potential.",

    "Votre univers astrologique":
      "Your astrological universe",

    "Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis.":
      "Discover all your free tools and personalized reports on Luna Astralis.",

    "En ligne":
      "Online",

    "Découvrez Luna Astralis":
      "Discover Luna Astralis",

    "Retrouvez gratuitement vos outils astrologiques et choisissez le rapport personnalisé qui correspond à votre chemin.":
      "Access your astrological tools for free and choose the personalized report that matches your journey.",

    "Visiter le site":
      "Visit the website",
  },

  es: {
    "Expérience complète":
      "Experiencia completa",

    "Gratuit":
      "Gratis",

    "L’univers Luna Astralis":
      "El universo Luna Astralis",

    "Continuez votre voyage astrologique":
      "Continúe su viaje astrológico",

    "Une astrologie qui vous accompagne":
      "Una astrología que le acompaña",

    "Découvrez les autres expériences Luna Astralis":
      "Descubra otras experiencias Luna Astralis",

    "Explorez gratuitement votre univers astrologique ou approfondissez votre chemin grâce à nos rapports personnalisés, conçus pour éclairer vos choix, vos relations et les grandes étapes de votre vie.":
      "Explore gratuitamente su universo astrológico o profundice en su camino con nuestros informes personalizados, diseñados para iluminar sus decisiones, sus relaciones y las grandes etapas de su vida.",

    "Vos outils gratuits":
      "Sus herramientas gratuitas",

    "Horoscope quotidien":
      "Horóscopo diario",

    "Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie.":
      "Descubra cada día las tendencias de su signo en los ámbitos esenciales de su vida.",

    "Carte du ciel":
      "Carta natal",

    "Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant.":
      "Obtenga su carta astrológica y descubra su Sol, su Luna y su Ascendente.",

    "Compatibilité amoureuse":
      "Compatibilidad amorosa",

    "Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux.":
      "Compare dos signos y obtenga una primera visión de su potencial amoroso.",

    "Vos rapports personnalisés":
      "Sus informes personalizados",

    "Horoscope du jour":
      "Horóscopo diario",

    "Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités.":
      "Una lectura detallada de sus energías, relaciones, carrera y oportunidades.",

    "Horoscope du mois":
      "Horóscopo mensual",

    "Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines.":
      "Una visión completa de las tendencias, los períodos favorables y los desafíos de las próximas semanas.",

    "Horoscope de l’année":
      "Horóscopo anual",

    "Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année.":
      "Su hoja de ruta astrológica para comprender los grandes ciclos y los momentos importantes de su año.",

    "Compatibilité Premium":
      "Compatibilidad Premium",

    "Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple.":
      "Un análisis profundo del vínculo amoroso, las emociones, la comunicación y el potencial de la pareja.",

    "Carte du ciel Essentielle":
      "Carta natal Esencial",

    "Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances.":
      "Los fundamentos de su carta natal, sus planetas principales, sus elementos y sus grandes tendencias.",

    "Essentielle":
      "Esencial",

    "Carte du ciel Premium":
      "Carta natal Premium",

    "Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière.":
      "Una exploración profunda de sus planetas, casas, aspectos, fortalezas, desafíos, relaciones y carrera.",

    "Carte du ciel Signature":
      "Carta natal Signature",

    "L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel.":
      "La experiencia Luna Astralis más completa para explorar su personalidad, su camino de vida y su potencial.",

    "Votre univers astrologique":
      "Su universo astrológico",

    "Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis.":
      "Encuentre todas sus herramientas gratuitas y sus informes personalizados en Luna Astralis.",

    "En ligne":
      "En línea",

    "Découvrez Luna Astralis":
      "Descubra Luna Astralis",

    "Retrouvez gratuitement vos outils astrologiques et choisissez le rapport personnalisé qui correspond à votre chemin.":
      "Acceda gratuitamente a sus herramientas astrológicas y elija el informe personalizado que corresponda a su camino.",

    "Visiter le site":
      "Visitar el sitio",
  },

  de: {
    "Expérience complète":
      "Komplettes Erlebnis",

    "Gratuit":
      "Kostenlos",

    "L’univers Luna Astralis":
      "Die Welt von Luna Astralis",

    "Continuez votre voyage astrologique":
      "Setzen Sie Ihre astrologische Reise fort",

    "Une astrologie qui vous accompagne":
      "Astrologie, die Sie begleitet",

    "Découvrez les autres expériences Luna Astralis":
      "Entdecken Sie weitere Luna-Astralis-Erlebnisse",

    "Explorez gratuitement votre univers astrologique ou approfondissez votre chemin grâce à nos rapports personnalisés, conçus pour éclairer vos choix, vos relations et les grandes étapes de votre vie.":
      "Entdecken Sie kostenlos Ihre astrologische Welt oder vertiefen Sie Ihren Weg mit unseren personalisierten Berichten, die Ihre Entscheidungen, Beziehungen und wichtigen Lebensphasen beleuchten.",

    "Vos outils gratuits":
      "Ihre kostenlosen Werkzeuge",

    "Horoscope quotidien":
      "Tageshoroskop",

    "Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie.":
      "Entdecken Sie täglich die Tendenzen Ihres Sternzeichens in den wichtigsten Bereichen Ihres Lebens.",

    "Carte du ciel":
      "Geburtshoroskop",

    "Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant.":
      "Erhalten Sie Ihr astrologisches Horoskop und entdecken Sie Ihre Sonne, Ihren Mond und Ihren Aszendenten.",

    "Compatibilité amoureuse":
      "Liebeskompatibilität",

    "Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux.":
      "Vergleichen Sie zwei Sternzeichen und erhalten Sie einen ersten Einblick in ihr Liebespotenzial.",

    "Vos rapports personnalisés":
      "Ihre personalisierten Berichte",

    "Horoscope du jour":
      "Tageshoroskop",

    "Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités.":
      "Eine detaillierte Deutung Ihrer Energien, Beziehungen, Karriere und Chancen.",

    "Horoscope du mois":
      "Monatshoroskop",

    "Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines.":
      "Ein umfassender Überblick über die Tendenzen, günstigen Phasen und Herausforderungen der kommenden Wochen.",

    "Horoscope de l’année":
      "Jahreshoroskop",

    "Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année.":
      "Ihr astrologischer Wegweiser, um die großen Zyklen und wichtigen Momente Ihres Jahres zu verstehen.",

    "Compatibilité Premium":
      "Premium-Kompatibilität",

    "Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple.":
      "Eine tiefgehende Analyse der Liebesbeziehung, Emotionen, Kommunikation und des Potenzials der Partnerschaft.",

    "Carte du ciel Essentielle":
      "Essentielles Geburtshoroskop",

    "Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances.":
      "Die Grundlagen Ihres Geburtshoroskops, Ihre wichtigsten Planeten, Elemente und grundlegenden Tendenzen.",

    "Essentielle":
      "Essentiell",

    "Carte du ciel Premium":
      "Premium-Geburtshoroskop",

    "Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière.":
      "Eine tiefgehende Erkundung Ihrer Planeten, Häuser, Aspekte, Stärken, Herausforderungen, Beziehungen und Karriere.",

    "Carte du ciel Signature":
      "Signature-Geburtshoroskop",

    "L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel.":
      "Das umfassendste Luna-Astralis-Erlebnis zur Erkundung Ihrer Persönlichkeit, Ihres Lebenswegs und Ihres Potenzials.",

    "Votre univers astrologique":
      "Ihre astrologische Welt",

    "Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis.":
      "Entdecken Sie alle kostenlosen Werkzeuge und personalisierten Berichte bei Luna Astralis.",

    "En ligne":
      "Online",

    "Découvrez Luna Astralis":
      "Entdecken Sie Luna Astralis",

    "Retrouvez gratuitement vos outils astrologiques et choisissez le rapport personnalisé qui correspond à votre chemin.":
      "Nutzen Sie Ihre astrologischen Werkzeuge kostenlos und wählen Sie den personalisierten Bericht, der zu Ihrem Weg passt.",

    "Visiter le site":
      "Website besuchen",
  },

  it: {
    "Expérience complète":
      "Esperienza completa",

    "Gratuit":
      "Gratuito",

    "L’univers Luna Astralis":
      "L'universo Luna Astralis",

    "Continuez votre voyage astrologique":
      "Continua il tuo viaggio astrologico",

    "Une astrologie qui vous accompagne":
      "Un'astrologia che ti accompagna",

    "Découvrez les autres expériences Luna Astralis":
      "Scopri le altre esperienze Luna Astralis",

    "Explorez gratuitement votre univers astrologique ou approfondissez votre chemin grâce à nos rapports personnalisés, conçus pour éclairer vos choix, vos relations et les grandes étapes de votre vie.":
      "Esplora gratuitamente il tuo universo astrologico o approfondisci il tuo cammino con i nostri rapporti personalizzati, pensati per illuminare le tue scelte, le tue relazioni e le grandi tappe della tua vita.",

    "Vos outils gratuits":
      "I tuoi strumenti gratuiti",

    "Horoscope quotidien":
      "Oroscopo quotidiano",

    "Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie.":
      "Scopri ogni giorno le tendenze del tuo segno nei settori essenziali della tua vita.",

    "Carte du ciel":
      "Tema natale",

    "Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant.":
      "Ottieni la tua carta astrologica e scopri il tuo Sole, la tua Luna e il tuo Ascendente.",

    "Compatibilité amoureuse":
      "Compatibilità amorosa",

    "Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux.":
      "Confronta due segni e scopri una prima panoramica del loro potenziale amoroso.",

    "Vos rapports personnalisés":
      "I tuoi rapporti personalizzati",

    "Horoscope du jour":
      "Oroscopo del giorno",

    "Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités.":
      "Una lettura dettagliata delle tue energie, delle tue relazioni, della tua carriera e delle tue opportunità.",

    "Horoscope du mois":
      "Oroscopo del mese",

    "Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines.":
      "Una visione completa delle tendenze, dei periodi favorevoli e delle sfide delle prossime settimane.",

    "Horoscope de l’année":
      "Oroscopo dell'anno",

    "Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année.":
      "La tua guida astrologica per comprendere i grandi cicli e i momenti importanti del tuo anno.",

    "Compatibilité Premium":
      "Compatibilità Premium",

    "Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple.":
      "Un'analisi approfondita del legame amoroso, delle emozioni, della comunicazione e del potenziale della coppia.",

    "Carte du ciel Essentielle":
      "Tema natale Essenziale",

    "Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances.":
      "Le basi del tuo tema natale, i tuoi pianeti principali, i tuoi elementi e le tue tendenze principali.",

    "Essentielle":
      "Essenziale",

    "Carte du ciel Premium":
      "Tema natale Premium",

    "Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière.":
      "Un'esplorazione approfondita dei tuoi pianeti, delle case, degli aspetti, dei punti di forza, delle sfide, delle relazioni e della carriera.",

    "Carte du ciel Signature":
      "Tema natale Signature",

    "L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel.":
      "L'esperienza Luna Astralis più completa per esplorare la tua personalità, il tuo percorso di vita e il tuo potenziale.",

    "Votre univers astrologique":
      "Il tuo universo astrologico",

    "Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis.":
      "Trova tutti i tuoi strumenti gratuiti e i tuoi rapporti personalizzati su Luna Astralis.",

    "En ligne":
      "Online",

    "Découvrez Luna Astralis":
      "Scopri Luna Astralis",

    "Retrouvez gratuitement vos outils astrologiques et choisissez le rapport personnalisé qui correspond à votre chemin.":
      "Accedi gratuitamente ai tuoi strumenti astrologici e scegli il rapporto personalizzato più adatto al tuo percorso.",

    "Visiter le site":
      "Visita il sito",
  },

  pt: {
    "Expérience complète":
      "Experiência completa",

    "Gratuit":
      "Grátis",

    "L’univers Luna Astralis":
      "O universo Luna Astralis",

    "Continuez votre voyage astrologique":
      "Continue sua jornada astrológica",

    "Une astrologie qui vous accompagne":
      "Uma astrologia que acompanha você",

    "Découvrez les autres expériences Luna Astralis":
      "Descubra outras experiências Luna Astralis",

    "Explorez gratuitement votre univers astrologique ou approfondissez votre chemin grâce à nos rapports personnalisés, conçus pour éclairer vos choix, vos relations et les grandes étapes de votre vie.":
      "Explore gratuitamente seu universo astrológico ou aprofunde sua jornada com nossos relatórios personalizados, criados para iluminar suas escolhas, seus relacionamentos e as grandes etapas da sua vida.",

    "Vos outils gratuits":
      "Suas ferramentas gratuitas",

    "Horoscope quotidien":
      "Horóscopo diário",

    "Découvrez chaque jour les tendances de votre signe dans les domaines essentiels de votre vie.":
      "Descubra todos os dias as tendências do seu signo nas áreas essenciais da sua vida.",

    "Carte du ciel":
      "Mapa astral",

    "Obtenez votre roue astrologique et découvrez votre Soleil, votre Lune et votre Ascendant.":
      "Obtenha seu mapa astrológico e descubra seu Sol, sua Lua e seu Ascendente.",

    "Compatibilité amoureuse":
      "Compatibilidade amorosa",

    "Comparez deux signes et obtenez un premier aperçu de leur potentiel amoureux.":
      "Compare dois signos e obtenha uma primeira visão do potencial amoroso entre eles.",

    "Vos rapports personnalisés":
      "Seus relatórios personalizados",

    "Horoscope du jour":
      "Horóscopo do dia",

    "Une lecture détaillée de vos énergies, de vos relations, de votre carrière et de vos opportunités.":
      "Uma leitura detalhada das suas energias, dos seus relacionamentos, da sua carreira e das suas oportunidades.",

    "Horoscope du mois":
      "Horóscopo do mês",

    "Une vision complète des tendances, des périodes favorables et des défis des prochaines semaines.":
      "Uma visão completa das tendências, dos períodos favoráveis e dos desafios das próximas semanas.",

    "Horoscope de l’année":
      "Horóscopo do ano",

    "Votre feuille de route astrologique pour comprendre les grands cycles et les moments importants de votre année.":
      "Seu roteiro astrológico para compreender os grandes ciclos e os momentos importantes do seu ano.",

    "Compatibilité Premium":
      "Compatibilidade Premium",

    "Une analyse approfondie du lien amoureux, des émotions, de la communication et du potentiel du couple.":
      "Uma análise aprofundada da conexão amorosa, das emoções, da comunicação e do potencial do casal.",

    "Carte du ciel Essentielle":
      "Mapa Astral Essencial",

    "Les fondements de votre thème astral, vos planètes principales, vos éléments et vos grandes tendances.":
      "Os fundamentos do seu mapa astral, seus principais planetas, seus elementos e suas grandes tendências.",

    "Essentielle":
      "Essencial",

    "Carte du ciel Premium":
      "Mapa Astral Premium",

    "Une exploration approfondie de vos planètes, maisons, aspects, forces, défis, relations et carrière.":
      "Uma exploração aprofundada dos seus planetas, casas, aspectos, forças, desafios, relacionamentos e carreira.",

    "Carte du ciel Signature":
      "Mapa Astral Signature",

    "L’expérience Luna Astralis la plus complète pour explorer votre personnalité, votre chemin de vie et votre potentiel.":
      "A experiência Luna Astralis mais completa para explorar sua personalidade, seu caminho de vida e seu potencial.",

    "Votre univers astrologique":
      "Seu universo astrológico",

    "Retrouvez l’ensemble de vos outils gratuits et de vos rapports personnalisés sur Luna Astralis.":
      "Encontre todas as suas ferramentas gratuitas e seus relatórios personalizados na Luna Astralis.",

    "En ligne":
      "Online",

    "Découvrez Luna Astralis":
      "Descubra Luna Astralis",

    "Retrouvez gratuitement vos outils astrologiques et choisissez le rapport personnalisé qui correspond à votre chemin.":
      "Acesse gratuitamente suas ferramentas astrológicas e escolha o relatório personalizado que corresponde à sua jornada.",

    "Visiter le site":
      "Visitar o site",
  },
};

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
      "HoroscopeExplore.tsx",
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

function replaceDynamicExploreValues(
  source: string,
): string {
  return source.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__exploreLocalizeZodiac(identity.zodiacSignLabel)}",
  );
}

function injectExploreHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __exploreLocalizeZodiac",
    )
  ) {
    return source;
  }

  const helper = `
/* =========================================================
   HOROSCOPE EXPLORE — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __EXPLORE_ZODIAC_LABELS:
  Record<string, string> =
  ${JSON.stringify(ZODIAC_LABELS[locale], null, 2)};

function __exploreLocalizeZodiac(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __EXPLORE_ZODIAC_LABELS[value] ??
    value
  );
}

/* =========================================================
   END HOROSCOPE EXPLORE — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopeExplore";

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

export function localizeHoroscopeExplore(
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
    replaceDynamicExploreValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectExploreHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
