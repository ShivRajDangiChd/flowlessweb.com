import { profile } from "@/data/profile";

export function Logo({ compact = false }: { compact?: boolean }) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <span className="group flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-[linear-gradient(140deg,rgba(212,164,90,0.32),rgba(212,164,90,0.04))] transition-colors group-hover:border-[var(--accent)]">
        <span className="font-[family-name:var(--font-display)] text-sm leading-none tracking-[0.02em] text-[var(--accent)]">
          {initials}
        </span>
      </span>

      {compact ? null : (
        <span className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-[17px] tracking-tight">
            {profile.name}
          </span>
          <span className="mt-1 hidden font-mono text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase sm:block">
            {profile.role}
          </span>
        </span>
      )}
    </span>
  );
}
