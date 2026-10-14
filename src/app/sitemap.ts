import type { MetadataRoute } from "next";
import { posts, totalPages } from "@/data/posts";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/services", "/blog", "/about", "/privacy-policy", "/terms"];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/privacy-policy" || path === "/terms" ? 0.3 : 0.8,
    })),
    ...Array.from({ length: Math.max(0, totalPages() - 1) }, (_, i) => ({
      url: `${site.url}/blog/page/${i + 2}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
