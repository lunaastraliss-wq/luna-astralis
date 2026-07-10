import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

import {
  SUN,
  MOON,
  MERCURY,
  VENUS,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
  SIGN_ELEMENT,
  ELEMENT_TEXT,
  SIGN_MODALITY,
  MODALITY_TEXT,
} from "@/lib/astrology";

type Props = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  planets: any[];
  angles: any;
  wheelImage?: string;
};

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

function assetUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const LOGO_URL = assetUrl("/logo-luna-astralis.png");

const PLANET_ICONS: Record<string, string> = {
  Sun: assetUrl("/astrology/sun.png"),
  Moon: assetUrl("/astrology/moon.png"),
  Mercury: assetUrl("/astrology/mercury.png"),
  Venus: assetUrl("/astrology/venus.png"),
  Mars: assetUrl("/astrology/mars.png"),
  Jupiter: assetUrl("/astrology/jupiter.png"),
  Saturn: assetUrl("/astrology/saturn.png"),
  Uranus: assetUrl("/astrology/uranus.png"),
  Neptune: assetUrl("/astrology/neptune.png"),
  Pluto: assetUrl("/astrology/pluto.png"),
};

const ASCENDANT_ICON = assetUrl("/astrology/ascendant.png");

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontSize: 11,
    lineHeight: 1.55,
  },

  coverLogo: {
    width: 190,
    height: 70,
    objectFit: "contain",
    marginBottom: 20,
  },

  pageLogo: {
    width: 112,
    height: 34,
    objectFit: "contain",
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  pageHeaderLine: {
    width: 250,
    height: 1,
    backgroundColor: "#39415d",
  },

  title: {
    fontSize: 30,
    color: "#fff8e7",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    color: "#f4c95d",
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 22,
    color: "#f4c95d",
    marginBottom: 15,
  },

  sectionIntro: {
    fontSize: 11,
    color: "#e9e4d8",
    lineHeight: 1.55,
    marginBottom: 18,
  },

  text: {
    fontSize: 11,
    marginBottom: 10,
    lineHeight: 1.55,
  },

  smallText: {
    fontSize: 9.5,
    color: "#d9d4c7",
    lineHeight: 1.5,
  },

  box: {
    border: "1px solid #f4c95d",
    padding: 16,
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: "#0d152d",
  },

  softBox: {
    border: "1px solid #39415d",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#111a34",
  },

  informationLine: {
    fontSize: 11,
    marginBottom: 6,
  },

  portraitGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  portraitCard: {
    width: "31.5%",
    minHeight: 110,
    border: "1px solid #39415d",
    backgroundColor: "#111a34",
    padding: 12,
  },

  portraitIcon: {
    width: 28,
    height: 28,
    objectFit: "contain",
    marginBottom: 8,
  },

  portraitLabel: {
    color: "#f4c95d",
    fontSize: 9,
    letterSpacing: 1,
    marginBottom: 7,
    textTransform: "uppercase",
  },

  portraitValue: {
    color: "#fff8e7",
    fontSize: 16,
    marginBottom: 5,
  },

  portraitMeaning: {
    color: "#bfc5d5",
    fontSize: 8.5,
    lineHeight: 1.4,
  },

  dominantRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 16,
  },

  dominantCard: {
    width: "48.5%",
    border: "1px solid #f4c95d",
    padding: 14,
    backgroundColor: "#0d152d",
  },

  dominantLabel: {
    color: "#d9d4c7",
    fontSize: 9,
    marginBottom: 5,
  },

  dominantValue: {
    color: "#f4c95d",
    fontSize: 16,
  },

  profileTitle: {
    fontSize: 15,
    color: "#f4c95d",
    marginBottom: 9,
  },

  profileColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileColumn: {
    width: "48%",
  },

  profileItem: {
    fontSize: 10,
    color: "#fff8e7",
    marginBottom: 6,
  },

  planetBox: {
    border: "1px solid #39415d",
    padding: 16,
    marginBottom: 18,
    backgroundColor: "#111a34",
  },

  planetHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  planetMark: {
    width: 50,
    height: 50,
    border: "1px solid #f4c95d",
    borderRadius: 25,
    backgroundColor: "#0b1124",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  planetIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  planetHeaderText: {
    flexGrow: 1,
  },

  planetName: {
    color: "#f4c95d",
    fontSize: 17,
    marginBottom: 2,
  },

  planetSign: {
    color: "#fff8e7",
    fontSize: 11,
  },

  planetDegree: {
    color: "#aeb5c7",
    fontSize: 9,
    marginTop: 3,
  },

  countRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  countItem: {
    width: "48.5%",
    border: "1px solid #39415d",
    padding: 13,
    backgroundColor: "#111a34",
  },

  countLabel: {
    fontSize: 11,
    color: "#f4c95d",
    marginBottom: 5,
  },

  countValue: {
    fontSize: 19,
    color: "#fff8e7",
  },

  wheelIntro: {
    fontSize: 11,
    lineHeight: 1.55,
    marginBottom: 10,
  },

  wheelContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 8,
  },

  wheelImage: {
  width: 510,
  height: 510,
  objectFit: "contain",
},

  wheelImage: {
    width: 484,
    height: 484,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 485,
    height: 485,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  wheelMissingTitle: {
    fontSize: 15,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 10,
  },

  wheelMissingText: {
    fontSize: 10,
    color: "#d9d4c7",
    textAlign: "center",
    lineHeight: 1.5,
  },

  quoteBox: {
    borderLeft: "3px solid #f4c95d",
    backgroundColor: "#111a34",
    padding: 18,
    marginTop: 16,
    marginBottom: 18,
  },

  quoteText: {
    fontSize: 15,
    color: "#fff8e7",
    lineHeight: 1.5,
  },

  closingTitle: {
    fontSize: 20,
    color: "#f4c95d",
    marginBottom: 12,
    textAlign: "center",
  },

  closingText: {
    fontSize: 12,
    color: "#fff8e7",
    lineHeight: 1.6,
    textAlign: "center",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 46,
    right: 46,
    textAlign: "center",
    fontSize: 8,
    color: "#8f96aa",
  },
});

const SIGN_FR: Record<string, string> = {
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
};

const PLANET_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

const PLANET_MEANINGS: Record<string, string> = {
  Sun: "Identité et volonté",
  Moon: "Émotions et besoins",
  Mercury: "Pensée et communication",
  Venus: "Amour et valeurs",
  Mars: "Action et désir",
  Jupiter: "Expansion et confiance",
  Saturn: "Structure et apprentissage",
  Uranus: "Liberté et changement",
  Neptune: "Intuition et idéal",
  Pluto: "Transformation et puissance",
};

const PLANET_TEXTS: Record<string, Record<string, string>> = {
  Sun: SUN,
  Moon: MOON,
  Mercury: MERCURY,
  Venus: VENUS,
  Mars: MARS,
  Jupiter: JUPITER,
  Saturn: SATURN,
  Uranus: URANUS,
  Neptune: NEPTUNE,
  Pluto: PLUTO,
};

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

const OTHER_PLANETS = [
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

const ELEMENT_PROFILES: Record<
  string,
  {
    qualities: string[];
    challenges: string[];
    summary: string;
  }
> = {
  Feu: {
    qualities: ["Enthousiasme", "Courage", "Créativité"],
    challenges: ["Impatience", "Impulsivité"],
    summary:
      "Votre dominante de Feu vous pousse à agir avec passion, spontanéité et confiance. Vous avancez grâce à votre enthousiasme et à votre désir de créer.",
  },
  Terre: {
    qualities: ["Stabilité", "Réalisme", "Persévérance"],
    challenges: ["Rigidité", "Besoin de contrôle"],
    summary:
      "Votre dominante de Terre vous donne un grand sens pratique, de la constance et le désir de construire quelque chose de durable.",
  },
  Air: {
    qualities: ["Curiosité", "Communication", "Ouverture"],
    challenges: ["Dispersion", "Détachement émotionnel"],
    summary:
      "Votre dominante d’Air favorise la réflexion, les échanges et l’ouverture aux idées nouvelles. Vous avez besoin de comprendre et de communiquer.",
  },
  Eau: {
    qualities: ["Intuition", "Empathie", "Profondeur"],
    challenges: ["Hypersensibilité", "Difficulté à lâcher prise"],
    summary:
      "Votre dominante d’Eau vous rend particulièrement intuitive, réceptive et sensible aux ambiances. Vous comprenez souvent ce qui n’est pas exprimé.",
  },
};

const MODALITY_PROFILES: Record<
  string,
  {
    quality: string;
    challenge: string;
    summary: string;
  }
> = {
  Cardinal: {
    quality: "Initiative",
    challenge: "Aller au bout de chaque projet",
    summary:
      "La modalité Cardinale vous pousse à entreprendre, à initier les changements et à ouvrir de nouvelles voies.",
  },
  Fixe: {
    quality: "Persévérance",
    challenge: "Accepter plus facilement le changement",
    summary:
      "La modalité Fixe vous apporte de la loyauté, de l’endurance et une remarquable capacité à maintenir vos efforts dans le temps.",
  },
  Mutable: {
    quality: "Adaptabilité",
    challenge: "Maintenir une direction stable",
    summary:
      "La modalité Mutable vous permet de vous adapter, d’évoluer et de comprendre rapidement les changements qui vous entourent.",
  },
};

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function translateSigns(value?: string) {
  if (!value) return "—";

  let translated = value;

  Object.keys(SIGN_FR).forEach((englishSign) => {
    translated = translated.replace(
      new RegExp(englishSign, "g"),
      SIGN_FR[englishSign]
    );
  });

  return translated;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((planet) => planet.name === name);
}

function getPlanetSignName(planet: any): string {
  if (!planet) return "";

  if (typeof planet.signName === "string") {
    return planet.signName;
  }

  if (typeof planet.sign === "string") {
    return planet.sign;
  }

  return "";
}

function getAscendantSign(angles: any): string {
  const ascendant =
    angles?.ascendant ||
    angles?.Ascendant ||
    angles?.ASC ||
    null;

  if (!ascendant) return "";

  if (typeof ascendant.signName === "string") {
    return ascendant.signName;
  }

  if (typeof ascendant.sign === "string") {
    return ascendant.sign;
  }

  if (typeof ascendant.formatted === "string") {
    const englishSign = Object.keys(SIGN_FR).find((sign) =>
      ascendant.formatted.includes(sign)
    );

    return englishSign || ascendant.formatted;
  }

  return "";
}

function getPlanetInterpretation(
  planetName: string,
  signName?: string
) {
  if (!signName) {
    return "Cette position n’a pas pu être calculée avec les données disponibles.";
  }

  return (
    PLANET_TEXTS[planetName]?.[signName] ||
    "Cette planète révèle une dimension importante de votre personnalité, de vos besoins et de votre évolution intérieure."
  );
}

function formatDegree(value: unknown): string {
  const degree = Number(value);

  if (!Number.isFinite(degree)) {
    return "";
  }

  const normalized = ((degree % 30) + 30) % 30;
  const wholeDegrees = Math.floor(normalized);
  const minutes = Math.round((normalized - wholeDegrees) * 60);

  if (minutes === 60) {
    return `${wholeDegrees + 1}°00'`;
  }

  return `${wholeDegrees}°${String(minutes).padStart(2, "0")}'`;
}

function getPlanetDegree(planet: any): string {
  if (!planet) return "";

  const possibleValues = [
    planet.degreeInSign,
    planet.signDegree,
    planet.degree,
    planet.degrees,
    planet.positionInSign,
  ];

  for (const value of possibleValues) {
    if (typeof value === "number") {
      return formatDegree(value);
    }
  }

  if (typeof planet.formatted === "string") {
    const match = planet.formatted.match(/(\d{1,2})[°\s]+(\d{1,2})?/);

    if (match) {
      const degrees = match[1];
      const minutes = match[2] || "00";

      return `${degrees}°${minutes.padStart(2, "0")}'`;
    }
  }

  return "";
}

function splitIntoPairs(items: string[]) {
  const pairs: string[][] = [];

  for (let index = 0; index < items.length; index += 2) {
    pairs.push(items.slice(index, index + 2));
  }

  return pairs;
}

function BrandHeader() {
  return (
    <View style={styles.pageHeader} fixed>
      <Image src={LOGO_URL} style={styles.pageLogo} />
      <View style={styles.pageHeaderLine} />
    </View>
  );
}

function PageFooter() {
  return (
    <Text
      style={styles.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `Luna Astralis  •  ${pageNumber} / ${totalPages}`
      }
    />
  );
}

function PlanetCard({
  planetName,
  planets,
}: {
  planetName: string;
  planets: any[];
}) {
  const planet = getPlanet(planets, planetName);
  const signName = getPlanetSignName(planet);
  const planetLabel = PLANET_FR[planetName] || planetName;
  const degree = getPlanetDegree(planet);

  return (
    <View style={styles.planetBox} wrap={false}>
      <View style={styles.planetHeader}>
        <View style={styles.planetMark}>
          <Image
            src={PLANET_ICONS[planetName]}
            style={styles.planetIcon}
          />
        </View>

        <View style={styles.planetHeaderText}>
          <Text style={styles.planetName}>
            {planetLabel} en {signFr(signName)}
          </Text>

          <Text style={styles.planetSign}>
            {PLANET_MEANINGS[planetName]}
          </Text>

          {degree ? (
            <Text style={styles.planetDegree}>
              Position : {degree}
            </Text>
          ) : null}
        </View>
      </View>

      <Text style={styles.text}>
        {getPlanetInterpretation(planetName, signName)}
      </Text>
    </View>
  );
}

export default function EssentialPdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: Props) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeWheelImage =
    typeof wheelImage === "string" &&
    wheelImage.trim().length > 0
      ? wheelImage.trim()
      : "";

  const sun = getPlanet(safePlanets, "Sun");
  const moon = getPlanet(safePlanets, "Moon");

  const sunSign = getPlanetSignName(sun);
  const moonSign = getPlanetSignName(moon);
  const ascendantSign = getAscendantSign(angles);

  const elementCounts: Record<string, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  const modalityCounts: Record<string, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  MAIN_PLANETS.forEach((planetName) => {
    const planet = getPlanet(safePlanets, planetName);
    const signName = getPlanetSignName(planet);

    if (!signName) return;

    const element = SIGN_ELEMENT[signName];
    const modality = SIGN_MODALITY[signName];

    if (element && elementCounts[element] !== undefined) {
      elementCounts[element] += 1;
    }

    if (modality && modalityCounts[modality] !== undefined) {
      modalityCounts[modality] += 1;
    }
  });

  const dominantElement =
    Object.entries(elementCounts).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "";

  const dominantModality =
    Object.entries(modalityCounts).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "";

  const elementProfile = ELEMENT_PROFILES[dominantElement];
  const modalityProfile = MODALITY_PROFILES[dominantModality];

  const qualities = [
    ...(elementProfile?.qualities || []),
    modalityProfile?.quality || "",
  ]
    .filter(Boolean)
    .slice(0, 4);

  const challenges = [
    ...(elementProfile?.challenges || []),
    modalityProfile?.challenge || "",
  ]
    .filter(Boolean)
    .slice(0, 3);

  const planetPairs = splitIntoPairs(OTHER_PLANETS);

  return (
    <Document
      title={`Carte du ciel essentielle - ${
        firstName || "Luna Astralis"
      }`}
      author="Luna Astralis"
      subject="Rapport astrologique personnalisé"
    >
      {/* PAGE 1 — COUVERTURE */}
      <Page size="A4" style={styles.page}>
        <Image src={LOGO_URL} style={styles.coverLogo} />

        <Text style={styles.title}>
          Carte du ciel essentielle
        </Text>

        <Text style={styles.subtitle}>
          Rapport astrologique personnalisé
        </Text>

        <View style={styles.box}>
          <Text style={styles.informationLine}>
            Préparé pour : {firstName || "Votre nom"}
          </Text>

          <Text style={styles.informationLine}>
            Date de naissance : {birthDate || "—"}
          </Text>

          <Text style={styles.informationLine}>
            Heure de naissance : {birthTime || "—"}
          </Text>

          <Text style={styles.informationLine}>
            Lieu de naissance : {birthCity || "—"}
          </Text>
        </View>

        <Text style={styles.text}>
          Votre carte du ciel représente la position des
          planètes au moment précis de votre naissance.
          Elle met en lumière votre personnalité, votre
          sensibilité, votre manière d’aimer, d’agir, de
          communiquer et d’évoluer.
        </Text>

        <Text style={styles.text}>
          Ce rapport essentiel vous présente les grandes
          fondations de votre thème natal : votre Soleil,
          votre Lune, votre Ascendant, les dix planètes,
          vos éléments dominants et vos modalités
          astrologiques.
        </Text>

        <Text style={styles.smallText}>
          L’astrologie est un outil symbolique de
          connaissance de soi. Elle révèle des tendances
          et des possibilités sans déterminer votre avenir
          de manière absolue.
        </Text>

        <PageFooter />
      </Page>

      {/* PAGE 2 — ROUE ASTROLOGIQUE */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Votre roue astrologique
        </Text>

        <Text style={styles.wheelIntro}>
          Cette roue représente la position des planètes,
          des signes et des principaux angles au moment
          précis de votre naissance.
        </Text>

        <View style={styles.wheelContainer}>
          <View style={styles.wheelFrame}>
            {safeWheelImage ? (
              <Image
                src={safeWheelImage}
                style={styles.wheelImage}
              />
            ) : (
            <View style={styles.wheelContainer}>
  {safeWheelImage ? (
    <Image
      src={safeWheelImage}
      style={styles.wheelImage}
    />
  ) : (
    <View style={styles.wheelMissing}>
      <Text style={styles.wheelMissingTitle}>
        Roue astrologique
      </Text>

      <Text style={styles.wheelMissingText}>
        L’image de la roue n’a pas été transmise
        au document PDF. Les données
        astrologiques du rapport demeurent
        disponibles dans les pages suivantes.
      </Text>
    </View>
  )}
</View>

        <View style={styles.box}>
          <Text style={styles.informationLine}>
            Préparé pour : {firstName || "Votre nom"}
          </Text>

          <Text style={styles.informationLine}>
            Date : {birthDate || "—"}
          </Text>

          <Text style={styles.informationLine}>
            Heure : {birthTime || "—"}
          </Text>

          <Text style={styles.informationLine}>
            Lieu : {birthCity || "—"}
          </Text>
        </View>

        <PageFooter />
      </Page>

      {/* PAGE 3 — PORTRAIT RAPIDE */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Votre portrait astrologique
        </Text>

        <Text style={styles.sectionIntro}>
          Ces trois positions forment les fondations de
          votre personnalité. Elles décrivent votre identité,
          votre univers émotionnel et la manière dont vous
          vous présentez naturellement au monde.
        </Text>

        <View style={styles.portraitGrid}>
          <View style={styles.portraitCard}>
            <Image
              src={PLANET_ICONS.Sun}
              style={styles.portraitIcon}
            />

            <Text style={styles.portraitLabel}>
              Soleil
            </Text>

            <Text style={styles.portraitValue}>
              {signFr(sunSign)}
            </Text>

            <Text style={styles.portraitMeaning}>
              Votre identité, votre volonté et votre
              manière de rayonner.
            </Text>
          </View>

          <View style={styles.portraitCard}>
            <Image
              src={PLANET_ICONS.Moon}
              style={styles.portraitIcon}
            />

            <Text style={styles.portraitLabel}>
              Lune
            </Text>

            <Text style={styles.portraitValue}>
              {signFr(moonSign)}
            </Text>

            <Text style={styles.portraitMeaning}>
              Vos émotions, vos besoins affectifs et
              votre monde intérieur.
            </Text>
          </View>

          <View style={styles.portraitCard}>
            <Image
              src={ASCENDANT_ICON}
              style={styles.portraitIcon}
            />

            <Text style={styles.portraitLabel}>
              Ascendant
            </Text>

            <Text style={styles.portraitValue}>
              {translateSigns(ascendantSign)}
            </Text>

            <Text style={styles.portraitMeaning}>
              Votre présence, vos réactions spontanées
              et votre façon d’aborder la vie.
            </Text>
          </View>
        </View>

        <View style={styles.dominantRow}>
          <View style={styles.dominantCard}>
            <Text style={styles.dominantLabel}>
              Élément dominant
            </Text>

            <Text style={styles.dominantValue}>
              {dominantElement || "—"}
            </Text>
          </View>

          <View style={styles.dominantCard}>
            <Text style={styles.dominantLabel}>
              Modalité dominante
            </Text>

            <Text style={styles.dominantValue}>
              {dominantModality || "—"}
            </Text>
          </View>
        </View>

        <View style={styles.softBox}>
          <Text style={styles.profileTitle}>
            Vos principales forces
          </Text>

          <View style={styles.profileColumns}>
            <View style={styles.profileColumn}>
              {qualities.slice(0, 2).map((quality) => (
                <Text style={styles.profileItem} key={quality}>
                  • {quality}
                </Text>
              ))}
            </View>

            <View style={styles.profileColumn}>
              {qualities.slice(2).map((quality) => (
                <Text style={styles.profileItem} key={quality}>
                  • {quality}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.softBox}>
          <Text style={styles.profileTitle}>
            Vos pistes d’évolution
          </Text>

          {challenges.map((challenge) => (
            <Text style={styles.profileItem} key={challenge}>
              • {challenge}
            </Text>
          ))}
        </View>

        <PageFooter />
      </Page>

      {/* PAGE 4 — SOLEIL */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Votre identité profonde
        </Text>

        <Text style={styles.sectionIntro}>
          Le Soleil représente votre essence, votre
          volonté et la direction intérieure qui vous aide
          à construire votre identité.
        </Text>

        <PlanetCard
          planetName="Sun"
          planets={safePlanets}
        />

        <PageFooter />
      </Page>

      {/* PAGE 5 — LUNE ET ASCENDANT */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Votre monde intérieur
        </Text>

        <PlanetCard
          planetName="Moon"
          planets={safePlanets}
        />

        <View style={styles.planetBox} wrap={false}>
          <View style={styles.planetHeader}>
            <View style={styles.planetMark}>
              <Image
                src={ASCENDANT_ICON}
                style={styles.planetIcon}
              />
            </View>

            <View style={styles.planetHeaderText}>
              <Text style={styles.planetName}>
                Ascendant en {translateSigns(ascendantSign)}
              </Text>

              <Text style={styles.planetSign}>
                Présence et première impression
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            L’Ascendant décrit votre manière spontanée
            d’aborder la vie, la première impression que
            vous laissez et la façon dont vous entrez en
            relation avec votre environnement.
          </Text>

          <Text style={styles.text}>
            Il représente également la manière dont vous
            commencez les choses, votre style naturel et
            les qualités que vous développez au fil de
            votre évolution personnelle.
          </Text>
        </View>

        <PageFooter />
      </Page>

      {/* PAGES DES AUTRES PLANÈTES */}
      {planetPairs.map((pair, pageIndex) => (
        <Page
          size="A4"
          style={styles.page}
          key={`planet-page-${pageIndex}`}
        >
          <BrandHeader />

          <Text style={styles.sectionTitle}>
            Vos positions planétaires
          </Text>

          <Text style={styles.sectionIntro}>
            Chaque planète représente une fonction
            particulière de votre personnalité et révèle
            une manière différente de penser, d’aimer,
            d’agir ou d’évoluer.
          </Text>

          {pair.map((planetName) => (
            <PlanetCard
              key={planetName}
              planetName={planetName}
              planets={safePlanets}
            />
          ))}

          <PageFooter />
        </Page>
      ))}

      {/* PAGE DES ÉLÉMENTS */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Vos éléments dominants
        </Text>

        <Text style={styles.sectionIntro}>
          Les éléments décrivent la tonalité générale de
          votre énergie et votre manière naturelle
          d’interagir avec le monde.
        </Text>

        <View style={styles.countRow}>
          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Feu</Text>
            <Text style={styles.countValue}>
              {elementCounts.Feu}
            </Text>
          </View>

          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Terre</Text>
            <Text style={styles.countValue}>
              {elementCounts.Terre}
            </Text>
          </View>
        </View>

        <View style={styles.countRow}>
          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Air</Text>
            <Text style={styles.countValue}>
              {elementCounts.Air}
            </Text>
          </View>

          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Eau</Text>
            <Text style={styles.countValue}>
              {elementCounts.Eau}
            </Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.profileTitle}>
            Élément dominant : {dominantElement || "—"}
          </Text>

          <Text style={styles.text}>
            {dominantElement &&
            elementCounts[dominantElement] > 0
              ? ELEMENT_TEXT[dominantElement]
              : "Aucun élément dominant n’a pu être déterminé avec les données disponibles."}
          </Text>
        </View>

        <PageFooter />
      </Page>

      {/* PAGE DES MODALITÉS */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Vos modalités astrologiques
        </Text>

        <Text style={styles.sectionIntro}>
          Les modalités décrivent votre manière d’agir,
          de maintenir vos décisions et de vous adapter
          aux changements.
        </Text>

        <View style={styles.countRow}>
          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Cardinal</Text>
            <Text style={styles.countValue}>
              {modalityCounts.Cardinal}
            </Text>
          </View>

          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Fixe</Text>
            <Text style={styles.countValue}>
              {modalityCounts.Fixe}
            </Text>
          </View>
        </View>

        <View style={styles.countRow}>
          <View style={styles.countItem}>
            <Text style={styles.countLabel}>Mutable</Text>
            <Text style={styles.countValue}>
              {modalityCounts.Mutable}
            </Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.profileTitle}>
            Modalité dominante : {dominantModality || "—"}
          </Text>

          <Text style={styles.text}>
            {dominantModality &&
            modalityCounts[dominantModality] > 0
              ? MODALITY_TEXT[dominantModality]
              : "Aucune modalité dominante n’a pu être déterminée avec les données disponibles."}
          </Text>
        </View>

        <PageFooter />
      </Page>

      {/* SYNTHÈSE PERSONNALISÉE */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Votre synthèse Luna Astralis
        </Text>

        <Text style={styles.sectionIntro}>
          Votre thème natal rassemble plusieurs énergies
          qui se complètent et façonnent une personnalité
          unique.
        </Text>

        <View style={styles.softBox}>
          <Text style={styles.profileTitle}>
            Vos trois grandes fondations
          </Text>

          <Text style={styles.text}>
            Votre Soleil en {signFr(sunSign)} décrit le
            cœur de votre identité et la direction que
            vous cherchez naturellement à donner à votre
            vie.
          </Text>

          <Text style={styles.text}>
            Votre Lune en {signFr(moonSign)} révèle votre
            sensibilité, vos besoins émotionnels et la
            manière dont vous recherchez la sécurité
            intérieure.
          </Text>

          <Text style={styles.text}>
            Votre Ascendant en {translateSigns(ascendantSign)} influence
            votre présence, vos réactions spontanées et
            l’image que vous projetez lorsque vous
            découvrez une nouvelle situation.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.profileTitle}>
            L’énergie dominante de votre thème
          </Text>

          <Text style={styles.text}>
            {elementProfile?.summary ||
              "Votre élément dominant décrit la tonalité générale de votre énergie."}
          </Text>

          <Text style={styles.text}>
            {modalityProfile?.summary ||
              "Votre modalité dominante révèle votre manière naturelle d’agir et d’évoluer."}
          </Text>
        </View>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            Votre force réside dans votre capacité à
            réunir toutes ces facettes de votre
            personnalité afin d’avancer d’une manière
            profondément personnelle et authentique.
          </Text>
        </View>

        <PageFooter />
      </Page>

      {/* CONCLUSION */}
      <Page size="A4" style={styles.page}>
        <BrandHeader />

        <Text style={styles.sectionTitle}>
          Conclusion
        </Text>

        <Text style={styles.text}>
          Votre carte du ciel ne vous enferme pas dans
          une définition fixe. Elle met en lumière des
          forces, des besoins, des sensibilités et des
          pistes d’évolution qui peuvent vous aider à
          mieux vous comprendre.
        </Text>

        <Text style={styles.text}>
          Certaines énergies peuvent vous sembler
          immédiatement familières, tandis que d’autres
          se révéleront davantage avec le temps et les
          expériences. Chaque position de votre thème
          constitue une invitation à observer votre
          parcours avec curiosité et bienveillance.
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            Votre thème astral n’est pas un destin écrit
            d’avance. C’est une carte symbolique qui
            éclaire vos forces, vos possibilités et votre
            chemin intérieur.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.closingTitle}>
            Votre signe n’est pas une limite.
          </Text>

          <Text style={styles.closingText}>
            C’est une force à découvrir.
          </Text>
        </View>

        <Text style={styles.smallText}>
          Merci d’avoir choisi Luna Astralis pour
          explorer votre univers intérieur.
        </Text>

        <PageFooter />
      </Page>
    </Document>
  );
}
