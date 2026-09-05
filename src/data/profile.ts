export const profile = {
  name: "Shiv Raj",
  role: "Full-Stack Developer",
  location: "India",
  email: "shivdangi28@gmail.com",
  site: "https://flowlessweb.com",
  summary:
    "I design and ship production web systems — Laravel, Node.js, and Python APIs, Next.js frontends, payment rails, and live deploys on AWS, GCP, and Azure — with a bias for performance, security, and clean APIs.",
  about: [
    "I work across the stack: from MySQL schema and REST APIs to React interfaces and payment checkout flows. The through-line is reliability — systems that stay fast under load and stay safe when money or user data is involved.",
    "Recent work includes ticket platforms with Firebase notifications, wallet and gateway integrations (Razorpay and Stripe), mobile-app backends for rider and lab products, and admin consoles with live chat.",
    "I also build Node.js backends and Python REST APIs, ship modern Next.js frontends, and take apps live on cloud servers — AWS, Google Cloud, Azure, and Cloudflare — including this site on Workers with OpenNext. I care about SEO, structured data, and a clear user experience alongside the backend.",
  ],
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      blurb: "Interfaces that stay fast, readable, and consistent on every screen.",
      items: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Responsive UI",
        "App Router",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      blurb: "APIs in Laravel, Node.js, and Python built to serve web and mobile clients.",
      items: [
        "PHP",
        "Laravel",
        "Node.js backend",
        "Python REST APIs",
        "REST APIs",
        "Encore Admin",
        "Webhooks",
        "Mobile app backends",
      ],
    },
    {
      id: "cloud",
      title: "Live & cloud deploys",
      blurb: "Taking apps from local to production servers on AWS, GCP, Azure, and the edge.",
      items: [
        "AWS",
        "Google Cloud (GCP)",
        "Microsoft Azure",
        "Live server deploys",
        "Linux / VPS hosting",
        "Cloudflare Workers",
        "OpenNext",
        "Wrangler",
        "CI-ready production releases",
        "Performance tuning",
      ],
    },
    {
      id: "data",
      title: "Data & realtime",
      blurb: "Schemas, messaging, and live updates that arrive without polling.",
      items: [
        "MySQL",
        "Database design",
        "Firebase",
        "FCM notifications",
        "Real-time chat",
        "Live admin consoles",
      ],
    },
    {
      id: "payments",
      title: "Payments & security",
      blurb: "Money movement that is authenticated, verified, and auditable.",
      items: [
        "Stripe",
        "Razorpay",
        "Wallet systems",
        "UPI & card checkout",
        "API authentication",
        "Access control",
      ],
    },
    {
      id: "product",
      title: "Product & SEO",
      blurb: "Search-ready pages and admin tools that people can actually operate.",
      items: [
        "Support ticket workflows",
        "Admin panels",
        "Scalable web apps",
        "Technical SEO",
        "JSON-LD / schema",
        "User experience",
      ],
    },
  ],
  projects: [
    {
      slug: "help-support-ticket-system",
      number: "01",
      title: "Help & Support Ticket System",
      stack: ["Laravel", "Firebase", "FCM"],
      description:
        "Support workflow for intake, assignment, and resolution. Push notifications keep agents and customers in sync without polling.",
      details: [
        "Ticket intake, assignment, and status flow built for support teams.",
        "Firebase Cloud Messaging so agents and customers get updates without refreshing.",
        "Laravel backend with structured APIs rather than a tightly coupled UI-only app.",
      ],
    },
    {
      slug: "wallet-online-payments",
      number: "02",
      title: "Wallet & Online Payments",
      stack: ["Razorpay", "Stripe", "Laravel"],
      description:
        "Wallet ledger plus card and UPI checkout. Gateway webhooks, reconciliation, and guarded payment endpoints.",
      details: [
        "Wallet balance and ledger alongside Stripe and Razorpay checkout.",
        "Webhook handling for payment confirmation and reconciliation.",
        "Guarded endpoints so money movement is authenticated and auditable.",
      ],
    },
    {
      slug: "rider-lab-app-apis",
      number: "03",
      title: "Rider & Lab App APIs",
      stack: ["REST", "MySQL", "Auth"],
      description:
        "Mobile backends for field and lab operations — authenticated routes, structured resources, and data models built for app clients.",
      details: [
        "REST resources shaped for rider and lab mobile clients.",
        "MySQL models for operational data: orders, visits, and user roles.",
        "Token-based authentication and access rules at the API edge.",
      ],
    },
    {
      slug: "admin-panel-live-chat",
      number: "04",
      title: "Admin Panel with Live Chat",
      stack: ["Encore Admin", "Realtime"],
      description:
        "Operations console with live messaging so support and ops can act without leaving the admin surface.",
      details: [
        "Encore Admin as the operations surface for staff.",
        "Real-time chat so support can resolve issues in-console.",
        "Same backend trust model as the customer-facing APIs.",
      ],
    },
  ],
} as const;

export type Project = (typeof profile.projects)[number];

export function getProject(slug: string): Project | undefined {
  return profile.projects.find((project) => project.slug === slug);
}

export const skillKeywords = profile.skills.flatMap((group) => [...group.items]);
