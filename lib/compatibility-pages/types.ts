import type {
  SignKey,
} from "../compatibility";

/*
|--------------------------------------------------------------------------
| Type d'une page de compatibilité
|--------------------------------------------------------------------------
*/

export type CompatibilityPageData = {
  signA: SignKey;
  signB: SignKey;

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
