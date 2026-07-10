const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export function assetUrl(path: string): string {
  return `${SITE_URL}${
    path.startsWith("/") ? path : `/${path}`
  }`;
}

export const LOGO_URL = assetUrl(
  "/logo-luna-astralis.png"
);

export const PLANET_ICONS: Record<
  string,
  string
> = {
  Sun: assetUrl("/astrology/sun.png"),
  Moon: assetUrl("/astrology/moon.png"),
  Mercury: assetUrl(
    "/astrology/mercury.png"
  ),
  Venus: assetUrl(
    "/astrology/venus.png"
  ),
  Mars: assetUrl("/astrology/mars.png"),
  Jupiter: assetUrl(
    "/astrology/jupiter.png"
  ),
  Saturn: assetUrl(
    "/astrology/saturn.png"
  ),
  Uranus: assetUrl(
    "/astrology/uranus.png"
  ),
  Neptune: assetUrl(
    "/astrology/neptune.png"
  ),
  Pluto: assetUrl(
    "/astrology/pluto.png"
  ),
};

export const ASCENDANT_ICON = assetUrl(
  "/astrology/ascendant.png"
);
