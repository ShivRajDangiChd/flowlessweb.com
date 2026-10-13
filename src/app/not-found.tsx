import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-[var(--muted)]">That page does not exist. Try Home or Services.</p>
        <Link href="/" className="mt-8 inline-block text-[var(--accent)]">Back home →</Link>
      </main>
    </SiteShell>
  );
}
