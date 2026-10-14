import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { TeamSection } from "@/components/team-section";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { categories, process, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: `${site.name} is the web, mobile app and AI development studio of ${site.legalName}. Learn how we work and what we believe.`,
  path: "/about",
});

const beliefs = [
  { title: "Clear before fast", text: "We agree the scope, timeline and price in writing first. Surprises are expensive for everyone." },
  { title: "Simple wins", text: "We build what your visitors actually need, not the most complicated thing we could. Simple sites load faster and convert better." },
  { title: "AI where it helps", text: "AI is powerful when it solves a specific problem, such as answering customers or reading documents. We add it there, and keep a person in the loop where it matters." },
  { title: "You stay in control", text: "Your domain, hosting and code are in your name. If you ever want to work with someone else, you can." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="glow border-b border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              We build the digital side of your business, and the AI behind it.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {site.name} is a web, mobile app and AI development studio operated by {site.legalName}, based in India. We help growing
              businesses get online, take bookings and orders, and automate the repetitive work.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Why the name</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">Flawless work. Effortless flow.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-700">
            The name plays on two ideas. <strong>Flawless</strong> is the standard we hold our work to: clean, tested and
            dependable. <strong>Flow</strong> is what your customers and your team should feel: pages that load quickly, journeys
            that make sense, and routine work that moves along without chasing. {site.slogan}
          </p>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">How we like to work</h2>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {beliefs.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <TeamSection />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">One team, six services</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services#${category.slug}`}
                  className="block h-full rounded-xl border border-[var(--line)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--accent)]"
                >
                  <p className="font-semibold">{category.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{category.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Eyebrow>Our process</Eyebrow>
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

        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">Let’s talk about your project.</h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
            Tell us what you want to build and we’ll reply with questions, a suggested plan and a fixed quote.
          </p>
          <div className="mt-8">
            <PrimaryButton subject="New project enquiry">Get a free quote</PrimaryButton>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
