import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { SiteShell } from "@/components/site-shell";
import { Check, Eyebrow, PrimaryButton, mailto } from "@/components/ui";
import { aiServices, faqs, process, projectTypes, site, stack, webServices } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name} | Web Development & AI Solutions Company`,
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
              <Eyebrow>Web development &amp; AI studio</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-[54px] sm:leading-[1.05]">
                Websites that sell.{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
                  AI that works for you.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
                We design and build business websites, online stores, web apps and booking
                portals, and add AI chatbots and automation that answer customers and handle
                the busywork.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton href={mailto("New project enquiry")}>Get a free quote</PrimaryButton>
                <Link href="/services" className="text-sm font-medium hover:text-[var(--accent)]">
                  Explore services →
                </Link>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
                <li className="flex gap-2"><Check />Fixed quote, written scope</li>
                <li className="flex gap-2"><Check />You own the code</li>
                <li className="flex gap-2"><Check />Post-launch support</li>
              </ul>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <p className="text-center font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">
              Built with modern, proven technology
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-[var(--muted)]">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Web development</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Whatever kind of website you need, we build it.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {webServices.map((service) => (
              <li key={service.slug} className="bg-[var(--panel)]">
                <Link href={`/services#${service.slug}`} className="block h-full p-7 transition-colors hover:bg-[var(--bg)]">
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.summary}</p>
                  <p className="mt-4 font-mono text-[11px] tracking-wider text-[var(--accent)] uppercase">
                    {service.delivery}
                  </p>
                </Link>
              </li>
            ))}
            <li className="flex items-center bg-[var(--fg)] p-7 text-white">
              <div>
                <h3 className="font-semibold">Not sure which one you need?</h3>
                <a href={mailto("Help me choose")} className="mt-3 inline-block text-sm text-[var(--accent-2)]">
                  Ask us, it&rsquo;s free →
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-[var(--fg)] text-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-2)] uppercase">AI solutions</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical AI that saves hours and wins customers.
            </h2>
            <p className="mt-4 max-w-xl text-white/65">
              No buzzwords. Each solution below solves a specific business problem.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {aiServices.map((service) => (
                <article key={service.slug} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{service.summary}</p>
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

        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Project types</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for your industry, not a one-size template.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <article key={type.name} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold">{type.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{type.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {type.features.map((feature) => (
                    <li key={feature} className="rounded-full bg-black/5 px-2.5 py-1 text-xs">
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
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear process, no surprises.
            </h2>
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

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="glow rounded-3xl border border-[var(--line)] bg-[var(--panel)] px-8 py-16 text-center">
            <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
              Tell us about your project.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
              Send a short note on what you want to build. You&rsquo;ll get a reply with questions,
              a suggested plan and a fixed quote.
            </p>
            <div className="mt-8">
              <PrimaryButton href={mailto("New project enquiry")}>Email us your idea</PrimaryButton>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">{site.email}</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
