import {
  SIGNS,
  type SignKey,
} from "./compatibility";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type CompatibilityPageData = {
  signA: SignKey;
  signB: SignKey;

  score: number;
  title: string;
  metaDescription: string;

  introduction: string;
  love: string;
  communication: string;
  attraction: string;
  trust: string;
  dailyLife: string;
  strengths: string;
  challenges: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Données des compatibilités
|--------------------------------------------------------------------------
*/

export const COMPATIBILITY_PAGES: CompatibilityPageData[] = [
  {
    signA: "belier",
    signB: "belier",

    score: 78,

    title:
      "Compatibilité amoureuse entre Bélier et Bélier",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Bélier : attraction, communication, confiance, forces, défis et conseils pour le couple.",

    introduction:
      "La rencontre entre deux Bélier réunit deux personnalités spontanées, passionnées et déterminées. Cette relation peut avancer rapidement, portée par une énergie commune très forte. Elle demande cependant aux deux partenaires d’apprendre à partager l’initiative et à respecter le rythme de l’autre.",

    love:
      "En amour, deux Bélier recherchent généralement une relation vivante, directe et stimulante. Ils aiment sentir que le lien avance et que la passion reste présente. Leur spontanéité peut créer une histoire intense dès les premiers instants, mais ils doivent aussi apprendre à construire une stabilité au-delà de l’enthousiasme initial.",

    communication:
      "Leur communication est souvent franche et immédiate. Aucun des deux n’apprécie particulièrement les sous-entendus ou les longues hésitations. Cette honnêteté peut être une force, mais les échanges risquent de devenir brusques lorsque chacun souhaite avoir le dernier mot.",

    attraction:
      "L’attirance peut être très forte dès le départ. Chacun reconnaît chez l’autre la même audace, la même énergie et le même goût de l’action. Cette intensité nourrit la passion, mais elle peut aussi transformer la relation en compétition si chacun cherche constamment à impressionner ou à diriger l’autre.",

    trust:
      "La confiance peut s’installer rapidement lorsque les intentions sont clairement exprimées. Les deux partenaires apprécient généralement la loyauté et la franchise. Toutefois, leur impulsivité peut provoquer des réactions précipitées ou des paroles regrettées qui fragilisent temporairement le sentiment de sécurité.",

    dailyLife:
      "Le quotidien de deux Bélier est rarement monotone. Ils aiment entreprendre, bouger, décider et lancer de nouveaux projets. Pour éviter de s’épuiser ou d’abandonner trop rapidement leurs idées, ils gagnent à mieux organiser leurs priorités et à partager les responsabilités.",

    strengths:
      "Cette union possède beaucoup d’énergie, de courage et de capacité à rebondir. Ensemble, les deux Bélier peuvent se motiver, se défendre et affronter les obstacles avec détermination. Leur enthousiasme commun peut également rendre la relation très vivante et inspirante.",

    challenges:
      "Le principal défi consiste à éviter les luttes de pouvoir. Deux personnalités très affirmées peuvent transformer une différence d’opinion en compétition. Les réactions impulsives, l’impatience et la difficulté à céder peuvent alors amplifier des conflits qui auraient pu rester mineurs.",

    advice:
      "Pour renforcer leur relation, les deux partenaires doivent apprendre à alterner les initiatives et à laisser à chacun un espace d’autonomie. Prendre quelques instants avant de répondre pendant un conflit peut aussi les aider à exprimer leurs besoins sans transformer chaque désaccord en affrontement.",

    conclusion:
      "Bélier et Bélier peuvent former un couple passionné, courageux et dynamique. Leur relation fonctionne particulièrement bien lorsqu’ils transforment leur esprit de compétition en collaboration. En apprenant à ralentir, à écouter et à partager les décisions, ils peuvent bâtir une union aussi solide qu’intense.",
  },
];

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

export function getSignByKey(key: SignKey) {
  return SIGNS.find((sign) => sign.key === key);
}

export function getCompatibilityPage(
  signA: SignKey,
  signB: SignKey,
) {
  return COMPATIBILITY_PAGES.find(
    (page) =>
      page.signA === signA &&
      page.signB === signB,
  );
}

export function isSignKey(
  value: string,
): value is SignKey {
  return SIGNS.some(
    (sign) => sign.key === value,
  );
}
