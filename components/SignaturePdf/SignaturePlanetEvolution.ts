export type SignaturePlanetEvolutionContent = {
  text: string;
};

export type SignaturePlanetEvolutionTexts = Record<
  string,
  Record<string, SignaturePlanetEvolutionContent>
>;

export const SIGNATURE_PLANET_EVOLUTION: SignaturePlanetEvolutionTexts = {
  Sun: {
    Aries: {
      text:
        "Votre évolution consiste à transformer votre spontanéité en une véritable force de leadership. Vous n'avez pas seulement le potentiel d'ouvrir de nouveaux chemins : vous pouvez également apprendre à les poursuivre avec constance, patience et discernement. Plus vous associez votre courage naturel à une vision durable, plus votre influence devient constructive.",
    },

    Taurus: {
      text:
        "Votre évolution vous invite à préserver votre stabilité sans résister systématiquement au changement. Votre capacité à construire est remarquable, mais elle devient encore plus puissante lorsque vous acceptez que certaines transformations permettent justement de protéger ce qui compte vraiment. La sécurité intérieure naît autant de votre souplesse que de votre persévérance.",
    },

    Gemini: {
      text:
        "Votre évolution passe par la capacité à sélectionner les idées, les relations et les projets qui méritent réellement votre énergie. Votre curiosité constitue un immense talent, mais votre véritable puissance apparaît lorsque vous choisissez d'approfondir ce qui nourrit durablement votre intelligence et votre cœur.",
    },

    Cancer: {
      text:
        "Votre évolution consiste à transformer votre sensibilité en une véritable force intérieure. En reconnaissant vos émotions sans vous laisser entièrement guider par elles, vous développez une stabilité qui vous permet de protéger les autres tout en restant fidèle à vos propres besoins.",
    },

    Leo: {
      text:
        "Votre évolution vous conduit à rayonner par authenticité plutôt que par recherche de reconnaissance. Lorsque votre créativité exprime réellement ce que vous êtes, votre confiance devient indépendante du regard extérieur et votre présence inspire naturellement votre entourage.",
    },

    Virgo: {
      text:
        "Votre évolution consiste à remplacer la recherche de perfection par une recherche de progression. Vos qualités d'analyse et de précision deviennent de véritables forces lorsque vous acceptez que l'excellence naît de l'expérience, et non d'une absence totale d'erreurs.",
    },

    Libra: {
      text:
        "Votre évolution vous invite à trouver l'équilibre entre l'écoute des autres et l'affirmation de vos propres besoins. Votre sens naturel de l'harmonie devient encore plus puissant lorsque vous osez exprimer votre vérité avec douceur mais sans vous effacer.",
    },

    Scorpio: {
      text:
        "Votre évolution consiste à utiliser votre profondeur comme un outil de transformation plutôt que de protection. En apprenant à faire confiance sans chercher à tout contrôler, vous découvrez une force intérieure encore plus stable et plus libre. Votre véritable pouvoir réside dans votre capacité à renaître après chaque expérience importante.",
    },

    Sagittarius: {
      text:
        "Votre évolution passe par l'équilibre entre liberté et engagement. Votre enthousiasme vous pousse naturellement vers de nouveaux horizons, mais votre plus grande croissance apparaît lorsque vous acceptez de construire durablement ce qui donne un véritable sens à votre parcours.",
    },

    Capricorn: {
      text:
        "Votre évolution consiste à reconnaître que votre valeur dépasse largement vos réussites. Votre sens des responsabilités vous conduit loin, mais votre accomplissement devient plus profond lorsque vous laissez également une place à la spontanéité, au plaisir et aux relations humaines.",
    },

    Aquarius: {
      text:
        "Votre évolution vous invite à faire de votre différence une force de rassemblement. Votre originalité peut ouvrir des perspectives nouvelles, à condition qu'elle reste reliée aux autres et qu'elle ne devienne pas un moyen de maintenir une distance émotionnelle.",
    },

    Pisces: {
      text:
        "Votre évolution consiste à donner une forme concrète à votre immense richesse intérieure. Votre intuition et votre imagination deviennent de véritables ressources lorsque vous les accompagnez de limites claires, d'actions concrètes et d'une confiance grandissante envers vos propres capacités.",
    },
  },
};

const FALLBACK_EVOLUTION: Record<
  string,
  string
> = {
  Sun:
    "Votre évolution consiste à développer une identité toujours plus alignée avec vos valeurs profondes. Plus vous exprimez votre véritable nature avec confiance et authenticité, plus votre rayonnement devient naturel.",

  Moon:
    "Votre évolution passe par une meilleure compréhension de vos besoins émotionnels afin de créer une stabilité intérieure durable.",

  Mercury:
    "Votre évolution consiste à utiliser votre intelligence comme un outil de compréhension, de dialogue et de transmission.",

  Venus:
    "Votre évolution vous invite à développer des relations fondées sur l'équilibre, le respect de soi et l'authenticité.",

  Mars:
    "Votre évolution consiste à utiliser votre énergie avec discernement afin que votre force serve pleinement vos objectifs.",

  Jupiter:
    "Votre évolution vous encourage à développer votre confiance tout en conservant un équilibre entre ambition et réalisme.",

  Saturn:
    "Votre évolution passe par la patience, la discipline et la reconnaissance progressive de votre propre valeur.",

  Uranus:
    "Votre évolution consiste à exprimer votre originalité tout en construisant des liens solides avec votre environnement.",

  Neptune:
    "Votre évolution vous invite à unir intuition et discernement afin que votre inspiration devienne une véritable force créatrice.",

  Pluto:
    "Votre évolution passe par l'acceptation du changement et la capacité à transformer les épreuves en ressources intérieures.",
};

export function getSignaturePlanetEvolution(
  planet: string,
  sign: string
): string {
  const planetEvolution =
    SIGNATURE_PLANET_EVOLUTION[
      planet
    ];

  const signEvolution =
    planetEvolution?.[sign];

  if (signEvolution) {
    return signEvolution.text;
  }

  return (
    FALLBACK_EVOLUTION[
      planet
    ] ||
    "Chaque position astrologique représente une possibilité d'évolution qui se développe progressivement au fil de votre expérience."
  );
}
