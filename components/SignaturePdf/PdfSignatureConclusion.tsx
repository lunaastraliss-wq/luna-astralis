import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./SignaturePdfAssets";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },

  signatureBadge: {
    alignSelf: "center",
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 14,
    marginBottom: 8,
    backgroundColor: "#0b1124",
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  signatureBadgeText: {
    color: "#f4c95d",
    fontSize: 6.5,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    textAlign: "center",
  },

  conclusionCard: {
    position: "relative",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 14,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
    overflow: "hidden",
  },

  conclusionAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 105,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  conclusionAccentBottom: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 76,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  watermark: {
    position: "absolute",
    top: 12,
    right: 17,
    width: 70,
    height: 70,
    objectFit: "contain",
    opacity: 0.045,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 9.8,
    lineHeight: 1.55,
    marginBottom: 10,
    textAlign: "justify",
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 9.8,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  signatureSynthesis: {
    position: "relative",
    flexDirection: "row",
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,
    marginBottom: 14,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  signatureSynthesisAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 68,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  signatureSynthesisIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  signatureSynthesisIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  signatureSynthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  signatureSynthesisKicker: {
    color: "#f4c95d",
    fontSize: 7.6,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  signatureSynthesisTitle: {
    color: "#fff8e7",
    fontSize: 12.5,
    lineHeight: 1.3,
    marginBottom: 7,
  },

  signatureSynthesisText: {
    color: "#bfc5d5",
    fontSize: 8.4,
    lineHeight: 1.42,
  },

  signatureBox: {
    position: "relative",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  signatureAccentLeft: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 86,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  signatureAccentRight: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 64,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  signatureIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
    marginBottom: 8,
  },

  brand: {
    color: "#f4c95d",
    fontSize: 16,
    marginBottom: 8,
  },

  slogan: {
    color: "#fff8e7",
    fontSize: 14,
    lineHeight: 1.5,
    textAlign: "center",
  },

  bottomGroup: {
    marginTop: "auto",
    paddingTop: 18,
    paddingBottom: 28,
    alignItems: "center",
  },

  closingText: {
    color: "#bfc5d5",
    fontSize: 9,
    lineHeight: 1.48,
    textAlign: "center",
    marginHorizontal: 35,
    marginBottom: 16,
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

export default function PdfSignatureConclusion() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfSignatureBrandHeader />

      <View style={styles.content}>
        <View
          style={styles.signatureBadge}
        >
          <Text
            style={
              styles.signatureBadgeText
            }
          >
            Conclusion Signature
          </Text>
        </View>

        <View
          style={pdfStyles.centeredHeader}
        >
          <Text
            style={pdfStyles.pageKicker}
          >
            Votre synthèse finale
          </Text>

          <Text
            style={
              pdfStyles.largePageTitle
            }
          >
            Votre ciel intérieur
          </Text>

          <View
            style={
              pdfStyles.decorativeDivider
            }
          >
            <View
              style={
                pdfStyles.dividerLine
              }
            />

            <Image
              src={PLANET_ICONS.Sun}
              style={styles.dividerIcon}
            />

            <View
              style={
                pdfStyles.dividerLine
              }
            />
          </View>

          <Text
            style={pdfStyles.pageLead}
          >
            Votre thème natal rassemble plusieurs dimensions
            complémentaires. Ensemble, elles racontent une histoire
            unique : la vôtre.
          </Text>
        </View>

        <View
          style={styles.conclusionCard}
          wrap={false}
        >
          <View
            style={
              styles.conclusionAccentTop
            }
          />

          <View
            style={
              styles.conclusionAccentBottom
            }
          />

          <Image
            src={PLANET_ICONS.Sun}
            style={styles.watermark}
          />

          <Text
            style={styles.paragraph}
          >
            Ce rapport Signature vous a permis d’explorer les
            fondations essentielles de votre thème natal : votre
            Soleil, votre Lune, votre Ascendant, vos planètes, vos
            maisons, vos aspects, vos dominantes, votre vie
            relationnelle ainsi que votre orientation professionnelle.
          </Text>

          <Text
            style={styles.paragraph}
          >
            Chaque position révèle une facette particulière de votre
            personnalité. Certaines énergies s’expriment avec
            fluidité, tandis que d’autres demandent davantage de
            conscience, d’expérience ou de maturité. Ces contrastes
            ne sont pas des contradictions à éliminer : ils font
            partie de la richesse de votre monde intérieur.
          </Text>

          <Text
            style={styles.paragraph}
          >
            Votre carte du ciel ne constitue pas un destin rigide.
            Elle met en lumière vos tendances naturelles, vos besoins,
            vos forces, vos sensibilités et les défis qui peuvent
            accompagner votre évolution. Vous conservez toujours la
            liberté de choisir la manière dont vous exprimez ces
            énergies.
          </Text>

          <Text
            style={styles.paragraphLast}
          >
            Plus vous apprenez à reconnaître les différentes parties
            de votre thème, plus vous pouvez les faire dialoguer avec
            équilibre. L’astrologie devient alors un outil de
            compréhension personnelle, non pour vous enfermer dans
            une définition, mais pour vous aider à avancer avec
            davantage de lucidité, de confiance et d’authenticité.
          </Text>
        </View>

        <View
          style={
            styles.signatureSynthesis
          }
          wrap={false}
        >
          <View
            style={
              styles.signatureSynthesisAccent
            }
          />

          <View
            style={
              styles.signatureSynthesisIconCircle
            }
          >
            <Image
              src={ASCENDANT_ICON}
              style={
                styles.signatureSynthesisIcon
              }
            />
          </View>

          <View
            style={
              styles.signatureSynthesisContent
            }
          >
            <Text
              style={
                styles.signatureSynthesisKicker
              }
            >
              La clé de votre évolution
            </Text>

            <Text
              style={
                styles.signatureSynthesisTitle
              }
            >
              Transformer la connaissance de soi en choix conscients
            </Text>

            <Text
              style={
                styles.signatureSynthesisText
              }
            >
              Votre thème natal prend toute sa valeur lorsque ses
              enseignements deviennent concrets. Observer vos réactions,
              respecter vos besoins, reconnaître vos forces et ajuster
              vos choix vous permet d’utiliser vos énergies avec plus de
              justesse dans votre vie personnelle, relationnelle et
              professionnelle.
            </Text>
          </View>
        </View>

        <View
          style={styles.signatureBox}
          wrap={false}
        >
          <View
            style={
              styles.signatureAccentLeft
            }
          />

          <View
            style={
              styles.signatureAccentRight
            }
          />

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
            C’est une force à comprendre et à révéler.
          </Text>
        </View>

        <View
          style={styles.bottomGroup}
          wrap={false}
        >
          <Text
            style={styles.closingText}
          >
            Merci d’avoir choisi Luna Astralis pour vous accompagner
            dans cette exploration approfondie, personnelle et
            consciente de votre univers intérieur.
          </Text>

          <View
            style={styles.iconsRow}
          >
            <View
              style={styles.iconWrapper}
            >
              <Image
                src={PLANET_ICONS.Sun}
                style={styles.bottomIcon}
              />
            </View>

            <View
              style={styles.smallDivider}
            />

            <View
              style={styles.iconWrapper}
            >
              <Image
                src={PLANET_ICONS.Moon}
                style={styles.bottomIcon}
              />
            </View>

            <View
              style={styles.smallDivider}
            />

            <View
              style={styles.iconWrapper}
            >
              <Image
                src={ASCENDANT_ICON}
                style={styles.bottomIcon}
              />
            </View>
          </View>
        </View>
      </View>

      <PdfSignaturePageFooter />
    </Page>
  );
}
