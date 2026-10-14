import { LegalPage } from "@/components/legal";
import type { LegalSection } from "@/components/legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name}, operated by ${site.legalName}, collects, uses and protects your information.`,
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paras: [
      `${site.name} (“we”, “us”) is a web development, mobile app and AI studio operated by ${site.legalName}, a company based in India. This policy explains what information we collect through ${site.url.replace("https://", "")}, how we use it and the choices you have.`,
    ],
  },
  {
    heading: "Information we collect",
    paras: ["We keep data collection to a minimum. The information we receive falls into two groups."],
    list: [
      "Information you send us: when you contact us by email, WhatsApp or phone, or ask us for a quote, you may share your name, email address, phone number, business details and a description of your project.",
      "Basic technical data: like most websites, our hosting and security providers process standard request data such as IP address, browser type, device and the pages requested. This is used to deliver the site, keep it secure and fix problems.",
    ],
  },
  {
    heading: "Cookies, analytics and tracking",
    paras: [
      "At the time of writing, this website does not use advertising cookies, tracking pixels or third-party analytics. If we add analytics or similar tools in future, we will update this policy and ask for your consent where the law requires it.",
      "Our on-site help chat shows pre-written questions and answers in your browser. The questions you tap are not sent to or stored on our servers.",
    ],
  },
  {
    heading: "How we use your information",
    list: [
      "To reply to your enquiry and prepare a proposal or quote.",
      "To deliver, support and invoice the services you ask for.",
      "To keep the website secure and to prevent misuse.",
      "To meet our legal, tax and accounting obligations.",
    ],
    paras: ["We do not sell your personal information, and we do not use it for unrelated marketing without your permission."],
  },
  {
    heading: "Consent",
    paras: [
      "You choose what to share with us. By contacting us and sending your details, you agree that we may use them for the purposes described in this policy. You can withdraw your consent at any time by contacting us, after which we will stop using your information for those purposes, except where we must keep it by law.",
    ],
  },
  {
    heading: "Who we share information with",
    paras: [
      "We share information only with service providers that help us run our business, and only as far as needed. Depending on how you contact us, these may include our website hosting and security provider (Cloudflare), email providers, messaging platforms such as WhatsApp, and, for paid projects, payment and accounting providers. We may also disclose information when required by law or a lawful request from authorities.",
    ],
  },
  {
    heading: "Links and third-party services",
    paras: [
      "Buttons on this site may open services run by others, for example WhatsApp or Gmail. Those services have their own privacy policies and we are not responsible for how they handle your data.",
    ],
  },
  {
    heading: "AI features",
    paras: [
      "If we add AI features to this website, such as AI-powered search or chat, we will say so on this page, including whether your questions are processed by an outside AI provider. For AI products we build for clients, data handling is agreed in the project documents.",
    ],
  },
  {
    heading: "How long we keep information",
    paras: [
      "We keep enquiry information for as long as it is needed to respond to you and manage any resulting work, and for the period required by tax and legal rules for project records. After that we delete it or make it anonymous.",
    ],
  },
  {
    heading: "Security",
    paras: [
      "We use reasonable technical and organisational safeguards to protect information, including encrypted connections (HTTPS) for this website. No method of transmission or storage is completely secure, so we cannot promise absolute security.",
    ],
  },
  {
    heading: "Your rights",
    paras: ["Subject to applicable law, including India’s Digital Personal Data Protection Act, 2023, you may:"],
    list: [
      "ask what personal information we hold about you;",
      "ask us to correct or update it;",
      "ask us to delete it;",
      "withdraw your consent; and",
      "raise a complaint or grievance with us about how your information is handled.",
    ],
  },
  {
    heading: "Children",
    paras: ["Our website and services are meant for businesses and adults. We do not knowingly collect personal information from children."],
  },
  {
    heading: "Where data is processed",
    paras: [
      "Some of our providers may process data on servers outside India. Where that happens, we choose providers that apply appropriate protections.",
    ],
  },
  {
    heading: "Changes to this policy",
    paras: ["We may update this policy from time to time. The “last updated” date at the top shows when it last changed."],
  },
  {
    heading: "Contact and grievances",
    paras: [
      `To exercise any right above, or to raise a concern, contact ${site.legalName} using the link at the bottom of this page. We will respond within a reasonable time.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="14 October 2026"
      intro="We respect your privacy. This page explains in plain language what information we collect, why, and what you can do about it."
      sections={sections}
    />
  );
}
