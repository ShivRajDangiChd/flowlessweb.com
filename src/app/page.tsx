import Link from "next/link";
import { Faq } from "@/components/faq";
import { HeroVisual } from "@/components/hero-visual";
import { CategoryIcon, ProjectIcon } from "@/components/illustrations";
import { SiteShell } from "@/components/site-shell";
import { WebModel } from "@/components/web-model";
import { Check, Eyebrow, PrimaryButton } from "@/components/ui";
import { categories, projectTypes, site, stackGroups, whyUs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name} | Web, Mobile App & AI Development Company`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="glow">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:pt-28">
            <div>
              <Eyebrow>{site.slogan}</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-[54px] sm:leading-[1.05]">
                Websites, apps and{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] bg-clip-text text-transparent">
                  AI products
                </span>{" "}
                for growing businesses.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
                Flowlessweb designs and builds the digital side of your business, from the
                first page to the AI that runs behind it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton subject="New project enquiry">Get a free quote</PrimaryButton>
                <Link href="/services" className="text-sm font-semibold text-[var(--accent-strong)] hover:underline">
                  See all services →
                </Link>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section aria-labelledby="tech-heading" className="border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 id="tech-heading" className="text-center font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">
              Technologies we work with
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5">
              {stackGroups.map((group) => (
                <div key={group.label} className="col-span-1 first:col-span-2 sm:first:col-span-1">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <span className={`size-2.5 rounded-full ${group.dot}`} aria-hidden="true" />
                    {group.label}
                  </h3>
                  {group.sections.map((section, index) => (
                    <div key={section.label ?? index} className="mt-3">
                      {section.label ? (
                        <p className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">{section.label}</p>
                      ) : null}
                      <ul className="mt-2 space-y-2 border-l border-[var(--line)] pl-4">
                        {section.items.map((item) => (
                          <li key={item} className="relative text-sm text-slate-700">
                            <span className="absolute top-1/2 -left-[19px] size-1.5 -translate-y-1/2 rounded-full bg-slate-300" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Six ways we help your business grow.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services#${category.slug}`}
                  className="group block h-full rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-24px_rgba(79,70,229,0.5)]"
                >
                  <CategoryIcon slug={category.slug} />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{category.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent-strong)]">{category.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{category.summary}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-[var(--accent-strong)] group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <WebModel />

        <section className="bg-[var(--ink)] text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-2)] uppercase">Why Flowlessweb</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                One team. Clear scope. No surprises.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Working with a development partner should feel simple. This is how we make it so.
              </p>
            </div>
            <ul className="space-y-5">
              {whyUs.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 text-[var(--accent-2)]"><Check /></span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Industries</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Built around the way your industry works.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <li key={type.name} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-4">
                <ProjectIcon name={type.name} />
                <span className="text-sm font-medium">{type.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <Faq />

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="glow rounded-3xl border border-[var(--line)] bg-[var(--panel)] px-8 py-16 text-center">
            <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
              Send us a short note about your idea. We&rsquo;ll reply with questions, a suggested
              plan and a fixed quote.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <PrimaryButton subject="New project enquiry">Email us your idea</PrimaryButton>
              <Link href="/services" className="text-sm font-semibold text-[var(--accent-strong)] hover:underline">
                Explore services →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
