import Link from "next/link";
import { profile, type Project } from "@/data/profile";

export function ProjectGrid({
  projects = profile.projects,
  titleAs: Title = "h2",
}: {
  projects?: readonly Project[];
  titleAs?: "h2" | "h3";
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 transition-colors hover:border-[var(--accent)]"
        >
          <span className="font-mono text-xs text-[var(--accent)]">
            {project.number}
          </span>
          <Title className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
            <Link href={`/work/${project.slug}`} className="hover:text-[var(--accent)]">
              {project.title}
            </Link>
          </Title>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] tracking-wide text-[var(--muted)] uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={`/work/${project.slug}`}
            className="mt-6 inline-block text-sm text-[var(--accent)]"
          >
            View project →
          </Link>
        </article>
      ))}
    </div>
  );
}
