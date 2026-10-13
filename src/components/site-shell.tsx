import Link from "next/link";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Flowlessweb home">
            <Logo />
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--fg)]">Home</Link>
            <Link href="/services" className="hover:text-[var(--fg)]">Services</Link>
            <a href={`mailto:${site.email}`} className="hover:text-[var(--fg)]">{site.email}</a>
          </nav>
        </div>
        <div className="mx-auto max-w-6xl border-t border-[var(--line)] px-6 py-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
