import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/post-body";
import { SiteShell } from "@/components/site-shell";
import { PrimaryButton } from "@/components/ui";
import { formatDate, getPost, posts, readingMinutes } from "@/data/posts";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteShell>
      <main>
        <article className="mx-auto max-w-3xl px-6 pt-14 pb-20">
          <Link href="/blog" className="text-sm font-medium text-[var(--accent-strong)] hover:underline">
            ← All questions
          </Link>
          <span className="mt-8 block w-fit rounded-full bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--accent-strong)]">
            {post.tag}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-[1.15]">{post.title}</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            By the {site.name} team · {formatDate(post.date)} · {readingMinutes(post)} min read
          </p>

          <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-strong)] uppercase">Quick answer</p>
            <p className="mt-2 text-lg leading-8 text-[var(--fg)]">{post.quick}</p>
          </div>

          <div className="mt-10">
            <PostBody blocks={post.blocks} />
          </div>

          <div className="glow mt-16 rounded-3xl border border-[var(--line)] bg-[var(--panel)] px-6 py-10 text-center">
            <h2 className="text-xl font-semibold tracking-tight">Have a question of your own?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[var(--muted)]">
              Ask us about your project. We reply with straight answers and a plan.
            </p>
            <div className="mt-6">
              <PrimaryButton subject={`Question: ${post.title}`}>Ask us a question</PrimaryButton>
            </div>
          </div>
        </article>

        <section className="border-t border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-xl font-semibold tracking-tight">More questions, answered</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block h-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5 transition-colors hover:border-[var(--accent)]"
                  >
                    <span className="text-xs font-semibold text-[var(--accent-strong)]">{item.tag}</span>
                    <p className="mt-2 font-semibold leading-snug">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: `${site.url}/blog/${post.slug}`,
              author: { "@type": "Organization", name: site.name },
              publisher: { "@type": "Organization", name: site.name, url: site.url },
            }),
          }}
        />
      </main>
    </SiteShell>
  );
}
