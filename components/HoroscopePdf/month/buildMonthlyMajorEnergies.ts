import type {
  HoroscopeZodiacSign,
} from "../HoroscopePdfTypes";

export type MonthlyMajorEnergy = {
  title: string;
  description: string;
  advice: string;
  score: number;
};

export type MonthlyMajorEnergiesResult = {
  introduction: string;
  energies: MonthlyMajorEnergy[];
  synthesis: string;
  finalAdvice: string;
};

export type BuildMonthlyMajorEnergiesOptions = {
  zodiacSign: HoroscopeZodiacSign;
  zodiacSignLabel: string;
  isoMonth: string;
  seed: number;
};

type EnergySource = {
  title: string;
  description: string;
  advice: string;
};

const ENERGY_SOURCES: readonly EnergySource[] = [
  {
    title: "Transformation",
    description:
      "Une évolution importante peut modifier votre manière d’aborder une situation, une relation ou un projet. Cette énergie vous encourage à laisser derrière vous ce qui ne correspond plus à votre direction actuelle.",
    advice:
      "Acceptez de modifier progressivement ce qui ne soutient plus votre équilibre.",
  },
  {
    title: "Communication",
    description:
      "Les échanges, les discussions et les informations reçues joueront un rôle important. Une conversation bien menée pourrait clarifier une situation devenue incertaine.",
    advice:
      "Exprimez vos attentes clairement et vérifiez que votre message a été compris.",
  },
  {
    title: "Expansion",
    description:
      "Ce mois peut vous permettre d’élargir une possibilité, de développer une idée ou de prendre davantage de place dans un domaine important.",
    advice:
      "Voyez plus grand tout en conservant des étapes réalistes et mesurables.",
  },
  {
    title: "Patience",
    description:
      "Certaines réponses demanderont davantage de temps. Les délais rencontrés pourront vous aider à mieux préparer vos décisions et à éviter les réactions impulsives.",
    advice:
      "Laissez les situations révéler toutes leurs informations avant de conclure.",
  },
  {
    title: "Créativité",
    description:
      "Votre imagination peut vous aider à trouver une nouvelle approche ou à donner une forme plus personnelle à un projet.",
    advice:
      "Accordez-vous un espace où vous pouvez expérimenter sans rechercher immédiatement la perfection.",
  },
  {
    title: "Organisation",
    description:
      "Une meilleure structure vous permettra de consacrer votre énergie aux priorités réellement importantes. Les petites améliorations répétées auront un effet durable.",
    advice:
      "Simplifiez votre méthode avant d’ajouter de nouvelles responsabilités.",
  },
  {
    title: "Intuition",
    description:
      "Votre sensibilité vous aide à percevoir certains changements avant qu’ils deviennent complètement visibles. Une impression récurrente mérite votre attention.",
    advice:
      "Écoutez votre ressenti, puis vérifiez-le à l’aide d’éléments concrets.",
  },
  {
    title: "Équilibre",
    description:
      "Ce mois vous invite à mieux répartir votre temps entre vos obligations, vos relations, vos ambitions et votre récupération.",
    advice:
      "Protégez votre énergie avant d’accepter une nouvelle demande.",
  },
  {
    title: "Ambition",
    description:
      "Votre volonté de progresser devient plus forte. Vous pourriez ressentir le besoin de démontrer vos capacités ou de faire avancer un projet important.",
    advice:
      "Concentrez votre ambition sur un objectif principal plutôt que sur plusieurs directions.",
  },
  {
    title: "Renouveau",
    description:
      "Une nouvelle étape peut commencer dans votre vie personnelle, professionnelle ou relationnelle. Le changement sera plus constructif s’il repose sur une intention claire.",
    advice:
      "Transformez votre désir de changement en une première action précise.",
  },
  {
    title: "Confiance",
    description:
      "Vous pourriez prendre davantage conscience de vos capacités et de la valeur de vos décisions. Cette assurance favorisera les démarches personnelles.",
    advice:
      "Appuyez votre confiance sur vos expériences et sur les progrès déjà accomplis.",
  },
  {
    title: "Libération",
    description:
      "Une obligation, une peur ou une ancienne habitude pourrait perdre de son influence. Vous disposez d’une meilleure occasion de reprendre votre liberté de décision.",
    advice:
      "Distinguez ce que vous choisissez encore de ce que vous continuez seulement par habitude.",
  },
  {
    title: "Relations",
    description:
      "Les liens affectifs, familiaux ou sociaux occupent une place importante. Certaines relations pourront se renforcer, tandis que d’autres demanderont une clarification.",
    advice:
      "Privilégiez les échanges sincères plutôt que les suppositions silencieuses.",
  },
  {
    title: "Stabilité",
    description:
      "La sécurité et la continuité seront plus importantes que les résultats immédiats. Une démarche progressive vous aidera à consolider votre situation.",
    advice:
      "Choisissez les décisions que vous pourrez maintenir dans le temps.",
  },
  {
    title: "Décision",
    description:
      "Une situation pourrait vous demander de choisir une direction plus clairement. Votre lucidité augmentera lorsque vous cesserez de chercher une solution parfaite.",
    advice:
      "Choisissez l’option la plus cohérente avec vos priorités actuelles.",
  },
  {
    title: "Adaptation",
    description:
      "Les circonstances peuvent évoluer au cours du mois. Votre capacité à ajuster votre méthode sans abandonner votre objectif deviendra une véritable force.",
    advice:
      "Modifiez le chemin lorsque nécessaire, mais conservez une direction claire.",
  },
  {
    title: "Reconnaissance",
    description:
      "Vos efforts ou vos compétences pourraient être davantage remarqués. Une réussite discrète peut ouvrir la porte à une possibilité plus importante.",
    advice:
      "Acceptez de montrer votre travail et de reconnaître vous-même votre progression.",
  },
  {
    title: "Discernement",
    description:
      "Plusieurs options ou informations peuvent se présenter simultanément. Vous devrez distinguer ce qui est réellement utile de ce qui ne fait que détourner votre attention.",
    advice:
      "Prenez le temps de vérifier les faits avant de vous engager.",
  },
  {
    title: "Courage",
    description:
      "Une situation peut vous demander davantage d’affirmation ou de fermeté. Votre courage sera plus efficace lorsqu’il demeurera calme et réfléchi.",
    advice:
      "Défendez votre position sans transformer chaque désaccord en confrontation.",
  },
  {
    title: "Récupération",
    description:
      "Votre énergie demandera une meilleure alternance entre activité et repos. Les périodes de calme seront essentielles pour maintenir votre efficacité.",
    advice:
      "Planifiez votre récupération avec autant de sérieux que vos responsabilités.",
  },
] as const;

const SIGN_PREFERENCES: Record<
  HoroscopeZodiacSign,
  readonly string[]
> = {
  belier: [
    "Courage",
    "Ambition",
    "Décision",
    "Renouveau",
  ],

  taureau: [
    "Stabilité",
    "Organisation",
    "Relations",
    "Patience",
  ],

  gemeaux: [
    "Communication",
    "Adaptation",
    "Créativité",
    "Discernement",
  ],

  cancer: [
    "Intuition",
    "Relations",
    "Équilibre",
    "Récupération",
  ],

  lion: [
    "Confiance",
    "Reconnaissance",
    "Créativité",
    "Ambition",
  ],

  vierge: [
    "Organisation",
    "Discernement",
    "Adaptation",
    "Stabilité",
  ],

  balance: [
    "Équilibre",
    "Relations",
    "Communication",
    "Décision",
  ],

  scorpion: [
    "Transformation",
    "Libération",
    "Intuition",
    "Courage",
  ],

  sagittaire: [
    "Expansion",
    "Renouveau",
    "Confiance",
    "Adaptation",
  ],

  capricorne: [
    "Ambition",
    "Stabilité",
    "Organisation",
    "Reconnaissance",
  ],

  verseau: [
    "Libération",
    "Créativité",
    "Adaptation",
    "Renouveau",
  ],

  poissons: [
    "Intuition",
    "Créativité",
    "Récupération",
    "Relations",
  ],
};

function pick<T>(
  values: readonly T[],
  seed: number,
  offset: number,
): T {
  return values[
    Math.abs(
      seed + offset * 37,
    ) % values.length
  ];
}

function createScore(
  seed: number,
  offset: number,
): number {
  const minimum = 72;
  const maximum = 96;
  const range =
    maximum - minimum + 1;

  return (
    minimum +
    Math.abs(
      seed + offset * 19,
    ) %
      range
  );
}

function findEnergy(
  title: string,
): EnergySource {
  return (
    ENERGY_SOURCES.find(
      (energy) =>
        energy.title === title,
    ) ?? ENERGY_SOURCES[0]
  );
}

function buildEnergyPool(
  zodiacSign: HoroscopeZodiacSign,
  seed: number,
): EnergySource[] {
  const preferredTitles =
    SIGN_PREFERENCES[zodiacSign];

  const preferredEnergies =
    preferredTitles.map(findEnergy);

  const remainingEnergies =
    ENERGY_SOURCES.filter(
      (energy) =>
        !preferredTitles.includes(
          energy.title,
        ),
    );

  const selected = [
    pick(
      preferredEnergies,
      seed,
      1,
    ),

    pick(
      preferredEnergies,
      seed,
      2,
    ),

    pick(
      remainingEnergies,
      seed,
      3,
    ),

    pick(
      remainingEnergies,
      seed,
      4,
    ),
  ];

  return selected.filter(
    (energy, index, values) =>
      values.findIndex(
        (value) =>
          value.title ===
          energy.title,
      ) === index,
  );
}

export function buildMonthlyMajorEnergies({
  zodiacSign,
  zodiacSignLabel,
  isoMonth,
  seed,
}: BuildMonthlyMajorEnergiesOptions): MonthlyMajorEnergiesResult {
  const energyPool =
    buildEnergyPool(
      zodiacSign,
      seed,
    );

  const fallbackEnergies =
    ENERGY_SOURCES.filter(
      (source) =>
        !energyPool.some(
          (energy) =>
            energy.title ===
            source.title,
        ),
    );

  while (energyPool.length < 4) {
    energyPool.push(
      pick(
        fallbackEnergies,
        seed,
        energyPool.length + 10,
      ),
    );
  }

  const energies =
    energyPool
      .slice(0, 4)
      .map(
        (
          energy,
          index,
        ): MonthlyMajorEnergy => ({
          ...energy,

          score: createScore(
            seed,
            index + 1,
          ),
        }),
      );

  const strongestEnergy =
    [...energies].sort(
      (first, second) =>
        second.score -
        first.score,
    )[0];

  return {
    introduction:
      `Pour ${zodiacSignLabel}, les grandes énergies de ${isoMonth} mettent en lumière quatre mouvements symboliques principaux. ` +
      "Leur intensité indique les thèmes susceptibles d’occuper une place plus importante dans vos décisions, vos relations et votre évolution personnelle.",

    energies,

    synthesis:
      `${strongestEnergy.title} constitue l’énergie dominante de votre mois. ` +
      `Elle interagit avec ${energies
        .filter(
          (energy) =>
            energy.title !==
            strongestEnergy.title,
        )
        .map(
          (energy) =>
            energy.title.toLowerCase(),
        )
        .join(", ")}. ` +
      "Ces tendances se complètent et vous invitent à avancer avec davantage de conscience plutôt qu’à réagir automatiquement aux événements.",

    finalAdvice:
      "Utilisez ces énergies comme des repères. Concentrez-vous d’abord sur le thème qui semble le plus présent dans votre réalité, puis ajustez progressivement vos décisions au fil du mois.",
  };
}
