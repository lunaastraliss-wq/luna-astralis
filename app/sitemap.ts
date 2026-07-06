import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://luna-astralis.app";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/login`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/conditions`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/confidentialite`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), priority: 0.3 },
  ];
}
