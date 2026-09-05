import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getProject, profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return pageMetadata({
      title: "Project",
      description: profile.summary,
      path: `/work/${slug}`,
    });
  }

  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
          <ol className="flex gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--fg)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/work" className="hover:text-[var(--fg)]">
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--fg)]">{project.title}</li>
          </ol>
        </nav>

        <p className="mt-10 font-mono text-xs text-[var(--accent)]">{project.number}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] tracking-wide text-[var(--muted)] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        <section className="mt-12 space-y-4">
          <h2 className="text-sm font-medium">What shipped</h2>
          <ul className="space-y-3 text-[var(--muted)]">
            {project.details.map((item) => (
              <li key={item} className="border-b border-[var(--line)] pb-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12">
          <Link href="/work" className="text-sm text-[var(--accent)]">
            ← All work
          </Link>
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: profile.site,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Work",
                  item: `${profile.site}/work`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: project.title,
                  item: `${profile.site}/work/${project.slug}`,
                },
              ],
            }),
          }}
        />
      </main>
    </SiteShell>
  );
}
