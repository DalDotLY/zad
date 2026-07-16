import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "WhatsApp", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
