// lib/geocoding.ts

import type {
  Locale,
} from "@/i18n/config";

export type GeocodeResult = {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country: string;
};

/*
|--------------------------------------------------------------------------
| Géocodage multilingue
|--------------------------------------------------------------------------
|
| La langue est facultative pour conserver la compatibilité avec le code
| actuel. Sans langue fournie, les résultats restent en français.
|
*/

export async function geocodeCity(
  cityName: string,
  locale: Locale = "fr",
): Promise<GeocodeResult | null> {
  try {
    const searchParams =
      new URLSearchParams({
        name: cityName,
        count: "1",
        language: locale,
        format: "json",
      });

    const url =
      `https://geocoding-api.open-meteo.com/v1/search?${searchParams.toString()}`;

    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const first = data?.results?.[0];

    if (!first) {
      return null;
    }

    return {
      name: first.name,
      latitude: first.latitude,
      longitude: first.longitude,
      timezone:
        first.timezone || "UTC",
      country:
        first.country || "",
    };
  } catch {
    return null;
  }
}
