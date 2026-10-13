import { site } from "@/data/site";

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">{children}</p>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full bg-[var(--fg)] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
    >
      {children}
    </a>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 size-3.5 shrink-0 text-[var(--accent)]" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
