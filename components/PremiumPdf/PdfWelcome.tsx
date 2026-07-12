import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./PremiumPdfStyles";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  pageContent: {
    flexGrow: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: 8,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 7.4,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    lineHeight: 1.15,
    textAlign: "center",
    marginBottom: 6,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  dividerLine: {
    width: 46,
    height: 0.7,
    backgroundColor: "#8f793c",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 11,
    marginHorizontal: 9,
  },

  lead: {
    width: "88%",
    color: "#c9c5bb",
    fontSize: 8.4,
    lineHeight: 1.35,
    textAlign: "center",
  },

  contentCard: {
    paddingTop: 12,
    paddingBottom: 11,
    paddingHorizontal: 18,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 8.25,
    lineHeight: 1.38,
    marginBottom: 6,
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 8.25,
    lineHeight: 1.38,
  },

  quoteCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#39415d",
    borderRightColor: "#39415d",
    borderBottomColor: "#39415d",
  },

  quoteMark: {
    color: "#f4c95d",
    fontSize: 24,
    marginRight: 12,
    marginTop: -5,
  },

  quoteContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  quoteText: {
    color: "#fff8e7",
    fontSize: 9.1,
    lineHeight: 1.35,
    marginBottom: 4,
  },

  quoteSignature: {
    color: "#f4c95d",
    fontSize: 6.8,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  nextSectionCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  nextSectionTitle: {
    color: "#f4c95d",
    fontSize: 9.5,
    textAlign: "center",
    marginBottom: 8,
  },

  columns: {
    flexDirection: "row",
  },

  column: {
    flexGrow: 1,
    flexBasis: 0,
  },

  leftColumn: {
    marginRight: 10,
  },

  item: {
    color: "#d8d4ca",
    fontSize: 7.5,
    lineHeight: 1.32,
    marginBottom: 5,
  },

  itemLast: {
    color: "#d8d4ca",
    fontSize: 7.5,
    lineHeight: 1.32,
  },
});

export default function PdfWelcome() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.pageContent}>
        <View style={styles.header}>
          <Text style={styles.kicker}>
            Introduction Premium
          </Text>

          <Text style={styles.title}>
            Bienvenue au cœur de votre thème natal
          </Text>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />

            <Text style={styles.dividerSymbol}>
              ✦
            </Text>

            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.lead}>
            Une lecture approfondie de votre ciel de naissance,
            conçue pour révéler les grandes dynamiques de votre
            personnalité, de vos relations et de votre évolution.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Text style={styles.paragraph}>
            Chaque naissance correspond à un instant unique. Au
            moment précis de votre arrivée au monde, les planètes,
            les angles et les maisons formaient une configuration
            particulière. Cette empreinte constitue votre thème
            natal : une représentation symbolique de vos besoins,
            de vos forces, de vos réactions et de votre potentiel.
          </Text>

          <Text style={styles.paragraph}>
            Votre rapport Premium va plus loin qu’une simple lecture
            des signes. Il met en relation votre Soleil, votre Lune,
            votre Ascendant, les dix principales planètes, les
            maisons astrologiques et les aspects qui relient toutes
            ces énergies.
          </Text>

          <Text style={styles.paragraph}>
            Chaque composante possède une fonction précise. Le signe
            décrit la manière dont l’énergie s’exprime. La planète
            représente la force qui agit. La maison indique le
            domaine de vie concerné. Les aspects révèlent les
            alliances, les tensions et les dialogues qui rendent
            votre personnalité unique.
          </Text>

          <Text style={styles.paragraph}>
            L’astrologie ne présente pas un destin immuable. Elle ne
            décide pas de vos choix et ne remplace jamais votre libre
            arbitre. Elle agit comme un langage symbolique qui aide à
            reconnaître vos mécanismes naturels, vos contradictions,
            vos besoins profonds et vos possibilités d’évolution.
          </Text>

          <Text style={styles.paragraph}>
            Certaines interprétations vous sembleront immédiatement
            familières. D’autres demanderont davantage de recul. Un
            thème natal contient plusieurs couches, dont certaines se
            révèlent progressivement avec l’expérience.
          </Text>

          <Text style={styles.paragraphLast}>
            Prenez le temps d’avancer dans ce rapport sans chercher à
            tout retenir en une seule lecture. Revenez aux pages qui
            vous interpellent le plus. Votre thème natal n’est pas
            une définition figée : il est une carte vivante de vos
            possibilités.
          </Text>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quoteMark}>
            “
          </Text>

          <View style={styles.quoteContent}>
            <Text style={styles.quoteText}>
              Votre carte du ciel ne vous enferme pas dans une
              identité. Elle vous aide à comprendre les forces avec
              lesquelles vous pouvez construire votre propre chemin.
            </Text>

            <Text style={styles.quoteSignature}>
              Luna Astralis
            </Text>
          </View>
        </View>

        <View style={styles.nextSectionCard}>
          <Text style={styles.nextSectionTitle}>
            Ce que vous découvrirez dans votre rapport Premium
          </Text>

          <View style={styles.columns}>
            <View
              style={[
                styles.column,
                styles.leftColumn,
              ]}
            >
              <Text style={styles.item}>
                ✦ Vos trois grands piliers : le Soleil, la Lune et
                l’Ascendant.
              </Text>

              <Text style={styles.item}>
                ✦ L’influence détaillée des dix principales planètes.
              </Text>

              <Text style={styles.item}>
                ✦ La signification des douze maisons astrologiques.
              </Text>

              <Text style={styles.itemLast}>
                ✦ Les aspects majeurs et les dynamiques de votre thème.
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.item}>
                ✦ La répartition de vos éléments : Feu, Terre, Air et
                Eau.
              </Text>

              <Text style={styles.item}>
                ✦ Vos modalités dominantes et votre manière d’agir.
              </Text>

              <Text style={styles.itemLast}>
                ✦ Vos forces, vos défis, vos relations, votre potentiel
                professionnel et vos axes d’évolution.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
