import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { PLANET_ICONS } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";
import type { PlanetPageProps } from "./EssentialPdfTypes";
import {
  getPlanet,
  getPlanetDegree,
  getPlanetInterpretation,
  getPlanetSignName,
  PLANET_FR,
  PLANET_MEANINGS,
  signFr,
} from "./EssentialPdfUtils";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const PLANET_QUESTIONS: Record<string, string> = {
  Sun: "Qu’est-ce qui vous permet de rayonner pleinement ?",
  Moon:
    "De quoi avez-vous besoin pour vous sentir intérieurement en sécurité ?",
  Mercury:
    "Comment votre esprit comprend-il et transmet-il les idées ?",
  Venus:
    "Qu’est-ce qui nourrit votre manière d’aimer et de créer du lien ?",
  Mars:
    "Comment votre énergie se mobilise-t-elle lorsque vous passez à l’action ?",
  Jupiter:
    "Où trouvez-vous confiance, croissance et ouverture ?",
  Saturn:
    "Quelles expériences vous invitent à développer votre maturité ?",
  Uranus:
    "Comment exprimez-vous votre liberté et votre originalité ?",
  Neptune:
    "Comment votre intuition et votre imaginaire influencent-ils votre vie ?",
  Pluto:
    "Quelles transformations révèlent votre puissance intérieure ?",
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 22,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 9,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 9,
  },

  title: {
    color: "#fff8e7",
    fontSize: 27,
    lineHeight: 1.2,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 11,
  },

  dividerLine: {
    width: 54,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 13,
    marginHorizontal: 10,
  },

  subtitle: {
    maxWidth: 420,
    color: "#d9d4c7",
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "center",
  },

  hero: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 118,
    padding: 20,
    marginBottom: 18,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  icon: {
    width: 43,
    height: 43,
    objectFit: "contain",
  },

  heroContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  heroKicker: {
    color: "#9da4b7",
    fontSize: 8.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  heroName: {
    color: "#fff8e7",
    fontSize: 24,
    marginBottom: 4,
  },

  heroSign: {
    color: "#f4c95d",
    fontSize: 15,
    marginBottom: 5,
  },

  heroDegree: {
    color: "#aeb5c7",
    fontSize: 9,
  },

  watermark: {
    position: "absolute",
    top: 12,
    right: 18,
    width: 88,
    height: 88,
    objectFit: "contain",
    opacity: 0.04,
  },

  meaningCard: {
    padding: 21,
    marginBottom: 15,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardKicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  question: {
    color: "#fff8e7",
    fontSize: 16,
    lineHeight: 1.35,
    marginBottom: 13,
  },

  interpretation: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.6,
  },

  keyBox: {
    flexDirection: "row",
    padding: 17,
    marginBottom: 14,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  keyNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  keyNumberText: {
    color: "#f4c95d",
    fontSize: 10,
    letterSpacing: 1,
  },

  keyContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  keyTitle: {
    color: "#fff8e7",
    fontSize: 13,
    marginBottom: 6,
  },

  keyText: {
    color: "#bfc5d5",
    fontSize: 9.4,
    lineHeight: 1.5,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteSymbol: {
    color: "#f4c95d",
    fontSize: 15,
    marginRight: 11,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 8.8,
    lineHeight: 1.45,
  },
});

export default function PdfPlanet({
  planets,
  planet,
}: PlanetPageProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const planetData = getPlanet(
    safePlanets,
    planet
  );

  const planetName =
    PLANET_FR[planet] || planet;

  const signName =
    getPlanetSignName(planetData);

  const translatedSign =
    signFr(signName);

  const degree =
    getPlanetDegree(planetData);

  const meaning =
    PLANET_MEANINGS[planet] ||
    "Une dimension importante de votre personnalité";

  const interpretation =
    getPlanetInterpretation(
      planet,
      signName
    );

  const question =
    PLANET_QUESTIONS[planet] ||
    "Comment cette énergie s’exprime-t-elle dans votre vie ?";

  const icon =
    PLANET_ICONS[planet];

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.kicker}>
          Planète natale
        </Text>

        <Text style={styles.title}>
          {planetName} en {translatedSign}
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />

          <Text style={styles.dividerSymbol}>
            ✦
          </Text>

          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.subtitle}>
          Une dimension essentielle de votre personnalité
          révélée par votre ciel de naissance.
        </Text>
      </View>

      <View
        style={styles.hero}
        wrap={false}
      >
        {icon ? (
          <>
            <View style={styles.iconCircle}>
              <Image
                src={icon}
                style={styles.icon}
              />
            </View>

            <Image
              src={icon}
              style={styles.watermark}
            />
          </>
        ) : null}

        <View style={styles.heroContent}>
          <Text style={styles.heroKicker}>
            Dans votre thème natal
          </Text>

          <Text style={styles.heroName}>
            {planetName}
          </Text>

          <Text style={styles.heroSign}>
            en {translatedSign}
          </Text>

          {degree ? (
            <Text style={styles.heroDegree}>
              Position : {degree}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.meaningCard}>
        <Text style={styles.cardKicker}>
          {meaning}
        </Text>

        <Text style={styles.question}>
          {question}
        </Text>

        <Text style={styles.interpretation}>
          {interpretation}
        </Text>
      </View>

      <View
        style={styles.keyBox}
        wrap={false}
      >
        <View style={styles.keyNumber}>
          <Text style={styles.keyNumberText}>
            01
          </Text>
        </View>

        <View style={styles.keyContent}>
          <Text style={styles.keyTitle}>
            L’influence du signe
          </Text>

          <Text style={styles.keyText}>
            Placé en {translatedSign}, {planetName} exprime
            ses fonctions à travers les qualités, les besoins
            et les réflexes propres à ce signe.
          </Text>
        </View>
      </View>

      <View
        style={styles.keyBox}
        wrap={false}
      >
        <View style={styles.keyNumber}>
          <Text style={styles.keyNumberText}>
            02
          </Text>
        </View>

        <View style={styles.keyContent}>
          <Text style={styles.keyTitle}>
            Une énergie à développer
          </Text>

          <Text style={styles.keyText}>
            Cette position ne vous enferme pas dans une
            définition rigide. Elle révèle une tendance naturelle
            que vous pouvez apprendre à comprendre et à utiliser
            avec davantage de conscience.
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <Text style={styles.noteSymbol}>
          ✦
        </Text>

        <Text style={styles.noteText}>
          Une interprétation plus complète tient également compte
          de la maison astrologique et des aspects formés avec les
          autres planètes.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
