import {
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  CompatibilityCoverProps,
} from "./CompatibilityPdfTypes";

import {
  styles,
} from "@/components/PremiumPdf/PremiumPdfStyles";

import {
  getCompatibilityPlanet,
  translateCompatibilityPlanet,
} from "./CompatibilityPdfUtils";

function getPersonLabel(
  firstName: string,
  fallback: string,
): string {
  const safeName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  return safeName || fallback;
}

function getMainPlacement(
  planets: CompatibilityCoverProps["person1"]["planets"],
  planetName: string,
): string {
  const planet =
    getCompatibilityPlanet(
      planets,
      planetName,
    );

  const sign =
    typeof planet?.sign === "string"
      ? planet.sign.trim()
      : "";

  if (!sign) {
    return "";
  }

  return `${translateCompatibilityPlanet(
    planetName,
  )} en ${sign}`;
}

export default function CompatibilityCover({
  person1,
  person2,
}: CompatibilityCoverProps) {
  const person1Name =
    getPersonLabel(
      person1.firstName,
      "Première personne",
    );

  const person2Name =
    getPersonLabel(
      person2.firstName,
      "Deuxième personne",
    );

  const person1Sun =
    getMainPlacement(
      person1.planets,
      "Sun",
    );

  const person1Moon =
    getMainPlacement(
      person1.planets,
      "Moon",
    );

  const person2Sun =
    getMainPlacement(
      person2.planets,
      "Sun",
    );

  const person2Moon =
    getMainPlacement(
      person2.planets,
      "Moon",
    );

  return (
    <Page
      size="A4"
      style={styles.page}
    >
      <View
        style={{
          minHeight: "100%",
          paddingTop: 58,
          paddingBottom: 48,
          paddingHorizontal: 46,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 10,
              letterSpacing: 3,
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Luna Astralis
          </Text>

          <Text
            style={{
              fontSize: 28,
              lineHeight: 1.2,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Compatibilité astrologique
          </Text>

          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            Rapport Premium personnalisé
          </Text>

          <View
            style={{
              marginTop: 14,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              {person1Name}
            </Text>

            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              &
            </Text>

            <Text
              style={{
                fontSize: 22,
                textAlign: "center",
              }}
            >
              {person2Name}
            </Text>
          </View>

          <View
            style={{
              marginTop: 22,
              padding: 18,
              borderWidth: 1,
              borderRadius: 12,
            }}
          >
            <View
              style={{
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                {person1Name}
              </Text>

              {!!person1Sun && (
                <Text
                  style={{
                    fontSize: 10,
                    marginBottom: 3,
                  }}
                >
                  {person1Sun}
                </Text>
              )}

              {!!person1Moon && (
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {person1Moon}
                </Text>
              )}
            </View>

            <View>
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                {person2Name}
              </Text>

              {!!person2Sun && (
                <Text
                  style={{
                    fontSize: 10,
                    marginBottom: 3,
                  }}
                >
                  {person2Sun}
                </Text>
              )}

              {!!person2Moon && (
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {person2Moon}
                </Text>
              )}
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 1.6,
              textAlign: "center",
              marginBottom: 14,
            }}
          >
            Une lecture approfondie de votre dynamique,
            de vos forces, de vos défis et de votre potentiel
            relationnel.
          </Text>

          <Text
            style={{
              fontSize: 8,
              textAlign: "center",
            }}
          >
            luna-astralis.app
          </Text>
        </View>
      </View>
    </Page>
  );
}
