import Image from "next/image";
import Link from "next/link";
import {
  IconBook,
  IconBriefcase,
  IconBuilding,
  IconGitHub,
  IconLink,
  IconLinkedIn,
  IconMail,
  IconPin,
} from "@/components/icons";
import { SiteShell } from "@/components/site-shell";
import { profile, skillKeywords } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${profile.name}, a full-stack developer in ${profile.location} with ${profile.experience} building Laravel, Node.js, and Python APIs, Next.js frontends, payments, and cloud deploys.`,
  path: "/about",
});

const toolbox = Array.from(new Set(skillKeywords)).slice(0, 18);

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[290px_1fr]">
          <aside className="md:sticky md:top-24 md:self-start">
            <Image
              src="/shivraj.png"
              alt={`Portrait of ${profile.name}`}
              width={380}
              height={380}
              priority
              className="aspect-square w-44 rounded-full border border-[var(--line)] object-cover md:w-full"
            />

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-none tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1.5 font-mono text-sm text-[var(--muted)]">
              @{profile.handle}
            </p>

            <p className="mt-5 leading-relaxed text-[var(--muted)]">{profile.bio}</p>

            <Link
              href="/contact"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#1a140c] transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>

            <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-2.5">
                <IconBriefcase className="shrink-0 text-[var(--accent)]" />
                {profile.role}
              </li>
              <li className="flex items-center gap-2.5">
                <IconBuilding className="shrink-0 text-[var(--accent)]" />
                {profile.company}
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin className="shrink-0 text-[var(--accent)]" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail className="shrink-0 text-[var(--accent)]" />
                <a href={`mailto:${profile.email}`} className="hover:text-[var(--fg)]">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconLink className="shrink-0 text-[var(--accent)]" />
                <a href={profile.site} className="hover:text-[var(--fg)]">
                  flowlessweb.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconGitHub className="shrink-0 text-[var(--accent)]" />
                <a
                  href={profile.links.github}
                  rel="me noreferrer"
                  target="_blank"
                  className="hover:text-[var(--fg)]"
                >
                  {profile.handle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconLinkedIn className="shrink-0 text-[var(--accent)]" />
                <a
                  href={profile.links.linkedin}
                  rel="me noreferrer"
                  target="_blank"
                  className="hover:text-[var(--fg)]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </aside>

          <div className="space-y-6">
            <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)]">
              <header className="flex items-center gap-2 border-b border-[var(--line)] px-6 py-3.5 font-mono text-xs text-[var(--muted)]">
                <IconBook className="text-[var(--accent)]" />
                {profile.handle.toLowerCase()} / README.md
              </header>
              <div className="space-y-5 px-6 py-6 leading-relaxed text-[var(--muted)]">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-end justify-between gap-4">
                <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  Featured projects
                </h2>
                <Link href="/work" className="text-sm text-[var(--accent)]">
                  All work →
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.projects.map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col rounded-2xl border border-[var(--line)] p-5 transition-colors hover:border-[var(--accent)]"
                  >
                    <h3 className="text-sm font-medium">
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-[var(--accent)] hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                    <p className="mt-4 flex items-center gap-2 font-mono text-[11px] tracking-wide text-[var(--muted)] uppercase">
                      <span
                        aria-hidden="true"
                        className="size-2.5 rounded-full bg-[var(--accent)]"
                      />
                      {project.stack.join(" · ")}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[var(--line)] p-6">
              <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Stack I work in
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {toolbox.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/skills"
                className="mt-6 inline-block text-sm text-[var(--accent)]"
              >
                Full skills →
              </Link>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
