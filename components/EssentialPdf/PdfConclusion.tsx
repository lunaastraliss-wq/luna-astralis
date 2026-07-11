import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";
import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },

  conclusionCard: {
    position: "relative",
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 20,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  watermark: {
    position: "absolute",
    top: 12,
    right: 17,
    width: 48,
    height: 48,
    objectFit: "contain",
    opacity: 0.08,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.58,
    marginBottom: 12,
    textAlign: "justify",
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.58,
    textAlign: "justify",
  },

  signatureBox: {
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  signatureIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
    marginBottom: 9,
  },

  brand: {
    color: "#f4c95d",
    fontSize: 16,
    marginBottom: 10,
  },

  slogan: {
    color: "#fff8e7",
    fontSize: 14.5,
    lineHeight: 1.5,
    textAlign: "center",
  },

  /*
   * Ce groupe est poussé vers le bas de la page.
   */
  bottomGroup: {
    marginTop: "auto",
    paddingTop: 22,
    paddingBottom: 34,
    alignItems: "center",
  },

  closingText: {
    color: "#bfc5d5",
    fontSize: 9.3,
    lineHeight: 1.5,
    textAlign: "center",
    marginHorizontal: 35,
    marginBottom: 18,
  },

  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 36,
    marginHorizontal: 8,
  },

  bottomIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },

  smallDivider: {
    width: 24,
    height: 1,
    marginHorizontal: 6,
    backgroundColor: "#8f793c",
    opacity: 0.7,
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 8,
  },
});

export default function PdfConclusion() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.content}>
        <View style={pdfStyles.centeredHeader}>
          <Text style={pdfStyles.pageKicker}>
            Conclusion
          </Text>

          <Text style={pdfStyles.largePageTitle}>
            Votre ciel intérieur
          </Text>

          <View style={pdfStyles.decorativeDivider}>
            <View style={pdfStyles.dividerLine} />

            <Image
              src={PLANET_ICONS.Sun}
              style={styles.dividerIcon}
            />

            <View style={pdfStyles.dividerLine} />
          </View>

          <Text style={pdfStyles.pageLead}>
            Chaque thème astral raconte une histoire unique.
            Le vôtre ne fait que commencer à se dévoiler.
          </Text>
        </View>

        <View
          style={styles.conclusionCard}
          wrap={false}
        >
          <Image
            src={PLANET_ICONS.Sun}
            style={styles.watermark}
          />

          <Text style={styles.paragraph}>
            Ce rapport Essentiel vous a permis de découvrir les
            fondations de votre thème natal : vos trois grands piliers
            astrologiques, le rôle de vos principales planètes,
            l’équilibre de vos éléments et la dynamique dominante
            de votre personnalité.
          </Text>

          <Text style={styles.paragraph}>
            Votre carte du ciel n’est pas un destin gravé dans le
            marbre. Elle met plutôt en lumière vos forces, vos
            sensibilités, vos défis et les potentiels qui vous
            accompagnent tout au long de votre parcours.
          </Text>

          <Text style={styles.paragraphLast}>
            Elle peut devenir un outil de compréhension personnelle,
            une invitation à mieux reconnaître ce qui vous anime
            profondément et à avancer avec davantage de conscience
            et de confiance.
          </Text>
        </View>

        <View
          style={styles.signatureBox}
          wrap={false}
        >
          <Image
            src={ASCENDANT_ICON}
            style={styles.signatureIcon}
          />

          <Text style={styles.brand}>
            Luna Astralis
          </Text>

          <Text style={styles.slogan}>
            Votre signe n’est pas une limite.
            {"\n"}
            C’est une force à découvrir.
          </Text>
        </View>

        <View
          style={styles.bottomGroup}
          wrap={false}
        >
          <Text style={styles.closingText}>
            Merci d’avoir choisi Luna Astralis pour découvrir
            les premières clés de votre univers intérieur.
          </Text>

          <View style={styles.iconsRow}>
            <View style={styles.iconWrapper}>
              <Image
                src={PLANET_ICONS.Sun}
                style={styles.bottomIcon}
              />
            </View>

            <View style={styles.smallDivider} />

            <View style={styles.iconWrapper}>
              <Image
                src={PLANET_ICONS.Moon}
                style={styles.bottomIcon}
              />
            </View>

            <View style={styles.smallDivider} />

            <View style={styles.iconWrapper}>
              <Image
                src={ASCENDANT_ICON}
                style={styles.bottomIcon}
              />
            </View>
          </View>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
