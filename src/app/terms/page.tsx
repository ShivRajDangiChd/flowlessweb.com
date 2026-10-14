import { LegalPage } from "@/components/legal";
import type { LegalSection } from "@/components/legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `Terms for using the ${site.name} website and for projects delivered by ${site.legalName}.`,
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    paras: [
      `These terms apply to your use of this website and to services provided by ${site.name}, operated by ${site.legalName} (“we”, “us”). For a paid project, the written proposal or agreement we both approve forms part of these terms. If the two differ, the proposal or agreement prevails for that project.`,
    ],
  },
  {
    heading: "Using this website",
    paras: ["You agree to use the website lawfully. You must not try to disrupt it, gain unauthorised access, or copy its content or design for commercial use without our permission. The information on the site is general and is not a binding offer."],
  },
  {
    heading: "Proposals, scope and quotes",
    paras: [
      "Every project starts with a written scope, timeline and fixed quote. Work begins once you approve it. Requests that fall outside the agreed scope are handled as change requests, and we will tell you the effect on cost and time before doing the work.",
    ],
  },
  {
    heading: "Payments",
    list: [
      "Fees are paid in stages linked to milestones, as set out in the proposal.",
      "Taxes such as GST are charged in addition where applicable.",
      "If an invoice is overdue, we may pause work until it is paid.",
      "Costs of third-party services (domains, hosting, paid APIs, app-store accounts and similar) are separate unless the proposal says otherwise, and are billed by those providers.",
    ],
  },
  {
    heading: "What we need from you",
    paras: [
      "To deliver on time, you agree to provide content, images, access and decisions promptly, to give feedback within the agreed review periods, and to make sure you have the right to use everything you give us. Delays on your side can move the delivery date.",
    ],
  },
  {
    heading: "Reviews and approvals",
    paras: ["Each stage is shared for your review. The number of revision rounds is stated in the proposal. Approval of a stage means we can build on it. Changes to approved work may be treated as a change request."],
  },
  {
    heading: "Ownership",
    paras: [
      "Once the project is paid for in full, you own the deliverables made specifically for you, including the website content, designs and source code. Domain, hosting and developer accounts are set up in your name.",
      "Open-source components and third-party tools stay under their own licences. We keep the right to reuse our general tools, methods and know-how that are not specific to your business. We will not show your project in our portfolio without your permission.",
    ],
  },
  {
    heading: "AI features and their limits",
    paras: [
      "AI systems can produce answers that are incomplete or wrong. We design assistants to rely on your approved content, to say when they do not know, and to hand over to a person for sensitive matters. Even so, we cannot guarantee that AI output will always be accurate. You remain responsible for reviewing AI-generated content before relying on it or publishing it, and for how your business uses AI answers.",
    ],
  },
  {
    heading: "Support after launch",
    paras: [
      "Each project includes a post-launch support window described in its proposal, covering fixes for defects in what we delivered. Ongoing updates, changes, monitoring and new features are covered by a separate maintenance plan or a new quote.",
    ],
  },
  {
    heading: "No guarantee of results",
    paras: [
      "We build with care and follow good practice, but outcomes such as search-engine rankings, traffic, sales or leads depend on many factors outside our control. We do not promise any particular business result.",
    ],
  },
  {
    heading: "Confidentiality",
    paras: ["We treat the non-public information you share about your business as confidential and use it only to deliver your project."],
  },
  {
    heading: "Cancellations and refunds",
    paras: [
      "You may cancel a project in writing at any time. You will pay for work completed up to that point and for third-party costs already incurred. Amounts paid for work that has not started will be handled as set out in the proposal. Fees for work already delivered are not refundable.",
    ],
  },
  {
    heading: "Limit of liability",
    paras: [
      "To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profit or lost business. Our total liability for any claim relating to a project is limited to the fees you paid us for that project.",
    ],
  },
  {
    heading: "Governing law and disputes",
    paras: [
      "These terms are governed by the laws of India. We will first try to resolve any disagreement in good faith through discussion. If that does not work, the courts of competent jurisdiction in India will decide it.",
    ],
  },
  {
    heading: "Changes to these terms",
    paras: ["We may update these terms from time to time. The “last updated” date shows the current version. Changes do not affect a project that is already under an approved proposal."],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="14 October 2026"
      intro="These are the ground rules for using our website and working with us. We have kept them as clear as we can."
      sections={sections}
    />
  );
}
