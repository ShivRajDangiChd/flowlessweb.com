import { BlogIndex } from "@/components/blog-index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Tech Questions, Answered",
  description:
    "Plain-language answers to common questions about websites, e-commerce, mobile apps, backend and cloud, AI chatbots, MCP and SEO, from the Flawless Web team.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
