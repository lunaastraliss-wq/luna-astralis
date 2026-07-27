import type { SignKey } from "./compatibility";

export type CompatibilityPageData = {
  signA: SignKey;
  signB: SignKey;

  score: number;
  title: string;
  introduction: string;

  love: string;
  communication: string;
  attraction: string;
  trust: string;
  dailyLife: string;
  challenges: string;
  strengths: string;
  advice: string;
  conclusion: string;
};

export const COMPATIBILITY_PAGES: CompatibilityPageData[] = [
  {
    signA: "belier",
    signB: "belier",

    score: 78,

    title:
      "Compatibilité amoureuse entre Bélier et Bélier",

    introduction:
      "La rencontre entre deux Bélier réunit deux personnalités spontanées, passionnées et déterminées. Cette relation peut avancer très vite, portée par une forte énergie commune, mais elle demande aussi d’apprendre à partager l’initiative.",

    love:
      "En amour, deux Bélier recherchent une relation vivante, directe et stimulante. Ils expriment généralement leurs sentiments avec intensité et préfèrent agir plutôt que laisser les choses s’installer lentement.",

    communication:
      "Leur communication est franche et immédiate. Les désaccords peuvent toutefois devenir rapides et explosifs lorsque chacun cherche à imposer son point de vue.",

    attraction:
      "L’attirance est souvent forte dès le départ. Chacun reconnaît chez l’autre la même audace, la même passion et le même besoin de mouvement.",

    trust:
      "La confiance peut être solide lorsque les intentions sont clairement exprimées. Les comportements impulsifs ou la compétition peuvent néanmoins créer des doutes.",

    dailyLife:
      "Le quotidien est rarement monotone. Les deux partenaires aiment entreprendre, décider et lancer de nouveaux projets, mais ils doivent apprendre à maintenir ce qu’ils commencent.",

    challenges:
      "Le principal défi consiste à éviter les luttes de pouvoir. Deux personnalités très affirmées peuvent facilement transformer une différence d’opinion en compétition.",

    strengths:
      "Cette union possède beaucoup d’énergie, de courage et de capacité à rebondir. Ensemble, les deux Bélier peuvent se motiver et affronter les obstacles avec détermination.",

    advice:
      "Alternez les initiatives, laissez à chacun un espace d’autonomie et prenez le temps de ralentir avant de réagir pendant un conflit.",

    conclusion:
      "Bélier et Bélier peuvent former un couple passionné et dynamique. Leur réussite dépend principalement de leur capacité à transformer la compétition en collaboration.",
  },
];
