import {
  Image,
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

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./SignaturePdfAssets";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureConclusionProps = {
  firstName?: string;
  planets?: SignaturePlanet[];
  angles?: SignatureAngles;
};

type PlanetData = {
  name: string;
  sign: string;
  house?: number;
  degree?: number;
};

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

/*
|--------------------------------------------------------------------------
| Données astrologiques
|--------------------------------------------------------------------------
*/

const SIGN_NAMES: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Cancer: "Cancer",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

const SIGN_ELEMENTS: Record<string, ElementName> = {
  Aries: "Feu",
  Leo: "Feu",
  Sagittarius: "Feu",

  Taurus: "Terre",
  Virgo: "Terre",
  Capricorn: "Terre",

  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",

  Cancer: "Eau",
  Scorpio: "Eau",
  Pisces: "Eau",
};

const SIGN_MODALITIES: Record<string, ModalityName> = {
  Aries: "Cardinal",
  Cancer: "Cardinal",
  Libra: "Cardinal",
  Capricorn: "Cardinal",

  Taurus: "Fixe",
  Leo: "Fixe",
  Scorpio: "Fixe",
  Aquarius: "Fixe",

  Gemini: "Mutable",
  Virgo: "Mutable",
  Sagittarius: "Mutable",
  Pisces: "Mutable",
};

const ELEMENT_FINAL_TEXTS: Record<ElementName, string> = {
  Feu:
    "Votre thème vous invite à diriger votre énergie avec intention. Votre force grandit lorsque l’élan, le courage et le désir d’avancer servent une direction qui vous ressemble réellement.",

  Terre:
    "Votre thème vous invite à construire avec patience sans faire de la sécurité une prison. Votre force grandit lorsque vos valeurs, vos efforts et vos choix s’inscrivent dans une progression concrète et durable.",

  Air:
    "Votre thème vous invite à transformer vos idées en compréhension vivante. Votre force grandit lorsque la réflexion, la communication et l’ouverture deviennent des moyens d’agir plus consciemment.",

  Eau:
    "Votre thème vous invite à faire de votre sensibilité une forme de connaissance. Votre force grandit lorsque votre intuition, votre profondeur et vos émotions sont accueillies sans vous enfermer ni vous submerger.",
};

const ELEMENT_SIGNATURES: Record<ElementName, string> = {
  Feu:
    "Votre lumière devient pleinement visible lorsque votre courage suit une direction consciente.",

  Terre:
    "Votre puissance se révèle dans ce que vous construisez avec patience, cohérence et vérité.",

  Air:
    "Votre intelligence devient une force lorsque vos idées créent du lien, du sens et du mouvement.",

  Eau:
    "Votre profondeur devient une force lorsque votre sensibilité éclaire vos choix sans les diriger seule.",
};

const MODALITY_SIGNATURES: Record<ModalityName, string> = {
  Cardinal:
    "Vous êtes appelé à initier, décider et ouvrir de nouvelles voies sans porter seul toute la responsabilité du mouvement.",

  Fixe:
    "Vous êtes appelé à approfondir, consolider et protéger ce qui possède une réelle valeur sans résister aux transformations nécessaires.",

  Mutable:
    "Vous êtes appelé à adapter, comprendre et évoluer sans vous disperser ni perdre votre direction essentielle.",
};

const SUN_CULTIVATION: Record<string, string> = {
  Aries:
    "Cultiver une action plus consciente : avancer avec courage tout en laissant une place à la réflexion et à l’écoute.",

  Taurus:
    "Cultiver une sécurité intérieure souple : protéger vos fondations sans refuser les changements devenus nécessaires.",

  Gemini:
    "Cultiver la profondeur : choisir quelques idées importantes et leur donner le temps de devenir une véritable connaissance.",

  Cancer:
    "Cultiver une sécurité émotionnelle autonome : prendre soin de vous sans porter toutes les émotions de votre entourage.",

  Leo:
    "Cultiver une confiance intérieure stable : créer et rayonner sans faire de l’approbation une condition.",

  Virgo:
    "Cultiver une exigence bienveillante : améliorer ce qui peut l’être sans réduire votre valeur à la perfection.",

  Libra:
    "Cultiver une position claire : créer l’harmonie sans vous éloigner de vos propres besoins.",

  Scorpio:
    "Cultiver une confiance progressive : utiliser votre profondeur pour transformer plutôt que pour contrôler.",

  Sagittarius:
    "Cultiver la continuité : donner une forme concrète et durable aux visions qui vous inspirent.",

  Capricorn:
    "Cultiver un accomplissement plus humain : construire avec ambition tout en respectant vos limites.",

  Aquarius:
    "Cultiver une liberté engagée : partager votre différence sans vous couper des liens qui peuvent la soutenir.",

  Pisces:
    "Cultiver des limites protectrices : préserver votre sensibilité afin qu’elle devienne une force claire et créatrice.",
};

const MOON_CULTIVATION: Record<string, string> = {
  Aries:
    "Accueillir vos réactions avant d’agir afin que votre énergie émotionnelle puisse devenir une réponse choisie.",

  Taurus:
    "Revenir au corps, au calme et aux repères simples lorsque l’inquiétude ou l’instabilité augmente.",

  Gemini:
    "Mettre des mots sur ce que vous ressentez sans transformer immédiatement chaque émotion en analyse.",

  Cancer:
    "Exprimer vos besoins avant qu’ils ne deviennent du retrait, de la fatigue ou du ressentiment.",

  Leo:
    "Créer un espace où vos émotions peuvent être reconnues sans dépendre entièrement de la réaction des autres.",

  Virgo:
    "Remplacer l’autocritique par une action simple, utile et suffisamment bonne.",

  Libra:
    "Reconnaître votre propre position avant de chercher à rétablir l’équilibre avec les autres.",

  Scorpio:
    "Distinguer ce qui appartient au présent de ce qui réactive une ancienne blessure ou une peur de perdre le contrôle.",

  Sagittarius:
    "Retrouver une perspective plus vaste sans utiliser la distance pour éviter une émotion importante.",

  Capricorn:
    "Vous autoriser à recevoir du soutien et à déposer certaines responsabilités émotionnelles.",

  Aquarius:
    "Préserver votre besoin d’espace sans vous éloigner complètement du lien ou de l’émotion.",

  Pisces:
    "Distinguer vos propres émotions de celles que vous absorbez dans votre environnement.",
};

const SATURN_CULTIVATION: Record<string, string> = {
  Aries:
    "Construire le courage par des actions régulières plutôt que par la nécessité de prouver immédiatement votre force.",

  Taurus:
    "Faire confiance à votre capacité de reconstruire afin que le changement ne soit plus vécu uniquement comme une menace.",

  Gemini:
    "Partager votre pensée avant qu’elle soit parfaite et laisser l’expérience renforcer votre confiance intellectuelle.",

  Cancer:
    "Reconnaître vos besoins émotionnels comme légitimes et accepter qu’une relation puisse aussi vous soutenir.",

  Leo:
    "Créer même lorsque la reconnaissance n’est pas garantie et laisser la pratique construire votre confiance.",

  Virgo:
    "Définir ce qui est suffisamment bon afin que la précision soutienne l’action plutôt qu’elle ne la bloque.",

  Libra:
    "Prendre position avec respect et comprendre qu’une relation solide peut traverser un désaccord.",

  Scorpio:
    "Ouvrir progressivement votre confiance sans abandonner votre discernement ni vos limites.",

  Sagittarius:
    "Donner une structure réelle à votre liberté afin que vos possibilités deviennent une expérience durable.",

  Capricorn:
    "Mesurer votre progression par la cohérence et non seulement par la quantité accomplie.",

  Aquarius:
    "Participer à une vision collective sans croire que l’appartenance exige la disparition de votre singularité.",

  Pisces:
    "Donner une forme simple et stable à votre intuition afin de protéger votre énergie et vos repères.",
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeSign(
  sign: unknown
): string {
  if (
    typeof sign !== "string" ||
    !sign.trim()
  ) {
    return "";
  }

  const trimmedSign =
    sign.trim();

  const entry =
    Object.entries(
      SIGN_NAMES
    ).find(
      ([english, french]) =>
        english.toLowerCase() ===
          trimmedSign.toLowerCase() ||
        french.toLowerCase() ===
          trimmedSign.toLowerCase()
    );

  return entry?.[0] ??
    trimmedSign;
}

function getPlanet(
  planets: SignaturePlanet[],
  name: string
): PlanetData | undefined {
  const planet =
    planets.find(
      (item) =>
        item &&
        typeof item.name ===
          "string" &&
        item.name
          .trim()
          .toLowerCase() ===
          name.toLowerCase()
    );

  if (!planet) {
    return undefined;
  }

  return {
    name: planet.name,
    sign:
      normalizeSign(
        planet.sign
      ),
    house:
      typeof planet.house ===
        "number" &&
      Number.isFinite(
        planet.house
      )
        ? planet.house
        : undefined,
    degree:
      typeof planet.degree ===
        "number" &&
      Number.isFinite(
        planet.degree
      )
        ? planet.degree
        : undefined,
  };
}

function longitudeToSign(
  longitude: unknown
): string {
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const value =
    typeof longitude ===
      "number" &&
    Number.isFinite(
      longitude
    )
      ? longitude
      : 0;

  const normalized =
    ((value % 360) +
      360) %
    360;

  return (
    signs[
      Math.floor(
        normalized / 30
      )
    ] ?? "Aries"
  );
}

function getDominantElement(
  planets: PlanetData[],
  ascendantSign: string
): ElementName {
  const counts:
    Record<ElementName, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  for (const planet of planets) {
    const element =
      SIGN_ELEMENTS[
        planet.sign
      ];

    if (element) {
      counts[element] += 1;
    }
  }

  const ascendantElement =
    SIGN_ELEMENTS[
      ascendantSign
    ];

  if (ascendantElement) {
    counts[
      ascendantElement
    ] += 1;
  }

  return (
    Object.entries(
      counts
    ).sort(
      (
        first,
        second
      ) =>
        second[1] -
        first[1]
    )[0]?.[0] as ElementName
  ) ?? "Eau";
}

function getDominantModality(
  planets: PlanetData[],
  ascendantSign: string
): ModalityName {
  const counts:
    Record<ModalityName, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  for (const planet of planets) {
    const modality =
      SIGN_MODALITIES[
        planet.sign
      ];

    if (modality) {
      counts[modality] += 1;
    }
  }

  const ascendantModality =
    SIGN_MODALITIES[
      ascendantSign
    ];

  if (ascendantModality) {
    counts[
      ascendantModality
    ] += 1;
  }

  return (
    Object.entries(
      counts
    ).sort(
      (
        first,
        second
      ) =>
        second[1] -
        first[1]
    )[0]?.[0] as ModalityName
  ) ?? "Fixe";
}

function getFrenchSign(
  sign: string
): string {
  return (
    SIGN_NAMES[
      normalizeSign(sign)
    ] ??
    sign
  );
}

function getPersonalFinalText(
  firstName: string,
  sun?: PlanetData,
  moon?: PlanetData,
  ascendantSign?: string,
  dominantElement?: ElementName
): string {
  const sunSign =
    sun?.sign
      ? getFrenchSign(
          sun.sign
        )
      : "";

  const moonSign =
    moon?.sign
      ? getFrenchSign(
          moon.sign
        )
      : "";

  const ascSign =
    ascendantSign
      ? getFrenchSign(
          ascendantSign
        )
      : "";

  const nameText =
    firstName
      ? `${firstName}, `
      : "";

  const identityText =
    sunSign &&
    moonSign &&
    ascSign
      ? `votre Soleil en ${sunSign}, votre Lune en ${moonSign} et votre Ascendant ${ascSign} révèlent une personnalité qui doit unir direction consciente, sécurité émotionnelle et manière spontanée d’avancer.`
      : "votre thème révèle une personnalité qui doit unir direction consciente, sécurité émotionnelle et manière spontanée d’avancer.";

  const elementText =
    dominantElement
      ? ELEMENT_FINAL_TEXTS[
          dominantElement
        ]
      : "Votre évolution devient plus libre lorsque vos décisions respectent à la fois vos forces, vos besoins et vos véritables valeurs.";

  return (
    `${nameText}${identityText} ` +
    `${elementText} ` +
    "La connaissance de votre thème devient réellement utile lorsque vous l’employez pour reconnaître vos automatismes, poser des choix plus conscients et créer une vie qui ne vous oblige pas à vous éloigner de votre nature."
  );
}

function getCultivationPoints(
  sun?: PlanetData,
  moon?: PlanetData,
  saturn?: PlanetData,
  dominantElement?: ElementName
): string[] {
  const first =
    sun?.sign
      ? SUN_CULTIVATION[
          sun.sign
        ]
      : undefined;

  const second =
    moon?.sign
      ? MOON_CULTIVATION[
          moon.sign
        ]
      : undefined;

  const third =
    saturn?.sign
      ? SATURN_CULTIVATION[
          saturn.sign
        ]
      : undefined;

  return [
    first ??
      `Cultiver les qualités de votre dominante ${dominantElement ?? "personnelle"} sans laisser une seule énergie gouverner tous vos choix.`,

    second ??
      "Reconnaître vos besoins émotionnels avant qu’ils ne deviennent de la fatigue, du retrait ou une réaction automatique.",

    third ??
      "Transformer vos exigences et vos peurs en structure, en patience et en progression réaliste.",
  ];
}

function getDynamicSignature(
  sun?: PlanetData,
  dominantElement?: ElementName,
  dominantModality?: ModalityName
): string {
  const sunSign =
    sun?.sign
      ? getFrenchSign(
          sun.sign
        )
      : "";

  const elementText =
    dominantElement
      ? ELEMENT_SIGNATURES[
          dominantElement
        ]
      : "Votre force se révèle lorsque vos différentes dimensions intérieures avancent dans une même direction.";

  const modalityText =
    dominantModality
      ? MODALITY_SIGNATURES[
          dominantModality
        ]
      : "";

  if (sunSign) {
    return (
      `Votre Soleil en ${sunSign} vous rappelle que votre identité ne demande pas à être diminuée, mais comprise et pleinement assumée. ` +
      `${elementText} ${modalityText}`
    );
  }

  return `${elementText} ${modalityText}`;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

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
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 22,
    marginTop: 6,
    marginBottom: 11,
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
    fontSize: 8.85,
    lineHeight: 1.48,
    marginBottom: 8,
    textAlign: "justify",
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 8.85,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  signatureSynthesis: {
    position: "relative",
    flexDirection: "row",
    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 15,
    marginBottom: 11,
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
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  signatureSynthesisIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  signatureSynthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  signatureSynthesisKicker: {
    color: "#f4c95d",
    fontSize: 7.2,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  signatureSynthesisTitle: {
    color: "#fff8e7",
    fontSize: 11.5,
    lineHeight: 1.25,
    marginBottom: 5,
  },

  signatureSynthesisText: {
    color: "#bfc5d5",
    fontSize: 7.8,
    lineHeight: 1.4,
  },

  cultivateCard: {
    position: "relative",
    paddingTop: 11,
    paddingBottom: 9,
    paddingHorizontal: 15,
    marginBottom: 11,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cultivateAccent: {
    position: "absolute",
    top: -1,
    right: 0,
    width: 82,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  cultivateTitle: {
    color: "#f4c95d",
    fontSize: 10.5,
    textAlign: "center",
    marginBottom: 8,
  },

  cultivateRow: {
    flexDirection: "row",
    marginBottom: 6,
  },

  cultivateBullet: {
    width: 15,
    color: "#f4c95d",
    fontSize: 9,
  },

  cultivateText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#d8cfbc",
    fontSize: 7.8,
    lineHeight: 1.4,
  },

  signatureBox: {
    position: "relative",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 22,
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
    width: 22,
    height: 22,
    objectFit: "contain",
    marginBottom: 6,
  },

  brand: {
    color: "#f4c95d",
    fontSize: 14,
    marginBottom: 6,
  },

  slogan: {
    color: "#fff8e7",
    fontSize: 10.5,
    lineHeight: 1.42,
    textAlign: "center",
  },

  bottomGroup: {
    marginTop: "auto",
    paddingTop: 12,
    paddingBottom: 24,
    alignItems: "center",
  },

  closingText: {
    color: "#bfc5d5",
    fontSize: 8.1,
    lineHeight: 1.42,
    textAlign: "center",
    marginHorizontal: 35,
    marginBottom: 11,
  },

  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 32,
    marginHorizontal: 7,
  },

  bottomIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  smallDivider: {
    width: 22,
    height: 1,
    marginHorizontal: 5,
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

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function PdfSignatureConclusion({
  firstName,
  planets,
  angles,
}: PdfSignatureConclusionProps) {
  const safeFirstName =
    typeof firstName ===
    "string"
      ? firstName.trim()
      : "";

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const safeAngles =
    angles ??
    ({
      ascendant: 0,
      midheaven: 0,
      descendant: 180,
      imumCoeli: 180,
    } as SignatureAngles);

  const sun =
    getPlanet(
      safePlanets,
      "Sun"
    );

  const moon =
    getPlanet(
      safePlanets,
      "Moon"
    );

  const saturn =
    getPlanet(
      safePlanets,
      "Saturn"
    );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const planetData =
    safePlanets
      .map(
        (planet) =>
          getPlanet(
            safePlanets,
            planet.name
          )
      )
      .filter(
        (
          planet
        ): planet is PlanetData =>
          Boolean(
            planet?.sign
          )
      );

  const dominantElement =
    getDominantElement(
      planetData,
      ascendantSign
    );

  const dominantModality =
    getDominantModality(
      planetData,
      ascendantSign
    );

  const personalFinalText =
    getPersonalFinalText(
      safeFirstName,
      sun,
      moon,
      ascendantSign,
      dominantElement
    );

  const cultivationPoints =
    getCultivationPoints(
      sun,
      moon,
      saturn,
      dominantElement
    );

  const dynamicSignature =
    getDynamicSignature(
      sun,
      dominantElement,
      dominantModality
    );

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
            style={styles.paragraphLast}
          >
            Votre carte du ciel ne constitue pas un destin rigide.
            Elle met en lumière vos tendances naturelles, vos besoins,
            vos forces, vos sensibilités et les défis qui peuvent
            accompagner votre évolution. Vous conservez toujours la
            liberté de choisir la manière dont vous exprimez ces
            énergies.
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
              {personalFinalText}
            </Text>
          </View>
        </View>

        <View
          style={styles.cultivateCard}
          wrap={false}
        >
          <View
            style={
              styles.cultivateAccent
            }
          />

          <Text
            style={
              styles.cultivateTitle
            }
          >
            Ce que votre thème vous invite à cultiver
          </Text>

          {cultivationPoints.map(
            (
              point,
              index
            ) => (
              <View
                key={`signature-cultivation-${index}`}
                style={
                  styles.cultivateRow
                }
              >
                <Text
                  style={
                    styles.cultivateBullet
                  }
                >
                  ✦
                </Text>

                <Text
                  style={
                    styles.cultivateText
                  }
                >
                  {point}
                </Text>
              </View>
            )
          )}
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
            « {dynamicSignature} »
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
