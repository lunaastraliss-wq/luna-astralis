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

/* ---------- Logo ---------- */

export const LOGO_URL = assetUrl(
  "/logo-luna-astralis.png"
);

/* ---------- PDF Backgrounds ---------- */

export const COVER_BACKGROUND =
  assetUrl(
    "/astrology/cover-background.png"
  );

export const PAGE_BACKGROUND =
  assetUrl(
    "/astrology/page-background.png"
  );

export const CONCLUSION_BACKGROUND =
  assetUrl(
    "/astrology/conclusion-background.png"
  );

/* ---------- Astrology Icons ---------- */

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
  Mars: assetUrl(
    "/astrology/mars.png"
  ),
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

/* ---------- Element Icons ---------- */

export const ELEMENT_ICONS = {
  Feu: assetUrl(
    "/astrology/element-fire.png"
  ),
  Terre: assetUrl(
    "/astrology/element-earth.png"
  ),
  Air: assetUrl(
    "/astrology/element-air.png"
  ),
  Eau: assetUrl(
    "/astrology/element-water.png"
  ),
};

/* ---------- Modality Icons ---------- */

export const MODALITY_ICONS = {
  Cardinal: assetUrl(
    "/astrology/modality-cardinal.png"
  ),
  Fixe: assetUrl(
    "/astrology/modality-fixed.png"
  ),
  Mutable: assetUrl(
    "/astrology/modality-mutable.png"
  ),
};

/* ---------- Misc ---------- */

export const ASCENDANT_ICON =
  assetUrl(
    "/astrology/ascendant.png"
  );
