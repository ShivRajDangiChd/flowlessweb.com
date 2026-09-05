import Link from "next/link";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { profile } from "@/data/profile";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label={`${profile.name} — home`}>
            <Logo />
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-5 text-sm text-[var(--muted)]"
          >
            <Link href="/work" className="hover:text-[var(--fg)]">
              Work
            </Link>
            <Link href="/skills" className="hover:text-[var(--fg)]">
              Skills
            </Link>
            <Link href="/about" className="hover:text-[var(--fg)]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--fg)]">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-[var(--line)] px-6 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-widest uppercase">flowlessweb.com</p>
        </div>
      </footer>
    </div>
  );
}
