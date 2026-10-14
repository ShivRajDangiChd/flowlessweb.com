import { Eyebrow } from "@/components/ui";
import { faqGroups, faqs } from "@/data/site";

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Common questions</h2>
      <div className="mt-10 space-y-10">
        {faqGroups.map((group) => (
          <div key={group}>
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-strong)] uppercase">{group}</h3>
            <div className="mt-3 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs
                .filter((faq) => faq.group === group)
                .map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                      {faq.q}
                      <span className="text-xl text-[var(--accent)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
