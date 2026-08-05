"use client";

import fr from "../i18n/migrated/fr/components/natalfreesummary.json";
import en from "../i18n/migrated/en/components/natalfreesummary.json";
import es from "../i18n/migrated/es/components/natalfreesummary.json";
import de from "../i18n/migrated/de/components/natalfreesummary.json";
import it from "../i18n/migrated/it/components/natalfreesummary.json";
import pt from "../i18n/migrated/pt/components/natalfreesummary.json";

import type { Locale } from "@/i18n/config";

type Dictionary = Record<string, string>;

type Props = {
  locale: Locale;
  planets: any[];
  angles: any;
};

type SummaryTexts = {
  sunText: (sign: string) => string;
  moonText: (sign: string) => string;
  ascendantText: (sign: string) => string;
  ascendantFallback: string;
};

const DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

const SIGN_NAMES: Record<
  Locale,
  Record<string, string>
> = {
  fr: {
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
  },

  en: {
    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Cancer: "Cancer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces",
  },

  es: {
    Aries: "Aries",
    Taurus: "Tauro",
    Gemini: "Géminis",
    Cancer: "Cáncer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Escorpio",
    Sagittarius: "Sagitario",
    Capricorn: "Capricornio",
    Aquarius: "Acuario",
    Pisces: "Piscis",
  },

  de: {
    Aries: "Widder",
    Taurus: "Stier",
    Gemini: "Zwillinge",
    Cancer: "Krebs",
    Leo: "Löwe",
    Virgo: "Jungfrau",
    Libra: "Waage",
    Scorpio: "Skorpion",
    Sagittarius: "Schütze",
    Capricorn: "Steinbock",
    Aquarius: "Wassermann",
    Pisces: "Fische",
  },

  it: {
    Aries: "Ariete",
    Taurus: "Toro",
    Gemini: "Gemelli",
    Cancer: "Cancro",
    Leo: "Leone",
    Virgo: "Vergine",
    Libra: "Bilancia",
    Scorpio: "Scorpione",
    Sagittarius: "Sagittario",
    Capricorn: "Capricorno",
    Aquarius: "Acquario",
    Pisces: "Pesci",
  },

  pt: {
    Aries: "Áries",
    Taurus: "Touro",
    Gemini: "Gêmeos",
    Cancer: "Câncer",
    Leo: "Leão",
    Virgo: "Virgem",
    Libra: "Libra",
    Scorpio: "Escorpião",
    Sagittarius: "Sagitário",
    Capricorn: "Capricórnio",
    Aquarius: "Aquário",
    Pisces: "Peixes",
  },
};

const SUMMARY_TEXTS: Record<
  Locale,
  SummaryTexts
> = {
  fr: {
    sunText: (sign) =>
      `Votre Soleil en ${sign} montre votre identité profonde, votre manière de rayonner et ce qui vous anime intérieurement. C’est une énergie centrale dans votre thème astral.`,

    moonText: (sign) =>
      `Votre Lune en ${sign} parle de votre monde émotionnel, de vos besoins affectifs et de votre façon instinctive de réagir aux situations.`,

    ascendantText: (sign) =>
      `Votre Ascendant en ${sign} influence votre apparence extérieure, votre attitude spontanée et la première impression que vous laissez aux autres.`,

    ascendantFallback:
      "Votre Ascendant représente l’image que vous projetez, votre première réaction face au monde et la façon dont les autres vous perçoivent.",
  },

  en: {
    sunText: (sign) =>
      `Your Sun in ${sign} reflects your core identity, the way you shine and what motivates you from within. It is a central energy in your birth chart.`,

    moonText: (sign) =>
      `Your Moon in ${sign} describes your emotional world, your emotional needs and your instinctive way of reacting to situations.`,

    ascendantText: (sign) =>
      `Your Ascendant in ${sign} influences your outward appearance, your spontaneous attitude and the first impression you make on others.`,

    ascendantFallback:
      "Your Ascendant represents the image you project, your first reaction to the world and the way other people perceive you.",
  },

  es: {
    sunText: (sign) =>
      `Tu Sol en ${sign} muestra tu identidad profunda, tu manera de brillar y lo que te impulsa interiormente. Es una energía central de tu carta natal.`,

    moonText: (sign) =>
      `Tu Luna en ${sign} habla de tu mundo emocional, de tus necesidades afectivas y de tu forma instintiva de reaccionar ante las situaciones.`,

    ascendantText: (sign) =>
      `Tu Ascendente en ${sign} influye en tu apariencia exterior, tu actitud espontánea y la primera impresión que causas en los demás.`,

    ascendantFallback:
      "Tu Ascendente representa la imagen que proyectas, tu primera reacción ante el mundo y la forma en que los demás te perciben.",
  },

  de: {
    sunText: (sign) =>
      `Ihre Sonne in ${sign} zeigt Ihre tiefe Identität, Ihre natürliche Ausstrahlung und das, was Sie innerlich antreibt. Sie ist eine zentrale Energie Ihres Geburtshoroskops.`,

    moonText: (sign) =>
      `Ihr Mond in ${sign} beschreibt Ihre Gefühlswelt, Ihre emotionalen Bedürfnisse und Ihre instinktive Reaktion auf Situationen.`,

    ascendantText: (sign) =>
      `Ihr Aszendent in ${sign} beeinflusst Ihr äußeres Auftreten, Ihre spontane Haltung und den ersten Eindruck, den Sie bei anderen hinterlassen.`,

    ascendantFallback:
      "Ihr Aszendent steht für das Bild, das Sie ausstrahlen, Ihre erste Reaktion auf die Welt und die Art, wie andere Sie wahrnehmen.",
  },

  it: {
    sunText: (sign) =>
      `Il tuo Sole in ${sign} mostra la tua identità profonda, il tuo modo di brillare e ciò che ti anima interiormente. È un’energia centrale del tuo tema natale.`,

    moonText: (sign) =>
      `La tua Luna in ${sign} parla del tuo mondo emotivo, dei tuoi bisogni affettivi e del tuo modo istintivo di reagire alle situazioni.`,

    ascendantText: (sign) =>
      `Il tuo Ascendente in ${sign} influenza il tuo aspetto esteriore, il tuo atteggiamento spontaneo e la prima impressione che lasci agli altri.`,

    ascendantFallback:
      "Il tuo Ascendente rappresenta l’immagine che proietti, la tua prima reazione al mondo e il modo in cui gli altri ti percepiscono.",
  },

  pt: {
    sunText: (sign) =>
      `Seu Sol em ${sign} mostra sua identidade profunda, sua maneira de brilhar e o que o motiva interiormente. É uma energia central do seu mapa astral.`,

    moonText: (sign) =>
      `Sua Lua em ${sign} fala do seu mundo emocional, das suas necessidades afetivas e da sua forma instintiva de reagir às situações.`,

    ascendantText: (sign) =>
      `Seu Ascendente em ${sign} influencia sua aparência exterior, sua atitude espontânea e a primeira impressão que você causa nos outros.`,

    ascendantFallback:
      "Seu Ascendente representa a imagem que você projeta, sua primeira reação diante do mundo e a forma como os outros percebem você.",
  },
};

function getPlanet(
  planets: any[],
  name: string
) {
  return planets.find(
    (planet) =>
      planet?.name === name
  );
}

function getSignName(
  sign: string | undefined,
  locale: Locale
): string {
  if (!sign) {
    return "";
  }

  return (
    SIGN_NAMES[
      locale
    ][
      sign
    ] ||
    sign
  );
}

function translateFormattedSign(
  value: string | undefined,
  locale: Locale
): string {
  if (!value) {
    return "";
  }

  let translated =
    value;

  Object.entries(
    SIGN_NAMES[
      locale
    ]
  ).forEach(
    ([
      englishName,
      localizedName,
    ]) => {
      translated =
        translated.replace(
          new RegExp(
            englishName,
            "g"
          ),
          localizedName
        );
    }
  );

  return translated;
}

export default function NatalFreeSummary({
  locale,
  planets,
  angles,
}: Props) {
  const dictionary =
    DICTIONARIES[
      locale
    ];

  const texts =
    SUMMARY_TEXTS[
      locale
    ];

  const sun =
    getPlanet(
      planets,
      "Sun"
    );

  const moon =
    getPlanet(
      planets,
      "Moon"
    );

  const ascendant =
    angles?.ascendant;

  const sunSign =
    getSignName(
      sun?.signName,
      locale
    );

  const moonSign =
    getSignName(
      moon?.signName,
      locale
    );

  const ascendantSign =
    translateFormattedSign(
      ascendant?.formatted,
      locale
    );

  return (
    <section className="natal-free-summary">
      <div className="natal-summary-badge">
        {
          dictionary[
            "resume_gratuit"
          ]
        }
      </div>

      <h3>
        {
          dictionary[
            "les_grandes_lignes_de_votre_theme_astral"
          ]
        }
      </h3>

      <div className="natal-summary-grid">
        {sun ? (
          <article className="natal-summary-card">
            <div className="natal-summary-icon">
              ☉
            </div>

            <h4>
              {
                dictionary[
                  "votre_soleil"
                ]
              }
            </h4>

            <p>
              {
                texts.sunText(
                  sunSign
                )
              }
            </p>
          </article>
        ) : null}

        {moon ? (
          <article className="natal-summary-card">
            <div className="natal-summary-icon">
              ☽
            </div>

            <h4>
              {
                dictionary[
                  "votre_lune"
                ]
              }
            </h4>

            <p>
              {
                texts.moonText(
                  moonSign
                )
              }
            </p>
          </article>
        ) : null}

        <article className="natal-summary-card">
          <div className="natal-summary-icon">
            ⬆
          </div>

          <h4>
            {
              dictionary[
                "votre_ascendant"
              ]
            }
          </h4>

          <p>
            {ascendantSign
              ? texts.ascendantText(
                  ascendantSign
                )
              : texts.ascendantFallback}
          </p>
        </article>
      </div>
    </section>
  );
}
