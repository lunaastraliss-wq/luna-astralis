import {
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./PremiumPdfStyles";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

export default function PdfWelcome() {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Introduction Premium
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Bienvenue au cœur de votre thème natal
        </Text>

        <View style={pdfStyles.decorativeDivider}>
          <View style={pdfStyles.dividerLine} />

          <Text style={pdfStyles.dividerSymbol}>
            ✦
          </Text>

          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Une lecture approfondie de votre ciel de naissance,
          conçue pour révéler les grandes dynamiques de votre
          personnalité, de vos relations et de votre évolution.
        </Text>
      </View>

      <View style={pdfStyles.contentCard}>
        <Text style={pdfStyles.paragraph}>
          Chaque naissance correspond à un instant unique. Au
          moment précis de votre arrivée au monde, les planètes,
          les angles et les maisons occupaient une configuration
          particulière dans le ciel. Cette empreinte forme votre
          thème natal : une représentation symbolique de vos
          besoins, de vos forces, de vos réactions et de votre
          potentiel.
        </Text>

        <Text style={pdfStyles.paragraph}>
          Votre rapport Premium va plus loin qu’une simple lecture
          des signes astrologiques. Il met en relation votre Soleil,
          votre Lune, votre Ascendant, les dix principales planètes,
          les maisons astrologiques et les aspects qui relient ces
          différentes énergies entre elles.
        </Text>

        <Text style={pdfStyles.paragraph}>
          Chaque élément de votre thème possède sa propre fonction.
          Le signe décrit la manière dont une énergie s’exprime. La
          planète représente la force qui agit. La maison indique le
          domaine de vie dans lequel cette énergie se manifeste. Les
          aspects révèlent enfin les alliances, les tensions et les
          dialogues qui donnent à votre personnalité toute sa
          complexité.
        </Text>

        <Text style={pdfStyles.paragraph}>
          L’astrologie ne présente pas un destin immuable. Elle ne
          décide pas de vos choix et ne remplace jamais votre libre
          arbitre. Elle agit plutôt comme un langage symbolique qui
          permet de reconnaître vos mécanismes naturels, vos
          contradictions, vos besoins profonds et les chemins qui
          favorisent votre évolution.
        </Text>

        <Text style={pdfStyles.paragraph}>
          Certaines interprétations pourront vous sembler
          immédiatement familières. D’autres demanderont peut-être
          plus de recul. Un thème natal contient plusieurs couches :
          certaines sont visibles très tôt, tandis que d’autres se
          révèlent progressivement au fil de l’expérience.
        </Text>

        <Text style={pdfStyles.paragraphLast}>
          Prenez le temps d’avancer dans ce rapport sans chercher à
          tout retenir en une seule lecture. Revenez aux pages qui
          vous interpellent le plus. Votre thème natal n’est pas une
          définition figée de votre personnalité : il est une carte
          vivante de vos possibilités.
        </Text>
      </View>

      <View style={pdfStyles.highlightQuote}>
        <Text style={pdfStyles.quoteMark}>
          “
        </Text>

        <View style={pdfStyles.quoteContent}>
          <Text style={pdfStyles.highlightQuoteText}>
            Votre carte du ciel ne vous enferme pas dans une
            identité. Elle vous aide à comprendre les forces avec
            lesquelles vous pouvez construire votre propre chemin.
          </Text>

          <Text style={pdfStyles.quoteSignature}>
            Luna Astralis
          </Text>
        </View>
      </View>

      <View style={pdfStyles.nextSectionCard}>
        <Text style={pdfStyles.nextSectionTitle}>
          Ce que vous découvrirez dans votre rapport Premium
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ Vos trois grands piliers : le Soleil, la Lune et
          l’Ascendant.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ L’influence détaillée des dix principales planètes
          dans votre personnalité.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ La signification des douze maisons et des domaines de
          vie qu’elles représentent.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ Les aspects majeurs qui révèlent les harmonies, les
          tensions et les dynamiques de votre thème.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ La répartition de vos éléments : Feu, Terre, Air et
          Eau.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ Vos modalités dominantes et leur influence sur votre
          manière d’agir, de persévérer et de vous adapter.
        </Text>

        <Text style={pdfStyles.nextSectionItem}>
          ✦ Vos forces naturelles, vos défis, vos relations, votre
          potentiel professionnel et vos axes d’évolution.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
