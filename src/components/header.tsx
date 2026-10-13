"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Flowlessweb home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 transition-colors ${
                isActive(link.href)
                  ? "bg-black/5 text-[var(--fg)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`}
            className="ml-3 rounded-full bg-[var(--fg)] px-4 py-2 text-white transition-opacity hover:opacity-85">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-[var(--line)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-5 bg-[var(--fg)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-[var(--fg)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : "mt-1.5"}`} />
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-[var(--line)] px-6 py-3 text-sm md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-[var(--line)] py-3 last:border-0 ${
                isActive(link.href) ? "text-[var(--accent)]" : "text-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
