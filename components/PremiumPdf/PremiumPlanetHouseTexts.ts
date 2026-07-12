export type PremiumPlanetHouseContent = {
  influence: string;
};

export type PremiumPlanetHouseTexts = Record<
  string,
  Partial<
    Record<
      number,
      PremiumPlanetHouseContent
    >
  >
>;

export const PREMIUM_PLANET_HOUSE_TEXTS: PremiumPlanetHouseTexts = {
  Sun: {
    1: {
      influence:
        "Votre Soleil en Maison I place l’affirmation de votre identité au premier plan de votre parcours. Vous avez besoin de prendre votre place, d’agir selon vos propres choix et de sentir que votre présence produit un effet concret sur votre environnement. Les autres peuvent rapidement percevoir votre volonté, votre énergie ou votre personnalité, même lorsque vous ne cherchez pas consciemment à attirer l’attention. Votre développement passe par la capacité à vous définir par vous-même, sans réduire votre identité au regard que les autres portent sur vous. Plus vous assumez votre individualité avec simplicité, plus votre présence devient naturelle, claire et mobilisatrice.",
    },

    2: {
      influence:
        "Votre Soleil en Maison II relie fortement votre identité à vos valeurs, à vos ressources et à votre besoin de construire une sécurité durable. Vous cherchez à développer des talents concrets et à créer une base matérielle ou intérieure qui vous permette de vous sentir stable. Votre confiance augmente lorsque vous reconnaissez ce que vous possédez déjà : vos capacités, votre endurance, votre savoir-faire et votre manière personnelle de produire de la valeur. Vous pouvez toutefois être tenté de mesurer votre importance à travers vos résultats, vos possessions ou la reconnaissance matérielle. Votre évolution consiste à bâtir une estime de vous-même suffisamment solide pour ne pas dépendre uniquement de ce que vous réussissez à accumuler.",
    },

    3: {
      influence:
        "Votre Soleil en Maison III s’exprime principalement à travers la communication, l’apprentissage et les échanges avec votre environnement immédiat. Vous construisez votre identité en formulant vos idées, en observant ce qui vous entoure et en partageant votre compréhension du monde. Votre parole, votre curiosité ou votre capacité à transmettre peuvent devenir des éléments centraux de votre rayonnement. Vous avez souvent besoin de mouvement intellectuel et de contacts variés pour entretenir votre vitalité. Votre défi consiste à dépasser la dispersion ou le besoin de répondre à toutes les sollicitations. Votre potentiel s’affirme lorsque vous choisissez les idées que vous souhaitez véritablement approfondir et porter avec constance.",
    },

    4: {
      influence:
        "Votre Soleil en Maison IV concentre une grande partie de votre énergie dans votre vie familiale, vos racines, votre foyer et votre monde intérieur. Votre sentiment d’identité se construit souvent à travers la sécurité émotionnelle, la mémoire et le besoin de disposer d’une base solide. Les expériences familiales peuvent exercer une influence importante sur votre manière de vous percevoir et sur les responsabilités que vous assumez. Vous avez besoin d’un lieu, réel ou symbolique, où vous pouvez vous retirer et retrouver votre centre. Votre évolution consiste à honorer votre histoire sans rester enfermé dans les rôles ou les attentes hérités du passé. En créant votre propre définition du foyer, vous consolidez votre autonomie intérieure.",
    },

    5: {
      influence:
        "Votre Soleil en Maison V cherche à rayonner à travers la créativité, l’expression personnelle, le plaisir et les projets qui portent votre signature. Vous avez besoin de sentir que quelque chose d’unique peut naître de votre imagination, de votre cœur ou de votre manière d’interpréter la vie. Les activités artistiques, les passions, les enfants, l’amour ou l’entrepreneuriat peuvent devenir des domaines importants d’affirmation personnelle. Votre enthousiasme augmente lorsque vous pouvez créer librement et recevoir une réponse vivante de votre environnement. Votre défi consiste à ne pas dépendre entièrement de l’admiration ou de l’approbation. Votre lumière devient plus forte lorsque la joie de créer compte autant que la reconnaissance obtenue.",
    },

    6: {
      influence:
        "Votre Soleil en Maison VI s’exprime dans le travail quotidien, le sens du service, l’organisation et le développement de compétences utiles. Vous construisez votre identité en améliorant les méthodes, en répondant à des besoins concrets et en devenant progressivement maître de votre savoir-faire. Vous pouvez ressentir une grande satisfaction lorsque votre contribution facilite réellement la vie des autres ou rend un système plus efficace. Toutefois, vous risquez parfois de relier votre valeur personnelle à votre productivité ou à votre capacité à être indispensable. Votre évolution demande de reconnaître que l’utilité ne doit pas conduire à l’épuisement. En respectant votre corps, vos limites et vos rythmes, vous rendez votre contribution plus durable.",
    },

    7: {
      influence:
        "Votre Soleil en Maison VII se développe fortement à travers les relations, les associations et les engagements importants. Les autres agissent souvent comme des miroirs qui vous permettent de mieux comprendre votre identité, vos attentes et votre manière d’occuper une place dans le lien. Vous pouvez être attiré par des personnes affirmées, visibles ou porteuses de qualités que vous cherchez encore à reconnaître en vous-même. Le partenariat peut devenir une source majeure de croissance, à condition que vous ne laissiez pas entièrement l’autre définir votre direction. Votre évolution consiste à construire des relations où la coopération ne remplace pas l’individualité. Plus vous vous connaissez, plus vous pouvez rencontrer l’autre sans vous effacer.",
    },

    8: {
      influence:
        "Votre Soleil en Maison VIII s’exprime à travers les transformations profondes, l’intimité, les crises et les expériences qui vous obligent à dépasser une ancienne version de vous-même. Vous cherchez rarement à comprendre la vie uniquement en surface : vous êtes attiré par ce qui révèle les motivations cachées, les enjeux de pouvoir ou les mécanismes émotionnels complexes. Les liens intimes, les ressources partagées et les périodes de rupture peuvent jouer un rôle important dans la construction de votre identité. Votre défi consiste à ne pas confondre profondeur et contrôle. Votre véritable puissance apparaît lorsque vous acceptez de traverser le changement avec lucidité, sans vous accrocher aux structures qui ont terminé leur fonction.",
    },

    9: {
      influence:
        "Votre Soleil en Maison IX cherche à se développer à travers la connaissance, les voyages, les convictions et la recherche d’un sens plus vaste. Vous construisez votre identité en explorant des idées capables d’élargir votre compréhension de la vie. Les études, les cultures étrangères, la spiritualité, la philosophie ou la transmission peuvent devenir des sources importantes de vitalité. Vous avez besoin de sentir que vos expériences participent à une direction cohérente et ne se réduisent pas à une succession d’obligations. Votre défi consiste à maintenir une ouverture réelle sans transformer vos convictions en certitudes rigides. Votre rayonnement grandit lorsque vous incarnez ce que vous affirmez et laissez l’expérience enrichir votre vision.",
    },

    10: {
      influence:
        "Votre Soleil en Maison X concentre votre énergie dans la vocation, les ambitions, la réputation et la place que vous souhaitez occuper dans le monde. Vous avez besoin de construire une trajectoire visible et de sentir que vos efforts conduisent à une réalisation significative. La reconnaissance professionnelle ou sociale peut jouer un rôle important dans votre confiance, particulièrement lorsque votre travail reflète réellement votre identité. Vous pouvez développer une grande capacité de direction, de responsabilité et de persévérance. Votre défi consiste à ne pas sacrifier votre vie intérieure à l’image de réussite que vous cherchez à maintenir. Votre accomplissement devient plus solide lorsque votre rôle public reste aligné avec vos valeurs personnelles.",
    },

    11: {
      influence:
        "Votre Soleil en Maison XI s’exprime dans les projets collectifs, les amitiés, les réseaux et les visions tournées vers l’avenir. Vous construisez votre identité en participant à quelque chose qui dépasse vos préoccupations individuelles. Les groupes peuvent vous offrir un espace où partager vos idées, développer votre influence ou contribuer à une évolution commune. Vous avez souvent besoin de vous sentir entouré de personnes qui comprennent vos aspirations et respectent votre différence. Votre défi consiste à ne pas adapter excessivement votre personnalité aux attentes du groupe ou, à l’inverse, à vous éloigner dès que vous ressentez une contrainte. Votre rayonnement devient collectif lorsque votre individualité enrichit véritablement une cause partagée.",
    },

    12: {
      influence:
        "Votre Soleil en Maison XII possède une expression intérieure, sensible et parfois plus difficile à définir clairement. Vous pouvez avoir besoin de solitude, de recul ou d’un espace protégé pour comprendre qui vous êtes réellement. Une partie importante de votre identité se développe à travers l’intuition, l’imaginaire, la compassion ou l’exploration de dimensions qui échappent au regard extérieur. Vous pouvez toutefois minimiser votre présence ou hésiter à occuper pleinement votre place, particulièrement si vous avez appris à privilégier les besoins des autres. Votre évolution consiste à rendre visible ce qui existe déjà en vous. Lorsque vous transformez votre sensibilité en création, en service conscient ou en compréhension, votre lumière cesse de rester cachée.",
    },
  },
};

export function getPremiumPlanetHouseContent(
  planet: string,
  house: number | null | undefined
): PremiumPlanetHouseContent | null {
  if (
    typeof house !== "number" ||
    !Number.isFinite(house)
  ) {
    return null;
  }

  const normalizedHouse =
    Math.trunc(house);

  if (
    normalizedHouse < 1 ||
    normalizedHouse > 12
  ) {
    return null;
  }

  const planetContent =
    PREMIUM_PLANET_HOUSE_TEXTS[
      planet
    ];

  if (!planetContent) {
    return null;
  }

  return (
    planetContent[
      normalizedHouse
    ] || null
  );
}

export function getHouseRomanNumeral(
  house: number | null | undefined
): string {
  const romanNumerals: Record<
    number,
    string
  > = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
  };

  if (
    typeof house !== "number" ||
    !Number.isFinite(house)
  ) {
    return "";
  }

  return (
    romanNumerals[
      Math.trunc(house)
    ] || ""
  );
}

export function getHouseDisplayName(
  house: number | null | undefined
): string {
  const romanNumeral =
    getHouseRomanNumeral(house);

  return romanNumeral
    ? `Maison ${romanNumeral}`
    : "Maison non précisée";
}
