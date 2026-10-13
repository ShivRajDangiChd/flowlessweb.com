import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, site.url).toString();
  const full = path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: { title: full, description, url, siteName: site.name, type: "website" },
    twitter: { card: "summary", title: full, description },
  };
}
