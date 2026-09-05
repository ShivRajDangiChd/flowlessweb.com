import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { SkillGrid } from "@/components/skill-grid";
import { profile, skillKeywords } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Skills",
  description: `${profile.name}'s stack: Next.js, React, Laravel, Node.js, Python REST APIs, PHP, Firebase, Stripe, Razorpay, MySQL, AWS, GCP, Azure, and Cloudflare.`,
  path: "/skills",
});

const focus = [
  "Laravel · Node.js · Python APIs",
  "AWS · GCP · Azure deploys",
  "Payment integrations",
  "Real-time systems",
  "API security",
];

const toolbox = Array.from(new Set(skillKeywords));

export default function SkillsPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
              Capabilities
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              The stack behind the systems I ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Laravel, Node.js, and Python REST APIs. Next.js and React interfaces.
              Stripe and Razorpay payments. Firebase messaging. MySQL schemas. Live
              deploys to AWS, Google Cloud, Azure, and Cloudflare — chosen for
              reliability rather than novelty.
            </p>

            <ul className="mt-9 flex flex-wrap gap-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[color-mix(in_oklab,var(--accent)_35%,transparent)] px-4 py-1.5 font-mono text-[11px] tracking-widest text-[var(--accent)] uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                By discipline
              </h2>
              <p className="max-w-sm text-sm text-[var(--muted)]">
                Six areas that cover a product end to end — from schema and APIs to
                checkout, cloud servers, and the page a customer lands on.
              </p>
            </div>
            <SkillGrid headingAs="h3" />
          </div>
        </section>

        <section className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
              Full toolbox
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Everything above, in one place.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {toolbox.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
              Where it has been used
            </h2>
            <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {profile.projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex flex-wrap items-center justify-between gap-3 py-5 transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="text-base">{project.title}</span>
                    <span className="font-mono text-xs tracking-wide text-[var(--muted)] uppercase">
                      {project.stack.join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                Need this stack on your project?
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Send the brief and I will tell you what it takes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#1a140c] transition-opacity hover:opacity-90"
              >
                Get in touch
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]"
              >
                See the work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
