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

  // Image PNG ou JPEG de la roue astrologique.
  // Elle peut être une URL publique ou une image en base64.
  wheelImage?: string;
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 42,
    paddingBottom: 42,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontSize: 11,
    lineHeight: 1.55,
  },

  badge: {
    color: "#f4c95d",
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 20,
    textTransform: "uppercase",
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
    marginBottom: 16,
  },

  planetTitle: {
    fontSize: 17,
    color: "#f4c95d",
    marginBottom: 9,
  },

  text: {
    fontSize: 11,
    marginBottom: 10,
    lineHeight: 1.55,
  },

  smallText: {
    fontSize: 10,
    color: "#d9d4c7",
    lineHeight: 1.5,
  },

  box: {
    border: "1px solid #f4c95d",
    padding: 16,
    marginTop: 12,
    marginBottom: 18,
  },

  informationLine: {
    fontSize: 11,
    marginBottom: 6,
  },

  planetBox: {
    border: "1px solid #39415d",
    padding: 16,
    marginBottom: 18,
    backgroundColor: "#111a34",
  },

  countRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  countItem: {
    width: "48%",
    border: "1px solid #39415d",
    padding: 12,
    backgroundColor: "#111a34",
  },

  countLabel: {
    fontSize: 11,
    color: "#f4c95d",
    marginBottom: 4,
  },

  countValue: {
    fontSize: 18,
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
    marginTop: 8,
    marginBottom: 18,
  },

  wheelFrame: {
    width: 440,
    height: 440,
    border: "1px solid #39415d",
    backgroundColor: "#111a34",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },

  wheelImage: {
    width: 414,
    height: 414,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 414,
    height: 414,
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

function splitIntoPairs(items: string[]) {
  const pairs: string[][] = [];

  for (let index = 0; index < items.length; index += 2) {
    pairs.push(items.slice(index, index + 2));
  }

  return pairs;
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
    typeof wheelImage === "string" && wheelImage.trim().length > 0
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

  const planetPairs = splitIntoPairs(MAIN_PLANETS);

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
        <Text style={styles.badge}>Luna Astralis</Text>

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
          Ce rapport propose une lecture claire des principales
          énergies de votre thème natal. Vous y découvrirez votre
          Soleil, votre Lune, votre Ascendant, vos planètes
          personnelles ainsi que les éléments et les modalités qui
          dominent votre carte du ciel.
        </Text>

        <Text style={styles.smallText}>
          L’astrologie est un outil symbolique de connaissance de soi.
          Elle met en lumière des tendances et des possibilités sans
          déterminer votre avenir de manière absolue.
        </Text>

        <PageFooter />
      </Page>

      {/* PAGE 2 — ROUE ASTROLOGIQUE */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>
          Votre roue astrologique
        </Text>

        <Text style={styles.wheelIntro}>
          Cette roue représente la position des planètes, des signes
          et des principaux angles au moment précis de votre
          naissance.
        </Text>

        <View style={styles.wheelContainer}>
          <View style={styles.wheelFrame}>
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
                  L’image de la roue n’a pas été transmise au document
                  PDF. Les données astrologiques du rapport demeurent
                  disponibles dans les pages suivantes.
                </Text>
              </View>
            )}
          </View>
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

      {/* PAGE 3 — SOLEIL, LUNE ET ASCENDANT */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>
          Les fondations de votre thème astral
        </Text>

        <Text style={styles.text}>
          Chaque naissance correspond à une configuration unique du
          ciel. Les positions planétaires décrivent différentes
          dimensions de votre personnalité, de votre sensibilité et
          de votre manière d’évoluer.
        </Text>

        <View style={styles.box}>
          <Text style={styles.informationLine}>
            Soleil : {signFr(sunSign)}
          </Text>

          <Text style={styles.informationLine}>
            Lune : {signFr(moonSign)}
          </Text>

          <Text style={styles.informationLine}>
            Ascendant : {translateSigns(ascendantSign)}
          </Text>
        </View>

        <Text style={styles.planetTitle}>
          Votre Soleil en {signFr(sunSign)}
        </Text>

        <Text style={styles.text}>
          {getPlanetInterpretation("Sun", sunSign)}
        </Text>

        <Text style={styles.planetTitle}>
          Votre Lune en {signFr(moonSign)}
        </Text>

        <Text style={styles.text}>
          {getPlanetInterpretation("Moon", moonSign)}
        </Text>

        <Text style={styles.planetTitle}>
          Votre Ascendant en {translateSigns(ascendantSign)}
        </Text>

        <Text style={styles.text}>
          L’Ascendant décrit votre façon spontanée d’aborder la vie,
          la première impression que vous laissez et la manière dont
          vous entrez en relation avec votre environnement.
        </Text>

        <PageFooter />
      </Page>

      {/* PAGES DES PLANÈTES */}
      {planetPairs.map((pair, pageIndex) => (
        <Page
          size="A4"
          style={styles.page}
          key={`planet-page-${pageIndex}`}
        >
          <Text style={styles.sectionTitle}>
            Vos positions planétaires
          </Text>

          {pair.map((planetName) => {
            const planet = getPlanet(safePlanets, planetName);
            const signName = getPlanetSignName(planet);
            const planetLabel =
              PLANET_FR[planetName] || planetName;

            return (
              <View
                style={styles.planetBox}
                key={planetName}
                wrap={false}
              >
                <Text style={styles.planetTitle}>
                  {planetLabel} en {signFr(signName)}
                </Text>

                <Text style={styles.text}>
                  {getPlanetInterpretation(
                    planetName,
                    signName
                  )}
                </Text>
              </View>
            );
          })}

          <PageFooter />
        </Page>
      ))}

      {/* PAGE DES ÉLÉMENTS */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>
          Vos éléments dominants
        </Text>

        <Text style={styles.text}>
          Les éléments décrivent la tonalité générale de votre énergie
          et votre manière naturelle d’interagir avec le monde.
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
          <Text style={styles.planetTitle}>
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
        <Text style={styles.sectionTitle}>
          Vos modalités astrologiques
        </Text>

        <Text style={styles.text}>
          Les modalités indiquent votre manière d’agir, de maintenir
          vos décisions et de vous adapter aux changements.
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
          <Text style={styles.planetTitle}>
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

      {/* DERNIÈRE PAGE — CONCLUSION */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>
          Conclusion
        </Text>

        <Text style={styles.text}>
          Votre carte du ciel ne vous enferme pas dans une définition
          fixe. Elle met en lumière des forces, des besoins, des
          sensibilités et des pistes d’évolution qui peuvent vous
          aider à mieux vous comprendre.
        </Text>

        <Text style={styles.text}>
          Certaines énergies peuvent vous sembler immédiatement
          familières, tandis que d’autres se manifestent davantage
          avec le temps et les expériences. Votre thème astral est une
          invitation à observer ces différentes dimensions avec
          curiosité et bienveillance.
        </Text>

        <View style={styles.box}>
          <Text style={styles.subtitle}>
            Votre signe n’est pas une limite.
          </Text>

          <Text style={styles.text}>
            C’est une force à découvrir.
          </Text>
        </View>

        <Text style={styles.smallText}>
          Merci d’avoir choisi Luna Astralis pour explorer votre
          univers intérieur.
        </Text>

        <PageFooter />
      </Page>
    </Document>
  );
}
