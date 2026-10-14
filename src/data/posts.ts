import { morePosts } from "@/data/posts-more";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  tag: "Websites" | "E-commerce" | "Mobile apps" | "Design" | "Backend" | "Cloud" | "Security" | "Maintenance" | "AI" | "SEO";
  date: string; // ISO yyyy-mm-dd
  quick: string;
  blocks: Block[];
};

const basePosts: Post[] = [
  {
    slug: "static-vs-dynamic-website-vs-web-app",
    title: "Static website, dynamic website or web app: which one do you need?",
    description:
      "A plain-language guide to the three kinds of websites, what each is good for, and four questions that tell you which one fits your business.",
    tag: "Websites",
    date: "2026-10-14",
    quick:
      "A static website shows the same fixed pages to everyone. A dynamic website builds its pages from a database, like a blog or an online store. A web app lets users log in and do things, like booking, billing or managing a dashboard. Choose by what your visitors need to do, not by what sounds modern.",
    blocks: [
      { type: "h2", text: "Static website" },
      {
        type: "p",
        text: "A static website is made of ready pages. Everyone who visits a page sees exactly the same thing. Because nothing has to be calculated when someone visits, static sites load very fast, cost little to host and have very few things that can break or be attacked.",
      },
      {
        type: "p",
        text: "They are a good fit for company introductions, service pages, landing pages for campaigns and portfolios. The limit is that changing content usually means editing the files, unless a content management system (CMS) is connected.",
      },
      { type: "h2", text: "Dynamic website" },
      {
        type: "p",
        text: "A dynamic website pulls its content from a database. A blog is the simplest example: every article is a row in a database and one template shows them all. Online stores work the same way, with products, prices and stock stored in a database.",
      },
      {
        type: "p",
        text: "The big advantage is that your team can add or change content without a developer. The trade-off is that there is more to build, host and secure than with a static site.",
      },
      { type: "h2", text: "Web application" },
      {
        type: "p",
        text: "A web app is software that runs in the browser. Users create accounts, log in, and see data that belongs to them. Booking portals, customer dashboards, learning platforms, CRMs and subscription products are all web apps.",
      },
      {
        type: "p",
        text: "This is the most powerful option and also the largest to build, because it needs a backend, a database, user accounts, permissions and careful security.",
      },
      {
        type: "table",
        head: ["Type", "Visitors can", "Content changes", "Typical examples"],
        rows: [
          ["Static website", "Read and contact you", "Developer or CMS", "Company site, landing page, portfolio"],
          ["Dynamic website", "Browse, search, buy", "Your team, from an admin area", "Blog, online store, listings"],
          ["Web app", "Log in and take actions", "Users create the data", "Booking portal, dashboard, SaaS"],
        ],
      },
      { type: "h2", text: "Four questions that decide it" },
      {
        type: "ol",
        items: [
          "Do users need their own account? If yes, you are building a web app.",
          "Will you add or change content often (articles, products, listings)? If yes, you need a dynamic site with a CMS.",
          "Do you only need to explain what you do and collect enquiries? A static site is likely enough and is the fastest to launch.",
          "Will you take payments or bookings online? That adds a backend and puts you in dynamic or web app territory.",
        ],
      },
      {
        type: "callout",
        title: "A common mistake",
        text: "Many businesses ask for a web app when a clear five-page website would bring in the same enquiries sooner. Start with what your visitors must be able to do, and build only that first. You can always grow it later.",
      },
      {
        type: "p",
        text: "Modern frameworks such as Next.js blur these lines. A site can be mostly static for speed and still fetch live data where it is needed, so you do not have to pick one extreme.",
      },
    ],
  },
  {
    slug: "what-is-an-api-and-why-apps-need-a-backend",
    title: "What is an API, and why does every app need a backend?",
    description:
      "Frontend, backend, API and database explained with a restaurant example, plus what a request to a backend actually looks like.",
    tag: "Backend",
    date: "2026-10-14",
    quick:
      "The frontend is what users see and tap. The backend holds your business rules and talks to the database. The API is the messenger between them: the frontend sends a request, the backend does the work and sends back data, usually as JSON.",
    blocks: [
      { type: "h2", text: "Think of a restaurant" },
      {
        type: "ul",
        items: [
          "The dining room and menu are the frontend. It is what the customer sees.",
          "The waiter is the API. He carries the order to the kitchen and brings the food back.",
          "The kitchen is the backend. It follows recipes (business rules) and prepares the order.",
          "The pantry is the database. It stores the ingredients (your data).",
        ],
      },
      {
        type: "p",
        text: "The customer never walks into the kitchen. In the same way, a browser or phone app never talks to your database directly. It always goes through the backend, using the API.",
      },
      { type: "h2", text: "What a request looks like" },
      {
        type: "p",
        text: "When someone searches for shoes on a store, the app sends a request such as GET /api/products?q=shoes to the backend. The backend checks the request, asks the database for matching products and replies with a small package of data in a format called JSON, for example a list with each product’s name, price and whether it is in stock. The frontend then turns that JSON into product cards on the screen.",
      },
      { type: "h2", text: "Why not put everything in the frontend?" },
      {
        type: "ul",
        items: [
          "Security: anything in the frontend can be seen by users. Payment keys, passwords and private rules must stay on a server.",
          "Shared data: orders, users and stock must be the same for everyone, so they live in one place.",
          "Rules: discounts, permissions and validation must be enforced where users cannot change them.",
          "Many apps, one system: your website, Android app, iPhone app and admin panel can all use the same backend.",
        ],
      },
      { type: "h2", text: "What a backend usually does" },
      {
        type: "ul",
        items: [
          "Checks who the user is (login and permissions).",
          "Validates input so bad or harmful data does not get in.",
          "Reads and writes the database.",
          "Talks to other services such as payment gateways, SMS, WhatsApp and email.",
          "Sends back clean, predictable responses.",
        ],
      },
      { type: "h2", text: "REST and GraphQL in one minute" },
      {
        type: "p",
        text: "These are two common styles for designing an API. REST gives you a separate address for each kind of data, such as products or orders. GraphQL lets the app ask for exactly the fields it needs in one request. Both work well. The right choice depends on how many different screens and apps will use the data.",
      },
      { type: "h2", text: "Which language is it written in?" },
      {
        type: "p",
        text: "Backends can be written in PHP (Laravel), JavaScript (Node.js), Python, Go, Java and others. The language matters less than good structure, security and a database designed for how your business really works.",
      },
      {
        type: "callout",
        title: "Do I always need a custom backend?",
        text: "No. A simple brochure website with a contact button does not need one. You need a backend as soon as you store user data, take payments, have logins or want an admin panel.",
      },
    ],
  },
  {
    slug: "native-vs-cross-platform-mobile-apps",
    title: "Native or cross-platform: should your app use Swift, Flutter or React Native?",
    description:
      "How native iOS and Android development differs from Flutter and React Native, and how to choose for a business app.",
    tag: "Mobile apps",
    date: "2026-10-14",
    quick:
      "Cross-platform tools (Flutter, React Native) let you build one app for both Android and iOS from a single codebase, which is usually faster and more affordable for business apps. Native development (Swift for iPhone, Kotlin for Android) gives the most control and performance, but you build and maintain two separate apps.",
    blocks: [
      { type: "h2", text: "The options" },
      {
        type: "table",
        head: ["Approach", "Language", "Platforms", "Best for"],
        rows: [
          ["Native iOS", "Swift", "iPhone and iPad only", "Apple-only products, deep iOS features"],
          ["Native Android", "Kotlin", "Android only", "Android-only products, deep Android features"],
          ["Flutter", "Dart", "Android, iOS and more", "Custom, polished interfaces on both stores"],
          ["React Native", "JavaScript / TypeScript", "Android and iOS", "Teams that already use React for the web"],
        ],
      },
      { type: "h2", text: "What “cross-platform” really means" },
      {
        type: "p",
        text: "With Flutter or React Native you write most of the app once. The same code produces an Android app and an iPhone app, and both are published to their stores like any other app. When you want a change, you make it once and release it to both.",
      },
      { type: "h2", text: "When native is the better choice" },
      {
        type: "ul",
        items: [
          "Heavy 3D graphics, games or augmented reality.",
          "Very deep use of device features, for example advanced Bluetooth, background processing or the newest platform features on launch day.",
          "You only need one platform and want the most platform-specific feel.",
        ],
      },
      { type: "h2", text: "When cross-platform fits" },
      {
        type: "p",
        text: "Most business apps are forms, lists, maps, payments, notifications and dashboards: booking apps, ordering apps, loyalty apps, field-staff apps and companion apps for a web product. These work very well in Flutter or React Native, and one team can deliver both platforms.",
      },
      { type: "h2", text: "How to choose" },
      {
        type: "ol",
        items: [
          "List the must-have features. Check whether any needs special device access.",
          "Decide whether you need both Android and iPhone at launch. Most businesses do.",
          "Think about who will maintain the app. One codebase means one team and one set of fixes.",
          "Ask whether a web version is planned. Sharing logic and design across web and mobile can save effort.",
        ],
      },
      { type: "h2", text: "Questions to ask any developer" },
      {
        type: "ul",
        items: [
          "Who publishes the app: your accounts or theirs? (It should be your own developer accounts.)",
          "How are updates and bug fixes handled after launch?",
          "Which backend will the app connect to, and who owns it?",
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "If your app is a business tool or a customer-facing service, start cross-platform. Move to native only when a real requirement demands it, not because it sounds more serious.",
      },
    ],
  },
  {
    slug: "ai-chatbot-vs-normal-chatbot",
    title: "How is an AI chatbot different from a normal chatbot?",
    description:
      "Rule-based bots versus AI chatbots, why AI can make things up, and how RAG keeps a business chatbot accurate.",
    tag: "AI",
    date: "2026-10-14",
    quick:
      "A normal (rule-based) chatbot follows a fixed script of buttons and keywords. An AI chatbot understands free-form questions and answers in natural language. A good business AI chatbot answers only from your own content using a technique called RAG, and hands over to a person when it is not sure.",
    blocks: [
      { type: "h2", text: "The normal, rule-based chatbot" },
      {
        type: "p",
        text: "This is the “press 1 for pricing, press 2 for support” type. It follows a decision tree that someone has designed in advance. It is predictable and cheap, but it breaks the moment a customer asks something the designer did not expect.",
      },
      { type: "h2", text: "The AI chatbot" },
      {
        type: "p",
        text: "An AI chatbot uses a large language model (LLM), the same kind of technology behind modern AI assistants. It can understand a question written in everyday language, including Hindi, English or a mix, and reply in a natural way without a script for every case.",
      },
      {
        type: "table",
        head: ["", "Rule-based bot", "AI chatbot"],
        rows: [
          ["How it works", "Fixed script and keywords", "Understands language"],
          ["Unexpected questions", "Gets stuck", "Can usually respond sensibly"],
          ["Setup", "Design every path by hand", "Give it your content and rules"],
          ["Main risk", "Frustrating dead ends", "Confident but wrong answers"],
        ],
      },
      { type: "h2", text: "The catch: AI can make things up" },
      {
        type: "p",
        text: "A general AI model answers from what it learned during training, not from your business. If you ask it your return policy, it may invent a believable one. This is often called hallucination, and it is the main thing that must be handled in a business chatbot.",
      },
      { type: "h2", text: "RAG: answering from your own content" },
      {
        type: "p",
        text: "RAG stands for retrieval-augmented generation. In simple steps:",
      },
      {
        type: "ol",
        items: [
          "Your documents, FAQs, price lists and web pages are split into small pieces and stored in a searchable index.",
          "When a customer asks a question, the system first finds the few pieces that are most relevant.",
          "Only those pieces are given to the AI with the instruction: answer using this material only.",
          "The AI writes a clear reply, ideally showing which source it used. If the material does not contain the answer, it says so.",
        ],
      },
      { type: "h2", text: "Guardrails that make it safe to use" },
      {
        type: "ul",
        items: [
          "A clear “I don’t know, let me connect you to our team” behaviour.",
          "A human hand-off for sensitive topics such as complaints, payments or health.",
          "Limits on what it can discuss, so it stays on your business.",
          "Conversation logs that someone reviews, so the content can be improved over time.",
        ],
      },
      { type: "h2", text: "Where it works well, and where to be careful" },
      {
        type: "p",
        text: "AI chatbots work well for common customer questions, qualifying leads, explaining services, and (when connected to your systems) checking an order or booking a slot. Be careful with anything that needs professional judgement, such as medical, legal or financial advice. Those should always involve a qualified person.",
      },
      {
        type: "callout",
        title: "What makes the biggest difference",
        text: "The quality of your content. A chatbot built on clear, up-to-date answers will be useful. One built on outdated or missing information will not, no matter how advanced the AI is.",
      },
    ],
  },
  {
    slug: "what-is-mcp-model-context-protocol",
    title: "What is MCP (Model Context Protocol)? A plain explanation for business owners",
    description:
      "MCP is an open standard that lets AI assistants safely use your tools and data. Here is what it is, how it works and when a business needs it.",
    tag: "AI",
    date: "2026-10-14",
    quick:
      "MCP, the Model Context Protocol, is an open standard introduced by Anthropic in late 2024 that gives AI apps one consistent way to connect to tools and data such as a CRM, calendar or database. You build an MCP server for a tool once, and any MCP-compatible AI app can use it, with permissions you control.",
    blocks: [
      { type: "h2", text: "The problem MCP solves" },
      {
        type: "p",
        text: "An AI assistant on its own can only talk. To be useful at work it must read your data and take actions: look up a customer, create a calendar event, update a spreadsheet. Before MCP, each AI app needed a separate custom integration for every tool. Ten AI apps and ten tools meant a hundred integrations.",
      },
      { type: "h2", text: "The idea: one standard plug" },
      {
        type: "p",
        text: "MCP works like a universal connector. Instead of building every combination, you wrap each tool in a small MCP server. Any AI app that supports MCP, called an MCP client, can then discover and use it in the same way. It has since been adopted across many AI tools and platforms.",
      },
      { type: "h2", text: "The pieces" },
      {
        type: "ul",
        items: [
          "MCP client: the AI app or assistant that wants to use a tool.",
          "MCP server: a small program that exposes one of your systems, such as your CRM or database.",
          "Tools: actions the AI may perform, for example “create_event” or “find_customer”.",
          "Resources: data the AI may read, such as a document or a record.",
        ],
      },
      { type: "h2", text: "An example" },
      {
        type: "p",
        text: "You tell a sales assistant: “Show me the leads from last week and book a call with the most promising one.” The assistant uses the CRM server’s tool to list the leads, picks one, then uses the calendar server’s tool to create the meeting. You get the result without opening either system.",
      },
      { type: "h2", text: "Safety comes first" },
      {
        type: "p",
        text: "Giving an AI the ability to act means you must control what it can do. A responsible MCP setup includes:",
      },
      {
        type: "ul",
        items: [
          "Least privilege: each server exposes only the few actions that are really needed.",
          "Read-only by default, with write actions added deliberately.",
          "Approval steps for sensitive actions such as sending money or deleting data.",
          "A log of every action the AI takes.",
          "Connecting only servers you trust, because content that an AI reads can contain instructions meant to mislead it.",
        ],
      },
      { type: "h2", text: "Do you need it?" },
      {
        type: "p",
        text: "MCP is worth it when you want an assistant that does tasks across your own systems: updating records, preparing reports, scheduling or processing requests. It is not necessary for a simple FAQ chatbot that only answers questions from your content.",
      },
      {
        type: "callout",
        title: "How it is built",
        text: "A typical first MCP server is small: a Python or Node.js service that exposes three to five carefully chosen actions on one system, with permissions and logging. You can start there and add more tools once it proves useful.",
      },
    ],
  },
  {
    slug: "why-is-my-website-not-showing-on-google",
    title: "Why is my website not showing on Google? Seven common reasons",
    description:
      "How to check whether Google knows your site, and the most common reasons a website does not appear in search, with what to do about each.",
    tag: "SEO",
    date: "2026-10-14",
    quick:
      "The usual causes are: the site is not indexed yet, it is blocked by a noindex tag or robots.txt, it is brand new, it loads slowly or is hard to use on mobile, it has no page that matches what people search for, its content is thin or duplicated, or it has no local signals. Start with Google Search Console to see what Google actually knows.",
    blocks: [
      { type: "h2", text: "First, check if Google knows your site" },
      {
        type: "ol",
        items: [
          "Search Google for site:yourdomain.com. If nothing appears, your pages are not indexed.",
          "Open Google Search Console (it is free) and add your site.",
          "Use the URL Inspection tool on your home page. It tells you whether the page is indexed and, if not, why.",
        ],
      },
      { type: "h2", text: "Seven common reasons" },
      {
        type: "ol",
        items: [
          "Not submitted or discovered yet. Submit your sitemap in Search Console so Google can find every page.",
          "Blocked by mistake. A noindex tag or a robots.txt rule left over from the development stage will keep the whole site out of Google. This is more common than people expect.",
          "The site is new. It can take days or weeks for a new site to be crawled and to start appearing. Nobody can promise an exact time.",
          "Slow or poor on mobile. Most searches happen on phones. Pages that load slowly, shift around or are hard to tap tend to do worse.",
          "No page matches the search. If people search “website development in Chandigarh” and you have no page about it, there is nothing for Google to show. Give each service its own page with a clear title and headings.",
          "Thin or copied content. Pages with a few lines of text, or text copied from other sites, give Google little reason to rank them.",
          "No local signals. For local businesses, a complete Google Business Profile and consistent name, address and phone details matter a lot.",
        ],
      },
      { type: "h2", text: "What does not work" },
      {
        type: "ul",
        items: [
          "Buying links or using “SEO packages” that promise a number-one ranking in a few days.",
          "Stuffing the same keyword into every sentence.",
          "Copying competitors’ text.",
        ],
      },
      { type: "h2", text: "What does work" },
      {
        type: "ul",
        items: [
          "A fast, mobile-friendly site with clean structure, proper page titles and descriptions, and a sitemap.",
          "Useful pages and articles that answer the questions your customers really ask.",
          "Being consistent over months rather than looking for a quick trick.",
        ],
      },
      {
        type: "callout",
        title: "An honest note",
        text: "Anyone who guarantees a first-page or number-one ranking is promising something they do not control. A well-built website gives you the strongest foundation, and steady, useful content builds on it.",
      },
    ],
  },
];

export const posts: Post[] = [...basePosts, ...morePosts];

export const POSTS_PER_PAGE = 6;
export const totalPages = () => Math.ceil(posts.length / POSTS_PER_PAGE);
export const postsForPage = (page: number) => posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export function readingMinutes(post: Post) {
  const words = [post.quick, ...post.blocks.flatMap((block) => {
    if (block.type === "h2" || block.type === "p") return [block.text];
    if (block.type === "ul" || block.type === "ol") return block.items;
    if (block.type === "callout") return [block.title, block.text];
    return [...block.head, ...block.rows.flat()];
  })]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
