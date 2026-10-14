export const site = {
  name: "Flowlessweb",
  legalName: "Yuvika Soft-Tech Pvt Ltd",
  slogan: "Flawless web. Effortless flow.",
  url: "https://flowlessweb.com",
  email: "shivdangi28@gmail.com",
  phone: "+919041925042",
  whatsapp: "919041925042",
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
    tech: "OpenAI, Claude, MCP, Python, vector search, Next.js, WhatsApp API",
    delivery: "2–16 weeks",
    offerings: [
      {
        title: "AI Customer Support Chatbot",
        text: "A chat assistant on your website and WhatsApp that answers customer questions instantly, in their language.",
        points: ["Answers only from your approved content", "Hindi, English and other languages", "Hands over to your team when it is unsure", "Chat history and reports for you"],
        delivery: "2–4 weeks",
      },
      {
        title: "AI Sales & Lead Assistant",
        text: "Talks to every enquiry, asks the right questions and passes only serious leads to your sales team.",
        points: ["Asks budget, need and timeline", "Scores leads and sends them to your CRM", "Books calls on your calendar", "Follows up automatically"],
        delivery: "2–4 weeks",
      },
      {
        title: "Chat with Your Documents",
        text: "A private assistant that answers from your PDFs, policies, manuals and internal knowledge, with the source shown.",
        points: ["Upload PDFs, docs and web pages", "Answers with page and source references", "Per-team access control", "For staff, customers or both"],
        delivery: "3–6 weeks",
      },
      {
        title: "AI Document Processing",
        text: "Reads invoices, resumes, forms and emails, and turns them into clean, structured data.",
        points: ["Extracts fields into Sheets, ERP or database", "Handles scans and different layouts", "Flags low-confidence items for review", "Saves hours of data entry"],
        delivery: "2–6 weeks",
      },
      {
        title: "AI Search & Recommendations",
        text: "Search that understands intent, and suggestions that match each visitor, for stores, catalogues and content sites.",
        points: ["Understands “red saree under 5000”", "Similar-item and “you may like” suggestions", "Works on your existing catalogue", "Better discovery, more orders"],
        delivery: "3–8 weeks",
      },
      {
        title: "AI Agents with MCP",
        text: "An assistant that does tasks in your own tools, such as updating the CRM, creating a booking or sending a report, through MCP (Model Context Protocol).",
        points: ["Custom MCP servers for your CRM, sheets, email and APIs", "Permission scopes: it only does what you allow", "Audit log of every action", "Approval step for sensitive actions"],
        delivery: "3–8 weeks",
      },
      {
        title: "AI Content & SEO Studio",
        text: "A tool for your team to draft pages, product descriptions and posts in your brand voice, with a human review step before publishing.",
        points: ["Bulk product and category descriptions", "SEO page templates by city or service", "Multi-language versions", "Editor approval before anything goes live"],
        delivery: "3–6 weeks",
      },
      {
        title: "Custom AI Product (MVP)",
        text: "Your own AI-first idea built end to end: interface, backend, AI, billing and admin.",
        points: ["Scoping and a clear MVP plan", "Web or mobile interface", "Usage tracking and subscription billing", "Cost and answer-quality monitoring"],
        delivery: "8–16 weeks",
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

export const faqGroups = ["Getting started", "Websites & apps", "AI & automation", "After launch"] as const;

export type Faq = { group: (typeof faqGroups)[number]; q: string; a: string };

export const faqs: Faq[] = [
  // Getting started
  {
    group: "Getting started",
    q: "What do I need to get started?",
    a: "Just an idea of what you want. Send us a short note about your business and goals, and we’ll reply with questions and a suggested plan.",
  },
  {
    group: "Getting started",
    q: "How much does a project cost?",
    a: "Cost depends on the pages, features and integrations you need, so we don’t quote from a fixed price list. After a short discussion you get a written scope and a fixed quote, and you approve it before any work starts.",
  },
  {
    group: "Getting started",
    q: "How does payment work?",
    a: "Payment is split into stages tied to milestones, and the schedule is agreed in writing before work begins, so there are no surprises.",
  },
  {
    group: "Getting started",
    q: "How will I know how the project is going?",
    a: "You get a private preview link to see real progress, plus regular updates on WhatsApp or email, and you review each stage before we move on.",
  },
  {
    group: "Getting started",
    q: "Who owns the website and code?",
    a: "You do. Domain, hosting accounts and source code are set up in your name.",
  },

  // Websites & apps
  {
    group: "Websites & apps",
    q: "How long does a website take?",
    a: "A landing page takes days, a business website 2–4 weeks, and an online store or web app 4–16 weeks depending on features. You get the exact timeline in writing before we start.",
  },
  {
    group: "Websites & apps",
    q: "Will my website work well on mobile phones?",
    a: "Yes. Every site is designed mobile-first and tested on phones, tablets and desktops, because most of your visitors are on their phones.",
  },
  {
    group: "Websites & apps",
    q: "Will my website rank on Google?",
    a: "We build in the SEO foundations: fast loading, clean structure, proper titles and descriptions, and a sitemap. Nobody can honestly guarantee a number-one ranking, but a well-built site gives you the best start, and we can continue with SEO tune-ups.",
  },
  {
    group: "Websites & apps",
    q: "Can I update the content myself?",
    a: "Yes. Where it makes sense we add a content management system, so your team can edit text, images and blog posts without needing a developer.",
  },
  {
    group: "Websites & apps",
    q: "Do you handle hosting and the domain name?",
    a: "We set up hosting and your domain in your own accounts and guide you to a plan that fits your traffic. You pay the provider directly, so you stay in control.",
  },
  {
    group: "Websites & apps",
    q: "Can you redesign my existing website?",
    a: "Yes. We refresh the design and speed while protecting your current Google rankings, and we migrate hosting if needed.",
  },
  {
    group: "Websites & apps",
    q: "Can you connect payment gateways and other tools?",
    a: "Yes. We integrate Razorpay, Stripe and other gateways, along with SMS, WhatsApp, email, CRM and accounting tools.",
  },
  {
    group: "Websites & apps",
    q: "Do you build both Android and iOS apps?",
    a: "Yes. We build cross-platform apps from one codebase, so you launch on both Google Play and the App Store together and maintain a single product.",
  },

  // AI & automation
  {
    group: "AI & automation",
    q: "Can you add AI to my existing website?",
    a: "Yes. A chatbot, smart search or automation can be added to most existing sites without rebuilding them.",
  },
  {
    group: "AI & automation",
    q: "How do you stop the AI giving wrong answers?",
    a: "Assistants are grounded in your own content and told to say they don’t know when the answer isn’t there. Anything sensitive is handed over to a person, and we review real conversations after launch.",
  },
  {
    group: "AI & automation",
    q: "Will the AI chatbot work in Hindi?",
    a: "Yes. Assistants can reply in Hindi, English and other languages, matching the language the customer writes in.",
  },
  {
    group: "AI & automation",
    q: "Is my business data safe with AI?",
    a: "Your content is used only to power your own assistant. We keep keys and customer data secured, can leave out sensitive information, and explain which AI providers see which data before we start.",
  },
  {
    group: "AI & automation",
    q: "What is MCP and why does it matter?",
    a: "MCP (Model Context Protocol) is an open standard that lets an AI assistant safely use your tools, such as a CRM, calendar or spreadsheet. It means the AI can do tasks, not just answer questions, with permissions you control and a log of every action.",
  },

  // After launch
  {
    group: "After launch",
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a post-launch support window, and monthly maintenance plans are available for updates, backups and monitoring.",
  },
];

export type StackSection = { label?: string; items: string[] };
export type StackGroup = { label: string; dot: string; sections: StackSection[] };

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend & Mobile",
    dot: "bg-[#4f46e5]",
    sections: [
      { label: "Web", items: ["Next.js", "React", "Vue.js", "Angular", "TypeScript"] },
      { label: "Mobile", items: ["Flutter", "React Native", "Swift"] },
    ],
  },
  {
    label: "Backend",
    dot: "bg-[#0e7490]",
    sections: [
      { label: "Server-side languages", items: ["PHP", "Node.js", "Python", "Go", "Java", "R"] },
      { label: "Frameworks", items: ["Laravel", "Django"] },
    ],
  },
  {
    label: "Databases",
    dot: "bg-[#1e293b]",
    sections: [
      { label: "SQL", items: ["MySQL", "PostgreSQL"] },
      { label: "NoSQL & Search", items: ["MongoDB", "Firebase", "Elasticsearch", "Redis"] },
    ],
  },
  { label: "Cloud", dot: "bg-[#d97706]", sections: [{ items: ["AWS", "Google Cloud", "Azure", "Cloudflare"] }] },
  { label: "Payments & AI", dot: "bg-[#059669]", sections: [{ items: ["Stripe", "Razorpay", "OpenAI", "Claude"] }] },
];

const faqAnswer = (start: string) => faqs.find((faq) => faq.q.startsWith(start))?.a ?? "";

export type ChatQa = { q: string; a: string; link?: { href: string; label: string } };

export const chatQa: ChatQa[] = [
  {
    q: "What services do you offer?",
    a: "We build websites and web apps, Android and iOS mobile apps, AI-based products such as chatbots and agents, UI/UX design, backend and cloud systems, and we maintain them after launch.",
    link: { href: "/services", label: "See all services" },
  },
  { q: "How long does a website take?", a: faqAnswer("How long") },
  { q: "Do you build mobile apps?", a: faqAnswer("Do you build both") },
  { q: "Can you add AI to my website?", a: faqAnswer("Can you add AI") },
  {
    q: "How much will it cost?",
    a: "Cost depends on what you need, so every project gets a written scope and a fixed quote after a short discussion. Tell us your idea and we will send one.",
  },
  { q: "Who owns the code?", a: faqAnswer("Who owns") },
  { q: "Do you offer support after launch?", a: faqAnswer("Do you offer support") },
  { q: "Will it work on mobile phones?", a: faqAnswer("Will my website work") },
  { q: "Can the chatbot reply in Hindi?", a: faqAnswer("Will the AI chatbot") },
  { q: "What is MCP?", a: faqAnswer("What is MCP") },
  { q: "How do we get started?", a: faqAnswer("What do I need") },
];

export type TeamMember = {
  role: string;
  summary: string;
  /** Role of the person this member reports to. Leave out for the top of the chart. */
  reportsTo?: string;
  /** Add the person's name once you have it. Until then the card shows the role only. */
  name?: string;
  /** Path under /public, for example "/team/founder.jpg". Square, at least 600px. */
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    role: "Founder",
    summary: "Sets the direction, and works with clients on scope, quality and delivery.",
  },
  {
    role: "Chief Product Officer",
    reportsTo: "Founder",
    summary: "Owns the product plan and design, and turns client goals into clear, buildable roadmaps.",
  },
  {
    role: "Senior DevOps Engineer",
    reportsTo: "Founder",
    summary: "Looks after cloud setup, deployment, security, backups and uptime.",
  },
];
