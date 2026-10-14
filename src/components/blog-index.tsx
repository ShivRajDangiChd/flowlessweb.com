import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { SiteShell } from "@/components/site-shell";
import { Eyebrow } from "@/components/ui";
import { formatDate, posts, postsForPage, readingMinutes, totalPages } from "@/data/posts";

export function BlogIndex({ page }: { page: number }) {
  const pages = totalPages();
  const items = postsForPage(page);

  return (
    <SiteShell>
      <main>
        <section className="glow border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Tech questions, answered in plain language.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
              Short, honest explanations of the things business owners ask us most about websites,
              apps, backend systems and AI.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-6 text-sm text-[var(--muted)]">
            {posts.length} articles · Page {page} of {pages}
          </p>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-24px_rgba(79,70,229,0.5)]"
                >
                  <span className="w-fit rounded-full bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    {post.tag}
                  </span>
                  <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{post.description}</p>
                  <p className="mt-5 flex items-center justify-between text-xs text-[var(--muted)]">
                    <span>
                      {formatDate(post.date)} · {readingMinutes(post)} min read
                    </span>
                    <span className="font-semibold text-[var(--accent-strong)] group-hover:underline">Read →</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination current={page} total={pages} />
        </section>
      </main>
    </SiteShell>
  );
}
