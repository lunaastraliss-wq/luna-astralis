export const HOROSCOPE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://luna-astralis.app";

export const HOROSCOPE_LOGO_URL =
  `${HOROSCOPE_BASE_URL}/images/logo-luna-astralis.png`;
