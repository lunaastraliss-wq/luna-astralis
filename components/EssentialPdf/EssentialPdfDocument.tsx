import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { SUN } from "@/lib/astrology/sun";

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
  smallTitle: {
    fontSize: 17,
    color: "#fff8e7",
    marginBottom: 12,
    marginTop: 18,
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

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((p) => p.name === name);
}

function planetText(name: string) {
  const fr = PLANET_FR[name] || name;

  return `${fr} représente une dimension importante de votre personnalité. Sa position dans votre thème natal montre comment cette énergie s'exprime naturellement dans votre manière de vivre, de ressentir, d'aimer, de penser ou d'agir.`;
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.badge}>Luna Astralis</Text>
        <Text style={styles.title}>Carte du ciel Essentielle</Text>
        <Text style={styles.subtitle}>
          Rapport astrologique personnalisé
        </Text>

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
        <Text style={styles.sectionTitle}>
          Bienvenue dans votre thème astral
        </Text>

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

        <Text style={styles.sectionTitle}>
          ☉ Votre Soleil est en {signFr(sun?.sign)}
        </Text>

        <Text style={styles.text}>
          {SUN[sun?.sign] ||
            "Votre Soleil révèle votre identité profonde, votre vitalité et votre manière naturelle de rayonner."}
        </Text>

        <Text style={styles.smallTitle}>
          ☽ Votre Lune est en {signFr(moon?.sign)}
        </Text>

        <Text style={styles.text}>
          La Lune révèle votre monde émotionnel, vos besoins affectifs et votre
          façon instinctive de chercher la sécurité intérieure. Son
          interprétation détaillée sera ajoutée dans la prochaine étape du
          rapport.
        </Text>

        <Text style={styles.smallTitle}>
          Ascendant en {signFr(ascSign)}
        </Text>

        <Text style={styles.text}>
          L’Ascendant décrit votre manière d’entrer en relation avec la vie,
          votre première réaction face au monde et l’image que les autres
          perçoivent souvent en premier.
        </Text>
      </Page>

      {mainPlanets.map((planet) => {
        const data = getPlanet(planets, planet);
        const fr = PLANET_FR[planet] || planet;

        return (
          <Page size="A4" style={styles.page} key={planet}>
            <Text style={styles.sectionTitle}>
              {fr} en {signFr(data?.sign)}
            </Text>

            <Text style={styles.text}>{planetText(planet)}</Text>

            <Text style={styles.text}>
              Placé en {signFr(data?.sign)}, {fr} prend une coloration
              particulière. Cette position décrit une manière naturelle
              d’exprimer cette énergie dans votre vie.
            </Text>
          </Page>
        );
      })}

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Les éléments</Text>

        <Text style={styles.text}>
          Les éléments décrivent la grande tonalité énergétique du thème. Le Feu
          parle d’élan, la Terre de stabilité, l’Air d’idées et l’Eau de
          sensibilité.
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Les modalités</Text>

        <Text style={styles.text}>
          Les modalités indiquent votre façon naturelle d’agir : initier,
          stabiliser ou vous adapter aux changements.
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
