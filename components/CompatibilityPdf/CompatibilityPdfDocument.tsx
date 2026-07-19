import { Document } from "@react-pdf/renderer";

import type {
  CompatibilityAspect,
  CompatibilityPdfProps,
} from "./CompatibilityPdfTypes";

import {
  calculateCompatibilityAspects,
  normalizeCompatibilityPerson,
} from "./CompatibilityPdfUtils";

import {
  calculateCompatibilityScores,
} from "./CompatibilityScoreCalculator";

import CompatibilityCover from "./CompatibilityCover";
import CompatibilityWheels from "./CompatibilityWheels";
import CompatibilityWelcome from "./CompatibilityWelcome";
import CompatibilityProfiles from "./CompatibilityProfiles";
import CompatibilityScores from "./CompatibilityScores";
import CompatibilityPillars from "./CompatibilityPillars";
import CompatibilityEmotional from "./CompatibilityEmotional";
import CompatibilityCommunication from "./CompatibilityCommunication";
import CompatibilityLove from "./CompatibilityLove";
import CompatibilityCouple from "./CompatibilityCouple";
import CompatibilityPlanets from "./CompatibilityPlanets";
import CompatibilityPlanetConnections from "./CompatibilityPlanetConnections";
import CompatibilityAspects from "./CompatibilityAspects";
import CompatibilityLife from "./CompatibilityLife";
import CompatibilitySummary from "./CompatibilitySummary";

/*
 * Vérifie et sécurise les aspects reçus depuis la route serveur.
 *
 * Si aucun aspect valide n’est fourni, le document les calcule
 * automatiquement à partir des longitudes planétaires des deux thèmes.
 */
function normalizeProvidedAspects(
  aspects: CompatibilityPdfProps["aspects"],
): CompatibilityAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects.filter(
    (
      aspect,
    ): aspect is CompatibilityAspect => {
      return (
        aspect !== null &&
        typeof aspect === "object" &&
        typeof aspect.person1Planet ===
          "string" &&
        aspect.person1Planet.trim().length >
          0 &&
        typeof aspect.person2Planet ===
          "string" &&
        aspect.person2Planet.trim().length >
          0 &&
        typeof aspect.type === "string" &&
        typeof aspect.orb === "number" &&
        Number.isFinite(aspect.orb) &&
        typeof aspect.person1Longitude ===
          "number" &&
        Number.isFinite(
          aspect.person1Longitude,
        ) &&
        typeof aspect.person2Longitude ===
          "number" &&
        Number.isFinite(
          aspect.person2Longitude,
        )
      );
    },
  );
}

export default function CompatibilityPdfDocument({
  person1,
  person2,
  aspects,
  scores,
}: CompatibilityPdfProps) {
  /*
   * Sécurisation complète des informations
   * astrologiques des deux personnes.
   */
  const safePerson1 =
    normalizeCompatibilityPerson(person1);

  const safePerson2 =
    normalizeCompatibilityPerson(person2);

  /*
   * Les aspects transmis par la route serveur sont
   * utilisés lorsqu’ils sont présents et valides.
   *
   * Sinon, ils sont calculés automatiquement à partir
   * des longitudes planétaires.
   */
  const providedAspects =
    normalizeProvidedAspects(aspects);

  const calculatedAspects =
    calculateCompatibilityAspects(
      safePerson1.planets,
      safePerson2.planets,
    );

  const safeAspects =
    providedAspects.length > 0
      ? providedAspects
      : calculatedAspects;

  /*
   * Les scores transmis par la route serveur sont utilisés
   * lorsqu’ils sont disponibles.
   *
   * Sinon, ils sont calculés automatiquement à partir
   * des aspects de synastrie.
   */
  const safeScores =
    scores ??
    calculateCompatibilityScores(
      safeAspects,
    );

  const person1Name =
    safePerson1.firstName.trim() ||
    "Première personne";

  const person2Name =
    safePerson2.firstName.trim() ||
    "Deuxième personne";

  const documentTitle =
    "Compatibilité astrologique Premium - " +
    `${person1Name} et ${person2Name}`;

  return (
    <Document
      title={documentTitle}
      author="Luna Astralis"
      subject="Rapport Premium personnalisé de compatibilité astrologique et de synastrie"
      creator="Luna Astralis"
      producer="Luna Astralis"
      language="fr-CA"
      keywords={[
        "astrologie",
        "compatibilité astrologique",
        "synastrie",
        "compatibilité amoureuse",
        "couple",
        "rapport Premium",
        "Luna Astralis",
      ].join(", ")}
    >
      {/* Page 1 — Couverture */}
      <CompatibilityCover
        person1={safePerson1}
        person2={safePerson2}
      />

      {/* Page 2 — Roues astrologiques */}
      <CompatibilityWheels
        person1={safePerson1}
        person2={safePerson2}
      />

      {/* Page 3 — Bienvenue */}
      <CompatibilityWelcome
        person1={safePerson1}
        person2={safePerson2}
      />

      {/* Page 4 — Profils astrologiques */}
      <CompatibilityProfiles
        person1={safePerson1}
        person2={safePerson2}
      />

      {/* Page 5 — Scores de compatibilité */}
      <CompatibilityScores
        person1={safePerson1}
        person2={safePerson2}
        scores={safeScores}
      />

      {/* Page 6 — Piliers de la relation */}
      <CompatibilityPillars
        person1={safePerson1}
        person2={safePerson2}
      />

      {/* Page 7 — Compatibilité émotionnelle */}
      <CompatibilityEmotional
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Page 8 — Communication */}
      <CompatibilityCommunication
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 9 à 12 — Amour */}
      <CompatibilityLove
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 13 à 16 — Dynamique du couple */}
      <CompatibilityCouple
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 17 à 21 — Planètes */}
      <CompatibilityPlanets
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 22 à 28 — Connexions planétaires */}
      <CompatibilityPlanetConnections
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 29 à 36 — Aspects de synastrie */}
      <CompatibilityAspects
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 37 à 44 — Vie commune */}
      <CompatibilityLife
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />

      {/* Pages 45 à 50 — Synthèse et conclusion */}
      <CompatibilitySummary
        person1={safePerson1}
        person2={safePerson2}
        aspects={safeAspects}
      />
    </Document>
  );
}
