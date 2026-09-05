import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${profile.name}, a full-stack developer focused on Laravel, Node.js, Python APIs, Next.js, payments, and live deploys on AWS, GCP, and Azure.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <Image
          src="/shivraj.png"
          alt="Portrait of Shiv Raj"
          width={420}
          height={420}
          className="aspect-square w-full max-w-sm rounded-[1.6rem] object-cover grayscale-[0.15]"
        />
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            Profile
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-6xl">
            About {profile.name}
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--muted)]">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-[#1a140c]"
          >
            Contact
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
