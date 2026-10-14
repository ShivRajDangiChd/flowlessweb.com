"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { EnquiryButton } from "@/components/enquiry";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Flowlessweb home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 text-sm md:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-2 font-medium underline-offset-[10px] transition-colors ${
                  active
                    ? "text-[var(--accent-strong)] underline decoration-2"
                    : "text-slate-700 hover:text-[var(--accent-strong)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <EnquiryButton
            className="ml-3 cursor-pointer rounded-full bg-[var(--accent)] px-5 py-2.5 font-semibold text-white shadow-[0_6px_18px_-8px_rgba(79,70,229,0.8)] transition-colors hover:bg-[var(--accent-strong)]"
          >
            Get in touch
          </EnquiryButton>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-[var(--line)] hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-5 bg-[var(--fg)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--fg)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : "mt-1.5"}`} />
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-[var(--line)] bg-white px-6 py-3 text-sm md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 font-medium underline-offset-[10px] ${
                isActive(link.href) ? "text-[var(--accent-strong)] underline decoration-2" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <EnquiryButton
            className="mt-2 block w-full cursor-pointer rounded-full bg-[var(--accent)] px-4 py-3 text-center font-semibold text-white"
          >
            Get in touch
          </EnquiryButton>
        </nav>
      ) : null}
    </header>
  );
}
