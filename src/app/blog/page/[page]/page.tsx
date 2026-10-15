import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogIndex } from "@/components/blog-index";
import { totalPages } from "@/data/posts";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, totalPages() - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { page } = await params;
  return pageMetadata({
    title: `Blog, page ${page}`,
    description: "More plain-language answers about websites, apps, backend systems and AI from the Flawless Web team.",
    path: `/blog/page/${page}`,
  });
}

export default async function BlogPageN({ params }: Params) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 1 || n > totalPages()) notFound();
  if (n === 1) redirect("/blog");
  return <BlogIndex page={n} />;
}
