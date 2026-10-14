import { AiFlow, CategoryIcon, ProjectIcon } from "@/components/illustrations";
import { SiteShell } from "@/components/site-shell";
import { EnquiryButton } from "@/components/enquiry";
import { Check, Eyebrow, PrimaryButton } from "@/components/ui";
import { categories, faqs, process, projectTypes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web development, Android and iOS mobile apps, AI-based products, UI/UX design, backend and cloud, and maintenance. Scope, tech, timelines and what's included.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <section className="glow border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              What we build, what you get, and how long it takes.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
              Pick a service to see exactly what&rsquo;s included, the technology we use and a
              typical delivery time.
            </p>
            <nav aria-label="Jump to a service" className="mt-8 flex flex-wrap gap-2.5 text-sm">
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 font-medium text-slate-700 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {categories.map((category, index) => {
          const dark = category.slug === "ai-products";
          const tinted = !dark && index % 2 === 1;
          return (
            <section
              key={category.slug}
              id={category.slug}
              className={`scroll-mt-16 border-b border-[var(--line)] ${
                dark ? "bg-[var(--ink)] text-white" : tinted ? "bg-[var(--panel)]" : ""
              }`}
            >
              <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.4fr]">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <CategoryIcon slug={category.slug} dark={dark} />
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight">{category.title}</h2>
                  <p className={`mt-3 leading-relaxed ${dark ? "text-white/70" : "text-[var(--muted)]"}`}>
                    {category.summary}
                  </p>
                  <dl className="mt-6 space-y-4 text-sm">
                    {[
                      ["Best for", category.bestFor],
                      ["Built with", category.tech],
                      ["Typical delivery", category.delivery],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt
                          className={`font-mono text-[11px] tracking-wider uppercase ${
                            dark ? "text-[var(--accent-2)]" : "text-[var(--accent-strong)]"
                          }`}
                        >
                          {label}
                        </dt>
                        <dd className="mt-0.5">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <EnquiryButton
                    subject={`Enquiry: ${category.title}`}
                    className={`mt-7 inline-block cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                      dark
                        ? "bg-[var(--accent-2)] text-[var(--ink)] hover:bg-white"
                        : "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)]"
                    }`}
                  >
                    Get a quote
                  </EnquiryButton>
                </div>

                <div>
                  {dark ? (
                    <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <AiFlow />
                    </div>
                  ) : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {category.offerings.map((offering) => (
                      <article
                        key={offering.title}
                        className={`rounded-2xl border p-6 ${
                          dark
                            ? "border-white/10 bg-white/[0.04]"
                            : "border-[var(--line)] bg-[var(--bg)]"
                        } ${tinted ? "" : !dark ? "bg-[var(--panel)]" : ""}`}
                      >
                        <h3 className="font-semibold tracking-tight">{offering.title}</h3>
                        <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-[var(--muted)]"}`}>
                          {offering.text}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                          {offering.points.map((point) => (
                            <li key={point} className="flex gap-2.5">
                              <span className={dark ? "text-[var(--accent-2)]" : ""}><Check /></span>
                              <span className={dark ? "text-white/85" : ""}>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {offering.delivery ? (
                          <p
                            className={`mt-4 font-mono text-[11px] tracking-wider uppercase ${
                              dark ? "text-[var(--accent-2)]" : "text-[var(--accent-strong)]"
                            }`}
                          >
                            {offering.delivery}
                          </p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Project types</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">What we typically build, by industry</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <article key={type.name} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <ProjectIcon name={type.name} />
                <h3 className="mt-4 font-semibold">{type.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{type.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">From first call to launch</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <li key={item.step} className="border-t-2 border-[var(--fg)] pt-5">
                  <span className="font-mono text-xs text-[var(--accent-strong)]">{item.step}</span>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Common questions</h2>
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.q}
                  <span className="text-xl text-[var(--accent)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
            Describe your idea in a few lines and we&rsquo;ll recommend the right approach.
          </p>
          <div className="mt-8">
            <PrimaryButton subject="Help me choose a service">Get a free quote</PrimaryButton>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
