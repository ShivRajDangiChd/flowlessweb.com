"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const EnquiryContext = createContext<(subject?: string) => void>(() => {});

export const useEnquiry = () => useContext(EnquiryContext);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [subject, setSubject] = useState("New project enquiry");
  const [copied, setCopied] = useState(false);

  const open = (next?: string) => {
    setSubject(next || "New project enquiry");
    setCopied(false);
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  const body = "Hi Flawless Web,\n\nI'd like to discuss a project.\n\nAbout my business:\nWhat I need:\n";
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi Flawless Web, I'd like to discuss: ${subject}`)}`;
  const mailApp = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.prompt("Copy this email address:", site.email);
    }
  }

  const optionClass =
    "flex w-full items-center justify-between rounded-xl border border-[var(--line)] px-4 py-3 text-left text-sm font-medium transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]/5";

  return (
    <EnquiryContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="enquiry-title"
        className="m-auto w-[min(92vw,440px)] rounded-2xl border border-[var(--line)] bg-white p-0 text-[var(--fg)] shadow-2xl backdrop:bg-slate-900/50"
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="enquiry-title" className="text-xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <p className="mt-1.5 text-sm text-[var(--muted)]">
                Send us a short note about your idea. We reply with questions, a plan and a fixed quote.
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="grid size-8 shrink-0 place-items-center rounded-lg text-xl text-slate-500 hover:bg-slate-100"
            >
              ×
            </button>
          </div>

          <div className="mt-6 space-y-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={optionClass}>
              Chat on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer" className={optionClass}>
              Open in Gmail <span aria-hidden="true">↗</span>
            </a>
            <a href={mailApp} className={optionClass}>
              Open in my email app <span aria-hidden="true">→</span>
            </a>
            <button type="button" onClick={copy} className={optionClass}>
              {copied ? "Copied. Paste it in any email app." : "Copy email address"}
              <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
            </button>
          </div>
        </div>
      </dialog>
    </EnquiryContext.Provider>
  );
}

export function EnquiryButton({
  subject,
  className,
  children,
}: {
  subject?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const open = useContext(EnquiryContext);
  return (
    <button type="button" onClick={() => open(subject)} className={className}>
      {children}
    </button>
  );
}
