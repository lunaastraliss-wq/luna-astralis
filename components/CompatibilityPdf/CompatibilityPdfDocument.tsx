import { Document } from "@react-pdf/renderer";

import type {
  CompatibilityAspect,
  CompatibilityPdfProps,
} from "./CompatibilityPdfTypes";

import {
  calculateCompatibilityAspects,
  normalizeCompatibilityPerson,
} from "./CompatibilityPdfUtils";

import CompatibilityCover from "./CompatibilityCover";
import CompatibilityWheels from "./CompatibilityWheels";
import CompatibilityWelcome from "./CompatibilityWelcome";
import CompatibilityProfiles from "./CompatibilityProfiles";
import CompatibilitySunMoonAscendant from "./CompatibilitySunMoonAscendant";
import CompatibilityLove from "./CompatibilityLove";
import CompatibilityCommunication from "./CompatibilityCommunication";
import CompatibilityEmotions from "./CompatibilityEmotions";
import CompatibilityAttraction from "./CompatibilityAttraction";
import CompatibilityAspects from "./CompatibilityAspects";
import CompatibilityStrengthsChallenges from "./CompatibilityStrengthsChallenges";
import CompatibilityLongTermPotential from "./CompatibilityLongTermPotential";
import CompatibilitySynthesis from "./CompatibilitySynthesis";
import CompatibilityConclusion from "./CompatibilityConclusion";

/*
 * Vérifie et sécurise les aspects reçus depuis la route serveur.
 *
 * Si aucun aspect valide n’est fourni, le document
 * les calcule automatiquement à partir des longitudes
 * des deux thèmes astrologiques.
 */
function normalizeProvidedAspects(
  aspects: CompatibilityPdfProps["aspects"],
): CompatibilityAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects.filter((aspect) => {
    return (
      aspect &&
      typeof aspect === "object" &&
      typeof aspect.person1Planet === "string" &&
      typeof aspect.person2Planet === "string" &&
      typeof aspect.type === "string" &&
      typeof aspect.orb === "number" &&
      Number.isFinite(aspect.orb) &&
      typeof aspect.person1Longitude === "number" &&
      Number.isFinite(
        aspect.person1Longitude,
      ) &&
      typeof aspect.person2Longitude === "number" &&
      Number.isFinite(
        aspect.person2Longitude,
      )
    );
  });
}

export default function CompatibilityPdfDocument({
  person1,
  person2,
  aspects,
}: CompatibilityPdfProps) {
  /*
   * Les deux personnes sont normalisées séparément.
   *
   * Les chaînes deviennent toujours des chaînes valides,
   * les planètes sont normalisées et les angles sont sécurisés.
   */
  const safePerson1 =
    normalizeCompatibilityPerson(person1);

  const safePerson2 =
    normalizeCompatibilityPerson(person2);

  /*
   * On utilise les aspects fournis lorsqu’ils sont valides.
   *
   * Sinon, la synastrie est calculée automatiquement
   * à partir des longitudes planétaires.
   */
  const providedAspects =
    normalizeProvidedAspects(aspects);

  const safeAspects =
    providedAspects.length > 0
      ? providedAspects
      : calculateCompatibilityAspects(
          safePerson1.planets,
          safePerson2.planets,
        );

  const person1Name =
    safePerson1.firstName ||
    "Première personne";

  const person2Name =
    safePerson2.firstName ||
    "Deuxième personne";

  const documentTitle =
    `Compatibilité astrologique Premium - ` +
    `${person1Name} et ${person2Name}`;

  return (
    <Document
      title={documentTitle}
      author="Luna Astralis"
      subject="Rapport de compatibilité astrologique Premium personnalisé"
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "astrologie",
        "compatibilité astrologique",
        "synastrie",
        "compatibilité amoureuse",
        "rapport Premium",
        "Luna Astralis",
      ].join(", ")}
    >
      <CompatibilityCover
        person1={safePerson1}
        person2={safePerson2}
      />

      <CompatibilityWheels
        person1={safePerson1}
        person2={safePerson2}
      />

      <CompatibilityWelcome
        person1={safePerson1}
        person2={safePerson2}
      />

      <CompatibilityProfiles
        person1={safePerson1}
        person2={safePerson2}
      />

      <CompatibilitySunMoonAscendant
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityLove
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityCommunication
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityEmotions
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityAttraction
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityAspects
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityStrengthsChallenges
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityLongTermPotential
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilitySynthesis
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      <CompatibilityConclusion
        person1={safePerson1}
        person2={safePerson2}
      />
    </Document>
  );
}
