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
PdfSignaturePageFooter from "./PdfSignaturePageFooter";

type PdfSignatureSynthesisProps = {
  firstName: string;
  planets: SignaturePlanet[];
  angles: SignatureAngles;
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

const ELEMENT_DESCRIPTIONS: Record<ElementName, string> = {
  Feu:
    "une énergie tournée vers l’élan, l’expression, le courage et le besoin d’agir selon une direction vivante",

  Terre:
    "une énergie tournée vers la stabilité, la construction, le réalisme et la recherche de résultats durables",

  Air:
    "une énergie tournée vers la pensée, les échanges, la compréhension et la mise en relation des idées",

  Eau:
    "une énergie tournée vers la sensibilité, l’intuition, la profondeur émotionnelle et la perception des ambiances",
};

const MODALITY_DESCRIPTIONS: Record<ModalityName, string> = {
  Cardinal:
    "une tendance à initier, décider et mettre les choses en mouvement",

  Fixe:
    "une tendance à approfondir, maintenir et consolider ce qui possède une réelle valeur",

  Mutable:
    "une tendance à adapter, comprendre et ajuster votre réponse selon l’évolution des circonstances",
};

const SUN_PROFILES: Record<string, string> = {
  Aries:
    "Votre Soleil en Bélier cherche à affirmer une identité directe, courageuse et capable de prendre l’initiative.",

  Taurus:
    "Votre Soleil en Taureau cherche à construire une identité stable, fidèle à ses valeurs et capable de durer.",

  Gemini:
    "Votre Soleil en Gémeaux cherche à comprendre, relier les idées et nourrir une identité curieuse et mobile.",

  Cancer:
    "Votre Soleil en Cancer cherche à protéger, appartenir et construire une identité enracinée dans la sensibilité.",

  Leo:
    "Votre Soleil en Lion cherche à rayonner, créer et assumer une identité visible, chaleureuse et personnelle.",

  Virgo:
    "Votre Soleil en Vierge cherche à améliorer, comprendre et devenir utile à travers une identité précise et consciente.",

  Libra:
    "Votre Soleil en Balance cherche à créer de l’équilibre, de la beauté et des liens fondés sur la réciprocité.",

  Scorpio:
    "Votre Soleil en Scorpion cherche à vivre avec profondeur, lucidité et intensité, en transformant ce qui ne peut plus rester superficiel.",

  Sagittarius:
    "Votre Soleil en Sagittaire cherche à grandir par l’exploration, la compréhension et une vision porteuse de sens.",

  Capricorn:
    "Votre Soleil en Capricorne cherche à construire, maîtriser et donner une forme durable à ses ambitions.",

  Aquarius:
    "Votre Soleil en Verseau cherche à exprimer une identité libre, originale et capable de contribuer autrement.",

  Pisces:
    "Votre Soleil en Poissons cherche à unir intuition, compassion et imagination dans une identité profondément réceptive.",
};

const MOON_PROFILES: Record<string, string> = {
  Aries:
    "Votre Lune en Bélier a besoin de mouvement, de franchise et de la possibilité de réagir sans se sentir retenue.",

  Taurus:
    "Votre Lune en Taureau a besoin de stabilité, de continuité et d’un environnement capable de calmer le corps et l’esprit.",

  Gemini:
    "Votre Lune en Gémeaux a besoin de mots, d’échanges et de compréhension pour retrouver son équilibre émotionnel.",

  Cancer:
    "Votre Lune en Cancer a besoin d’intimité, de protection et de liens capables d’accueillir sa grande sensibilité.",

  Leo:
    "Votre Lune en Lion a besoin de chaleur, de reconnaissance sincère et d’un espace où ses émotions peuvent s’exprimer librement.",

  Virgo:
    "Votre Lune en Vierge a besoin d’ordre, de repères simples et d’actions concrètes pour retrouver un sentiment de maîtrise.",

  Libra:
    "Votre Lune en Balance a besoin de dialogue, d’équilibre et d’un climat relationnel respectueux.",

  Scorpio:
    "Votre Lune en Scorpion a besoin de vérité, de loyauté et d’une profondeur émotionnelle qui ne se contente pas des apparences.",

  Sagittarius:
    "Votre Lune en Sagittaire a besoin d’espace, de sens et de la possibilité de retrouver rapidement une perspective plus vaste.",

  Capricorn:
    "Votre Lune en Capricorne a besoin de structure, de fiabilité et de la permission de déposer les responsabilités qu’elle porte.",

  Aquarius:
    "Votre Lune en Verseau a besoin de liberté, de recul et d’un environnement qui respecte son fonctionnement différent.",

  Pisces:
    "Votre Lune en Poissons a besoin de silence, de création et de limites capables de protéger sa grande réceptivité.",
};

const ASCENDANT_PROFILES: Record<string, string> = {
  Aries:
    "Votre Ascendant Bélier vous pousse à aborder la vie avec rapidité, franchise et esprit d’initiative.",

  Taurus:
    "Votre Ascendant Taureau vous pousse à avancer avec prudence, constance et besoin de sécurité.",

  Gemini:
    "Votre Ascendant Gémeaux vous pousse à observer, questionner et entrer en relation par la parole.",

  Cancer:
    "Votre Ascendant Cancer vous pousse à percevoir rapidement l’ambiance et à protéger ce qui vous semble vulnérable.",

  Leo:
    "Votre Ascendant Lion vous pousse à occuper l’espace avec chaleur, présence et désir de créer une impression forte.",

  Virgo:
    "Votre Ascendant Vierge vous pousse à analyser, ajuster et chercher immédiatement ce qui peut être amélioré.",

  Libra:
    "Votre Ascendant Balance vous pousse à rechercher l’harmonie, la courtoisie et une relation équilibrée avec votre environnement.",

  Scorpio:
    "Votre Ascendant Scorpion vous pousse à observer en profondeur, à protéger votre intimité et à agir avec intensité.",

  Sagittarius:
    "Votre Ascendant Sagittaire vous pousse à explorer, élargir vos horizons et chercher une direction porteuse de sens.",

  Capricorn:
    "Votre Ascendant Capricorne vous pousse à vous montrer fiable, réservé et orienté vers la maîtrise.",

  Aquarius:
    "Votre Ascendant Verseau vous pousse à préserver votre indépendance et à manifester une présence originale.",

  Pisces:
    "Votre Ascendant Poissons vous pousse à percevoir intuitivement les situations et à vous adapter avec sensibilité.",
};

const MERCURY_PROFILES: Record<string, string> = {
  Aries:
    "Mercure en Bélier donne une pensée rapide, directe et orientée vers l’action.",

  Taurus:
    "Mercure en Taureau donne une pensée concrète, méthodique et attachée aux faits vérifiables.",

  Gemini:
    "Mercure en Gémeaux donne une pensée vive, curieuse et capable de relier rapidement plusieurs informations.",

  Cancer:
    "Mercure en Cancer donne une pensée intuitive, mémorielle et fortement influencée par le ressenti.",

  Leo:
    "Mercure en Lion donne une pensée expressive, créative et capable de transmettre avec conviction.",

  Virgo:
    "Mercure en Vierge donne une pensée précise, analytique et attentive aux détails utiles.",

  Libra:
    "Mercure en Balance donne une pensée nuancée, diplomatique et attentive aux différents points de vue.",

  Scorpio:
    "Mercure en Scorpion donne une pensée profonde, stratégique et naturellement attirée par ce qui demeure caché.",

  Sagittarius:
    "Mercure en Sagittaire donne une pensée globale, enthousiaste et tournée vers la recherche de sens.",

  Capricorn:
    "Mercure en Capricorne donne une pensée structurée, prudente et orientée vers des conclusions réalistes.",

  Aquarius:
    "Mercure en Verseau donne une pensée originale, indépendante et capable d’envisager des solutions inhabituelles.",

  Pisces:
    "Mercure en Poissons donne une pensée imaginative, intuitive et sensible aux nuances implicites.",
};

const VENUS_PROFILES: Record<string, string> = {
  Aries:
    "Vénus en Bélier recherche une relation vivante, directe et capable de maintenir le désir.",

  Taurus:
    "Vénus en Taureau recherche la fidélité, la stabilité et une affection qui se manifeste concrètement.",

  Gemini:
    "Vénus en Gémeaux recherche la complicité intellectuelle, le mouvement et la richesse des échanges.",

  Cancer:
    "Vénus en Cancer recherche la sécurité affective, la tendresse et un lien capable de devenir un refuge.",

  Leo:
    "Vénus en Lion recherche la chaleur, la loyauté et une relation dans laquelle l’amour peut être exprimé ouvertement.",

  Virgo:
    "Vénus en Vierge recherche la fiabilité, l’attention et des preuves d’affection simples mais constantes.",

  Libra:
    "Vénus en Balance recherche l’équilibre, la beauté et une relation fondée sur la réciprocité.",

  Scorpio:
    "Vénus en Scorpion recherche une intimité profonde, une loyauté absolue et une relation capable de transformer.",

  Sagittarius:
    "Vénus en Sagittaire recherche la liberté, l’authenticité et un lien capable d’ouvrir de nouveaux horizons.",

  Capricorn:
    "Vénus en Capricorne recherche la stabilité, la responsabilité et une relation qui possède une réelle continuité.",

  Aquarius:
    "Vénus en Verseau recherche la liberté, l’égalité et un lien qui respecte l’individualité de chacun.",

  Pisces:
    "Vénus en Poissons recherche une grande compréhension émotionnelle, la douceur et une forme de communion.",
};

const MARS_PROFILES: Record<string, string> = {
  Aries:
    "Mars en Bélier agit avec rapidité, courage et besoin de répondre immédiatement.",

  Taurus:
    "Mars en Taureau agit avec lenteur, endurance et grande détermination une fois engagé.",

  Gemini:
    "Mars en Gémeaux agit par les idées, les mots et la capacité à réagir rapidement.",

  Cancer:
    "Mars en Cancer agit pour protéger, mais peut contourner la confrontation directe lorsqu’il se sent vulnérable.",

  Leo:
    "Mars en Lion agit avec fierté, créativité et besoin de défendre ce qui lui tient à cœur.",

  Virgo:
    "Mars en Vierge agit avec méthode, précision et besoin d’améliorer concrètement la situation.",

  Libra:
    "Mars en Balance agit par la négociation, la coopération et la recherche d’une solution équilibrée.",

  Scorpio:
    "Mars en Scorpion agit avec intensité, stratégie et remarquable capacité de résistance.",

  Sagittarius:
    "Mars en Sagittaire agit avec enthousiasme, franchise et besoin d’une direction porteuse de sens.",

  Capricorn:
    "Mars en Capricorne agit avec discipline, stratégie et volonté de produire un résultat durable.",

  Aquarius:
    "Mars en Verseau agit avec indépendance, originalité et besoin de préserver sa liberté.",

  Pisces:
    "Mars en Poissons agit par intuition, inspiration et sensibilité au contexte émotionnel.",
};

const SATURN_PROFILES: Record<string, string> = {
  Aries:
    "Saturne en Bélier demande d’apprendre à agir avec courage sans confondre affirmation et réaction.",

  Taurus:
    "Saturne en Taureau demande de construire une sécurité intérieure qui ne dépend pas uniquement du contrôle matériel.",

  Gemini:
    "Saturne en Gémeaux demande de faire confiance à votre pensée et d’accepter de vous exprimer avant que tout soit parfait.",

  Cancer:
    "Saturne en Cancer demande de reconnaître vos besoins émotionnels et d’accepter de recevoir du soutien.",

  Leo:
    "Saturne en Lion demande de créer et de rayonner sans faire de l’approbation une condition.",

  Virgo:
    "Saturne en Vierge demande de transformer l’exigence en compétence sans tomber dans le perfectionnisme.",

  Libra:
    "Saturne en Balance demande de prendre position sans croire qu’un désaccord détruit nécessairement le lien.",

  Scorpio:
    "Saturne en Scorpion demande de développer la confiance sans abandonner votre discernement.",

  Sagittarius:
    "Saturne en Sagittaire demande de donner une structure réelle à vos convictions et à votre besoin de liberté.",

  Capricorn:
    "Saturne en Capricorne demande de construire avec ambition sans réduire votre valeur à votre productivité.",

  Aquarius:
    "Saturne en Verseau demande de participer au collectif sans perdre votre singularité.",

  Pisces:
    "Saturne en Poissons demande de protéger votre sensibilité par des limites simples et stables.",
};

const JUPITER_PROFILES: Record<string, string> = {
  Aries:
    "Jupiter en Bélier développe la confiance par l’initiative, le courage et l’audace.",

  Taurus:
    "Jupiter en Taureau développe la confiance par la stabilité, la patience et la croissance progressive.",

  Gemini:
    "Jupiter en Gémeaux développe la confiance par l’apprentissage, les échanges et la diversité des idées.",

  Cancer:
    "Jupiter en Cancer développe la confiance par la protection, l’appartenance et la construction d’une base émotionnelle solide.",

  Leo:
    "Jupiter en Lion développe la confiance par la créativité, la visibilité et l’expression généreuse de soi.",

  Virgo:
    "Jupiter en Vierge développe la confiance par la compétence, l’utilité et l’amélioration concrète.",

  Libra:
    "Jupiter en Balance développe la confiance par la coopération, la justice et les relations équilibrées.",

  Scorpio:
    "Jupiter en Scorpion développe la confiance par la transformation, la lucidité et la capacité à renaître après les crises.",

  Sagittarius:
    "Jupiter en Sagittaire développe la confiance par l’exploration, la transmission et la recherche de sens.",

  Capricorn:
    "Jupiter en Capricorne développe la confiance par la structure, l’ambition et la construction à long terme.",

  Aquarius:
    "Jupiter en Verseau développe la confiance par l’innovation, la liberté et la contribution collective.",

  Pisces:
    "Jupiter en Poissons développe la confiance par l’intuition, la compassion et l’ouverture à une vision plus vaste.",
};

const MC_PROFILES: Record<string, string> = {
  Aries:
    "Votre Milieu du Ciel en Bélier favorise les voies où vous pouvez initier, décider et ouvrir une direction.",

  Taurus:
    "Votre Milieu du Ciel en Taureau favorise les voies fondées sur la stabilité, la valeur concrète et la continuité.",

  Gemini:
    "Votre Milieu du Ciel en Gémeaux favorise les voies liées aux échanges, à l’information, à l’enseignement et à la polyvalence.",

  Cancer:
    "Votre Milieu du Ciel en Cancer favorise les voies où l’écoute, la protection et la compréhension humaine sont essentielles.",

  Leo:
    "Votre Milieu du Ciel en Lion favorise les voies où la créativité, la visibilité et le leadership personnel peuvent s’exprimer.",

  Virgo:
    "Votre Milieu du Ciel en Vierge favorise les voies où l’analyse, la méthode, le service et l’amélioration sont valorisés.",

  Libra:
    "Votre Milieu du Ciel en Balance favorise les voies liées à la médiation, à la beauté, à la justice et à la collaboration.",

  Scorpio:
    "Votre Milieu du Ciel en Scorpion favorise les voies où la stratégie, l’analyse profonde et la transformation jouent un rôle central.",

  Sagittarius:
    "Votre Milieu du Ciel en Sagittaire favorise les voies liées à l’enseignement, au voyage, à la transmission et à l’élargissement des perspectives.",

  Capricorn:
    "Votre Milieu du Ciel en Capricorne favorise les voies qui demandent structure, responsabilité et construction durable.",

  Aquarius:
    "Votre Milieu du Ciel en Verseau favorise les voies liées à l’innovation, à la technologie, aux réseaux et aux changements collectifs.",

  Pisces:
    "Votre Milieu du Ciel en Poissons favorise les voies où l’intuition, la création, la sensibilité ou l’accompagnement peuvent s’exprimer.",
};

const PLUTO_PROFILES: Record<string, string> = {
  Aries:
    "Pluton en Bélier intensifie les enjeux liés à la volonté, au pouvoir d’agir et à l’affirmation.",

  Taurus:
    "Pluton en Taureau intensifie les enjeux liés à la sécurité, aux ressources et à la peur de perdre ce qui a été construit.",

  Gemini:
    "Pluton en Gémeaux intensifie la pensée, l’analyse et le besoin de comprendre les véritables intentions.",

  Cancer:
    "Pluton en Cancer intensifie les liens avec le passé, la famille et les mécanismes de protection émotionnelle.",

  Leo:
    "Pluton en Lion intensifie les enjeux liés à la reconnaissance, à la créativité et au besoin de laisser une trace.",

  Virgo:
    "Pluton en Vierge intensifie le besoin de maîtrise, de précision et de transformation par l’amélioration.",

  Libra:
    "Pluton en Balance intensifie les rapports de pouvoir et les transformations vécues à travers les relations.",

  Scorpio:
    "Pluton en Scorpion intensifie la profondeur, la lucidité, le besoin de vérité et la capacité de régénération.",

  Sagittarius:
    "Pluton en Sagittaire intensifie les convictions, la recherche de sens et le besoin de transformer votre vision du monde.",

  Capricorn:
    "Pluton en Capricorne intensifie les enjeux liés au contrôle, à l’autorité et aux structures de réussite.",

  Aquarius:
    "Pluton en Verseau intensifie le besoin de transformation collective, de liberté et de remise en question des systèmes.",

  Pisces:
    "Pluton en Poissons intensifie la sensibilité aux mouvements invisibles, aux pertes de repères et aux transformations profondes.",
};

const NEPTUNE_PROFILES: Record<string, string> = {
  Aries:
    "Neptune en Bélier peut brouiller la distinction entre intuition et impulsion.",

  Taurus:
    "Neptune en Taureau peut idéaliser la stabilité, le confort ou certaines attaches matérielles.",

  Gemini:
    "Neptune en Gémeaux peut rendre la pensée très intuitive, mais parfois difficile à organiser.",

  Cancer:
    "Neptune en Cancer peut amplifier les souvenirs, la nostalgie et l’absorption des émotions familiales.",

  Leo:
    "Neptune en Lion peut idéaliser la reconnaissance, l’amour ou le rôle créatif que vous souhaitez incarner.",

  Virgo:
    "Neptune en Vierge peut rendre plus floue la distinction entre aide juste, sacrifice et responsabilité excessive.",

  Libra:
    "Neptune en Balance peut favoriser l’idéalisation du couple, de l’harmonie ou de la personne aimée.",

  Scorpio:
    "Neptune en Scorpion peut amplifier les intuitions, mais aussi les craintes liées aux non-dits.",

  Sagittarius:
    "Neptune en Sagittaire peut idéaliser une croyance, une direction ou une promesse d’expansion.",

  Capricorn:
    "Neptune en Capricorne peut rendre moins claire la distinction entre ambition personnelle et attentes extérieures.",

  Aquarius:
    "Neptune en Verseau peut idéaliser une cause, un groupe ou une vision collective.",

  Pisces:
    "Neptune en Poissons amplifie fortement la sensibilité et demande des limites particulièrement conscientes.",
};

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

function getElement(
  sign: string
): ElementName | null {
  return (
    SIGN_ELEMENTS[
      normalizeSign(sign)
    ] ?? null
  );
}

function getModality(
  sign: string
): ModalityName | null {
  return (
    SIGN_MODALITIES[
      normalizeSign(sign)
    ] ?? null
  );
}

function getHouseText(
  house?: number
): string {
  if (!house) {
    return "";
  }

  const descriptions:
    Record<number, string> = {
    1: "dans l’affirmation de votre identité et votre manière d’entrer dans l’existence",
    2: "dans vos ressources, vos valeurs et votre besoin de sécurité",
    3: "dans votre pensée, vos échanges et votre environnement proche",
    4: "dans votre foyer, vos racines et votre monde intérieur",
    5: "dans votre créativité, vos plaisirs et votre expression personnelle",
    6: "dans votre quotidien, votre travail et votre organisation",
    7: "dans vos relations, vos engagements et votre rapport à l’autre",
    8: "dans vos transformations, votre intimité et les liens de pouvoir",
    9: "dans vos convictions, vos apprentissages et votre recherche de sens",
    10: "dans votre vocation, votre direction sociale et vos responsabilités",
    11: "dans vos projets, vos réseaux et votre contribution collective",
    12: "dans votre vie intérieure, votre intuition et les mécanismes plus difficiles à saisir",
  };

  return descriptions[house] ?? "";
}

function getDominantElement(
  planets: PlanetData[],
  ascendantSign: string
): ElementName | null {
  const counts:
    Record<ElementName, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  for (const planet of planets) {
    const element =
      getElement(
        planet.sign
      );

    if (element) {
      counts[element] += 1;
    }
  }

  const ascendantElement =
    getElement(
      ascendantSign
    );

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
    )[0]?.[0] as
      | ElementName
      | undefined
  ) ?? null;
}

function getDominantModality(
  planets: PlanetData[],
  ascendantSign: string
): ModalityName | null {
  const counts:
    Record<ModalityName, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  for (const planet of planets) {
    const modality =
      getModality(
        planet.sign
      );

    if (modality) {
      counts[
        modality
      ] += 1;
    }
  }

  const ascendantModality =
    getModality(
      ascendantSign
    );

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
    )[0]?.[0] as
      | ModalityName
      | undefined
  ) ?? null;
}

function getInnerEngine(
  sun?: PlanetData,
  moon?: PlanetData,
  ascendantSign?: string
): string {
  const sunText =
    sun?.sign
      ? SUN_PROFILES[
          sun.sign
        ] ??
        "Votre Soleil décrit votre direction intérieure et l’identité que vous cherchez à construire."
      : "Votre Soleil décrit votre direction intérieure et l’identité que vous cherchez à construire.";

  const moonText =
    moon?.sign
      ? MOON_PROFILES[
          moon.sign
        ] ??
        "Votre Lune décrit vos besoins émotionnels et ce qui vous permet de retrouver un sentiment de sécurité."
      : "Votre Lune décrit vos besoins émotionnels et ce qui vous permet de retrouver un sentiment de sécurité.";

  const ascendantText =
    ascendantSign
      ? ASCENDANT_PROFILES[
          ascendantSign
        ] ??
        "Votre Ascendant décrit votre manière spontanée d’entrer en relation avec le monde."
      : "Votre Ascendant décrit votre manière spontanée d’entrer en relation avec le monde.";

  const sunElement =
    sun?.sign
      ? getElement(
          sun.sign
        )
      : null;

  const moonElement =
    moon?.sign
      ? getElement(
          moon.sign
        )
      : null;

  let integration =
    "Votre moteur intérieur devient plus cohérent lorsque votre manière d’agir respecte à la fois votre direction consciente et vos besoins émotionnels.";

  if (
    sunElement &&
    moonElement &&
    sunElement ===
      moonElement
  ) {
    integration =
      `Votre Soleil et votre Lune appartiennent tous deux à l’élément ${sunElement}. Votre identité et votre sensibilité parlent donc un langage proche, ce qui renforce la continuité entre ce que vous voulez et ce que vous ressentez.`;
  } else if (
    sunElement &&
    moonElement
  ) {
    integration =
      `Votre Soleil appartient à l’élément ${sunElement}, tandis que votre Lune appartient à l’élément ${moonElement}. Votre richesse vient de cette différence, mais votre équilibre demande de ne pas sacrifier l’un de ces besoins au profit de l’autre.`;
  }

  const houseText =
    getHouseText(
      sun?.house
    );

  return [
    sunText,
    moonText,
    ascendantText,
    integration,
    houseText
      ? `Votre identité cherche particulièrement à s’exprimer ${houseText}.`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function getMentalPattern(
  mercury?: PlanetData,
  mars?: PlanetData,
  saturn?: PlanetData
): string {
  const mercuryText =
    mercury?.sign
      ? MERCURY_PROFILES[
          mercury.sign
        ] ??
        "Mercure décrit votre manière de réfléchir, comprendre et communiquer."
      : "Mercure décrit votre manière de réfléchir, comprendre et communiquer.";

  const marsText =
    mars?.sign
      ? MARS_PROFILES[
          mars.sign
        ] ??
        "Mars décrit la manière dont vous transformez une idée ou un désir en action."
      : "Mars décrit la manière dont vous transformez une idée ou un désir en action.";

  const saturnText =
    saturn?.sign
      ? SATURN_PROFILES[
          saturn.sign
        ] ??
        "Saturne montre la prudence, les exigences et les apprentissages qui structurent vos décisions."
      : "Saturne montre la prudence, les exigences et les apprentissages qui structurent vos décisions.";

  const mercuryElement =
    mercury?.sign
      ? getElement(
          mercury.sign
        )
      : null;

  const marsElement =
    mars?.sign
      ? getElement(
          mars.sign
        )
      : null;

  let decisionText =
    "Vous prenez vos meilleures décisions lorsque vous laissez suffisamment de temps à votre pensée, à votre instinct d’action et à votre prudence pour se consulter.";

  if (
    mercuryElement ===
      "Feu" &&
    marsElement ===
      "Feu"
  ) {
    decisionText =
      "Votre pensée et votre action peuvent être très rapides. Votre défi consiste à vérifier les faits et les conséquences avant de transformer une première impression en décision définitive.";
  } else if (
    mercuryElement ===
      "Terre" ||
    marsElement ===
      "Terre"
  ) {
    decisionText =
      "Vous gagnez en clarté lorsque vous ramenez vos idées à des critères concrets, à des étapes mesurables et à une réalité vérifiable.";
  } else if (
    mercuryElement ===
      "Air"
  ) {
    decisionText =
      "Vous avez besoin de comparer, verbaliser et comprendre plusieurs angles avant de vous engager pleinement.";
  } else if (
    mercuryElement ===
      "Eau"
  ) {
    decisionText =
      "Votre ressenti influence fortement votre compréhension. Votre discernement augmente lorsque vous distinguez l’intuition réelle de la peur ou de l’anticipation émotionnelle.";
  }

  return [
    mercuryText,
    marsText,
    saturnText,
    decisionText,
  ].join(" ");
}

function getRelationshipPattern(
  venus?: PlanetData,
  moon?: PlanetData,
  mars?: PlanetData
): string {
  const venusText =
    venus?.sign
      ? VENUS_PROFILES[
          venus.sign
        ] ??
        "Vénus décrit votre manière d’aimer, vos valeurs et ce qui vous attire."
      : "Vénus décrit votre manière d’aimer, vos valeurs et ce qui vous attire.";

  const moonText =
    moon?.sign
      ? MOON_PROFILES[
          moon.sign
        ] ??
        "Votre Lune décrit ce dont vous avez besoin pour vous sentir affectivement en sécurité."
      : "Votre Lune décrit ce dont vous avez besoin pour vous sentir affectivement en sécurité.";

  const marsText =
    mars?.sign
      ? MARS_PROFILES[
          mars.sign
        ] ??
        "Mars décrit votre désir, votre manière de prendre l’initiative et votre réaction face aux tensions."
      : "Mars décrit votre désir, votre manière de prendre l’initiative et votre réaction face aux tensions.";

  const venusElement =
    venus?.sign
      ? getElement(
          venus.sign
        )
      : null;

  const moonElement =
    moon?.sign
      ? getElement(
          moon.sign
        )
      : null;

  let integration =
    "Votre vie relationnelle devient plus équilibrée lorsque vous pouvez exprimer vos besoins affectifs sans attendre qu’ils soient devinés et sans confondre proximité, fusion ou contrôle.";

  if (
    venusElement &&
    moonElement &&
    venusElement ===
      moonElement
  ) {
    integration =
      `Vénus et la Lune appartiennent toutes deux à l’élément ${venusElement}. Votre manière d’aimer et vos besoins émotionnels se comprennent donc assez naturellement, ce qui renforce votre cohérence affective.`;
  } else if (
    venusElement &&
    moonElement
  ) {
    integration =
      `Vénus appartient à l’élément ${venusElement}, tandis que votre Lune appartient à l’élément ${moonElement}. Vous pouvez donc aimer d’une manière tout en ayant besoin d’être rassuré d’une autre. La relation devient plus stable lorsque ces deux langages sont clairement exprimés.`;
  }

  return [
    venusText,
    moonText,
    marsText,
    integration,
  ].join(" ");
}

function getLifeChallenge(
  saturn?: PlanetData,
  pluto?: PlanetData,
  neptune?: PlanetData
): string {
  const saturnText =
    saturn?.sign
      ? SATURN_PROFILES[
          saturn.sign
        ] ??
        "Saturne montre l’apprentissage qui demande du temps, de la patience et de la structure."
      : "Saturne montre l’apprentissage qui demande du temps, de la patience et de la structure.";

  const plutoText =
    pluto?.sign
      ? PLUTO_PROFILES[
          pluto.sign
        ] ??
        "Pluton révèle les mécanismes de contrôle, d’intensité et de transformation profonde."
      : "Pluton révèle les mécanismes de contrôle, d’intensité et de transformation profonde.";

  const neptuneText =
    neptune?.sign
      ? NEPTUNE_PROFILES[
          neptune.sign
        ] ??
        "Neptune montre les zones où l’idéal, l’intuition ou le manque de limites peuvent brouiller vos repères."
      : "Neptune montre les zones où l’idéal, l’intuition ou le manque de limites peuvent brouiller vos repères.";

  const saturnHouse =
    getHouseText(
      saturn?.house
    );

  const plutoHouse =
    getHouseText(
      pluto?.house
    );

  const practicalText =
    "Votre principal défi consiste à reconnaître le moment où une protection ancienne prend le contrôle de votre réponse actuelle. Votre progression commence lorsque vous nommez précisément la peur, vérifiez ce qui appartient réellement au présent et choisissez une action plus petite, mais plus consciente.";

  return [
    saturnText,
    plutoText,
    neptuneText,
    saturnHouse
      ? `Cet apprentissage se manifeste particulièrement ${saturnHouse}.`
      : "",
    plutoHouse
      ? `Vos transformations les plus profondes peuvent également se jouer ${plutoHouse}.`
      : "",
    practicalText,
  ]
    .filter(Boolean)
    .join(" ");
}

function getPotential(
  sun?: PlanetData,
  jupiter?: PlanetData,
  midheavenSign?: string,
  dominantElement?: ElementName | null,
  dominantModality?: ModalityName | null
): string {
  const sunText =
    sun?.sign
      ? SUN_PROFILES[
          sun.sign
        ] ??
        "Votre Soleil montre la direction dans laquelle votre identité cherche à s’accomplir."
      : "Votre Soleil montre la direction dans laquelle votre identité cherche à s’accomplir.";

  const jupiterText =
    jupiter?.sign
      ? JUPITER_PROFILES[
          jupiter.sign
        ] ??
        "Jupiter montre la manière dont votre confiance et vos possibilités peuvent s’élargir."
      : "Jupiter montre la manière dont votre confiance et vos possibilités peuvent s’élargir.";

  const mcText =
    midheavenSign
      ? MC_PROFILES[
          midheavenSign
        ] ??
        "Votre Milieu du Ciel décrit votre direction professionnelle et la contribution que vous cherchez à rendre visible."
      : "Votre Milieu du Ciel décrit votre direction professionnelle et la contribution que vous cherchez à rendre visible.";

  const elementText =
    dominantElement
      ? `L’élément ${dominantElement} domine votre thème et souligne ${ELEMENT_DESCRIPTIONS[dominantElement]}.`
      : "";

  const modalityText =
    dominantModality
      ? `La modalité ${dominantModality} renforce ${MODALITY_DESCRIPTIONS[dominantModality]}.`
      : "";

  const conclusion =
    "Votre potentiel d’accomplissement se développe lorsque votre ambition extérieure reste fidèle à votre nature intérieure. Vous réussissez davantage dans les environnements qui vous permettent d’utiliser vos qualités dominantes sans vous obliger à fonctionner constamment contre vous-même.";

  return [
    sunText,
    jupiterText,
    mcText,
    elementText,
    modalityText,
    conclusion,
  ]
    .filter(Boolean)
    .join(" ");
}

function getSignatureSentence(
  sun?: PlanetData,
  moon?: PlanetData,
  ascendantSign?: string,
  dominantElement?: ElementName | null,
  dominantModality?: ModalityName | null
): string {
  const sunName =
    sun?.sign
      ? SIGN_NAMES[
          sun.sign
        ] ??
        sun.sign
      : "";

  const moonName =
    moon?.sign
      ? SIGN_NAMES[
          moon.sign
        ] ??
        moon.sign
      : "";

  const ascendantName =
    ascendantSign
      ? SIGN_NAMES[
          ascendantSign
        ] ??
        ascendantSign
      : "";

  const pieces: string[] = [];

  if (
    sunName &&
    moonName &&
    ascendantName
  ) {
    pieces.push(
      `Votre Soleil en ${sunName}, votre Lune en ${moonName} et votre Ascendant ${ascendantName} forment une personnalité qui cherche à unir identité consciente, besoins émotionnels et manière spontanée d’avancer.`
    );
  }

  if (dominantElement) {
    pieces.push(
      `Votre dominante ${dominantElement} vous invite à honorer ${ELEMENT_DESCRIPTIONS[dominantElement]}.`
    );
  }

  if (dominantModality) {
    pieces.push(
      `Votre énergie ${dominantModality.toLowerCase()} montre que votre évolution passe par ${MODALITY_DESCRIPTIONS[dominantModality]}.`
    );
  }

  pieces.push(
    "Votre thème ne vous demande pas de devenir quelqu’un d’autre. Il vous invite à réunir vos forces, à comprendre vos contradictions et à choisir une manière d’avancer qui respecte pleinement votre nature."
  );

  return pieces.join(" ");
}

export default function PdfSignatureSynthesis({
  firstName,
  planets,
  angles,
}: PdfSignatureSynthesisProps) {
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

  const mercury =
    getPlanet(
      safePlanets,
      "Mercury"
    );

  const venus =
    getPlanet(
      safePlanets,
      "Venus"
    );

  const mars =
    getPlanet(
      safePlanets,
      "Mars"
    );

  const jupiter =
    getPlanet(
      safePlanets,
      "Jupiter"
    );

  const saturn =
    getPlanet(
      safePlanets,
      "Saturn"
    );

  const neptune =
    getPlanet(
      safePlanets,
      "Neptune"
    );

  const pluto =
    getPlanet(
      safePlanets,
      "Pluto"
    );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const midheavenSign =
    longitudeToSign(
      safeAngles.midheaven
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

  const introduction =
    safeFirstName
      ? `${safeFirstName}, cette synthèse relie vos principales positions astrologiques afin de faire ressortir votre moteur intérieur, votre fonctionnement mental, votre manière d’aimer, votre principal défi et votre potentiel d’accomplissement.`
      : "Cette synthèse relie vos principales positions astrologiques afin de faire ressortir votre moteur intérieur, votre fonctionnement mental, votre manière d’aimer, votre principal défi et votre potentiel d’accomplissement.";

  const analyzedPlanetsCount =
    safePlanets.length;

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
            Cette lecture s’appuie sur{" "}
            {analyzedPlanetsCount > 0
              ? `${analyzedPlanetsCount} positions planétaires`
              : "vos principales positions planétaires"}
            , votre Ascendant{" "}
            {SIGN_NAMES[ascendantSign] ?? ascendantSign}
            , votre Milieu du Ciel{" "}
            {SIGN_NAMES[midheavenSign] ?? midheavenSign}
            {dominantElement
              ? `, une dominante ${dominantElement}`
              : ""}
            {dominantModality
              ? ` et une modalité ${dominantModality}`
              : ""}
            . L’objectif n’est pas de répéter les pages précédentes,
            mais de montrer comment ces différentes dimensions
            construisent ensemble votre fonctionnement personnel.
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
            {getInnerEngine(
              sun,
              moon,
              ascendantSign
            )}
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
              Votre fonctionnement mental et décisionnel
            </Text>
          </View>

          <Text style={styles.cardText}>
            {getMentalPattern(
              mercury,
              mars,
              saturn
            )}
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
              Votre manière d’aimer et de vous engager
            </Text>
          </View>

          <Text style={styles.cardText}>
            {getRelationshipPattern(
              venus,
              moon,
              mars
            )}
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
              Votre principal défi d’évolution
            </Text>
          </View>

          <Text style={styles.cardText}>
            {getLifeChallenge(
              saturn,
              pluto,
              neptune
            )}
          </Text>
        </View>

        <View
          style={styles.card}
          wrap={false}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>
                5
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Votre potentiel d’accomplissement
            </Text>
          </View>

          <Text style={styles.cardText}>
            {getPotential(
              sun,
              jupiter,
              midheavenSign,
              dominantElement,
              dominantModality
            )}
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
            {getSignatureSentence(
              sun,
              moon,
              ascendantSign,
              dominantElement,
              dominantModality
            )}
          </Text>
        </View>
      </View>

      <PdfSignaturePageFooter />
    </Page>
  );
}
