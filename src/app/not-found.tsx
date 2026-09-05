import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          That route does not exist. Try work, skills, about, or contact.
        </p>
        <Link href="/" className="mt-8 inline-block text-[var(--accent)]">
          Back home →
        </Link>
      </main>
    </SiteShell>
  );
}
