import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  LOGO_URL,
  PLANET_ICONS,
} from "@/components/PremiumPdf/PremiumPdfAssets";

import type {
  CompatibilityWelcomeProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

const NAVY = "#06101f";
const NAVY_CARD = "#0a1729";
const NAVY_CARD_LIGHT = "#0d1b30";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#c99a3d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const CREAM = "#fff8e7";
const MUTED_CREAM = "#ddd5c6";
const SOFT_TEXT = "#b9ae98";

const localStyles = StyleSheet.create({
  page: {
    position: "relative",

    paddingTop: 42,
    paddingBottom: 48,
    paddingHorizontal: 44,

    backgroundColor: NAVY,
    color: CREAM,

    fontFamily: "Helvetica",

    overflow: "hidden",
  },

  topAccent: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    height: 5,

    backgroundColor: GOLD,
  },

  outerBorder: {
    position: "absolute",

    top: 18,
    left: 18,
    right: 18,
    bottom: 18,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,
  },

  innerBorder: {
    position: "absolute",

    top: 23,
    left: 23,
    right: 23,
    bottom: 23,

    borderWidth: 0.35,
    borderColor: DARK_GOLD,
  },

  decorativeCircleTop: {
    position: "absolute",

    top: 62,
    right: -55,

    width: 150,
    height: 150,

    borderRadius: 75,

    borderWidth: 0.55,
    borderColor: SOFT_GOLD,

    opacity: 0.2,
  },

  decorativeCircleBottom: {
    position: "absolute",

    bottom: 72,
    left: -50,

    width: 140,
    height: 140,

    borderRadius: 70,

    borderWidth: 0.55,
    borderColor: SOFT_GOLD,

    opacity: 0.18,
  },

  content: {
    position: "relative",

    height: "100%",
  },

  header: {
    alignItems: "center",

    marginBottom: 20,
  },

  logo: {
    width: 110,
    height: 40,

    objectFit: "contain",

    marginBottom: 7,
  },

  sectionLabel: {
    fontSize: 6.4,
    letterSpacing: 2.2,

    color: "#ccb986",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  title: {
    fontSize: 25,
    lineHeight: 1.15,

    color: CREAM,

    textAlign: "center",

    marginBottom: 8,
  },

  subtitle: {
    width: "83%",

    fontSize: 8.4,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  titleDivider: {
    width: 74,
    height: 1,

    backgroundColor: GOLD,

    marginTop: 12,
  },

  namesCard: {
    position: "relative",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 18,

    marginBottom: 17,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.75,
    borderColor: SOFT_GOLD,
  },

  namesCardAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 76,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  namesCardAccentRight: {
    position: "absolute",

    right: 0,
    bottom: -1,

    width: 76,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  personBlock: {
    width: "40%",

    alignItems: "center",
  },

  personLabel: {
    fontSize: 5.8,
    letterSpacing: 1.35,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 5,
  },

  personName: {
    fontSize: 15,

    color: CREAM,

    textAlign: "center",
  },

  centralConnection: {
    width: "14%",

    alignItems: "center",
  },

  centralCircle: {
    width: 35,
    height: 35,

    borderRadius: 17.5,

    borderWidth: 0.8,
    borderColor: GOLD,

    backgroundColor: NAVY_CARD_LIGHT,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 4,
  },

  centralSymbol: {
    fontSize: 14,

    color: BRIGHT_GOLD,
  },

  centralText: {
    fontSize: 5.4,
    letterSpacing: 0.8,

    color: SOFT_TEXT,

    textTransform: "uppercase",
    textAlign: "center",
  },

  introductionCard: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingHorizontal: 19,

    marginBottom: 17,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  introductionTitle: {
    fontSize: 13,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 10,
  },

  introductionText: {
    fontSize: 8,
    lineHeight: 1.55,

    color: MUTED_CREAM,

    textAlign: "justify",

    marginBottom: 9,
  },

  introductionTextLast: {
    fontSize: 8,
    lineHeight: 1.55,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  pillarsSection: {
    marginBottom: 17,
  },

  pillarsTitle: {
    fontSize: 6.4,
    letterSpacing: 1.8,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 10,
  },

  pillarsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pillarCard: {
    width: "31.8%",

    minHeight: 121,

    paddingTop: 12,
    paddingBottom: 11,
    paddingHorizontal: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,

    alignItems: "center",
  },

  pillarIconFrame: {
    width: 34,
    height: 34,

    borderRadius: 17,

    borderWidth: 0.65,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 7,
  },

  pillarIconImage: {
    width: 21,
    height: 21,

    objectFit: "contain",
  },

  pillarSymbol: {
    fontSize: 14,

    color: BRIGHT_GOLD,
  },

  pillarTitle: {
    fontSize: 9,

    color: CREAM,

    textAlign: "center",

    marginBottom: 5,
  },

  pillarText: {
    fontSize: 6.5,
    lineHeight: 1.4,

    color: SOFT_TEXT,

    textAlign: "center",
  },

  readingGuide: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,

    marginBottom: 15,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  readingGuideTitle: {
    fontSize: 10.5,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  readingGuideText: {
    fontSize: 7.4,
    lineHeight: 1.5,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  noteCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 14,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  noteSymbolFrame: {
    width: 31,
    height: 31,

    borderRadius: 15.5,

    borderWidth: 0.65,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  noteSymbol: {
    fontSize: 13,

    color: BRIGHT_GOLD,
  },

  noteContent: {
    flex: 1,
  },

  noteTitle: {
    fontSize: 7.7,

    color: CREAM,

    marginBottom: 3,
  },

  noteText: {
    fontSize: 6.6,
    lineHeight: 1.4,

    color: SOFT_TEXT,
  },

  footer: {
    position: "absolute",

    left: 44,
    right: 44,
    bottom: 29,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerText: {
    fontSize: 5.7,
    letterSpacing: 0.8,

    color: "#8e836e",
  },

  footerPage: {
    fontSize: 6,

    color: "#b5a886",
  },
});

function getPersonName(
  person: SafeCompatibilityPerson,
  fallback: string,
): string {
  const safeName =
    typeof person.firstName === "string"
      ? person.firstName.trim()
      : "";

  return safeName || fallback;
}

function PersonNameBlock({
  person,
  label,
  fallbackName,
}: {
  person: SafeCompatibilityPerson;
  label: string;
  fallbackName: string;
}) {
  return (
    <View style={localStyles.personBlock}>
      <Text style={localStyles.personLabel}>
        {label}
      </Text>

      <Text style={localStyles.personName}>
        {getPersonName(
          person,
          fallbackName,
        )}
      </Text>
    </View>
  );
}

function PillarCard({
  icon,
  symbol,
  title,
  text,
}: {
  icon?: string;
  symbol?: string;
  title: string;
  text: string;
}) {
  return (
    <View
      style={localStyles.pillarCard}
      wrap={false}
    >
      <View
        style={localStyles.pillarIconFrame}
      >
        {icon ? (
          <Image
            src={icon}
            style={localStyles.pillarIconImage}
          />
        ) : (
          <Text
            style={localStyles.pillarSymbol}
          >
            {symbol}
          </Text>
        )}
      </View>

      <Text style={localStyles.pillarTitle}>
        {title}
      </Text>

      <Text style={localStyles.pillarText}>
        {text}
      </Text>
    </View>
  );
}

export default function CompatibilityWelcome({
  person1,
  person2,
}: CompatibilityWelcomeProps) {
  return (
    <Page
      size="A4"
      style={localStyles.page}
    >
      <View
        style={localStyles.topAccent}
        fixed
      />

      <View
        style={localStyles.outerBorder}
        fixed
      />

      <View
        style={localStyles.innerBorder}
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleTop
        }
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleBottom
        }
        fixed
      />

      <View style={localStyles.content}>
        <View
          style={localStyles.header}
          wrap={false}
        >
          <Image
            src={LOGO_URL}
            style={localStyles.logo}
          />

          <Text
            style={localStyles.sectionLabel}
          >
            Introduction
          </Text>

          <Text style={localStyles.title}>
            Bienvenue dans votre synastrie
          </Text>

          <Text style={localStyles.subtitle}>
            Ce rapport explore la manière dont
            vos personnalités, vos émotions et
            vos besoins relationnels se
            rencontrent.
          </Text>

          <View
            style={localStyles.titleDivider}
          />
        </View>

        <View
          style={localStyles.namesCard}
          wrap={false}
        >
          <View
            style={
              localStyles.namesCardAccentLeft
            }
          />

          <View
            style={
              localStyles.namesCardAccentRight
            }
          />

          <PersonNameBlock
            person={person1}
            label="Premier thème"
            fallbackName="Première personne"
          />

          <View
            style={
              localStyles.centralConnection
            }
          >
            <View
              style={localStyles.centralCircle}
            >
              <Text
                style={
                  localStyles.centralSymbol
                }
              >
                ✦
              </Text>
            </View>

            <Text
              style={localStyles.centralText}
            >
              Synastrie
            </Text>
          </View>

          <PersonNameBlock
            person={person2}
            label="Deuxième thème"
            fallbackName="Deuxième personne"
          />
        </View>

        <View
          style={localStyles.introductionCard}
          wrap={false}
        >
          <Text
            style={
              localStyles.introductionTitle
            }
          >
            Quand deux cartes du ciel se rencontrent
          </Text>

          <Text
            style={
              localStyles.introductionText
            }
          >
            La synastrie est l’étude astrologique
            de la relation entre deux thèmes
            natals. Elle compare la position des
            planètes de chaque personne afin de
            mettre en lumière les affinités, les
            attirances, les complémentarités et
            les zones de tension qui peuvent
            influencer la relation.
          </Text>

          <Text
            style={
              localStyles.introductionText
            }
          >
            Chaque interaction astrologique
            raconte une partie différente de
            votre dynamique. Certaines
            connexions facilitent naturellement
            la compréhension et la proximité,
            tandis que d’autres demandent
            davantage d’écoute, de patience ou
            d’adaptation.
          </Text>

          <Text
            style={
              localStyles.introductionTextLast
            }
          >
            Ce rapport ne cherche pas à décider
            si une relation est bonne ou
            mauvaise. Il révèle plutôt son
            fonctionnement profond, son
            potentiel d’évolution et les clés
            qui peuvent aider les deux personnes
            à mieux se comprendre.
          </Text>
        </View>

        <View
          style={localStyles.pillarsSection}
          wrap={false}
        >
          <Text
            style={localStyles.pillarsTitle}
          >
            Les trois niveaux de lecture
          </Text>

          <View
            style={localStyles.pillarsGrid}
          >
            <PillarCard
              icon={PLANET_ICONS.Sun}
              title="L’identité"
              text="Le Soleil révèle la personnalité, la vitalité et la manière dont chacun affirme son individualité."
            />

            <PillarCard
              icon={PLANET_ICONS.Moon}
              title="Les émotions"
              text="La Lune décrit les besoins affectifs, les réactions instinctives et la sécurité émotionnelle."
            />

            <PillarCard
              symbol="ASC"
              title="La rencontre"
              text="L’Ascendant montre la manière de se présenter, de réagir et d’entrer naturellement en relation."
            />
          </View>
        </View>

        <View
          style={localStyles.readingGuide}
          wrap={false}
        >
          <Text
            style={
              localStyles.readingGuideTitle
            }
          >
            Comment lire ce rapport
          </Text>

          <Text
            style={
              localStyles.readingGuideText
            }
          >
            Les sections suivantes abordent
            votre compatibilité globale, votre
            communication, votre lien
            émotionnel, votre attirance, vos
            forces et vos défis. Chaque élément
            doit être lu comme une pièce d’un
            ensemble : une relation ne se résume
            jamais à un seul signe ou à un seul
            aspect astrologique.
          </Text>
        </View>

        <View
          style={localStyles.noteCard}
          wrap={false}
        >
          <View
            style={
              localStyles.noteSymbolFrame
            }
          >
            <Text
              style={localStyles.noteSymbol}
            >
              ☾
            </Text>
          </View>

          <View style={localStyles.noteContent}>
            <Text
              style={localStyles.noteTitle}
            >
              Une lecture symbolique et personnalisée
            </Text>

            <Text
              style={localStyles.noteText}
            >
              L’astrologie propose un langage
              symbolique destiné à favoriser la
              réflexion et la connaissance de
              soi. Ce rapport accompagne votre
              compréhension de la relation sans
              remplacer votre libre arbitre ni
              votre expérience personnelle.
            </Text>
          </View>
        </View>
      </View>

      <View
        style={localStyles.footer}
        fixed
      >
        <Text
          style={localStyles.footerText}
        >
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text
          style={localStyles.footerPage}
        >
          3
        </Text>
      </View>
    </Page>
  );
}
