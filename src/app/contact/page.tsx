import { SiteShell } from "@/components/site-shell";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${profile.name} for Laravel, Node.js, Python APIs, Next.js, cloud deploys, payment integration, and full-stack product work.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
          Let’s build the next reliable system together.
        </h1>
        <p className="mt-6 max-w-xl text-[var(--muted)]">
          Backend APIs in Laravel, Node.js, and Python, payment integrations, live
          cloud deploys, and full-stack product work. Reach out with the brief — I’ll
          respond from the same inbox.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-[#1a140c] transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
      </main>
    </SiteShell>
  );
}
