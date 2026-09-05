import { ProjectGrid } from "@/components/project-grid";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description: `Selected product work by ${profile.name}: Laravel backends, payment systems, mobile APIs, and real-time admin tools.`,
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
          Portfolio
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
          Work
        </h1>
        <p className="mt-5 max-w-2xl text-[var(--muted)]">
          Backend-heavy product work: payments, notifications, mobile APIs, and ops tools.
        </p>
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </main>
    </SiteShell>
  );
}
