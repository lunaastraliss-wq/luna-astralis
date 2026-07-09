import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
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
};

const styles = StyleSheet.create({
  page: {
    padding: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontSize: 12,
    lineHeight: 1.6,
  },
  badge: {
    color: "#f4c95d",
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 24,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 32,
    color: "#fff8e7",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 15,
    color: "#f4c95d",
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#f4c95d",
    marginBottom: 18,
    marginTop: 8,
  },
  text: {
    fontSize: 12,
    marginBottom: 12,
  },
  box: {
    border: "1px solid #f4c95d",
    padding: 18,
    marginTop: 20,
    marginBottom: 20,
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

const PLANET_GLYPH: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
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

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((p) => p.name === name);
}

function getPlanetInterpretation(planet: string, sign?: string) {
  if (!sign) {
    return "Cette position n’a pas pu être calculée avec les données disponibles.";
  }

  return (
    PLANET_TEXTS[planet]?.[sign] ||
    "Cette planète révèle une dimension importante de votre personnalité et de votre évolution intérieure."
  );
}

export default function EssentialPdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
}: Props) {
  const sun = getPlanet(planets, "Sun");
  const moon = getPlanet(planets, "Moon");

  const ascSign =
    angles?.ascendant?.sign ||
    angles?.Ascendant?.sign ||
    angles?.ASC?.sign;

  const mainPlanets = [
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

  const elementCounts: Record<string, number> = {};
  const modalityCounts: Record<string, number> = {};

  mainPlanets.forEach((planet) => {
    const data = getPlanet(planets, planet);
    const sign = data?.sign;

    const element = SIGN_ELEMENT[sign];
    const modality = SIGN_MODALITY[sign];

    if (element) {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    }

    if (modality) {
      modalityCounts[modality] = (modalityCounts[modality] || 0) + 1;
    }
  });

  const dominantElement =
    Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

  const dominantModality =
    Object.entries(modalityCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.badge}>Luna Astralis</Text>
        <Text style={styles.title}>Carte du ciel Essentielle</Text>
        <Text style={styles.subtitle}>Rapport astrologique personnalisé</Text>

        <View style={styles.box}>
          <Text>Préparé pour : {firstName || "Votre nom"}</Text>
          <Text>Date de naissance : {birthDate || "—"}</Text>
          <Text>Heure de naissance : {birthTime || "—"}</Text>
          <Text>Lieu de naissance : {birthCity || "—"}</Text>
        </View>

        <Text style={styles.text}>
          Ce rapport vous offre une première lecture claire de votre thème
          natal : Soleil, Lune, Ascendant, planètes principales, éléments et
          modalités.
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Bienvenue dans votre thème astral</Text>

        <Text style={styles.text}>
          Chaque naissance marque un instant unique. Au moment exact où vous
          êtes venu au monde, les planètes occupaient une position précise dans
          le ciel. Cette configuration forme votre thème astral.
        </Text>

        <Text style={styles.text}>
          L’astrologie ne fige pas votre destin. Elle agit plutôt comme un
          miroir symbolique qui aide à mieux comprendre vos forces, vos
          sensibilités et vos élans naturels.
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Vos trois grands piliers</Text>

        <View style={styles.box}>
          <Text>Soleil : {signFr(sun?.sign)}</Text>
          <Text>Lune : {signFr(moon?.sign)}</Text>
          <Text>Ascendant : {signFr(ascSign)}</Text>
        </View>

        <Text style={styles.text}>
          Le Soleil représente votre identité profonde. La Lune révèle votre
          monde émotionnel. L’Ascendant décrit votre manière d’entrer en
          relation avec la vie.
        </Text>
      </Page>

      {mainPlanets.map((planet) => {
        const data = getPlanet(planets, planet);
        const fr = PLANET_FR[planet] || planet;
        const glyph = PLANET_GLYPH[planet] || "✦";

        return (
          <Page size="A4" style={styles.page} key={planet}>
            <Text style={styles.sectionTitle}>
              {glyph} {fr} en {signFr(data?.sign)}
            </Text>

            <Text style={styles.text}>
              {getPlanetInterpretation(planet, data?.sign)}
            </Text>
          </Page>
        );
      })}

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Les éléments dominants</Text>

        <View style={styles.box}>
          <Text>Feu : {elementCounts.Feu || 0}</Text>
          <Text>Terre : {elementCounts.Terre || 0}</Text>
          <Text>Air : {elementCounts.Air || 0}</Text>
          <Text>Eau : {elementCounts.Eau || 0}</Text>
        </View>

        <Text style={styles.text}>
          Élément dominant : {dominantElement || "—"}
        </Text>

        <Text style={styles.text}>
          {dominantElement
            ? ELEMENT_TEXT[dominantElement]
            : "Les éléments décrivent la grande tonalité énergétique du thème."}
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Les modalités astrologiques</Text>

        <View style={styles.box}>
          <Text>Cardinal : {modalityCounts.Cardinal || 0}</Text>
          <Text>Fixe : {modalityCounts.Fixe || 0}</Text>
          <Text>Mutable : {modalityCounts.Mutable || 0}</Text>
        </View>

        <Text style={styles.text}>
          Modalité dominante : {dominantModality || "—"}
        </Text>

        <Text style={styles.text}>
          {dominantModality
            ? MODALITY_TEXT[dominantModality]
            : "Les modalités indiquent votre façon naturelle d’agir."}
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Conclusion</Text>

        <Text style={styles.text}>
          Votre carte du ciel ne vous enferme pas. Elle révèle des tendances,
          des forces et des pistes de compréhension pour avancer avec plus de
          conscience.
        </Text>

        <Text style={styles.subtitle}>
          Luna Astralis — Votre signe n’est pas une limite. C’est une force à
          découvrir.
        </Text>
      </Page>
    </Document>
  );
}
