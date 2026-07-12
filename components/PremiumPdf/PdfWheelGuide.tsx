import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./PremiumPdfStyles";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#f4c95d";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";
const MUTED = "#d8d0c2";

const styles = StyleSheet.create({
  pageContent: {
    flexGrow: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: 13,
  },

  badge: {
    alignSelf: "center",

    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,

    marginBottom: 6,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.7,
    borderColor: GOLD,
  },

  badgeText: {
    color: BRIGHT_GOLD,

    fontSize: 6.4,
    letterSpacing: 1.8,

    textTransform: "uppercase",
    textAlign: "center",
  },

  eyebrow: {
    color: "#cdbb92",

    fontSize: 6.8,
    letterSpacing: 2.1,

    textTransform: "uppercase",

    marginBottom: 5,
  },

  title: {
    color: BRIGHT_GOLD,

    fontSize: 22,
    lineHeight: 1.15,

    textAlign: "center",

    marginBottom: 6,
  },

  titleLine: {
    width: 92,
    height: 0.8,

    backgroundColor: GOLD,

    marginBottom: 7,
  },

  intro: {
    width: "88%",

    color: MUTED,

    fontSize: 8.8,
    lineHeight: 1.45,

    textAlign: "center",
  },

  sectionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
  },

  sectionCard: {
    position: "relative",

    width: "48.7%",

    minHeight: 118,

    marginBottom: 10,

    paddingTop: 14,
    paddingBottom: 13,
    paddingHorizontal: 14,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.7,
    borderColor: "#6f5935",
  },

  sectionAccent: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 62,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  sectionNumber: {
    color: "#8f6e35",

    fontSize: 17,

    marginBottom: 4,
  },

  sectionTitle: {
    color: BRIGHT_GOLD,

    fontSize: 10.2,
    lineHeight: 1.2,

    marginBottom: 6,
  },

  sectionText: {
    color: MUTED,

    fontSize: 7.5,
    lineHeight: 1.45,
  },

  planetList: {
    marginTop: 6,

    paddingTop: 6,

    borderTopWidth: 0.4,
    borderTopColor: "#705a35",
  },

  planetLine: {
    flexDirection: "row",

    marginBottom: 3,
  },

  planetName: {
    width: 55,

    color: CREAM,

    fontSize: 6.7,
    lineHeight: 1.3,
  },

  planetMeaning: {
    flex: 1,

    color: MUTED,

    fontSize: 6.7,
    lineHeight: 1.3,
  },

  synthesisBox: {
    position: "relative",

    marginTop: 2,

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 18,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: GOLD,
  },

  synthesisAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 92,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  synthesisAccentRight: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 74,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  synthesisTitle: {
    color: BRIGHT_GOLD,

    fontSize: 10.5,

    textAlign: "center",

    marginBottom: 7,
  },

  synthesisText: {
    color: MUTED,

    fontSize: 7.8,
    lineHeight: 1.48,

    textAlign: "center",
  },

  note: {
    color: "#c8b98f",

    fontSize: 6.7,
    lineHeight: 1.35,

    textAlign: "center",

    marginTop: 9,
  },
});

function GuideCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionAccent} />

      <Text style={styles.sectionNumber}>
        {number}
      </Text>

      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      {children}
    </View>
  );
}

export default function PdfWheelGuide() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.pageContent}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Repères de lecture
            </Text>
          </View>

          <Text style={styles.eyebrow}>
            Comprendre votre carte du ciel
          </Text>

          <Text style={styles.title}>
            Comment lire votre roue astrologique
          </Text>

          <View style={styles.titleLine} />

          <Text style={styles.intro}>
            Votre roue astrologique représente le ciel au moment précis
            de votre naissance. Chaque signe, planète, maison, angle et
            aspect participe à la construction de votre thème natal.
          </Text>
        </View>

        <View style={styles.sectionGrid}>
          <GuideCard
            number="01"
            title="Les douze signes du zodiaque"
          >
            <Text style={styles.sectionText}>
              L’anneau extérieur présente les douze signes du zodiaque.
              Chaque signe décrit une manière particulière d’exprimer
              une énergie. Lorsqu’une planète se trouve dans un signe,
              elle adopte ses qualités, ses besoins, ses réflexes et sa
              manière d’agir.
            </Text>
          </GuideCard>

          <GuideCard
            number="02"
            title="Les douze maisons astrologiques"
          >
            <Text style={styles.sectionText}>
              Les maisons divisent la roue en douze secteurs. Elles
              représentent les grands domaines de votre existence :
              identité, ressources, communication, foyer, créativité,
              travail, relations, transformation, aspirations et
              vocation.
            </Text>
          </GuideCard>

          <GuideCard
            number="03"
            title="Les planètes"
          >
            <Text style={styles.sectionText}>
              Les planètes symbolisent les différentes fonctions de
              votre personnalité. Leur signe montre comment elles
              s’expriment, tandis que leur maison indique dans quel
              domaine de votre vie leur influence se manifeste.
            </Text>

            <View style={styles.planetList}>
              <View style={styles.planetLine}>
                <Text style={styles.planetName}>
                  Soleil
                </Text>

                <Text style={styles.planetMeaning}>
                  Identité et volonté
                </Text>
              </View>

              <View style={styles.planetLine}>
                <Text style={styles.planetName}>
                  Lune
                </Text>

                <Text style={styles.planetMeaning}>
                  Émotions et sécurité
                </Text>
              </View>

              <View style={styles.planetLine}>
                <Text style={styles.planetName}>
                  Mercure
                </Text>

                <Text style={styles.planetMeaning}>
                  Pensée et communication
                </Text>
              </View>

              <View style={styles.planetLine}>
                <Text style={styles.planetName}>
                  Vénus
                </Text>

                <Text style={styles.planetMeaning}>
                  Amour et valeurs
                </Text>
              </View>

              <View style={styles.planetLine}>
                <Text style={styles.planetName}>
                  Mars
                </Text>

                <Text style={styles.planetMeaning}>
                  Action et désir
                </Text>
              </View>
            </View>
          </GuideCard>

          <GuideCard
            number="04"
            title="Les aspects astrologiques"
          >
            <Text style={styles.sectionText}>
              Les lignes tracées au centre relient les planètes entre
              elles. Elles représentent les aspects astrologiques.
              Certains facilitent une expression naturelle de vos
              énergies, tandis que d’autres révèlent des tensions, des
              contrastes ou des défis porteurs d’évolution.
            </Text>
          </GuideCard>

          <GuideCard
            number="05"
            title="Les quatre angles majeurs"
          >
            <Text style={styles.sectionText}>
              L’Ascendant indique votre manière d’aborder le monde. Le
              Descendant décrit votre rapport aux autres. Le Milieu du
              Ciel concerne votre vocation et votre direction sociale.
              Le Fond du Ciel représente vos racines et votre sécurité
              intérieure.
            </Text>
          </GuideCard>

          <GuideCard
            number="06"
            title="La lecture d’ensemble"
          >
            <Text style={styles.sectionText}>
              Aucun élément ne doit être interprété isolément. La
              richesse de votre thème vient de la combinaison entre les
              planètes, les signes, les maisons, les angles et les
              aspects. C’est leur dialogue qui révèle votre signature
              astrologique personnelle.
            </Text>
          </GuideCard>
        </View>

        <View style={styles.synthesisBox}>
          <View style={styles.synthesisAccentLeft} />
          <View style={styles.synthesisAccentRight} />

          <Text style={styles.synthesisTitle}>
            Votre thème natal forme un ensemble vivant
          </Text>

          <Text style={styles.synthesisText}>
            Les pages suivantes approfondiront progressivement chacun
            de ces éléments afin de mettre en lumière votre
            personnalité, votre monde émotionnel, votre manière
            d’aimer, vos forces naturelles, vos défis et votre
            potentiel d’évolution.
          </Text>
        </View>

        <Text style={styles.note}>
          Cette page constitue votre guide de référence pour mieux
          comprendre les interprétations de votre rapport Premium.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
