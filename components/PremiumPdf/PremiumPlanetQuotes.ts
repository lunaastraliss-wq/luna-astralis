export const PREMIUM_PLANET_QUOTES: Record<
  string,
  string
> = {
  Sun:
    "Lorsque votre identité est alignée avec vos valeurs profondes, votre lumière devient naturellement visible.",

  Moon:
    "Vos émotions ne sont pas une faiblesse : elles constituent votre système de navigation intérieur.",

  Mercury:
    "Chaque idée devient une source de transformation lorsqu'elle est comprise avant d'être exprimée.",

  Venus:
    "L'amour le plus durable commence toujours par le respect de votre propre valeur.",

  Mars:
    "L'action devient puissante lorsqu'elle reste fidèle à vos convictions profondes.",

  Jupiter:
    "Votre croissance ne dépend pas seulement des occasions que vous rencontrez, mais surtout de la confiance avec laquelle vous les accueillez.",

  Saturn:
    "Chaque difficulté surmontée construit une force que rien ne pourra ensuite vous retirer.",

  Uranus:
    "Votre différence cesse d'être un obstacle lorsqu'elle devient un choix assumé.",

  Neptune:
    "Votre intuition éclaire le chemin lorsque votre esprit demeure suffisamment calme pour l'écouter.",

  Pluto:
    "Chaque transformation abandonne une ancienne version de vous-même afin de révéler une force plus authentique.",
};

export function getPremiumPlanetQuote(
  planet: string
): string {
  return (
    PREMIUM_PLANET_QUOTES[
      planet
    ] ||
    "Chaque expérience contient une possibilité de mieux vous connaître."
  );
}
