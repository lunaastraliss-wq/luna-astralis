import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  PremiumPdfSummaryProps,
  PremiumPlanet,
} from "./PremiumPdfTypes";

import {
  PLANET_NAMES,
} from "./PremiumPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

type CareerPlanetName =
  | "Sun"
  | "Mercury"
  | "Mars"
  | "Jupiter"
  | "Saturn";

type CareerInsight = {
  title: string;
  tag: string;
  text: string;
};

const SIGN_NAMES_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Cancer: "Cancer",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

const SIGN_CAREER_TEXTS: Record<
  string,
  string
> = {
  Bélier:
    "Vous progressez lorsque vous pouvez prendre des initiatives, agir rapidement et ouvrir de nouvelles voies. Les environnements trop passifs ou trop contrôlants peuvent réduire votre motivation.",

  Taureau:
    "Vous recherchez une activité stable, concrète et durable. Vous avancez mieux lorsque vos efforts produisent des résultats visibles et lorsque vous pouvez construire progressivement.",

  Gémeaux:
    "Vous avez besoin de variété, de stimulation intellectuelle et de communication. Les métiers permettant d’apprendre, d’expliquer, d’écrire ou de relier les personnes peuvent vous convenir.",

  Cancer:
    "Vous donnez le meilleur de vous-même lorsque votre travail possède une dimension humaine, protectrice ou émotionnelle. Le sentiment d’utilité et de sécurité influence fortement votre engagement.",

  Lion:
    "Vous avez besoin de créativité, de reconnaissance et d’une certaine liberté d’expression. Vous pouvez exceller lorsque vous assumez une position visible ou un rôle de direction.",

  Vierge:
    "Vous possédez un sens naturel de l’analyse, de l’organisation et de l’amélioration. Vous êtes efficace dans les fonctions demandant précision, méthode et attention aux détails.",

  Balance:
    "Vous travaillez bien dans les environnements fondés sur la coopération, l’équilibre et la qualité des relations. La diplomatie, l’esthétique ou la médiation peuvent être des forces.",

  Scorpion:
    "Vous êtes attirée par les situations complexes, stratégiques ou transformatrices. Vous pouvez exceller lorsque le travail exige profondeur, discrétion, recherche ou capacité à gérer les crises.",

  Sagittaire:
    "Vous avez besoin de croissance, de mouvement et de sens. Les domaines liés à l’enseignement, aux voyages, à la transmission ou à l’exploration peuvent nourrir votre motivation.",

  Capricorne:
    "Vous recherchez la progression, la responsabilité et la construction à long terme. Votre endurance et votre sens de la structure favorisent les fonctions de gestion ou d’autorité.",

  Verseau:
    "Vous avez besoin d’indépendance, d’innovation et de liberté intellectuelle. Vous pouvez vous distinguer dans les domaines technologiques, collectifs, créatifs ou non conventionnels.",

  Poissons:
    "Votre intuition, votre imagination et votre sensibilité peuvent s’exprimer dans les domaines créatifs, humains, spirituels ou thérapeutiques. Vous avez besoin de sentir que votre travail possède une signification.",
};

const PLANET_CAREER_ROLES: Record<
  CareerPlanetName,
  string
> = {
  Sun:
    "Le Soleil décrit le besoin de vous accomplir, de rayonner et de construire une identité professionnelle qui vous ressemble.",

  Mercury:
    "Mercure décrit votre manière de réfléchir, de communiquer, d’apprendre et de traiter l’information dans le travail.",

  Mars:
    "Mars décrit votre énergie d’action, votre ambition, votre compétitivité et votre manière de poursuivre vos objectifs.",

  Jupiter:
    "Jupiter décrit votre potentiel d’expansion, votre confiance, votre capacité à transmettre et les domaines dans lesquels vous pouvez voir plus grand.",

  Saturn:
    "Saturne décrit votre discipline, votre sens des responsabilités, vos défis de maturité et votre capacité à bâtir dans la durée.",
};

const HOUSE_CAREER_TEXTS: Record<
  number,
  string
> = {
  1:
    "Votre identité personnelle et votre présence influencent fortement votre parcours professionnel. Vous avez besoin de vous sentir directement engagée dans ce que vous faites.",

  2:
    "Les revenus, la stabilité et la reconnaissance de vos compétences sont des moteurs importants. Vous cherchez à construire une sécurité concrète.",

  3:
    "La communication, l’apprentissage, l’écriture, le commerce ou les échanges occupent une place importante dans votre activité.",

  4:
    "Votre vie professionnelle peut être liée au foyer, à la famille, à l’immobilier ou à la création d’un environnement sécurisant.",

  5:
    "La créativité, l’expression personnelle, l’enseignement, les loisirs ou les projets indépendants peuvent jouer un rôle majeur.",

  6:
    "Le travail quotidien, l’organisation, le service, les méthodes et les habitudes professionnelles sont au cœur de votre progression.",

  7:
    "Les partenariats, la clientèle et les collaborations influencent fortement votre réussite. Vous progressez par l’échange et la coopération.",

  8:
    "Les finances partagées, la psychologie, l’investigation, la transformation ou la gestion de crises peuvent devenir des domaines importants.",

  9:
    "L’enseignement, les voyages, les langues, le droit, la publication ou la transmission de connaissances peuvent soutenir votre vocation.",

  10:
    "La carrière, la réputation et l’accomplissement public occupent une place centrale. Vous avez besoin de construire une trajectoire visible et reconnue.",

  11:
    "Les réseaux, les projets collectifs, les communautés et la vision de l’avenir peuvent favoriser votre réussite.",

  12:
    "Votre vocation peut comporter une dimension discrète, intuitive, artistique, spirituelle ou tournée vers l’aide aux autres.",
};

const MC_SIGN_TEXTS: Record<
  string,
  string
> = {
  Bélier:
    "Votre Milieu du Ciel en Bélier indique une vocation fondée sur l’initiative, l’autonomie et le courage. Vous avez besoin d’avancer par vous-même et d’ouvrir votre propre voie.",

  Taureau:
    "Votre Milieu du Ciel en Taureau favorise une progression stable, patiente et concrète. Vous construisez votre réputation grâce à la fiabilité et à la constance.",

  Gémeaux:
    "Votre Milieu du Ciel en Gémeaux souligne la communication, la polyvalence et l’apprentissage. Plusieurs activités ou rôles peuvent composer votre parcours.",

  Cancer:
    "Votre Milieu du Ciel en Cancer relie la vocation à la protection, au soin, au foyer ou à l’accompagnement humain.",

  Lion:
    "Votre Milieu du Ciel en Lion favorise la visibilité, la créativité, le leadership et la reconnaissance de vos talents.",

  Vierge:
    "Votre Milieu du Ciel en Vierge met l’accent sur la compétence, le service, l’analyse et l’amélioration constante.",

  Balance:
    "Votre Milieu du Ciel en Balance soutient les carrières liées aux relations, à la médiation, à l’esthétique, au droit ou à la coopération.",

  Scorpion:
    "Votre Milieu du Ciel en Scorpion indique une vocation intense, stratégique ou transformatrice. Vous pouvez gérer des situations complexes avec profondeur.",

  Sagittaire:
    "Votre Milieu du Ciel en Sagittaire favorise l’enseignement, les voyages, la transmission, la publication et les projets qui élargissent les horizons.",

  Capricorne:
    "Votre Milieu du Ciel en Capricorne souligne l’ambition, la patience et la capacité à occuper progressivement des responsabilités importantes.",

  Verseau:
    "Votre Milieu du Ciel en Verseau favorise l’innovation, la technologie, les réseaux, l’indépendance et les voies professionnelles originales.",

  Poissons:
    "Votre Milieu du Ciel en Poissons met en valeur la créativité, l’intuition, l’aide, la spiritualité et les activités demandant sensibilité et imagination.",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 48,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontFamily: "Helvetica",
  },

  content: {
    flexGrow: 1,
  },

  badge: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginTop: 3,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#111a34",
  },

  badgeText: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 8,
  },

  intro: {
    color: "#c8c1b3",
    fontSize: 9.5,
    lineHeight: 1.55,
    textAlign: "center",
    marginBottom: 18,
    paddingHorizontal: 12,
  },

  card: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 11,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },

  cardTitle: {
    color: "#f4c95d",
    fontSize: 10.8,
  },

  cardTag: {
    color: "#858ca0",
    fontSize: 7.2,
    textTransform: "uppercase",
  },

  cardText: {
    color: "#e9e4d8",
    fontSize: 8.9,
    lineHeight: 1.52,
  },

  mcCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    marginBottom: 14,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  mcTitle: {
    color: "#f4c95d",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 8,
  },

  mcText: {
    color: "#e9e4d8",
    fontSize: 9.1,
    lineHeight: 1.58,
    textAlign: "center",
  },

  twoColumns: {
    flexDirection: "row",
    marginBottom: 13,
  },

  leftColumn: {
    width: "49%",
    marginRight: "2%",
  },

  rightColumn: {
    width: "49%",
  },

  smallCard: {
    minHeight: 160,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  smallTitle: {
    color: "#f4c95d",
    fontSize: 10.2,
    textAlign: "center",
    marginBottom: 8,
  },

  smallText: {
    color: "#e9e4d8",
    fontSize: 8.6,
    lineHeight: 1.5,
    textAlign: "center",
  },

  synthesisCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    marginTop: 5,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  synthesisTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  synthesisText: {
    color: "#e9e4d8",
    fontSize: 9.1,
    lineHeight: 1.58,
    textAlign: "center",
  },
});

function getPlanet(
  planets: PremiumPlanet[],
  name: CareerPlanetName
): PremiumPlanet | null {
  return (
    planets.find(
      (planet) => planet?.name === name
    ) || null
  );
}

function getFrenchSign(
  sign?: string
): string {
  if (!sign) {
    return "non précisé";
  }

  return SIGN_NAMES_FR[sign] || sign;
}

function longitudeToSign(
  longitude?: number
): string | null {
  if (
    typeof longitude !== "number" ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  const signs = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  const normalized =
    ((longitude % 360) + 360) % 360;

  return signs[
    Math.floor(normalized / 30)
  ];
}

function getHouseText(
  planet: PremiumPlanet | null
): string {
  if (
    !planet ||
    typeof planet.house !== "number"
  ) {
    return "";
  }

  const house = Math.round(planet.house);
  const houseText =
    HOUSE_CAREER_TEXTS[house];

  if (!houseText) {
    return "";
  }

  return ` Sa position en maison ${house} ajoute ceci : ${houseText}`;
}

function createCareerInsight(
  planets: PremiumPlanet[],
  planetName: CareerPlanetName
): CareerInsight {
  const planet = getPlanet(
    planets,
    planetName
  );

  const translatedName =
    PLANET_NAMES[planetName] ||
    planetName;

  if (!planet) {
    return {
      title: translatedName,
      tag: "Donnée indisponible",
      text:
        `Les données disponibles ne permettent pas d’analyser précisément l’influence professionnelle de ${translatedName}.`,
    };
  }

  const frenchSign =
    getFrenchSign(planet.sign);

  const signText =
    SIGN_CAREER_TEXTS[frenchSign] ||
    "Cette position décrit une manière personnelle de travailler, de progresser et de poursuivre vos ambitions.";

  return {
    title: `${translatedName} en ${frenchSign}`,
    tag: PLANET_CAREER_ROLES[
      planetName
    ],
    text:
      `${signText}${getHouseText(
        planet
      )}`,
  };
}

function getMidheavenText(
  midheaven?: number
): {
  sign: string | null;
  text: string;
} {
  const sign =
    longitudeToSign(midheaven);

  if (!sign) {
    return {
      sign: null,
      text:
        "Le signe du Milieu du Ciel ne peut pas être déterminé avec les données disponibles. Cet angle représente normalement la vocation, la réputation et la direction professionnelle.",
    };
  }

  return {
    sign,
    text:
      MC_SIGN_TEXTS[sign] ||
      "Le Milieu du Ciel décrit la direction professionnelle, la réputation et la manière dont vous souhaitez être reconnue.",
  };
}

function getCareerStrength(
  sun: PremiumPlanet | null,
  jupiter: PremiumPlanet | null
): string {
  const sunSign =
    getFrenchSign(sun?.sign);

  const jupiterSign =
    getFrenchSign(jupiter?.sign);

  return (
    `Votre potentiel d’accomplissement associe le Soleil en ${sunSign} et Jupiter en ${jupiterSign}. ` +
    "Le Soleil montre ce que vous cherchez à devenir, tandis que Jupiter révèle votre capacité d’expansion, de confiance et de transmission."
  );
}

function getCareerChallenge(
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null
): string {
  const marsSign =
    getFrenchSign(mars?.sign);

  const saturnSign =
    getFrenchSign(saturn?.sign);

  return (
    `Mars en ${marsSign} décrit votre manière d’agir, alors que Saturne en ${saturnSign} montre vos responsabilités et vos limites. ` +
    "Votre défi consiste à avancer avec détermination sans brûler les étapes, tout en évitant que la prudence ne devienne immobilité."
  );
}

function createCareerSynthesis(
  sun: PremiumPlanet | null,
  mercury: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
  midheavenSign: string | null
): string {
  const sunSign =
    getFrenchSign(sun?.sign);

  const mercurySign =
    getFrenchSign(mercury?.sign);

  const marsSign =
    getFrenchSign(mars?.sign);

  const saturnSign =
    getFrenchSign(saturn?.sign);

  const mcText =
    midheavenSign
      ? `Le Milieu du Ciel en ${midheavenSign} donne une direction générale à cette évolution.`
      : "";

  return (
    `Votre trajectoire professionnelle combine un Soleil en ${sunSign}, Mercure en ${mercurySign}, Mars en ${marsSign} et Saturne en ${saturnSign}. ` +
    "Le Soleil indique votre besoin d’accomplissement, Mercure vos compétences mentales, Mars votre capacité d’action et Saturne votre aptitude à construire dans le temps. " +
    `${mcText} ` +
    "Vous progressez davantage lorsque votre activité réunit sens personnel, autonomie, compétences concrètes et possibilité d’évolution."
  ).trim();
}

export default function PdfCareer({
  planets,
  angles,
}: PremiumPdfSummaryProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const safeAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const mercury = getPlanet(
    safePlanets,
    "Mercury"
  );

  const mars = getPlanet(
    safePlanets,
    "Mars"
  );

  const jupiter = getPlanet(
    safePlanets,
    "Jupiter"
  );

  const saturn = getPlanet(
    safePlanets,
    "Saturn"
  );

  const midheaven =
    getMidheavenText(
      typeof safeAngles.midheaven ===
        "number"
        ? safeAngles.midheaven
        : undefined
    );

  const insights = [
    createCareerInsight(
      safePlanets,
      "Sun"
    ),
    createCareerInsight(
      safePlanets,
      "Mercury"
    ),
    createCareerInsight(
      safePlanets,
      "Mars"
    ),
    createCareerInsight(
      safePlanets,
      "Jupiter"
    ),
    createCareerInsight(
      safePlanets,
      "Saturn"
    ),
  ];

  return (
    <>
      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Analyse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Votre vocation professionnelle
          </Text>

          <Text style={styles.intro}>
            La vocation ne correspond pas uniquement
            à un métier précis. Elle représente la
            manière dont vous souhaitez utiliser vos
            compétences, progresser, contribuer et
            être reconnue dans le monde.
          </Text>

          <View
            style={styles.mcCard}
            wrap={false}
          >
            <Text style={styles.mcTitle}>
              {midheaven.sign
                ? `Milieu du Ciel en ${midheaven.sign}`
                : "Votre Milieu du Ciel"}
            </Text>

            <Text style={styles.mcText}>
              {midheaven.text}
            </Text>
          </View>

          {insights
            .slice(0, 3)
            .map((insight) => (
              <View
                key={insight.title}
                style={styles.card}
                wrap={false}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {insight.title}
                  </Text>

                  <Text style={styles.cardTag}>
                    Influence professionnelle
                  </Text>
                </View>

                <Text style={styles.cardText}>
                  {insight.text}
                </Text>
              </View>
            ))}
        </View>

        <PdfPageFooter />
      </Page>

      <Page size="A4" style={styles.page}>
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Analyse Premium
            </Text>
          </View>

          <Text style={styles.title}>
            Votre réussite et vos ambitions
          </Text>

          <Text style={styles.intro}>
            La réussite dépend de la manière dont vous
            combinez vos talents, votre énergie
            d’action, votre confiance et votre capacité
            à persévérer.
          </Text>

          {insights
            .slice(3)
            .map((insight) => (
              <View
                key={insight.title}
                style={styles.card}
                wrap={false}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {insight.title}
                  </Text>

                  <Text style={styles.cardTag}>
                    Développement
                  </Text>
                </View>

                <Text style={styles.cardText}>
                  {insight.text}
                </Text>
              </View>
            ))}

          <View style={styles.twoColumns}>
            <View style={styles.leftColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Votre force professionnelle
                </Text>

                <Text style={styles.smallText}>
                  {getCareerStrength(
                    sun,
                    jupiter
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <View
                style={styles.smallCard}
                wrap={false}
              >
                <Text style={styles.smallTitle}>
                  Votre défi professionnel
                </Text>

                <Text style={styles.smallText}>
                  {getCareerChallenge(
                    mars,
                    saturn
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={styles.synthesisCard}
            wrap={false}
          >
            <Text
              style={styles.synthesisTitle}
            >
              Synthèse de votre vocation
            </Text>

            <Text
              style={styles.synthesisText}
            >
              {createCareerSynthesis(
                sun,
                mercury,
                mars,
                saturn,
                midheaven.sign
              )}
            </Text>
          </View>
        </View>

        <PdfPageFooter />
      </Page>
    </>
  );
}
