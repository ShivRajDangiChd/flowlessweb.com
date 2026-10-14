import type { Post } from "@/data/posts";

export const morePosts: Post[] = [
  {
    slug: "what-decides-the-cost-of-a-website",
    title: "How much does a website cost? What actually decides the price",
    description:
      "The real factors behind website pricing, how to compare quotes fairly, and the red flags to watch for before you hire anyone.",
    tag: "Websites",
    date: "2026-10-14",
    quick:
      "There is no single price for a website, because the cost depends on how many pages and features you need, how custom the design is, which tools it connects to, and who writes the content. The fair way to compare quotes is to compare what is included, not only the total.",
    blocks: [
      { type: "h2", text: "What pushes the price up or down" },
      {
        type: "ul",
        items: [
          "Size: a five-page business site and a fifty-page site with a blog are very different jobs.",
          "Design: a ready template is quicker and cheaper; a design made for your brand takes more time.",
          "Features: contact forms are simple. Online payments, bookings, user logins and dashboards are much bigger.",
          "Integrations: connecting a CRM, payment gateway, WhatsApp or accounting software adds work.",
          "Content: if we write the text, create images or translate the site, that is extra effort.",
          "Speed of delivery: a tight deadline usually costs more than a relaxed one.",
        ],
      },
      { type: "h2", text: "Costs that are not the developer’s fee" },
      {
        type: "p",
        text: "Some costs go to other companies. These include the domain name, hosting, paid plugins or tools, premium fonts and stock images, and paid APIs such as SMS or AI services. A good proposal tells you which of these apply and who pays them, and they should be in your name.",
      },
      { type: "h2", text: "How to compare two quotes fairly" },
      {
        type: "ol",
        items: [
          "Ask for a written scope: pages, features, integrations and what is not included.",
          "Check the timeline and how many rounds of changes you get.",
          "Confirm who owns the domain, hosting and code after launch.",
          "Ask what support you get after going live, and for how long.",
          "Check that mobile design, basic SEO setup and speed are included, not optional extras.",
        ],
      },
      { type: "h2", text: "Red flags" },
      {
        type: "ul",
        items: [
          "A very low price with no written scope. The difference usually appears later as extras.",
          "No mention of who owns the site, or hosting accounts in the developer’s name.",
          "Promises of guaranteed rankings or sales.",
          "No post-launch support at all.",
        ],
      },
      {
        type: "callout",
        title: "A better question than “how much?”",
        text: "Ask “what do I need to achieve, and what is the simplest site that does it?” Starting small and growing the site later almost always costs less than building everything at once.",
      },
    ],
  },
  {
    slug: "what-makes-a-website-fast-core-web-vitals",
    title: "What makes a website fast? Core Web Vitals in plain language",
    description:
      "Why speed matters, what Google’s three Core Web Vitals measure, and the practical fixes that make most sites noticeably faster.",
    tag: "Websites",
    date: "2026-10-14",
    quick:
      "A fast website shows its main content quickly, responds instantly when tapped, and does not jump around while loading. Google measures this with three Core Web Vitals: LCP, INP and CLS. Optimised images, less unused code and good hosting fix most problems.",
    blocks: [
      { type: "h2", text: "Why speed matters" },
      {
        type: "p",
        text: "Visitors, especially on phones and slower networks, leave pages that feel slow. Speed is also part of how Google judges page experience. A fast site keeps people reading, makes forms easier to complete and supports your search visibility.",
      },
      { type: "h2", text: "The three Core Web Vitals" },
      {
        type: "table",
        head: ["Metric", "What it measures", "Good score"],
        rows: [
          ["LCP (Largest Contentful Paint)", "How quickly the main content appears", "2.5 seconds or less"],
          ["INP (Interaction to Next Paint)", "How quickly the page reacts when you tap or click", "200 milliseconds or less"],
          ["CLS (Cumulative Layout Shift)", "How much the layout jumps around while loading", "0.1 or less"],
        ],
      },
      { type: "h2", text: "Common causes of a slow site" },
      {
        type: "ul",
        items: [
          "Huge images that were never compressed or resized.",
          "Too many plugins, scripts and tracking tools loading at once.",
          "Cheap shared hosting that responds slowly.",
          "Fonts and banners that load late and push the page around.",
          "Code that runs far more than the page needs.",
        ],
      },
      { type: "h2", text: "What usually fixes it" },
      {
        type: "ol",
        items: [
          "Compress images, use modern formats and load them only when they come into view.",
          "Remove plugins and scripts you do not really use.",
          "Serve the site through a CDN, so visitors get it from a nearby server.",
          "Reserve space for images and banners so the layout does not shift.",
          "Choose a modern framework that sends less code to the browser.",
        ],
      },
      { type: "h2", text: "How to check your own site" },
      {
        type: "p",
        text: "Google’s PageSpeed Insights is free. Enter your address and it shows your Core Web Vitals and the specific issues slowing you down. Test the mobile result first, since that is how most people visit.",
      },
      {
        type: "callout",
        title: "Fast is easier to build than to fix",
        text: "Performance is much cheaper when it is planned from the start than when it is patched onto a heavy site later. It is one of the things we build in by default.",
      },
    ],
  },
  {
    slug: "what-is-a-cms-and-which-one-to-choose",
    title: "What is a CMS, and which one should your business use?",
    description:
      "A content management system lets your team edit the website without a developer. Here is how WordPress, headless CMS and custom admin panels compare.",
    tag: "Websites",
    date: "2026-10-14",
    quick:
      "A CMS (content management system) is a simple admin area where you edit text, images and posts without touching code. WordPress is the most common choice. A headless CMS gives more speed and flexibility. A custom admin panel suits unusual workflows. Pick based on who will edit the site and how often.",
    blocks: [
      { type: "h2", text: "What a CMS does" },
      {
        type: "p",
        text: "Without a CMS, every text change means asking a developer. With one, your team logs in, changes a page, adds a blog post or updates a price, and publishes it. The design stays consistent because the CMS controls the layout.",
      },
      { type: "h2", text: "The main options" },
      {
        type: "table",
        head: ["Option", "How it works", "Good for"],
        rows: [
          ["WordPress", "Site and editor in one system, extended with plugins", "Blogs and business sites with many editors"],
          ["Headless CMS", "Editor is separate; the website fetches content from it", "Fast, custom sites and multi-channel content"],
          ["Custom admin panel", "Built for your exact data and workflow", "Listings, bookings and unusual business rules"],
        ],
      },
      { type: "h2", text: "Things to weigh" },
      {
        type: "ul",
        items: [
          "Who edits: a non-technical team needs a simple, forgiving editor.",
          "How often: daily publishing needs a good workflow; yearly edits do not.",
          "Plugins: they add features quickly but need regular updates and can slow or weaken a site if neglected.",
          "Speed and security: fewer moving parts generally means a faster, safer site.",
          "Ownership: make sure you can export your content and are not locked in.",
        ],
      },
      { type: "h2", text: "Our usual advice" },
      {
        type: "p",
        text: "For a small brochure site that rarely changes, you may not need a CMS at all. For a content-heavy site, a headless CMS with a fast front end is a strong choice. For something with very specific business rules, a custom admin panel avoids bending a general tool into shape.",
      },
      {
        type: "callout",
        title: "Ask before you commit",
        text: "Which system will edit the site, who updates it, and what happens if you want to move to another developer later? Good answers to these matter more than the brand name of the CMS.",
      },
    ],
  },
  {
    slug: "custom-store-vs-shopify-vs-woocommerce",
    title: "Online store: custom build, Shopify or WooCommerce?",
    description:
      "A fair comparison of the three common ways to start an e-commerce store, and how to choose for your products and budget.",
    tag: "E-commerce",
    date: "2026-10-14",
    quick:
      "Shopify is a hosted platform that is quick to launch. WooCommerce is a WordPress plugin that gives flexibility at the cost of more upkeep. A custom store gives full control and unusual features, but takes the most time to build. Choose by how special your needs are and how soon you want to sell.",
    blocks: [
      { type: "h2", text: "The three routes" },
      {
        type: "table",
        head: ["", "Shopify", "WooCommerce", "Custom store"],
        rows: [
          ["Set-up speed", "Fast", "Moderate", "Slowest"],
          ["Hosting and security", "Handled by the platform", "You manage it", "You manage it"],
          ["Flexibility", "Good through apps", "High, through plugins and code", "Unlimited"],
          ["Ongoing costs", "Monthly plan plus app fees", "Hosting plus plugins", "Hosting and maintenance"],
          ["Best for", "Standard stores that want speed", "Content-led stores on WordPress", "Special workflows, large catalogues"],
        ],
      },
      { type: "h2", text: "When Shopify fits" },
      {
        type: "p",
        text: "If you sell regular products, want to launch quickly and prefer not to manage servers, a hosted platform is a sensible start. You trade some flexibility and pay platform fees for convenience.",
      },
      { type: "h2", text: "When WooCommerce fits" },
      {
        type: "p",
        text: "If your business already runs on WordPress, or content and SEO are central to how you sell, WooCommerce keeps everything in one place. It needs regular updates, backups and good hosting to stay fast and safe.",
      },
      { type: "h2", text: "When a custom store is worth it" },
      {
        type: "ul",
        items: [
          "Product options that general platforms handle poorly, such as made-to-order or complex pricing.",
          "A very large catalogue where speed is critical.",
          "Deep integrations with your own inventory, ERP or delivery systems.",
          "A brand experience that a template cannot deliver.",
        ],
      },
      { type: "h2", text: "What matters on any platform" },
      {
        type: "ul",
        items: [
          "Fast mobile pages and a short checkout.",
          "Local payment options such as UPI, cards, net banking and cash on delivery where relevant.",
          "Clear shipping, returns and contact information.",
          "Good product photos and descriptions.",
        ],
      },
      {
        type: "callout",
        title: "Start simple",
        text: "Many successful stores begin on a standard platform and move to a custom build later when real sales show what is needed. Do not build a complex system before you have proven the demand.",
      },
    ],
  },
  {
    slug: "how-online-payments-work-on-a-website",
    title: "How do online payments work on a website? Gateways, UPI and what to check",
    description:
      "What a payment gateway does, how a payment flows from checkout to your bank, and the checks that keep your business and customers safe.",
    tag: "E-commerce",
    date: "2026-10-14",
    quick:
      "A payment gateway securely collects the customer’s payment (UPI, card or net banking), tells your website whether it succeeded, and settles the money to your bank account after deducting a fee. Your site should never handle raw card details, and should confirm payments on the server, not just on the page.",
    blocks: [
      { type: "h2", text: "What a payment gateway is" },
      {
        type: "p",
        text: "A payment gateway is a service that sits between your website, your customer’s bank and your own bank account. Popular gateways in India include Razorpay, Cashfree and PayU, and Stripe is also used. Availability and onboarding rules differ by business, so check which one accepts yours.",
      },
      { type: "h2", text: "How a payment flows" },
      {
        type: "ol",
        items: [
          "The customer clicks Pay on your checkout.",
          "Your server creates an order with the gateway for the exact amount.",
          "The customer pays on the gateway’s secure screen using UPI, card or net banking.",
          "The gateway tells your server the result through a message called a webhook.",
          "Your system marks the order as paid and sends confirmation.",
          "The gateway settles the money to your bank account, usually after a short delay and minus its fee.",
        ],
      },
      { type: "h2", text: "Why the server must confirm the payment" },
      {
        type: "p",
        text: "A customer’s browser can be closed, refreshed or even tampered with. The only reliable proof of payment is the confirmation your server receives directly from the gateway. Sites that trust only the success page on the screen risk marking unpaid orders as paid.",
      },
      { type: "h2", text: "Security basics" },
      {
        type: "ul",
        items: [
          "Never store card numbers yourself. The gateway handles card data.",
          "Keep secret keys on the server, never in the website code that visitors can see.",
          "Use HTTPS everywhere.",
          "Test in the gateway’s test mode before going live.",
          "Handle failed, pending and duplicate payments properly.",
        ],
      },
      { type: "h2", text: "Things to check before choosing" },
      {
        type: "ul",
        items: [
          "The fee per transaction for each payment method.",
          "How long settlement takes.",
          "The paperwork needed to activate your account.",
          "Support for refunds, subscriptions or invoices if you need them.",
        ],
      },
      {
        type: "callout",
        title: "UPI matters in India",
        text: "Many customers prefer UPI. Make sure it is easy to choose on the checkout, especially on a phone, and test the full payment flow before you launch.",
      },
    ],
  },
  {
    slug: "mobile-app-or-website-or-pwa",
    title: "Do you need a mobile app, or is a website enough?",
    description:
      "How to decide between a mobile website, a progressive web app (PWA) and a full mobile app, based on how your customers use you.",
    tag: "Mobile apps",
    date: "2026-10-14",
    quick:
      "If customers visit you occasionally to find information or place an order, a good mobile-friendly website is usually enough. If they use you often, need push notifications or device features, or you want a presence in the app stores, a mobile app is worth building. A progressive web app sits in between.",
    blocks: [
      { type: "h2", text: "Three options" },
      {
        type: "table",
        head: ["Option", "What it is", "Reach", "Best for"],
        rows: [
          ["Mobile-friendly website", "Opens in the browser on any device", "Everyone with a browser; found on Google", "Information, enquiries, simple ordering"],
          ["Progressive web app (PWA)", "A website that can be added to the home screen and works partly offline", "Anyone with a modern browser", "App-like experience without the stores"],
          ["Mobile app", "Installed from Google Play or the App Store", "Only people who install it", "Frequent use, notifications, device features"],
        ],
      },
      { type: "h2", text: "Choose an app when…" },
      {
        type: "ul",
        items: [
          "Customers will use it repeatedly, for example loyalty, bookings or daily orders.",
          "You need reliable push notifications to bring them back.",
          "You need the camera, location, Bluetooth or other device features.",
          "You want a presence in the app stores.",
        ],
      },
      { type: "h2", text: "A website is enough when…" },
      {
        type: "ul",
        items: [
          "Most visitors arrive from Google or social media and visit once or twice.",
          "The main goal is to explain services and collect enquiries.",
          "You are still testing the idea and want to keep costs down.",
        ],
      },
      { type: "h2", text: "About PWAs" },
      {
        type: "p",
        text: "A PWA can feel like an app and avoids store approval, but support for some features differs between Android and iPhone, so list the features you need and check them before choosing this route.",
      },
      { type: "h2", text: "A sensible order" },
      {
        type: "p",
        text: "Many businesses build the website first, prove demand, then add an app once customers are returning often. The two can share the same backend, so the work is not wasted.",
      },
      {
        type: "callout",
        title: "Remember the install barrier",
        text: "Asking someone to download an app is a big step. If a visitor can reach the same result in a browser, many will never install it. Build an app only when it gives them something clearly better.",
      },
    ],
  },
  {
    slug: "what-is-ui-ux-design",
    title: "What is UI/UX design, and why does it affect your business results?",
    description:
      "UI is how a product looks; UX is how it works for the person using it. Here is the design process and why it changes how many visitors become customers.",
    tag: "Design",
    date: "2026-10-14",
    quick:
      "UI (user interface) is how your website or app looks. UX (user experience) is how easy and pleasant it is to use. Good design shows people what to do next, so more visitors complete the action you want, whether that is buying, booking or contacting you.",
    blocks: [
      { type: "h2", text: "UI and UX, simply" },
      {
        type: "ul",
        items: [
          "UI is the visible layer: colours, fonts, buttons, spacing and icons.",
          "UX is the whole journey: finding what you want, understanding it and finishing the task without frustration.",
        ],
      },
      {
        type: "p",
        text: "A beautiful page that confuses people fails. A plain page that guides people clearly can outperform it. The best work does both.",
      },
      { type: "h2", text: "Why it affects results" },
      {
        type: "p",
        text: "Every visitor has a goal and very little patience. If the contact button is hidden, the form asks for too much, or the menu is confusing, they leave. Design removes those obstacles so more people finish what they came to do.",
      },
      { type: "h2", text: "The design process" },
      {
        type: "ol",
        items: [
          "Brief: your goals, your customers and your competitors.",
          "Wireframes: simple layouts that settle structure and flow without colours or images.",
          "Visual design: brand colours, type and components applied to each screen.",
          "Prototype: a clickable version you can try before development.",
          "Review and testing: real feedback, then refinements until approved.",
          "Hand-off: organised files and specifications for developers.",
        ],
      },
      { type: "h2", text: "Common problems good design avoids" },
      {
        type: "ul",
        items: [
          "Too many choices on one screen.",
          "Text that is too small or low in contrast, especially on phones.",
          "Forms that ask for unnecessary information.",
          "Unclear buttons with vague labels.",
          "Pages that do not look the same from one section to the next.",
        ],
      },
      {
        type: "callout",
        title: "Design before code",
        text: "Changing a design on screen is quick and cheap. Changing it after it has been built is slow and costly. That is why we get designs approved before development begins.",
      },
    ],
  },
  {
    slug: "sql-vs-nosql-which-database-to-choose",
    title: "SQL vs NoSQL: which database should you choose?",
    description:
      "MySQL, PostgreSQL, MongoDB, Redis and Elasticsearch explained in plain words, with guidance on picking the right one.",
    tag: "Backend",
    date: "2026-10-14",
    quick:
      "SQL databases such as MySQL and PostgreSQL store data in organised tables and are the safe default for most business applications. NoSQL databases such as MongoDB store flexible documents and suit changing or varied data. Tools like Redis and Elasticsearch handle speed and search alongside the main database.",
    blocks: [
      { type: "h2", text: "SQL (relational) databases" },
      {
        type: "p",
        text: "SQL databases store information in tables with rows and columns, a bit like linked spreadsheets. A customers table connects to an orders table, which connects to a products table. Rules keep the data consistent, which is why they are trusted for money, orders and inventory. MySQL and PostgreSQL are the most common.",
      },
      { type: "h2", text: "NoSQL databases" },
      {
        type: "p",
        text: "NoSQL covers several kinds of databases. The most common for applications is the document database, such as MongoDB, which stores each record as a flexible document. It is handy when records differ in shape or the structure changes often, for example varied product attributes or event data.",
      },
      {
        type: "table",
        head: ["", "SQL (MySQL, PostgreSQL)", "NoSQL document (MongoDB)"],
        rows: [
          ["Structure", "Fixed tables and relationships", "Flexible documents"],
          ["Strength", "Consistency and complex queries", "Flexible data and quick changes"],
          ["Good for", "Orders, payments, accounts, reporting", "Content, catalogues with varied fields, logs"],
        ],
      },
      { type: "h2", text: "Helpers that sit beside the main database" },
      {
        type: "ul",
        items: [
          "Redis: an in-memory store used for caching and fast, temporary data such as sessions, so pages load quicker.",
          "Elasticsearch: a search engine for fast, flexible searching over large amounts of text and products.",
          "Firebase: a managed service often used for mobile apps, with real-time data and sign-in built in.",
        ],
      },
      { type: "h2", text: "How to choose" },
      {
        type: "ol",
        items: [
          "If your data has clear relationships and accuracy matters, start with PostgreSQL or MySQL.",
          "If your data is very varied or changes shape often, consider a document database.",
          "Add Redis when speed under load matters, and Elasticsearch when users need powerful search.",
          "Do not use several databases without a reason. Each one adds work to run and secure.",
        ],
      },
      {
        type: "callout",
        title: "Default to the simple choice",
        text: "For most business web and mobile apps, a well-designed SQL database is the right start. Specialised tools are best added when a real need appears.",
      },
    ],
  },
  {
    slug: "what-is-cloud-hosting-aws-google-cloud-azure-cloudflare",
    title: "What is cloud hosting? AWS, Google Cloud, Azure and Cloudflare in plain words",
    description:
      "How cloud hosting differs from shared hosting, what the big providers offer, and how to choose hosting that fits your website or app.",
    tag: "Cloud",
    date: "2026-10-14",
    quick:
      "Hosting is where your website or app lives so people can reach it. Shared hosting puts many sites on one server cheaply. Cloud hosting runs your project on flexible infrastructure that can grow when traffic grows. AWS, Google Cloud and Azure are the big general providers, and Cloudflare is strong for fast delivery at the edge.",
    blocks: [
      { type: "h2", text: "Types of hosting" },
      {
        type: "table",
        head: ["Type", "What it means", "Good for"],
        rows: [
          ["Shared hosting", "Many sites share one server", "Small, simple sites on a tight budget"],
          ["VPS", "Your own slice of a server", "Growing sites that need more control"],
          ["Cloud hosting", "Flexible resources that can grow and spread across servers", "Apps and sites with changing traffic"],
          ["Edge and CDN", "Copies of your site served from places close to visitors", "Fast loading everywhere"],
        ],
      },
      { type: "h2", text: "The big names" },
      {
        type: "ul",
        items: [
          "AWS (Amazon Web Services): the largest general cloud, with a huge range of services.",
          "Google Cloud: strong in data, analytics and AI tools.",
          "Microsoft Azure: popular with organisations already using Microsoft products.",
          "Cloudflare: known for its global network, security features and serverless platform, which runs code close to the visitor.",
        ],
      },
      { type: "h2", text: "What a CDN does" },
      {
        type: "p",
        text: "A content delivery network keeps copies of your files on servers around the world. A visitor in Chandigarh gets the site from a nearby location instead of a faraway server, so pages load faster and your main server is under less strain.",
      },
      { type: "h2", text: "How to choose" },
      {
        type: "ul",
        items: [
          "A simple brochure site rarely needs more than good managed hosting with a CDN.",
          "A web app or store with variable traffic benefits from cloud hosting that scales.",
          "Check backups, monitoring and how recovery works if something breaks.",
          "Prefer accounts in your name so you always control your own infrastructure.",
          "Watch costs: cloud billing is usage-based, so set budgets and alerts.",
        ],
      },
      {
        type: "callout",
        title: "More expensive is not always better",
        text: "The right hosting is the one that fits your traffic, your team and your budget today, with a clear path to grow. We would rather size it correctly than sell you something larger than you need.",
      },
    ],
  },
  {
    slug: "website-security-basics-for-business-owners",
    title: "Website security basics every business owner should check",
    description:
      "Seven practical checks that protect your website, your customers’ data and your reputation, explained without jargon.",
    tag: "Security",
    date: "2026-10-14",
    quick:
      "Most website break-ins use simple weaknesses: outdated software, weak passwords, no backups and unprotected forms. Use HTTPS, keep everything updated, enable two-factor login, keep regular backups, limit who has access, protect your forms and keep secret keys out of your website code.",
    blocks: [
      { type: "h2", text: "Seven checks" },
      {
        type: "ol",
        items: [
          "HTTPS everywhere. The padlock means data between visitor and site is encrypted. It is also expected by browsers and search engines.",
          "Keep software updated. Outdated plugins, themes and frameworks are the most common way sites get hacked.",
          "Strong passwords and two-factor login. Especially for your admin area, hosting, domain and email.",
          "Regular backups, stored away from the website, with a tested way to restore them.",
          "Least access. Give each person and each tool only the access they need, and remove it when they leave.",
          "Protect forms and logins. Use spam protection and limits on repeated attempts, and validate what people submit.",
          "Keep secrets private. API keys and passwords must live on the server, never in code that visitors can see.",
        ],
      },
      { type: "h2", text: "Often-forgotten risks" },
      {
        type: "ul",
        items: [
          "An expired domain or SSL certificate that takes the site offline.",
          "An old developer or agency that still has admin access.",
          "A staging or test copy of the site left open to the public.",
          "Email accounts on your domain without strong security.",
        ],
      },
      { type: "h2", text: "If something goes wrong" },
      {
        type: "p",
        text: "Having backups and monitoring in place turns a crisis into an inconvenience. You can restore a clean copy, change passwords and find out how it happened. Without them, recovery can take days.",
      },
      { type: "h2", text: "Where AI features add a new angle" },
      {
        type: "p",
        text: "If your site uses an AI assistant, treat it like any other part of the system. It should only reach the data it needs, sensitive actions should need approval, and its activity should be logged.",
      },
      {
        type: "callout",
        title: "Security is ongoing",
        text: "It is not a one-time setup. New weaknesses are found in software all the time, which is why regular updates and monitoring are part of looking after a website.",
      },
    ],
  },
  {
    slug: "why-websites-need-maintenance",
    title: "Why does a website need maintenance? What a care plan covers",
    description:
      "What can go wrong when a site is left alone, and what regular maintenance actually includes each month.",
    tag: "Maintenance",
    date: "2026-10-14",
    quick:
      "A website is not a one-time purchase. Software gets new security fixes, hosting and certificates expire, things break, and search engines change. Regular maintenance keeps the site secure, fast and working, and gives you someone to call when something needs changing.",
    blocks: [
      { type: "h2", text: "What happens when a site is left alone" },
      {
        type: "ul",
        items: [
          "Outdated software becomes a security risk.",
          "Forms stop sending enquiries and no one notices for weeks.",
          "The site slows down as content and plugins pile up.",
          "The SSL certificate or domain expires and visitors see a warning, or nothing at all.",
          "Small browser or phone changes break layouts.",
        ],
      },
      { type: "h2", text: "What a care plan usually covers" },
      {
        type: "ul",
        items: [
          "Updates and security patches for the framework, plugins and server.",
          "Daily or regular backups with tested restores.",
          "Uptime monitoring that alerts us when the site goes down.",
          "Error tracking to catch bugs early.",
          "Speed checks and tune-ups.",
          "Content changes and small improvements each month.",
          "A short monthly report so you can see what was done.",
        ],
      },
      { type: "h2", text: "The monthly loop" },
      {
        type: "ol",
        items: [
          "We monitor the site and alerts reach us first.",
          "You send change requests, bug reports or ideas whenever needed.",
          "We fix, update and release safely, with a backup behind each change.",
          "You receive a clear summary of the work and the site’s health.",
          "We keep improving speed and search performance over time.",
        ],
      },
      { type: "h2", text: "Is it worth it?" },
      {
        type: "p",
        text: "If the website brings you enquiries or sales, an hour of downtime or a security incident costs more than steady maintenance. If your site is a small, rarely-changing brochure, a lighter plan or occasional check-ups may be enough.",
      },
      {
        type: "callout",
        title: "Choose a plan that matches your site",
        text: "A busy store needs more care than a five-page company site. A good provider explains what is included, how fast they respond and what is billed separately, so you pay for what you really need.",
      },
    ],
  },
  {
    slug: "practical-ai-use-cases-for-small-business",
    title: "What can AI actually do for a small business? Six practical use cases",
    description:
      "Six realistic ways businesses use AI today, how to pick a first project, and where to keep a human in the loop.",
    tag: "AI",
    date: "2026-10-14",
    quick:
      "AI is most useful for repetitive, language-heavy work: answering common customer questions, qualifying leads, reading documents, searching your own information, drafting content and summarising data. Start with one task, measure the time saved, and keep a person in charge of anything sensitive.",
    blocks: [
      { type: "h2", text: "Six practical use cases" },
      {
        type: "ol",
        items: [
          "Customer support assistant: answers common questions on your website and WhatsApp, in the customer’s language, from your own content.",
          "Lead qualification: asks a few questions, scores the enquiry and passes serious leads to your sales team with a summary.",
          "Document processing: reads invoices, resumes, forms and emails and puts the details into your sheet or system.",
          "Smart search and recommendations: helps customers find products or answers using everyday words.",
          "Content drafting: prepares product descriptions, pages and posts for a person to review and approve.",
          "Internal knowledge assistant: lets staff ask questions about policies, manuals and past work and get answers with sources.",
        ],
      },
      { type: "h2", text: "How to pick the first project" },
      {
        type: "ul",
        items: [
          "Choose a task that is repetitive and happens often.",
          "It should have a clear way to measure success, such as hours saved or enquiries answered.",
          "Start where mistakes are low-risk and easy to catch.",
          "Make sure you have the content or data the AI will need.",
        ],
      },
      { type: "h2", text: "Where to keep a human in the loop" },
      {
        type: "p",
        text: "AI can produce answers that sound right but are wrong. For complaints, payments, medical, legal or financial matters, and for any action that is hard to undo, a person should review or approve. A good set-up makes hand-off easy rather than hoping the AI never errs.",
      },
      { type: "h2", text: "What it does not do" },
      {
        type: "ul",
        items: [
          "It does not fix unclear processes. Fix the process first, then automate it.",
          "It does not replace the knowledge in your business. It works from the content you give it.",
          "It is not free. Using AI services has running costs, which should be weighed against the time saved.",
        ],
      },
      {
        type: "callout",
        title: "Start small, then grow",
        text: "One working assistant that saves real time is worth more than a large plan that never launches. Prove the first use case, then extend it to the next.",
      },
    ],
  },
];
