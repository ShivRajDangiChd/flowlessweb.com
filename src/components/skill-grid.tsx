import { SkillIcon } from "@/components/skill-icon";
import { profile } from "@/data/profile";

export function SkillGrid({
  headingAs: Heading = "h2",
  limit,
}: {
  headingAs?: "h2" | "h3";
  limit?: number;
}) {
  const groups = limit ? profile.skills.slice(0, limit) : profile.skills;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => (
        <article
          key={group.title}
          className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-7 transition-colors duration-300 hover:border-[var(--accent)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.12]"
          />

          <div className="relative flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-xl border border-[var(--line)] bg-[linear-gradient(140deg,rgba(212,164,90,0.28),rgba(212,164,90,0.03))] text-[var(--accent)]">
              <SkillIcon id={group.id} />
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <Heading className="relative mt-5 font-[family-name:var(--font-display)] text-xl tracking-tight">
            {group.title}
          </Heading>
          <p className="relative mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {group.blurb}
          </p>

          <ul className="relative mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_60%,transparent)] px-3 py-1.5 text-xs text-[var(--fg)] transition-colors group-hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
