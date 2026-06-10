import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://screen-doctor.vercel.app";
  return ["", "/privacy", "/terms"].map((path, index) => ({
    url: `${site}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.4,
  }));
}
