import {
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

export default function PdfWelcome() {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Introduction
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Bienvenue dans votre thème astral
        </Text>

        <View style={pdfStyles.decorativeDivider}>
          <View style={pdfStyles.dividerLine} />

          <Text style={pdfStyles.dividerSymbol}>
            ✦
          </Text>

          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Une première lecture de votre ciel de naissance,
          conçue pour vous aider à mieux comprendre les
          grandes forces qui façonnent votre personnalité.
        </Text>
      </View>

      <View style={pdfStyles.contentCard}>
        <Text style={pdfStyles.paragraph}>
          Chaque naissance correspond à un instant unique. Au
          moment exact de votre arrivée au monde, les planètes
          occupaient une position précise dans le ciel. Cette
          configuration forme votre thème astral : une carte
          symbolique de votre personnalité, de vos élans
          naturels et de vos grandes tendances intérieures.
        </Text>

        <Text style={pdfStyles.paragraph}>
          Ce rapport Essentiel vous offre une première lecture
          claire et accessible de votre carte du ciel. Il met
          en lumière vos trois grands piliers astrologiques —
          le Soleil, la Lune et l’Ascendant — ainsi que les
          principales planètes qui influencent votre manière
          de penser, d’aimer, d’agir et d’évoluer.
        </Text>

        <Text style={pdfStyles.paragraph}>
          L’astrologie ne fige pas votre destin et ne remplace
          pas votre libre arbitre. Elle agit plutôt comme un
          miroir symbolique : elle vous aide à mieux
          comprendre vos forces, vos sensibilités, vos
          contradictions et les chemins qui vous permettent
          de grandir avec davantage de conscience.
        </Text>

        <Text style={pdfStyles.paragraph}>
          Certaines pages vous sembleront immédiatement
          familières. D’autres prendront peut-être davantage
          de sens avec le temps. Laissez votre lecture se
          faire naturellement, sans chercher à tout analyser
          d’un seul coup.
        </Text>

        <Text style={pdfStyles.paragraphLast}>
          Votre thème natal n’est pas une limite. C’est une
          invitation à mieux vous connaître, à reconnaître
          votre lumière et à avancer avec plus de clarté sur
          votre propre chemin.
        </Text>
      </View>

      <View style={pdfStyles.highlightQuote}>
        <Text style={pdfStyles.quoteMark}>
          “
        </Text>

        <View style={pdfStyles.quoteContent}>
          <Text style={pdfStyles.highlightQuoteText}>
            Votre carte du ciel ne décide pas à votre place.
            Elle révèle les forces avec lesquelles vous pouvez
            créer votre vie.
          </Text>

          <Text style={pdfStyles.quoteSignature}>
            Luna Astralis
          </Text>
        </View>
      </View>

      <View style={pdfStyles.nextSectionCard}>
  <Text style={pdfStyles.nextSectionTitle}>
    Ce que vous découvrirez dans ce rapport
  </Text>

  <Text style={pdfStyles.nextSectionItem}>
    ✦ Vos trois grands piliers : le Soleil, la Lune et l’Ascendant.
  </Text>

  <Text style={pdfStyles.nextSectionItem}>
    ✦ Le rôle des dix planètes et leur influence sur votre personnalité.
  </Text>

  <Text style={pdfStyles.nextSectionItem}>
    ✦ La répartition de vos éléments : Feu, Terre, Air et Eau.
  </Text>

  <Text style={pdfStyles.nextSectionItem}>
    ✦ Vos modalités dominantes et leur manière de façonner votre tempérament.
  </Text>

  <Text style={pdfStyles.nextSectionItem}>
    ✦ Une synthèse de votre profil astrologique pour mieux comprendre vos forces naturelles.
  </Text>
</View>

      <PdfPageFooter />
    </Page>
  );
}
