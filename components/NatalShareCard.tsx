"use client";

import fr from "../i18n/migrated/fr/components/natalsharecard.json";
import en from "../i18n/migrated/en/components/natalsharecard.json";
import es from "../i18n/migrated/es/components/natalsharecard.json";
import de from "../i18n/migrated/de/components/natalsharecard.json";
import it from "../i18n/migrated/it/components/natalsharecard.json";
import pt from "../i18n/migrated/pt/components/natalsharecard.json";

import type { Locale } from "@/i18n/config";

import NatalChartWheel from "./NatalChartWheel";

type Dictionary =
  Record<string, string>;

type Props = {
  locale: Locale;
  title: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  planets: any[];
  houses: any;
  angles: any;
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

function formatBirthDate(
  date: string,
  locale: Locale
): string {
  if (!date) {
    return "";
  }

  if (
    date.includes("/")
  ) {
    return date;
  }

  const [
    year,
    month,
    day,
  ] =
    date.split("-");

  if (
    !year ||
    !month ||
    !day
  ) {
    return date;
  }

  /*
   * Le formulaire utilise toujours le format
   * jour/mois/année. On conserve donc ce format
   * visuel pour les six langues.
   */
  if (
    locale === "de"
  ) {
    return `${day}.${month}.${year}`;
  }

  return `${day}/${month}/${year}`;
}

export default function NatalShareCard({
  locale,
  title,
  birthDate,
  birthTime,
  birthCity,
  planets,
  houses,
  angles,
}: Props) {
  const dictionary =
    DICTIONARIES[
      locale
    ];

  const formattedDate =
    formatBirthDate(
      birthDate,
      locale
    );

  const details =
    [
      formattedDate,
      birthTime,
      birthCity,
    ]
      .filter(Boolean)
      .join(" • ");

  return (
    <div className="natal-share-card">
      <div className="natal-share-stars" />

      <div className="natal-share-header">
        <div className="natal-share-brand">
          {
            dictionary[
              "luna_astralis"
            ]
          }
        </div>

        <h2>
          {title}
        </h2>

        {details ? (
          <p>
            {details}
          </p>
        ) : null}
      </div>

      <div className="natal-share-wheel">
        <NatalChartWheel
          locale={
            locale
          }
          planets={
            planets
          }
          houses={
            houses
          }
          ascendantLongitude={
            angles
              ?.ascendant
              ?.longitude
          }
          midheavenLongitude={
            angles
              ?.midheaven
              ?.longitude
          }
          size={
            700
          }
        />
      </div>

      <div className="natal-share-footer">
        <strong>
          {
            dictionary[
              "votre_theme_astral_est_unique"
            ]
          }
        </strong>

        <span>
          {
            dictionary[
              "explorez_en_toute_la_richesse_sur_luna_astralis"
            ]
          }
        </span>
      </div>

      <div className="natal-share-site">
        www.luna-astralis.app
      </div>
    </div>
  );
}
