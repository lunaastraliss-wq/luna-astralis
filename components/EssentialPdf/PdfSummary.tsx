import {
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { ASCENDANT_ICON, PLANET_ICONS } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";
import type { SummaryProps } from "./EssentialPdfTypes";
import {
  getAscendantSign,
  getPlanet,
  getPlanetSignName,
  signFr,
  translateSigns,
} from "./EssentialPdfUtils";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

export default function PdfSummary({
  planets,
  angles,
}: SummaryProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const sun = getPlanet(safePlanets, "Sun");
  const moon = getPlanet(safePlanets, "Moon");

  const sunSign = getPlanetSignName(sun);
  const moonSign = getPlanetSignName(moon);
  const ascendantSign = getAscendantSign(angles);

  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Portrait astrologique
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Vos trois grands piliers
        </Text>

        <View style={pdfStyles.decorativeDivider}>
          <View style={pdfStyles.dividerLine} />
          <Text style={pdfStyles.dividerSymbol}>✦</Text>
          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Trois énergies fondamentales qui dessinent ensemble
          les grandes lignes de votre personnalité.
        </Text>
      </View>

      <View style={pdfStyles.summaryGrid}>
        <View style={pdfStyles.summaryCard}>
          <View style={pdfStyles.summaryIconCircle}>
            <Image
              src={PLANET_ICONS.Sun}
              style={pdfStyles.summaryIcon}
            />
          </View>

          <Text style={pdfStyles.summaryLabel}>
            Votre Soleil
          </Text>

          <Text style={pdfStyles.summaryValue}>
            {signFr(sunSign)}
          </Text>

          <View style={pdfStyles.summaryDivider} />

          <Text style={pdfStyles.summaryMeaning}>
            Votre identité profonde
          </Text>

          <Text style={pdfStyles.summaryDescription}>
            Ce qui vous anime, vous guide et cherche
            naturellement à s’accomplir en vous.
          </Text>
        </View>

        <View style={pdfStyles.summaryCard}>
          <View style={pdfStyles.summaryIconCircle}>
            <Image
              src={PLANET_ICONS.Moon}
              style={pdfStyles.summaryIcon}
            />
          </View>

          <Text style={pdfStyles.summaryLabel}>
            Votre Lune
          </Text>

          <Text style={pdfStyles.summaryValue}>
            {signFr(moonSign)}
          </Text>

          <View style={pdfStyles.summaryDivider} />

          <Text style={pdfStyles.summaryMeaning}>
            Votre monde émotionnel
          </Text>

          <Text style={pdfStyles.summaryDescription}>
            Vos besoins affectifs, votre sensibilité et
            votre manière de retrouver un sentiment de sécurité.
          </Text>
        </View>

        <View style={pdfStyles.summaryCard}>
          <View style={pdfStyles.summaryIconCircle}>
            <Image
              src={ASCENDANT_ICON}
              style={pdfStyles.summaryIcon}
            />
          </View>

          <Text style={pdfStyles.summaryLabel}>
            Votre Ascendant
          </Text>

          <Text style={pdfStyles.summaryValue}>
            {translateSigns(ascendantSign)}
          </Text>

          <View style={pdfStyles.summaryDivider} />

          <Text style={pdfStyles.summaryMeaning}>
            Votre présence spontanée
          </Text>

          <Text style={pdfStyles.summaryDescription}>
            Votre première impulsion face à la vie et
            l’énergie que les autres perçoivent d’abord chez vous.
          </Text>
        </View>
      </View>

      <View style={pdfStyles.summarySynthesis}>
        <View style={pdfStyles.synthesisBadge}>
          <Text style={pdfStyles.synthesisBadgeText}>✦</Text>
        </View>

        <View style={pdfStyles.synthesisContent}>
          <Text style={pdfStyles.synthesisKicker}>
            La rencontre de vos trois énergies
          </Text>

          <Text style={pdfStyles.synthesisTitle}>
            Une personnalité riche de plusieurs dimensions
          </Text>

          <Text style={pdfStyles.synthesisText}>
            Le Soleil représente la personne que vous cherchez
            pleinement à devenir. La Lune révèle ce dont vous avez
            besoin pour vous sentir intérieurement en sécurité.
            L’Ascendant décrit votre manière instinctive d’aborder
            le monde et de commencer chaque nouvelle expérience.
          </Text>

          <Text style={pdfStyles.synthesisTextLast}>
            Ces trois dimensions peuvent parfois sembler parfaitement
            harmonieuses et, à d’autres moments, exprimer des besoins
            différents. Cette diversité fait partie de la profondeur
            de votre thème natal.
          </Text>
        </View>
      </View>

      <View style={pdfStyles.summaryNote}>
        <Text style={pdfStyles.summaryNoteSymbol}>☾</Text>

        <Text style={pdfStyles.summaryNoteText}>
          Les prochaines pages approfondissent chacune de vos planètes
          afin de révéler les nuances uniques de votre carte du ciel.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
