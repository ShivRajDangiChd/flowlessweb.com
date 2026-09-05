import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, skillKeywords } from "@/data/profile";
import { defaultKeywords } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: defaultKeywords,
  authors: [{ name: profile.name }],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
    url: profile.site,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
  },
  alternates: { canonical: profile.site },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: profile.name,
                jobTitle: profile.role,
                url: profile.site,
                email: profile.email,
                image: `${profile.site}/shivraj.png`,
                description: profile.bio,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chandigarh",
                  addressCountry: "IN",
                },
                worksFor: {
                  "@type": "Organization",
                  name: profile.company,
                },
                sameAs: [profile.links.github, profile.links.linkedin],
                knowsAbout: skillKeywords,
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: `${profile.name} Portfolio`,
                url: profile.site,
                inLanguage: "en",
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
