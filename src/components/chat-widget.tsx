"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { chatQa } from "@/data/site";
import type { ChatQa } from "@/data/site";

type Message = { from: "bot" | "user"; text: string; link?: ChatQa["link"] };

const waPath =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d={waPath} />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4zM20 14h-3v5h2a1 1 0 0 0 1-1v-4z" />
      <path d="M17 19c0 1.5-1.8 2.5-5 2.5" />
    </svg>
  );
}

const welcome: Message = {
  from: "bot",
  text: "Hi! I'm the Flawless Web assistant. Pick a question below, or reach us with the icons at the bottom.",
};

export function ChatWidget({
  onClose,
  onCall,
  whatsappHref,
  phoneHref,
}: {
  onClose: () => void;
  onCall: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  whatsappHref: string;
  phoneHref: string;
}) {
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [typing, setTyping] = useState(false);
  const [soonTip, setSoonTip] = useState(false);
  const [asked, setAsked] = useState<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function ask(item: ChatQa) {
    if (typing) return;
    setAsked((list) => [...list, item.q]);
    setMessages((list) => [...list, { from: "user", text: item.q }]);
    setTyping(true);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((list) => [...list, { from: "bot", text: item.a, link: item.link }]);
    }, 650);
  }

  const remaining = chatQa.filter((item) => !asked.includes(item.q));

  return (
    <section
      aria-label="Chat with Flawless Web"
      className="flex h-[min(560px,calc(100vh-8rem))] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_24px_70px_-20px_rgba(15,23,42,0.5)]"
    >
      <header className="flex items-center justify-between bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-white/20 text-sm font-bold">F</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Flawless Web Assistant</p>
            <p className="text-xs text-white/80">Quick answers to common questions</p>
          </div>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat" className="grid size-8 cursor-pointer place-items-center rounded-lg text-xl hover:bg-white/15">
          ×
        </button>
      </header>

      <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto bg-[var(--bg)] px-4 py-4" aria-live="polite">
        {messages.map((message, i) => (
          <div key={i} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                message.from === "user"
                  ? "rounded-br-sm bg-[var(--accent)] text-white"
                  : "rounded-bl-sm border border-[var(--line)] bg-white text-slate-800"
              }`}
            >
              {message.text}
              {message.link ? (
                <Link href={message.link.href} onClick={onClose} className="mt-2 block font-semibold text-[var(--accent-strong)] hover:underline">
                  {message.link.label} →
                </Link>
              ) : null}
            </div>
          </div>
        ))}
        {typing ? (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-[var(--line)] bg-white px-4 py-3" aria-label="Assistant is typing">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${dot * 120}ms` }} />
              ))}
            </div>
          </div>
        ) : null}

        {remaining.length > 0 && !typing ? (
          <div className="pt-1">
            <p className="mb-2 text-xs font-medium text-[var(--muted)]">{asked.length === 0 ? "Popular questions" : "Anything else?"}</p>
            <ul className="flex flex-wrap gap-2">
              {remaining.map((item) => (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => ask(item)}
                    className="cursor-pointer rounded-full border border-[var(--accent)]/40 bg-white px-3 py-1.5 text-left text-[13px] font-medium text-[var(--accent-strong)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                  >
                    {item.q}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {remaining.length === 0 && !typing ? (
          <p className="pt-1 text-center text-xs text-[var(--muted)]">Still have a question? Message us below.</p>
        ) : null}
      </div>

      <footer className="grid grid-cols-3 gap-2 border-t border-[var(--line)] bg-white p-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
          className="grid h-12 place-items-center rounded-xl bg-[#0f9d8a] text-white transition-colors hover:bg-[#0c8a79]"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={phoneHref}
          onClick={onCall}
          aria-label="Call us"
          title="Call Now"
          className="grid h-12 place-items-center rounded-xl bg-[var(--ink)] text-white transition-colors hover:bg-slate-800"
        >
          <PhoneIcon />
        </a>
        <span
          className="group relative block"
          onClick={() => {
            setSoonTip(true);
            window.setTimeout(() => setSoonTip(false), 2000);
          }}
        >
          <button
            type="button"
            disabled
            aria-disabled="true"
            aria-label="Live chat, coming soon"
            aria-describedby="live-chat-soon"
            className="grid h-12 w-full cursor-not-allowed place-items-center rounded-xl bg-slate-200 text-slate-500"
          >
            <HeadsetIcon />
          </button>
          <span
            id="live-chat-soon"
            role="tooltip"
            className={`pointer-events-none absolute -top-9 right-0 rounded-lg bg-[var(--ink)] px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-lg transition-opacity group-hover:opacity-100 ${
              soonTip ? "opacity-100" : "opacity-0"
            }`}
          >
            Live Chat · Coming soon
          </span>
        </span>
      </footer>
    </section>
  );
}
