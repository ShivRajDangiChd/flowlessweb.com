import type { Metadata } from "next";
import { profile, skillKeywords } from "@/data/profile";

export const defaultKeywords = [
  "Shiv Raj",
  "Full Stack Developer",
  "Laravel Developer",
  "Next.js Developer",
  "Stripe Integration",
  "Razorpay Integration",
  "Firebase Developer",
  "Python REST API",
  "Node.js Developer",
  "AWS",
  "GCP",
  "Azure",
  ...skillKeywords,
];

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, profile.site).toString();

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: defaultKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: path === "/" ? title : `${title} | ${profile.name}`,
      description,
      url,
      siteName: `${profile.name} Portfolio`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: path === "/" ? title : `${title} | ${profile.name}`,
      description,
    },
  };
}
