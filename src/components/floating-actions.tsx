"use client";

import { useEffect, useRef, useState } from "react";
import { ChatWidget } from "@/components/chat-widget";
import { site } from "@/data/site";

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Flowlessweb, I'd like to discuss a project.")}`;

export function FloatingActions() {
  const [toast, setToast] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);
  const deskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!helpOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [helpOpen]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(""), 3500);
    return () => window.clearTimeout(id);
  }, [toast]);

  // On a phone the tel: link dials. On a desktop it usually does nothing, so copy the number instead.
  async function onCall(event: React.MouseEvent<HTMLAnchorElement>) {
    const isPhone = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (isPhone) return;
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(site.phone);
      setToast("Phone number copied. Paste it in your phone's dialer.");
    } catch {
      setToast("Open this site on your phone to call us.");
    }
  }


  return (
    <>
      {/* chat button on every screen size; opens a Q&A chat with the three actions at the bottom */}
      <div ref={deskRef} className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        {helpOpen ? (
          <ChatWidget
            onClose={() => setHelpOpen(false)}
            onCall={onCall}
            whatsappHref={whatsappHref}
            phoneHref={`tel:${site.phone}`}
          />
        ) : null}

        <button
          type="button"
          onClick={() => setHelpOpen((v) => !v)}
          aria-expanded={helpOpen}
          aria-label={helpOpen ? "Close chat" : "Open chat"}
          className="grid size-14 cursor-pointer place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-white shadow-[0_10px_30px_-8px_rgba(79,70,229,0.7)] ring-4 ring-white/80 transition-transform hover:scale-105"
        >
          {helpOpen ? (
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.7 8.7 0 0 1-3.8-.9L3 20l1.2-4.6A8.2 8.2 0 0 1 3.9 11.5 8.4 8.4 0 0 1 12.4 3.2 8.4 8.4 0 0 1 21 11.5z" />
              <path d="M8.5 10.5h7M8.5 13.5h4.5" />
            </svg>
          )}
        </button>
      </div>

      {toast ? (
        <p role="status" className="fixed bottom-24 left-1/2 z-50 w-max max-w-[90vw] -translate-x-1/2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm text-white shadow-xl">
          {toast}
        </p>
      ) : null}
    </>
  );
}
