import { SiteShell } from "@/components/site-shell";
import { Check, Eyebrow, PrimaryButton, mailto } from "@/components/ui";
import { aiServices, process, projectTypes, webServices } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Business websites, landing pages, e-commerce stores, web apps and SaaS, booking portals, redesign and maintenance, plus AI chatbots, workflow automation and AI features.",
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
              Everything you need to launch, run and grow online.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
              Seven kinds of web projects and four AI solutions. Each one comes with a clear
              scope, timeline and fixed quote.
            </p>
            <nav aria-label="Jump to section" className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#web" className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--accent)]">Web development</a>
              <a href="#ai" className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--accent-2)]">AI solutions</a>
              <a href="#projects" className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--accent)]">Project types</a>
              <a href="#process" className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 hover:border-[var(--accent)]">Process</a>
            </nav>
          </div>
        </section>

        <section id="web" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <Eyebrow>Web development</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Websites and web apps</h2>
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {webServices.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-8 py-10 lg:grid-cols-[1fr_1.1fr]"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">{service.summary}</p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[var(--accent)] uppercase">Best for</dt>
                      <dd className="mt-0.5">{service.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[var(--accent)] uppercase">Built with</dt>
                      <dd className="mt-0.5">{service.tech}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] tracking-wider text-[var(--accent)] uppercase">Typical delivery</dt>
                      <dd className="mt-0.5">{service.delivery}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <p className="text-sm font-medium">What&rsquo;s included</p>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mailto(`Enquiry: ${service.title}`)}
                    className="mt-6 inline-block text-sm font-medium text-[var(--accent)]"
                  >
                    Get a quote for this →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ai" className="scroll-mt-16 bg-[var(--fg)] text-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-2)] uppercase">AI solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">AI for real business problems</h2>
            <p className="mt-4 max-w-xl text-white/65">
              Can be added to a new website or to the one you already have.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {aiServices.map((service) => (
                <article key={service.slug} id={service.slug} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{service.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-white/85">
                        <span className="mt-1 text-[var(--accent-2)]"><Check /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-l-2 border-[var(--accent-2)] pl-4 text-sm text-white/85">
                    <span className="font-mono text-[10px] tracking-widest text-[var(--accent-2)] uppercase">Example</span>
                    <br />
                    {service.example}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <Eyebrow>Project types</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Industries and projects we build for</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <article key={type.name} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold">{type.name}</h3>
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

        <section id="process" className="scroll-mt-16 border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">From first call to launch</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <li key={item.step} className="border-t-2 border-[var(--fg)] pt-5">
                  <span className="font-mono text-xs text-[var(--accent)]">{item.step}</span>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Ready to start? Send us a short note.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
            Tell us what you want to build and we&rsquo;ll reply with a plan and a fixed quote.
          </p>
          <div className="mt-8">
            <PrimaryButton href={mailto("New project enquiry")}>Get a free quote</PrimaryButton>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
