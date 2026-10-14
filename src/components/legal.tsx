import { EnquiryButton } from "@/components/enquiry";
import { SiteShell } from "@/components/site-shell";
import { Eyebrow } from "@/components/ui";

export type LegalSection = { heading: string; paras?: string[]; list?: string[] };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <SiteShell>
      <main>
        <section className="glow border-b border-[var(--line)]">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-3 text-sm text-[var(--muted)]">Last updated: {updated}</p>
            <p className="mt-5 text-lg leading-8 text-slate-700">{intro}</p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-14">
          <nav aria-label="On this page" className="mb-12 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-strong)] uppercase">On this page</p>
            <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
              {sections.map((section, i) => (
                <li key={section.heading}>
                  <a href={`#s${i + 1}`} className="text-slate-700 hover:text-[var(--accent-strong)] hover:underline">
                    {i + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={section.heading} id={`s${i + 1}`} className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight">
                  {i + 1}. {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-7 text-slate-700">
                  {section.paras?.map((para) => <p key={para}>{para}</p>)}
                  {section.list ? (
                    <ul className="list-disc space-y-1.5 pl-6 marker:text-[var(--accent)]">
                      {section.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-14 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 text-sm leading-7 text-slate-700">
            Questions about this page?{" "}
            <EnquiryButton subject={`Question about: ${title}`} className="cursor-pointer font-semibold text-[var(--accent-strong)] hover:underline">
              Contact us
            </EnquiryButton>
            .
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
