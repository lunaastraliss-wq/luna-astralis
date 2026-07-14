import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";
import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
*/

type PdfSignatureWelcomeProps = {
  firstName: string;
};

type DiscoveryItemProps = {
  children: string;
  last?: boolean;
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  pageContent: {
    flexGrow: 1,

    /*
     * Réserve de sécurité afin d’empêcher
     * le dernier bloc de toucher le pied de page.
     */
    paddingBottom: 32,
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

  dividerSymbolCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 7,
    lineHeight: 1,
  },

  lead: {
    width: "88%",
    color: "#c9c5bb",
    fontSize: 8.4,
    lineHeight: 1.35,
    textAlign: "center",
  },

  contentCard: {
    paddingTop: 11,
    paddingBottom: 10,
    paddingHorizontal: 18,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 8.15,
    lineHeight: 1.36,
    marginBottom: 5.5,
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 8.15,
    lineHeight: 1.36,
  },

  quoteCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
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

  quoteMarkBox: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 0.7,
    borderColor: "#8f793c",
  },

  quoteMark: {
    color: "#f4c95d",
    fontSize: 15,
    lineHeight: 1,
  },

  quoteContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  quoteText: {
    color: "#fff8e7",
    fontSize: 8.9,
    lineHeight: 1.34,
    marginBottom: 4,
  },

  quoteSignature: {
    color: "#f4c95d",
    fontSize: 6.8,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  nextSectionCard: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  nextSectionTitle: {
    color: "#f4c95d",
    fontSize: 9.3,
    textAlign: "center",
    marginBottom: 7,
  },

  columns: {
    flexDirection: "row",
  },

  column: {
    flexGrow: 1,
    flexBasis: 0,
  },

  leftColumn: {
    marginRight: 12,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },

  listItemLast: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    width: 11,
    color: "#f4c95d",
    fontSize: 8,
    lineHeight: 1.28,
  },

  itemText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#d8d4ca",
    fontSize: 7.35,
    lineHeight: 1.3,
  },
});

/*
|--------------------------------------------------------------------------
| Élément de liste
|--------------------------------------------------------------------------
*/

function DiscoveryItem({
  children,
  last = false,
}: DiscoveryItemProps) {
  return (
    <View
      style={
        last
          ? styles.listItemLast
          : styles.listItem
      }
      wrap={false}
    >
      <Text style={styles.bullet}>
        •
      </Text>

      <Text style={styles.itemText}>
        {children}
      </Text>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Page d’introduction Signature
|--------------------------------------------------------------------------
*/

export default function PdfSignatureWelcome({
  firstName,
}: PdfSignatureWelcomeProps) {
  const safeFirstName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  const personalizedLead = safeFirstName
    ? `${safeFirstName}, cette lecture complète de votre thème natal a été conçue pour révéler les liens profonds entre vos différentes énergies et mettre en lumière votre potentiel d’évolution.`
    : "Une lecture complète de votre thème natal, conçue pour révéler les liens profonds entre vos différentes énergies et mettre en lumière votre potentiel d’évolution.";

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
            Introduction Signature
          </Text>

          <Text style={styles.title}>
            Bienvenue dans votre analyse Signature
          </Text>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />

            <View style={styles.dividerSymbolCircle}>
              <Text style={styles.dividerSymbol}>
                •
              </Text>
            </View>

            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.lead}>
            {personalizedLead}
          </Text>
        </View>

        <View
          style={styles.contentCard}
          wrap={false}
        >
          <Text style={styles.paragraph}>
            Votre naissance correspond à un instant qui ne se
            reproduira jamais exactement de la même manière. À ce
            moment précis, les planètes, les angles et les maisons
            formaient une configuration unique : votre thème natal.
            Cette empreinte symbolique révèle les forces, les besoins,
            les réflexes et les possibilités qui composent votre
            paysage intérieur.
          </Text>

          <Text style={styles.paragraph}>
            Ce rapport Signature représente le niveau d’analyse le
            plus complet proposé par Luna Astralis. Il ne se limite
            pas à interpréter chaque élément séparément : il révèle
            les interactions entre vos planètes, vos maisons, vos
            aspects et les grandes dynamiques qui structurent votre
            thème natal.
          </Text>

          <Text style={styles.paragraph}>
            Chaque élément apporte une information différente. La
            planète représente une fonction intérieure. Le signe
            décrit la manière dont cette énergie cherche à
            s’exprimer. La maison indique le domaine de vie dans
            lequel elle agit. Les aspects montrent les accords, les
            tensions et les interactions qui donnent à votre thème sa
            profondeur particulière.
          </Text>

          <Text style={styles.paragraph}>
            Vous découvrirez ainsi non seulement certaines qualités
            naturelles, mais également des contradictions, des
            besoins parfois difficiles à concilier et des ressources
            qui peuvent se développer avec le temps. Ces nuances ne
            constituent pas des défauts : elles participent à la
            richesse de votre personnalité.
          </Text>

          <Text style={styles.paragraph}>
            L’astrologie ne détermine pas vos décisions et ne décrit
            pas un destin immuable. Elle propose un langage
            symbolique qui peut vous aider à mieux reconnaître vos
            réactions, vos motivations, vos zones de sensibilité et
            les choix qui vous permettent d’avancer avec davantage de
            conscience.
          </Text>

          <Text style={styles.paragraphLast}>
            Certaines pages vous sembleront immédiatement familières.
            D’autres prendront leur sens progressivement. Avancez à
            votre rythme et revenez aux passages qui vous
            interpellent : votre thème natal n’est pas une définition
            figée, mais une carte vivante de vos possibilités.
          </Text>
        </View>

        <View
          style={styles.quoteCard}
          wrap={false}
        >
          <View style={styles.quoteMarkBox}>
            <Text style={styles.quoteMark}>
              “
            </Text>
          </View>

          <View style={styles.quoteContent}>
            <Text style={styles.quoteText}>
              Votre thème natal est une œuvre vivante. Plus vous en
              comprenez les liens profonds, plus vous découvrez les
              ressources qui vous permettent d’évoluer pleinement.
            </Text>

            <Text style={styles.quoteSignature}>
              Luna Astralis
            </Text>
          </View>
        </View>

        <View
          style={styles.nextSectionCard}
          wrap={false}
        >
          <Text style={styles.nextSectionTitle}>
            Ce que révèle votre rapport Signature
          </Text>

          <View style={styles.columns}>
            <View
              style={[
                styles.column,
                styles.leftColumn,
              ]}
            >
              <DiscoveryItem>
                Vos trois grands piliers : le Soleil, la Lune et
                l’Ascendant.
              </DiscoveryItem>

              <DiscoveryItem>
                L’expression de vos dix principales planètes dans
                leurs signes.
              </DiscoveryItem>

              <DiscoveryItem>
                Les domaines de vie activés par vos maisons
                astrologiques.
              </DiscoveryItem>

              <DiscoveryItem last>
                Les aspects majeurs et les dialogues entre vos
                différentes énergies.
              </DiscoveryItem>
            </View>

            <View style={styles.column}>
              <DiscoveryItem>
                La répartition de vos éléments : Feu, Terre, Air et
                Eau.
              </DiscoveryItem>

              <DiscoveryItem>
                Vos modalités dominantes et votre manière naturelle
                d’agir.
              </DiscoveryItem>

              <DiscoveryItem>
                Vos forces, vos défis et les ressources à développer.
              </DiscoveryItem>

              <DiscoveryItem last>
                Vos dynamiques relationnelles, professionnelles et
                vos principaux axes d’évolution.
              </DiscoveryItem>
            </View>
          </View>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
