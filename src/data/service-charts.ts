import type { ChartConfig } from "@/components/spider-chart";

export type ServiceChart = {
  eyebrow: string;
  heading: string;
  config: ChartConfig;
  steps: { title: string; text: string }[];
};

export const serviceCharts: Record<string, ServiceChart> = {
  "web-development": {
    eyebrow: "How a website earns",
    heading: "From a visitor to a customer, step by step.",
    config: {
      alt: "Spider diagram: visitors from Google search, ads, social media, WhatsApp and referrals arrive at your website. The website, built as a business site, landing page, online store, web app or booking portal, turns them into enquiries, orders, bookings, sign-ups and calls, supported by a CMS, payments, CRM and email, and analytics.",
      center: { title: ["Your", "Website"], sub: ["fast · secure", "SEO-ready"] },
      left: {
        title: "Visitors",
        sub: "your audience",
        leaves: ["Google Search", "Ads", "Social media", "WhatsApp", "Referrals"],
        note: { title: "Mobile-first design", sub: "most visitors use phones" },
      },
      right: {
        title: "Outcomes",
        sub: "leads & sales",
        leaves: ["Enquiries", "Orders", "Bookings", "Sign-ups", "Calls"],
        note: { title: "Every lead captured", sub: "nothing gets lost" },
      },
      top: { caption: "Built as the right type for your goal", leaves: ["Business site", "Landing page", "Online store", "Web app", "Booking portal"] },
      bottom: {
        caption: "What runs behind the scenes",
        boxes: [
          { title: "CMS you control", sub: "edit content yourself" },
          { title: "Payments", sub: "Stripe · Razorpay" },
          { title: "CRM & email", sub: "leads reach you fast" },
          { title: "Analytics", sub: "see what works" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Visit" },
        { side: "left", dir: "out", n: 2, label: "Answers" },
        { side: "right", dir: "out", n: 3, label: "Action" },
        { side: "right", dir: "in", n: 4, label: "Follow-up" },
      ],
      badge: { n: 5, label: "Measure & improve" },
    },
    steps: [
      { title: "Visitors arrive", text: "They find you on Google, through ads, on social media or from a WhatsApp link." },
      { title: "Your site answers", text: "Fast, clear pages that build trust and explain your offer on any device." },
      { title: "Visitor takes action", text: "They send an enquiry, place an order, book a slot or sign up." },
      { title: "You follow up", text: "You are alerted instantly and the lead lands in your CRM or inbox." },
      { title: "Measure & improve", text: "Analytics shows what works, so the site keeps getting better." },
    ],
  },

  "mobile-apps": {
    eyebrow: "How a mobile app works",
    heading: "From a tap on the phone to live data from your server.",
    config: {
      alt: "Spider diagram: users on Android and iPhone install the app from the Play Store or App Store. One codebase delivers features such as login, push alerts, payments, maps and offline mode. The app talks to your backend APIs, database, admin panel and payment, maps, email and SMS services.",
      center: { title: ["Mobile", "App"], sub: ["one codebase", "Flutter / React Native"] },
      left: {
        title: "Users",
        sub: "on their phones",
        leaves: ["Android", "iPhone", "Play Store", "App Store"],
        note: { title: "Android + iOS together", sub: "one team, one budget" },
      },
      right: {
        title: "Backend",
        sub: "APIs & data",
        leaves: ["Database", "Admin panel", "Payments API", "Email & SMS", "Analytics"],
        note: { title: "You stay in control", sub: "admin panel for your team" },
      },
      top: { caption: "In-app features", leaves: ["Login", "Push alerts", "Maps", "Offline mode", "In-app chat"] },
      bottom: {
        caption: "From idea to both app stores",
        boxes: [
          { title: "Design", sub: "Figma screens" },
          { title: "Build", sub: "Flutter / React Native" },
          { title: "Test", sub: "on real devices" },
          { title: "Publish", sub: "Play Store & App Store" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Taps" },
        { side: "left", dir: "out", n: 2, label: "Screens" },
        { side: "right", dir: "out", n: 3, label: "API call" },
        { side: "right", dir: "in", n: 4, label: "Data" },
      ],
      badge: { n: 5, label: "Release updates" },
    },
    steps: [
      { title: "User installs & taps", text: "They get the app from Google Play or the App Store and start using it." },
      { title: "App responds", text: "Smooth screens that work well on any phone, offline where it matters." },
      { title: "App calls your backend", text: "Login, orders and bookings are sent securely to your API." },
      { title: "Data comes back", text: "Live results, plus push notifications that bring users back." },
      { title: "Updates ship", text: "We release improvements to both stores so the app keeps getting better." },
    ],
  },

  "ai-products": {
    eyebrow: "How an AI agent works",
    heading: "From a customer’s question to a real action, with MCP in the middle.",
    config: {
      alt: "Spider diagram of an AI agent. Customers on website chat, WhatsApp, mobile app or email ask a question. The AI agent, powered by a language model such as OpenAI, Claude, Gemini or Llama, retrieves facts from your documents and data, then uses the Model Context Protocol to call tools such as your CRM, Google Sheets, calendar, payments, database and APIs, and answers the customer.",
      center: { title: ["AI Agent"], sub: ["LLM + your rules", "reasons & decides"] },
      left: {
        title: "Users",
        sub: "your customers",
        leaves: ["Website chat", "WhatsApp", "Mobile app", "Email"],
        note: { title: "Human hand-off · chat logs", sub: "people stay in control" },
      },
      right: {
        title: "MCP",
        sub: "tool connector",
        leaves: ["CRM", "Google Sheets", "Calendar", "Payments", "Database", "Your APIs"],
        note: { title: "Model Context Protocol", sub: "one standard plug for AI ↔ tools" },
      },
      top: { caption: "LLM brains, swap anytime", leaves: ["OpenAI", "Claude", "Gemini", "Llama"] },
      bottom: {
        caption: "Your knowledge base (RAG): the AI answers from your content",
        boxes: [
          { title: "Docs & PDFs", sub: "policies, price lists" },
          { title: "Website & FAQs", sub: "your public content" },
          { title: "Vector search", sub: "pgvector · Pinecone" },
          { title: "Chat history", sub: "context & memory" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Question" },
        { side: "left", dir: "out", n: 5, label: "Answer" },
        { side: "right", dir: "out", n: 3, label: "Tool call" },
        { side: "right", dir: "in", n: 4, label: "Result" },
      ],
      badge: { n: 2, label: "Retrieve facts" },
    },
    steps: [
      { title: "User asks", text: "A customer asks a question on your website, WhatsApp or app." },
      { title: "Retrieve facts", text: "The agent pulls matching facts from your own documents and data (RAG)." },
      { title: "Act through MCP", text: "If needed, it calls a tool, such as checking an order or booking a slot, using the Model Context Protocol." },
      { title: "Tool returns a result", text: "Your system answers with real data and the agent checks it." },
      { title: "Answer or hand off", text: "The user gets a reply in their language. Unsure or sensitive cases go to a human." },
    ],
  },

  "ui-ux-design": {
    eyebrow: "How design works",
    heading: "From your brief to developer-ready screens, approved before any code.",
    config: {
      alt: "Spider diagram: your brief, with business goals, target users, competitors, content and brand, goes into UI/UX design. Design produces wireframes, visual design, mobile layouts, a prototype and a brand kit, validated through user testing, review rounds, accessibility checks and developer review, then handed off as Figma files, a design system, a prototype and assets.",
      center: { title: ["UI/UX", "Design"], sub: ["2 Wireframes", "3 Visual & prototype"] },
      left: {
        title: "Your Brief",
        sub: "goals & users",
        leaves: ["Business goals", "Target users", "Competitors", "Content", "Brand"],
        note: { title: "You stay involved", sub: "approve before any code" },
      },
      right: {
        title: "Dev-ready",
        sub: "hand-off",
        leaves: ["Figma files", "Style guide", "Components", "Assets & specs"],
        note: { title: "Zero guesswork", sub: "developers get exact specs" },
      },
      top: { caption: "What you receive", leaves: ["Wireframes", "Visual design", "Mobile layouts", "Prototype", "Brand kit"] },
      bottom: {
        caption: "Validated before development starts",
        boxes: [
          { title: "User testing", sub: "real feedback" },
          { title: "Review rounds", sub: "until you approve" },
          { title: "Accessibility", sub: "readable by everyone" },
          { title: "Dev review", sub: "feasible to build" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Brief" },
        { side: "left", dir: "out", n: 4, label: "Drafts" },
        { side: "right", dir: "out", n: 5, label: "Hand-off" },
      ],
    },
    steps: [
      { title: "Brief", text: "You share goals, target users, competitors and brand. We ask the right questions." },
      { title: "Wireframes", text: "Simple layouts that settle the structure and flow of every screen." },
      { title: "Visual design", text: "Colours, type and components, plus a clickable prototype." },
      { title: "Review & test", text: "You and real users give feedback. We refine until you approve." },
      { title: "Hand-off", text: "Developer-ready Figma files, design system and assets." },
    ],
  },

  "backend-cloud": {
    eyebrow: "How the backend works",
    heading: "One request, from the client to the database and back.",
    config: {
      alt: "Spider diagram: clients such as your website, mobile app, admin panel, partners and third-party apps send requests to an API layer. The API layer, built in Laravel, Node.js, Python, Go or Java, checks identity and rules, queries databases such as PostgreSQL, MySQL, MongoDB and Redis, and calls payments, messaging and cloud services before returning a JSON response.",
      center: { title: ["API", "Layer"], sub: ["auth · rules", "REST / GraphQL"] },
      left: {
        title: "Clients",
        sub: "who calls the API",
        leaves: ["Website", "Mobile app", "Admin panel", "Partners", "Third-party apps"],
        note: { title: "Secure by default", sub: "HTTPS, tokens, rate limits" },
      },
      right: {
        title: "Data",
        sub: "stored safely",
        leaves: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "File storage"],
        note: { title: "Backups & migration", sub: "no data is lost" },
      },
      top: { caption: "Built in the right language", leaves: ["Laravel", "Node.js", "Python", "Go", "Java"] },
      bottom: {
        caption: "Integrations and cloud around it",
        boxes: [
          { title: "Payments", sub: "Stripe · Razorpay" },
          { title: "Messaging", sub: "SMS · WhatsApp · email" },
          { title: "Cloud hosting", sub: "AWS · GCP · Cloudflare" },
          { title: "CI/CD & logs", sub: "safe releases" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Request" },
        { side: "left", dir: "out", n: 5, label: "Response" },
        { side: "right", dir: "out", n: 3, label: "Query" },
        { side: "right", dir: "in", n: 4, label: "Data" },
      ],
      badge: { n: 2, label: "Auth & validate" },
    },
    steps: [
      { title: "Client sends a request", text: "Your website, app or a partner system calls the API." },
      { title: "API checks the rules", text: "It verifies who is asking and validates the input, with rate limits." },
      { title: "API queries the data", text: "It asks the right database for exactly what is needed." },
      { title: "Data returns", text: "Records come back from SQL, NoSQL or search." },
      { title: "Response is sent", text: "A clean JSON reply goes back, and payments or messages are triggered if needed." },
    ],
  },

  "maintenance-support": {
    eyebrow: "How care works",
    heading: "A loop that keeps your site healthy and improving.",
    config: {
      alt: "Spider diagram: your live site or app is watched for uptime, security, speed, backups and errors. Alerts reach the care team, which also receives your change requests, bug reports and ideas. The team applies updates, patches, backups, speed tune-ups and SEO checks, and sends you a monthly report.",
      center: { title: ["Care", "Team"], sub: ["monitor · fix", "improve"] },
      left: {
        title: "Your Site",
        sub: "live & running",
        leaves: ["Uptime", "Security", "Speed", "Errors", "Content"],
        note: { title: "Nothing slips through", sub: "monitored around the clock" },
      },
      right: {
        title: "You",
        sub: "the owner",
        leaves: ["Change requests", "Bug reports", "New ideas", "Monthly report"],
        note: { title: "Quick response", sub: "on every care plan" },
      },
      top: { caption: "What we do every month", leaves: ["Updates", "Patches", "Backups", "Speed tune-ups", "SEO checks"] },
      bottom: {
        caption: "Tools that watch your site",
        boxes: [
          { title: "Uptime monitor", sub: "alerts in minutes" },
          { title: "Error tracking", sub: "find bugs early" },
          { title: "Backup storage", sub: "restore anytime" },
          { title: "Search Console", sub: "SEO health" },
        ],
      },
      flows: [
        { side: "left", dir: "in", n: 1, label: "Alerts" },
        { side: "right", dir: "in", n: 2, label: "Requests" },
        { side: "left", dir: "out", n: 3, label: "Fixes" },
        { side: "right", dir: "out", n: 4, label: "Report" },
      ],
      badge: { n: 5, label: "Tune-ups" },
    },
    steps: [
      { title: "We monitor", text: "Uptime, speed, security and errors are watched, and alerts reach us first." },
      { title: "You ask", text: "Send change requests, bug reports or ideas whenever you need." },
      { title: "We fix & update", text: "Updates, patches and changes go live safely, with a backup behind them." },
      { title: "You get a report", text: "A clear monthly summary of what was done and how the site is performing." },
      { title: "We improve", text: "Speed and SEO tune-ups keep the site growing, not just surviving." },
    ],
  },
};
