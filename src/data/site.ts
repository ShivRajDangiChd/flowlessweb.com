export const site = {
  name: "Flowlessweb",
  url: "https://flowlessweb.com",
  email: "shivdangi28@gmail.com",
  description:
    "Flowlessweb is a web, mobile app and AI development studio. We build websites, e-commerce stores, Android and iOS apps, AI-based products, chatbots and automation for growing businesses.",
};

export type Offering = {
  title: string;
  text: string;
  points: string[];
  delivery?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bestFor: string;
  tech: string;
  delivery: string;
  offerings: Offering[];
};

export const categories: ServiceCategory[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Websites, stores and web apps",
    summary:
      "From a five-page business site to a full SaaS platform. Fast, search-friendly and built to convert visitors into customers.",
    bestFor: "Businesses, brands, startups and creators who need a strong online presence",
    tech: "Next.js, React, TypeScript, Laravel, Node.js, headless CMS",
    delivery: "3 days to 16 weeks, depending on scope",
    offerings: [
      {
        title: "Business & Corporate Websites",
        text: "A professional site that explains what you do, builds trust and brings in enquiries.",
        points: ["5–15 custom-designed pages", "SEO-ready service pages", "Enquiry forms with email and WhatsApp alerts", "CMS so your team can edit content"],
        delivery: "2–4 weeks",
      },
      {
        title: "Landing Pages",
        text: "One focused page built to convert ad, launch and campaign traffic into leads.",
        points: ["Conversion-focused layout", "Leads sent to CRM or Google Sheet", "Under 2 s load on mobile", "Meta Pixel and Google Ads tracking"],
        delivery: "3–7 days",
      },
      {
        title: "E-commerce Stores",
        text: "Online stores that load fast and make checkout effortless on a phone.",
        points: ["Catalogue, filters and variants", "Razorpay, Stripe, UPI and COD", "Orders, inventory and customer accounts", "Shopify and WooCommerce also available"],
        delivery: "4–8 weeks",
      },
      {
        title: "Web Apps & SaaS Platforms",
        text: "Full-stack software with logins, dashboards, billing and APIs that scale with your users.",
        points: ["Authentication and role-based access", "Dashboards and admin panel", "Subscription billing and invoices", "Cloud deployment with backups"],
        delivery: "6–16 weeks",
      },
      {
        title: "Booking, Directory & Membership Portals",
        text: "Platforms where customers book, search, apply or log in to their own account.",
        points: ["Calendar booking with reminders", "Searchable listings with maps", "Member and student portals", "SMS, email and WhatsApp notifications"],
        delivery: "4–10 weeks",
      },
      {
        title: "Portfolio, Blog & Content Sites",
        text: "Fast, elegant sites for creators, professionals and publishers.",
        points: ["Case-study and gallery layouts", "Blog with categories and RSS", "Newsletter integration", "Top Core Web Vitals scores"],
        delivery: "1–2 weeks",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    tagline: "Android and iOS apps",
    summary:
      "Apps your customers install and use every day. One codebase for Android and iOS, connected to a solid backend.",
    bestFor: "Startups, service businesses and brands that want to reach customers on their phones",
    tech: "Flutter or React Native, Firebase, Laravel / Node.js APIs",
    delivery: "6–16 weeks",
    offerings: [
      {
        title: "Android & iOS Apps",
        text: "Cross-platform apps from a single codebase, so you launch on both stores faster and maintain one product.",
        points: ["Native-feel UI and smooth animations", "Push notifications", "Offline support where needed", "Play Store and App Store publishing"],
        delivery: "8–16 weeks",
      },
      {
        title: "Booking & On-demand Apps",
        text: "Customer and provider apps for appointments, services and local delivery.",
        points: ["Live booking and status tracking", "In-app payments", "Maps and location", "Admin panel for operations"],
        delivery: "10–16 weeks",
      },
      {
        title: "Shopping & Loyalty Apps",
        text: "A mobile storefront for your e-commerce brand with offers and repeat-purchase features.",
        points: ["Catalogue and cart", "Wallet, coupons and rewards", "Order tracking", "Connected to your existing store"],
        delivery: "8–14 weeks",
      },
      {
        title: "Companion Apps for Your Web Product",
        text: "Take your SaaS or portal to mobile with the same accounts and data.",
        points: ["Shared login and API", "Mobile-first workflows", "Notifications and reminders", "Ongoing releases"],
        delivery: "6–12 weeks",
      },
    ],
  },
  {
    slug: "ai-products",
    title: "AI-based Products",
    tagline: "Chatbots, agents and AI features",
    summary:
      "AI built for a specific business problem: answering customers, qualifying leads, reading documents or powering a new product.",
    bestFor: "Businesses that want to save hours of manual work, and founders building AI-first products",
    tech: "OpenAI, Claude, Python, vector search, Next.js, WhatsApp API",
    delivery: "2–10 weeks",
    offerings: [
      {
        title: "AI Chatbots & Assistants",
        text: "An assistant trained on your own services, prices and documents that answers customers around the clock.",
        points: ["Answers only from your approved content", "Website chat and WhatsApp", "Captures leads, hands over to a human", "Hindi, English and more"],
        delivery: "2–4 weeks",
      },
      {
        title: "Workflow Automation",
        text: "Connect forms, email, sheets and CRM, with AI handling the repetitive middle steps.",
        points: ["Lead scoring and routing", "Invoice and document data extraction", "Auto follow-ups and reminders", "Daily and weekly reports"],
        delivery: "1–4 weeks",
      },
      {
        title: "AI Features for Your Product",
        text: "Add smart search, summaries, recommendations and generation to an app you already run.",
        points: ["Semantic search over products or documents", "Ask-your-documents Q&A (RAG)", "Personalised recommendations", "Text and image generation"],
        delivery: "3–8 weeks",
      },
      {
        title: "AI SaaS Products & Agents",
        text: "A complete AI-first product, from idea to MVP: interface, backend, billing and the AI itself.",
        points: ["Product scoping and MVP plan", "Agents that use tools and your data", "Usage tracking and subscription billing", "Cost and quality monitoring"],
        delivery: "8–16 weeks",
      },
      {
        title: "AI-assisted Content & SEO",
        text: "Publish more useful pages without losing brand voice. AI drafts, a human reviews and approves.",
        points: ["Content workflows with human review", "Programmatic SEO templates", "Bulk product descriptions", "Multi-language versions"],
        delivery: "2–6 weeks",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Design for web and mobile",
    summary:
      "Interfaces that are clear, good-looking and easy to use. Approved before a single line of code is written.",
    bestFor: "New products, redesigns and teams that already have developers",
    tech: "Figma, design systems, usability testing",
    delivery: "1–4 weeks",
    offerings: [
      {
        title: "Website & App Design",
        text: "Complete screen designs for every page and state, on desktop and mobile.",
        points: ["Wireframes and visual design", "Responsive layouts", "Developer-ready Figma files", "Revisions until approved"],
        delivery: "1–3 weeks",
      },
      {
        title: "Interactive Prototypes",
        text: "Click-through prototypes to test ideas with users or investors before building.",
        points: ["Realistic flows", "Shareable link", "Feedback round", "Scope refined from findings"],
        delivery: "1–2 weeks",
      },
      {
        title: "Brand Kit & Design Systems",
        text: "Colours, type, components and rules so every page and app feels like one brand.",
        points: ["Logo usage and palette", "Reusable component library", "Guidelines for your team", "Consistent look across web and app"],
        delivery: "2–4 weeks",
      },
      {
        title: "UX Audit",
        text: "A review of your current site or app with specific fixes for drop-offs and confusion.",
        points: ["Review of key user journeys", "Prioritised improvement list", "Quick wins you can ship now", "Mobile and accessibility checks"],
        delivery: "3–5 days",
      },
    ],
  },
  {
    slug: "backend-cloud",
    title: "Backend, API & Cloud",
    tagline: "The engine behind your product",
    summary:
      "Reliable servers, databases, integrations and deployments, so what you launch stays fast, secure and online.",
    bestFor: "Products that need payments, integrations, scale or a safer foundation",
    tech: "Laravel, Node.js, Python, PostgreSQL, MySQL, AWS, GCP, Azure, Cloudflare",
    delivery: "1–8 weeks",
    offerings: [
      {
        title: "REST & GraphQL APIs",
        text: "Clean, documented APIs for your web and mobile apps.",
        points: ["Authentication and permissions", "Versioned, documented endpoints", "Rate limiting and validation", "Automated tests"],
        delivery: "2–6 weeks",
      },
      {
        title: "Payments & Third-party Integrations",
        text: "Connect the tools your business already uses.",
        points: ["Stripe, Razorpay and PayPal", "SMS, email and WhatsApp APIs", "CRM, ERP and accounting", "Webhooks and syncing"],
        delivery: "1–3 weeks",
      },
      {
        title: "Cloud Setup & Deployment",
        text: "Hosting, domains, SSL and pipelines set up in your own accounts.",
        points: ["AWS, GCP, Azure or Cloudflare", "CI/CD for safe releases", "Backups and monitoring", "Cost-conscious infrastructure"],
        delivery: "3 days to 2 weeks",
      },
      {
        title: "Database Design & Migration",
        text: "Move to a better structure or a new platform without losing data.",
        points: ["Schema design", "Safe data migration", "Performance tuning", "Reporting-ready data"],
        delivery: "1–4 weeks",
      },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    tagline: "We keep it running",
    summary:
      "Launching is the start. We handle updates, fixes, security and improvements so your site or app keeps performing.",
    bestFor: "Any live website or app that matters to your business",
    tech: "Monitoring, backups, performance tooling",
    delivery: "Ongoing, monthly",
    offerings: [
      {
        title: "Monthly Care Plans",
        text: "A fixed monthly plan for updates, fixes and small changes.",
        points: ["Content and small feature changes", "Bug fixes with priority response", "Monthly summary of work done", "Cancel anytime"],
      },
      {
        title: "Security & Backups",
        text: "Protect your site and your data.",
        points: ["Software and plugin updates", "Daily backups and restore tests", "Uptime monitoring and alerts", "Malware clean-up if ever needed"],
      },
      {
        title: "Speed & SEO Tune-ups",
        text: "Faster pages and better rankings over time.",
        points: ["Core Web Vitals fixes", "Technical SEO checks", "Search Console reports", "Redesign that protects rankings"],
      },
    ],
  },
];

export const whyUs = [
  {
    title: "One team for web, mobile and AI",
    text: "No juggling agencies. Design, development, backend and AI are handled by the same people.",
  },
  {
    title: "Fixed quote, written scope",
    text: "You know the features, timeline and price before work starts. No surprise bills.",
  },
  {
    title: "You own everything",
    text: "Code, domain and hosting accounts are set up in your name.",
  },
  {
    title: "Support after launch",
    text: "Every project includes a support window, and care plans are available when you need more.",
  },
];

export type ProjectType = {
  name: string;
  blurb: string;
  features: string[];
};

export const projectTypes: ProjectType[] = [
  {
    name: "Restaurants & Cafés",
    blurb: "Menu, online ordering and table reservations.",
    features: ["QR menu", "WhatsApp ordering", "Table booking", "AI order assistant"],
  },
  {
    name: "Clinics & Healthcare",
    blurb: "Appointments and patient information in one place.",
    features: ["Doctor profiles", "Slot booking", "Reminders", "AI FAQ bot"],
  },
  {
    name: "Real Estate",
    blurb: "Property listings that turn browsers into site visits.",
    features: ["Listings & filters", "Map view", "Enquiry CRM", "AI property assistant"],
  },
  {
    name: "Education & Coaching",
    blurb: "Courses, batches and student portals.",
    features: ["Course catalogue", "Online payments", "Student login", "AI doubt-solver"],
  },
  {
    name: "Fashion & D2C Stores",
    blurb: "Brand-led stores built for mobile shoppers.",
    features: ["Variants & sizes", "Razorpay / Stripe", "Order tracking", "AI recommendations"],
  },
  {
    name: "SaaS & Startups",
    blurb: "From MVP to a billing-ready product.",
    features: ["Auth & roles", "Subscriptions", "Admin dashboard", "AI features"],
  },
  {
    name: "Agencies & Consultants",
    blurb: "Credibility-first sites that win clients.",
    features: ["Case studies", "Lead capture", "Booking calls", "Blog & SEO"],
  },
  {
    name: "Logistics & B2B",
    blurb: "Portals for quotes, orders and operations.",
    features: ["Quote requests", "Client portal", "Tracking", "Document automation"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery call",
    text: "We understand your business, customers and goals, then send a written scope, timeline and fixed quote.",
  },
  {
    step: "02",
    title: "Design",
    text: "You see real screens of your pages and approve the look before development starts.",
  },
  {
    step: "03",
    title: "Build & review",
    text: "Development in short cycles on a private preview link, so you can review progress and give feedback as we go.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "We take it live, train your team and stay available for fixes and improvements.",
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "A landing page takes days, a business website 2–4 weeks, and an online store or web app 4–16 weeks depending on features. You get the exact timeline in writing before we start.",
  },
  {
    q: "Do you build both Android and iOS apps?",
    a: "Yes. We build cross-platform apps from one codebase, so you launch on both Google Play and the App Store together and maintain a single product.",
  },
  {
    q: "Can you add AI to my existing website?",
    a: "Yes. A chatbot, smart search or automation can be added to most existing sites without rebuilding them.",
  },
  {
    q: "How do you stop the AI giving wrong answers?",
    a: "Assistants are grounded in your own content and told to say they don’t know when the answer isn’t there. Anything sensitive is handed over to a person, and we review real conversations after launch.",
  },
  {
    q: "Who owns the website and code?",
    a: "You do. Domain, hosting accounts and source code are set up in your name.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a post-launch support window, and monthly maintenance plans are available for updates, backups and monitoring.",
  },
  {
    q: "What do I need to get started?",
    a: "Just an idea of what you want. Send us a short email about your business and goals, and we’ll reply with questions and a suggested plan.",
  },
];

export const stack = [
  "Next.js",
  "React",
  "Flutter",
  "TypeScript",
  "Laravel",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "AWS",
  "Cloudflare",
  "Stripe",
  "Razorpay",
  "OpenAI",
  "Claude",
];
