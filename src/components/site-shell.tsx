import Link from "next/link";
import { Header } from "@/components/header";
import { EnquiryButton } from "@/components/enquiry";
import { Logo } from "@/components/logo";
import { categories, site } from "@/data/site";

const linkClass = "text-white/70 transition-colors hover:text-[var(--accent-2)]";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <footer className="bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Flawless Web home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm font-semibold text-[var(--accent-2)]">{site.slogan}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              Web development and AI solutions for businesses that want to grow online.
            </p>
          </div>

          <nav aria-label="Pages">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-2)] uppercase">Pages</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/services" className={linkClass}>Services</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/about" className={linkClass}>About Us</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-2)] uppercase">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent-2)] uppercase">Contact</h2>
            <p className="mt-4 text-sm text-white/70">Have a project in mind?</p>
            <EnquiryButton className="mt-2 inline-block text-sm font-medium text-white hover:text-[var(--accent-2)] cursor-pointer">
              Email us
            </EnquiryButton>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 pb-24 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}, operated by {site.legalName}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
