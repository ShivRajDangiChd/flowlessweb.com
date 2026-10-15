import Link from "next/link";
import { SpiderGraph } from "@/components/spider-graph";
import { Eyebrow } from "@/components/ui";

const layers = [
  {
    key: "ui",
    badge: "Layer 1",
    title: "Frontend (UI)",
    note: "What the visitor sees and clicks, in a browser or on a phone.",
    tone: "border-t-[var(--accent)]",
    groups: [
      { label: "Web", items: ["React.js", "Next.js", "Vue.js"] },
      { label: "Mobile", items: ["Swift", "Flutter", "React Native"] },
      { label: "Built on", items: ["HTML", "CSS", "JavaScript"] },
    ],
    job: "Shows screens, takes input, sends requests, displays the response.",
  },
  {
    key: "backend",
    badge: "Layer 2",
    title: "Backend Service",
    note: "Server-side languages that run your business logic and talk to the data.",
    tone: "border-t-[var(--accent-3)]",
    groups: [
      { label: "Server-side languages", items: ["Java", "Python", "PHP", "Node.js", "Go", "R"] },
      { label: "Frameworks", items: ["Laravel", "Spring", "Django", "Express"] },
    ],
    job: "Business logic: authentication, validation, payments, AI calls.",
  },
  {
    key: "db",
    badge: "Layer 3",
    title: "Database",
    note: "Where your information lives safely.",
    tone: "border-t-slate-700",
    groups: [
      { label: "SQL", items: ["MySQL", "PostgreSQL"] },
      { label: "NoSQL", items: ["MongoDB", "Firebase"] },
      { label: "Search & cache", items: ["Elasticsearch", "Redis"] },
    ],
    job: "Stores users, orders, content and files. Finds them fast.",
  },
];

const steps = [
  { n: 1, title: "User acts", text: "A visitor searches, clicks or submits a form. The UI sends an HTTP request to the backend." },
  { n: 2, title: "Backend receives", text: "It checks the user, validates the input and applies your business rules." },
  { n: 3, title: "Backend queries data", text: "It asks the database for exactly what is needed, using SQL, a document query or a search." },
  { n: 4, title: "Database answers", text: "Matching rows, documents or search results are returned to the backend." },
  { n: 5, title: "Backend responds", text: "It packages the result as JSON and sends it back over HTTP." },
  { n: 6, title: "UI renders", text: "The frontend reads the JSON and shows it to the visitor as a page, list or chart." },
];

function Arrow({ dir, label, n }: { dir: "forward" | "back"; label: string; n: number }) {
  const rotate = dir === "forward" ? "rotate-90 lg:rotate-0" : "-rotate-90 lg:rotate-180";
  return (
    <div className="flex items-center justify-center gap-2 lg:flex-col lg:gap-1">
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[var(--fg)] font-mono text-[10px] text-white">{n}</span>
      <svg viewBox="0 0 48 12" className={`h-3 w-12 shrink-0 text-[var(--accent)] ${rotate}`} aria-hidden="true">
        <path d="M0 6h44M38 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase lg:text-center">{label}</span>
    </div>
  );
}

function Connector({ top, bottom }: { top: [number, string]; bottom: [number, string] }) {
  return (
    <div className="flex items-center justify-center gap-6 py-3 lg:flex-col lg:gap-5 lg:px-1 lg:py-0">
      <Arrow dir="forward" n={top[0]} label={top[1]} />
      <Arrow dir="back" n={bottom[0]} label={bottom[1]} />
    </div>
  );
}

export function WebModel() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>How the web works</Eyebrow>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Every website and app is three layers talking to each other.
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Just like a business has a shop front, an operations team and a warehouse, a web
          product has a UI, a backend and a database. Here&rsquo;s the full journey of one request.
        </p>

        <div className="mt-10 hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-4 lg:block">
          <SpiderGraph />
        </div>

        <div className="lg:hidden">
        <div className="mt-12 flex items-center justify-center">
          <span className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-1.5 text-xs font-medium text-slate-700">
            👤 Visitor opens your website or app
          </span>
        </div>
        <div className="mx-auto h-6 w-px bg-[var(--line)]" aria-hidden="true" />

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {layers.map((layer, i) => (
            <div key={layer.key} className="contents">
              <article className={`rounded-2xl border border-[var(--line)] border-t-4 bg-[var(--bg)] p-6 ${layer.tone}`}>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase">{layer.badge}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{layer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{layer.note}</p>
                <div className="mt-5 space-y-3">
                  {layer.groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">{group.label}</p>
                      <ul className="mt-1.5 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-md border border-[var(--line)] bg-white px-2.5 py-1 text-xs font-medium text-slate-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs leading-relaxed text-slate-600">
                  <span className="font-semibold text-[var(--fg)]">Job: </span>
                  {layer.job}
                </p>
              </article>
              {i === 0 ? <Connector top={[1, "HTTP request"]} bottom={[6, "Renders JSON"]} /> : null}
              {i === 1 ? <Connector top={[3, "Query"]} bottom={[4, "Data"]} /> : null}
            </div>
          ))}
        </div>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--fg)] font-mono text-[11px] text-white">{step.n}</span>
                <div>
                  <h4 className="text-sm font-semibold">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-2xl bg-[var(--ink)] font-mono text-xs leading-relaxed text-slate-200">
            <p className="border-b border-white/10 px-5 py-3 text-[11px] tracking-wider text-[var(--accent-2)] uppercase">
              Example · Search for shoes
            </p>
            <pre className="overflow-x-auto px-5 py-4">
{`→ GET /api/products?q=shoes

← 200 OK  (application/json)
{
  "results": [
    {
      "id": 101,
      "name": "Running Shoes",
      "price": 2499,
      "inStock": true
    }
  ]
}`}
            </pre>
            <p className="border-t border-white/10 px-5 py-3 text-[11px] text-slate-400">
              Illustrative. The UI turns this JSON into a product card.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight">Flawless Web builds all three layers, and the AI on top.</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Frontend & mobile", "Websites, web apps and Android/iOS apps", "/services#web-development"],
              ["Backend & APIs", "Services, payments and integrations", "/services#backend-cloud"],
              ["Databases & cloud", "Design, migration and hosting", "/services#backend-cloud"],
              ["AI layer", "Chatbots, search and automation using your data", "/services#ai-products"],
            ].map(([title, text, href]) => (
              <li key={title}>
                <Link href={href} className="block h-full rounded-xl border border-[var(--line)] bg-white p-4 transition-colors hover:border-[var(--accent)]">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
