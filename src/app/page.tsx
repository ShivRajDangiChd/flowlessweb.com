import Link from "next/link";
import { HeroPhoto } from "@/components/hero-photo";
import { ProjectGrid } from "@/components/project-grid";
import { SiteShell } from "@/components/site-shell";
import { SkillGrid } from "@/components/skill-grid";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
  path: "/",
});

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
              {profile.role} · {profile.location}
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Building systems
              <br />
              that stay reliable
              <br />
              when it counts.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                View selected work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-[var(--line)]" />
            <HeroPhoto
              photos={profile.photos}
              alt={`Portrait of ${profile.name}, full-stack developer`}
            />
            <p className="mt-4 font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
              {profile.name} — available for product work
            </p>
          </div>
        </section>

        <section className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
                  Selected work
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight">
                  Projects that shipped
                </h2>
              </div>
              <Link href="/work" className="hidden text-sm text-[var(--accent)] md:block">
                All work →
              </Link>
            </div>
            <ProjectGrid titleAs="h3" />
          </div>
        </section>

        <section className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
              Capabilities
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight">
              Core stack
            </h2>
            <div className="mt-12">
              <SkillGrid headingAs="h3" limit={3} />
            </div>
            <Link href="/skills" className="mt-10 inline-block text-sm text-[var(--accent)]">
              Full skills →
            </Link>
          </div>
        </section>

        <section className="border-t border-[var(--line)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight">
              About
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
              <p>{profile.about[0]}</p>
              <Link href="/about" className="inline-block text-sm text-[var(--accent)]">
                More about Shiv →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
