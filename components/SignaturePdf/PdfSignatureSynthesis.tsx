import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  SignatureAngles,
  SignaturePlanet,
} from "./SignaturePdfTypes";

import { pdfStyles } from "./SignaturePdfStyles";
import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
*/

type PdfSignatureSynthesisProps = {
  firstName: string;
  planets: SignaturePlanet[];
  angles: SignatureAngles;
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  header: {
    alignItems: "center",
    marginBottom: 18,
  },

  badge: {
    color: "#f4c95d",
    fontSize: 7.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: "#fff8e7",
    fontSize: 22,
    lineHeight: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  dividerLine: {
    width: 45,
    height: 0.7,
    backgroundColor: "#8f793c",
  },

  dividerCircle: {
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

  intro: {
    width: "88%",
    color: "#c9c5bb",
    fontSize: 8.7,
    lineHeight: 1.45,
    textAlign: "center",
  },

  summaryCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 18,
    marginBottom: 12,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  summaryText: {
    color: "#e9e4d8",
    fontSize: 8.4,
    lineHeight: 1.5,
    textAlign: "center",
  },

  card: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,
    marginBottom: 11,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  cardNumber: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: 0.8,
    borderColor: "#f4c95d",
  },

  cardNumberText: {
    color: "#f4c95d",
    fontSize: 8,
  },

  cardTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#f4c95d",
    fontSize: 10.5,
  },

  cardText: {
    color: "#e9e4d8",
    fontSize: 8.35,
    lineHeight: 1.5,
  },

  finalCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 18,
    marginTop: 2,
    marginBottom: 10,
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

  finalTitle: {
    color: "#f4c95d",
    fontSize: 9.5,
    textAlign: "center",
    marginBottom: 7,
  },

  finalText: {
    color: "#fff8e7",
    fontSize: 8.5,
    lineHeight: 1.5,
    textAlign: "center",
  },
});

/*
|--------------------------------------------------------------------------
| Page de synthèse Signature
|--------------------------------------------------------------------------
*/

export default function PdfSignatureSynthesis({
  firstName,
  planets,
  angles,
}: PdfSignatureSynthesisProps) {
  const safeFirstName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const analyzedPlanetsCount =
    safePlanets.length;

  const hasAngles =
    Boolean(
      angles &&
      typeof angles === "object"
    );

  const introduction = safeFirstName
    ? `${safeFirstName}, cette synthèse relie les principales dimensions de votre thème natal afin de faire ressortir la cohérence profonde de votre personnalité, vos contrastes intérieurs et vos possibilités d’évolution.`
    : "Cette synthèse relie les principales dimensions de votre thème natal afin de faire ressortir la cohérence profonde de votre personnalité, vos contrastes intérieurs et vos possibilités d’évolution.";

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.badge}>
            Synthèse Signature
          </Text>

          <Text style={styles.title}>
            Votre signature astrologique profonde
          </Text>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />

            <View style={styles.dividerCircle}>
              <Text style={styles.dividerSymbol}>
                •
              </Text>
            </View>

            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.intro}>
            {introduction}
          </Text>
        </View>

        <View
          style={styles.summaryCard}
          wrap={false}
        >
          <Text style={styles.summaryText}>
            Cette lecture s’appuie sur les principales planètes de
            votre thème
            {analyzedPlanetsCount > 0
              ? `, dont ${analyzedPlanetsCount} positions planétaires analysées`
              : ""}
            {hasAngles
              ? ", ainsi que sur vos angles astrologiques"
              : ""}
            . Elle ne cherche pas à réduire votre personnalité à une
            seule caractéristique, mais à montrer comment vos
            différentes énergies se complètent, se répondent et
            évoluent ensemble.
          </Text>
        </View>

        <View
          style={styles.card}
          wrap={false}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                1
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Votre moteur intérieur
            </Text>
          </View>

          <Text style={styles.cardText}>
            Votre moteur intérieur naît de la relation entre votre
            identité consciente, votre sensibilité, votre manière
            spontanée de vous présenter au monde et les énergies les
            plus présentes dans votre thème. Certaines dimensions
            vous poussent à agir, à créer ou à prendre votre place,
            tandis que d’autres recherchent davantage de sécurité,
            de compréhension ou de profondeur. Votre équilibre se
            construit lorsque ces besoins peuvent avancer ensemble
            plutôt que se concurrencer.
          </Text>
        </View>

        <View
          style={styles.card}
          wrap={false}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                2
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Votre principal contraste
            </Text>
          </View>

          <Text style={styles.cardText}>
            Votre thème peut contenir des élans qui ne s’expriment pas
            toujours au même rythme. Une partie de vous peut vouloir
            avancer rapidement alors qu’une autre a besoin de temps,
            de certitudes ou de protection. Ces contrastes ne sont
            pas des incohérences. Ils révèlent plusieurs besoins
            légitimes qui demandent à être reconnus. En comprenant ce
            dialogue intérieur, vous pouvez faire des choix plus
            conscients et éviter de vous sentir obligé de renoncer à
            une partie importante de vous-même.
          </Text>
        </View>

        <View
          style={styles.card}
          wrap={false}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                3
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Votre force de transformation
            </Text>
          </View>

          <Text style={styles.cardText}>
            Votre capacité de transformation repose sur la manière
            dont vous utilisez vos tensions, vos sensibilités et vos
            expériences comme des sources de compréhension. Les
            zones plus exigeantes de votre thème peuvent devenir des
            espaces de maturité lorsqu’elles sont observées avec
            recul. Votre évolution ne consiste pas à effacer vos
            contradictions, mais à leur donner une place plus juste
            afin qu’elles puissent devenir des ressources.
          </Text>
        </View>

        <View
          style={styles.card}
          wrap={false}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                4
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Votre potentiel d’accomplissement
            </Text>
          </View>

          <Text style={styles.cardText}>
            Votre potentiel se développe lorsque vos qualités
            naturelles sont mises au service d’une direction qui vous
            ressemble réellement. Il ne dépend pas uniquement de ce
            que vous réussissez extérieurement, mais aussi de la
            cohérence entre vos décisions, vos besoins profonds et
            vos valeurs. Plus vous reconnaissez votre fonctionnement,
            plus vous pouvez choisir des relations, des projets et
            des environnements qui soutiennent durablement votre
            énergie.
          </Text>
        </View>

        <View
          style={styles.finalCard}
          wrap={false}
        >
          <Text style={styles.finalTitle}>
            Votre phrase Signature
          </Text>

          <Text style={styles.finalText}>
            Votre thème ne vous demande pas de devenir quelqu’un
            d’autre. Il vous invite à réunir vos différentes forces,
            à comprendre vos contrastes et à construire une manière
            d’avancer qui respecte pleinement votre nature.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
