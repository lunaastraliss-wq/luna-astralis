// lib/geocoding.ts

export type GeocodeResult = {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country: string;
};

export async function geocodeCity(cityName: string): Promise<GeocodeResult | null> {
  try {
    const url =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      encodeURIComponent(cityName) +
      "&count=1&language=fr&format=json";

    const res = await fetch(url);
    if (!res.ok) return null;

    const data = await res.json();
    const first = data?.results?.[0];
    if (!first) return null;

    return {
      name: first.name,
      latitude: first.latitude,
      longitude: first.longitude,
      timezone: first.timezone || "UTC",
      country: first.country || "",
    };
  } catch {
    return null;
  }
}
