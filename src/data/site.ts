export const site = {
  name: "Flowlessweb",
  url: "https://flowlessweb.com",
  email: "shivdangi28@gmail.com",
  description:
    "Flowlessweb is a web development and AI studio. We build business websites, e-commerce stores, web apps, booking portals, AI chatbots and automation for growing businesses.",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  features: string[];
  tech: string;
  delivery: string;
};

export const webServices: Service[] = [
  {
    slug: "business-websites",
    title: "Business & Corporate Websites",
    summary:
      "A professional online presence that explains what you do, builds trust and brings in enquiries.",
    bestFor: "Companies, clinics, consultants, manufacturers, agencies",
    features: [
      "Custom design, 5–15 pages, fully responsive",
      "Service pages written to rank on Google",
      "Enquiry forms with email and WhatsApp alerts",
      "Google Analytics, Search Console and schema markup",
      "Blog and CMS so your team can edit content",
    ],
    tech: "Next.js, React, Tailwind, headless CMS",
    delivery: "2–4 weeks",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    summary:
      "One focused page built to convert traffic from ads, launches and campaigns into leads.",
    bestFor: "Ad campaigns, product launches, event and webinar signups",
    features: [
      "Conversion-focused layout and copy structure",
      "Lead forms connected to your CRM or Google Sheet",
      "Loads in under 2 seconds on mobile",
      "Meta Pixel, Google Ads and conversion tracking",
      "Variants for A/B testing",
    ],
    tech: "Next.js, Cloudflare",
    delivery: "3–7 days",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Stores",
    summary:
      "Online stores that load fast, look great on a phone and make checkout effortless.",
    bestFor: "D2C brands, retailers, wholesalers, local sellers going online",
    features: [
      "Product catalogue with filters, search and variants",
      "Razorpay, Stripe and UPI payments, COD support",
      "Orders, inventory and customer accounts",
      "Shipping integrations and invoice generation",
      "Coupons, abandoned-cart emails and reviews",
    ],
    tech: "Custom Next.js stores, Shopify, WooCommerce",
    delivery: "4–8 weeks",
  },
  {
    slug: "web-apps",
    title: "Web Apps & SaaS Platforms",
    summary:
      "Full-stack software with logins, dashboards, billing and APIs, built to scale with your users.",
    bestFor: "Startups, internal tools, subscription products, marketplaces",
    features: [
      "User authentication and role-based access",
      "Dashboards, reports and admin panel",
      "Subscription billing and invoices",
      "REST APIs and third-party integrations",
      "Cloud deployment with backups and monitoring",
    ],
    tech: "Next.js, Laravel, Node.js, Python, PostgreSQL / MySQL",
    delivery: "6–16 weeks",
  },
  {
    slug: "booking-portals",
    title: "Booking, Directory & Membership Portals",
    summary:
      "Platforms where customers book appointments, browse listings, apply or log in to their own account.",
    bestFor: "Clinics, salons, coaching, real estate, event and service businesses",
    features: [
      "Calendar booking with slots, staff and reminders",
      "Searchable listings with maps and filters",
      "Member and student portals with payments",
      "SMS, email and WhatsApp notifications",
      "Admin panel to manage everything in one place",
    ],
    tech: "Next.js, Laravel, Node.js, Firebase",
    delivery: "4–10 weeks",
  },
  {
    slug: "portfolio-blogs",
    title: "Portfolio, Blog & Content Sites",
    summary:
      "Fast, elegant sites for creators, professionals and publishers who care how their work is presented.",
    bestFor: "Freelancers, photographers, writers, media and publishers",
    features: [
      "Case-study and gallery layouts",
      "Blog with categories, authors and RSS",
      "Newsletter signup integration",
      "Image optimisation and top Core Web Vitals scores",
      "Easy editing with a headless CMS",
    ],
    tech: "Next.js, MDX, Sanity / Contentful",
    delivery: "1–2 weeks",
  },
  {
    slug: "redesign-care",
    title: "Redesign, Speed & Maintenance",
    summary:
      "Give a slow or outdated website a fresh look, better rankings and someone who looks after it.",
    bestFor: "Existing sites that are slow, dated, hacked or hard to update",
    features: [
      "Redesign that keeps your SEO rankings",
      "Speed audit and Core Web Vitals fixes",
      "Migration, hosting and domain setup",
      "Security updates, backups and uptime monitoring",
      "Monthly maintenance and small changes",
    ],
    tech: "Whatever you run today, moving to Next.js if it helps",
    delivery: "2–4 weeks",
  },
];

export type AiService = {
  slug: string;
  title: string;
  summary: string;
  example: string;
  features: string[];
};

export const aiServices: AiService[] = [
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Assistants",
    summary:
      "An assistant trained on your own services, prices and documents that answers customers instantly, any hour of the day.",
    example:
      "A clinic bot that answers fee and timing questions, then books the appointment.",
    features: [
      "Answers only from your approved content",
      "Website chat and WhatsApp",
      "Captures name and number, then hands over to a human",
      "Hindi, English and other languages",
    ],
  },
  {
    slug: "ai-automation",
    title: "Workflow Automation",
    summary:
      "Connect your forms, email, sheets and CRM and let AI handle the repetitive middle steps.",
    example:
      "Every new enquiry is scored, summarised and sent to the right salesperson within a minute.",
    features: [
      "Lead qualification and routing",
      "Invoice, resume and document data extraction",
      "Automatic follow-up emails and reminders",
      "Daily and weekly reports sent to you",
    ],
  },
  {
    slug: "ai-features",
    title: "AI Features Inside Your Product",
    summary:
      "Add smart search, summaries, recommendations and generation to a website or app you already run.",
    example:
      "An online store whose search understands “red wedding saree under 5000”.",
    features: [
      "Semantic search over products or documents",
      "Ask-your-documents Q&A (RAG)",
      "Personalised recommendations",
      "Text and image generation inside your app",
    ],
  },
  {
    slug: "ai-content-seo",
    title: "AI-Assisted Content & SEO",
    summary:
      "Publish more useful pages without losing your brand voice. AI drafts, a human edits and approves.",
    example:
      "500 unique city and service pages for a franchise, each reviewed before going live.",
    features: [
      "Content workflows with human review",
      "Programmatic SEO page templates",
      "Product descriptions in bulk",
      "Multi-language versions of your site",
    ],
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
