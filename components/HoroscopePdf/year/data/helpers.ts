import type {
  BuildYearlySeedParams,
} from "./types";

/*
|--------------------------------------------------------------------------
| Normalisation du texte
|--------------------------------------------------------------------------
*/

export function normalizeSeedValue(
  value?: string | number,
): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

/*
|--------------------------------------------------------------------------
| Hash stable
|--------------------------------------------------------------------------
|
| Cette fonction retourne toujours le même nombre pour les mêmes données.
| Elle ne dépend pas de Math.random().
|
|--------------------------------------------------------------------------
*/

export function hashString(
  value: string,
): number {
  let hash = 2166136261;

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    hash ^= value.charCodeAt(index);

    hash = Math.imul(
      hash,
      16777619,
    );
  }

  return hash >>> 0;
}

/*
|--------------------------------------------------------------------------
| Construction du seed annuel personnalisé
|--------------------------------------------------------------------------
|
| Le seed dépend :
|
| - de l’identité de la personne ;
| - de son signe astrologique ;
| - de l’année du rapport ;
| - de la section générée.
|
| Une même personne obtient donc toujours le même contenu pour une même
| année et une même section.
|
|--------------------------------------------------------------------------
*/

export function buildYearlySeed({
  identity,
  period,
  section = "yearly",
}: BuildYearlySeedParams): number {
  const source = [
    normalizeSeedValue(
      identity.firstName,
    ),
    normalizeSeedValue(
      identity.birthDate,
    ),
    normalizeSeedValue(
      identity.birthTime,
    ),
    normalizeSeedValue(
      identity.birthPlace,
    ),
    normalizeSeedValue(
      identity.zodiacSign,
    ),
    normalizeSeedValue(
      period.year,
    ),
    normalizeSeedValue(section),
  ].join("|");

  return hashString(source);
}

/*
|--------------------------------------------------------------------------
| Mélange du seed
|--------------------------------------------------------------------------
|
| On utilise un offset différent pour chaque paragraphe afin d’éviter que
| toutes les catégories choisissent la même position dans leurs tableaux.
|
|--------------------------------------------------------------------------
*/

export function mixSeed(
  seed: number,
  offset: number,
): number {
  let mixed =
    seed ^
    Math.imul(
      offset + 1,
      0x9e3779b1,
    );

  mixed ^= mixed >>> 16;

  mixed = Math.imul(
    mixed,
    0x85ebca6b,
  );

  mixed ^= mixed >>> 13;

  mixed = Math.imul(
    mixed,
    0xc2b2ae35,
  );

  mixed ^= mixed >>> 16;

  return mixed >>> 0;
}

/*
|--------------------------------------------------------------------------
| Sélection d’une variante
|--------------------------------------------------------------------------
*/

export function pickVariant<T>(
  variants: readonly T[],
  seed: number,
  offset = 0,
): T {
  if (variants.length === 0) {
    throw new Error(
      "Impossible de sélectionner une variante dans un tableau vide.",
    );
  }

  const mixedSeed = mixSeed(
    seed,
    offset,
  );

  const index =
    mixedSeed % variants.length;

  return variants[index];
}

/*
|--------------------------------------------------------------------------
| Sélection de plusieurs variantes distinctes
|--------------------------------------------------------------------------
*/

export function pickDistinctVariants<T>(
  variants: readonly T[],
  quantity: number,
  seed: number,
  offset = 0,
): T[] {
  if (
    quantity <= 0 ||
    variants.length === 0
  ) {
    return [];
  }

  const requestedQuantity = Math.min(
    quantity,
    variants.length,
  );

  const availableIndexes =
    variants.map(
      (_, index) => index,
    );

  const selected: T[] = [];

  for (
    let position = 0;
    position < requestedQuantity;
    position += 1
  ) {
    const currentSeed = mixSeed(
      seed,
      offset + position,
    );

    const availablePosition =
      currentSeed %
      availableIndexes.length;

    const selectedIndex =
      availableIndexes[
        availablePosition
      ];

    selected.push(
      variants[selectedIndex],
    );

    availableIndexes.splice(
      availablePosition,
      1,
    );
  }

  return selected;
}
