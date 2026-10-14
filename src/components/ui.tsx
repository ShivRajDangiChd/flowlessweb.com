import { EnquiryButton } from "@/components/enquiry";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">{children}</p>
  );
}

export function PrimaryButton({ subject, children }: { subject?: string; children: React.ReactNode }) {
  return (
    <EnquiryButton
      subject={subject}
      className="inline-block cursor-pointer rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.7)] transition-colors hover:bg-[var(--accent-strong)]"
    >
      {children}
    </EnquiryButton>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 size-3.5 shrink-0 text-[var(--accent)]" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
