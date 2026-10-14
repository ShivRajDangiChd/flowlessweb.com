type Pt = { x: number; y: number };

const C: Pt = { x: 550, y: 350 }; // backend hub
const UI: Pt = { x: 230, y: 350 };
const DB: Pt = { x: 855, y: 350 };
const VISITOR: Pt = { x: 230, y: 78 };

const rad = (deg: number) => (deg * Math.PI) / 180;
const polar = (c: Pt, r: number, deg: number): Pt => ({
  x: c.x + r * Math.cos(rad(deg)),
  y: c.y + r * Math.sin(rad(deg)),
});
const spread = (n: number, from: number, to: number) =>
  Array.from({ length: n }, (_, i) => from + ((to - from) * i) / (n - 1));

const uiLeaves = ["React.js", "Next.js", "Vue.js", "Swift", "Flutter", "React Native"];
const langs = ["Java", "Python", "PHP", "Node.js", "Go", "R"];
const dbLeaves = ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "Firebase"];
const services = [
  { title: "Auth & Users", sub: "JWT · OAuth", x: 330 },
  { title: "Payments", sub: "Stripe · Razorpay", x: 480 },
  { title: "AI Models", sub: "OpenAI · Claude", x: 630 },
  { title: "Cloud", sub: "AWS · GCP · Cloudflare", x: 780 },
];

function Leaf({ at, label, color }: { at: Pt; label: string; color: string }) {
  const w = Math.max(54, label.length * 8 + 22);
  return (
    <g>
      <rect x={at.x - w / 2} y={at.y - 14} width={w} height={28} rx={14} fill="#fff" stroke={color} strokeWidth="1.5" />
      <text x={at.x} y={at.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">
        {label}
      </text>
    </g>
  );
}

function Badge({ at, n }: { at: Pt; n: number }) {
  return (
    <g>
      <circle cx={at.x} cy={at.y} r="11" fill="#0f172a" />
      <text x={at.x} y={at.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
        {n}
      </text>
    </g>
  );
}

function Flow({ x1, x2, y, label, n, color, below = false }: { x1: number; x2: number; y: number; label: string; n: number; color: string; below?: boolean }) {
  const mid = (x1 + x2) / 2;
  const dir = x2 > x1 ? 1 : -1;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - dir * 8} y2={y} stroke={color} strokeWidth="2.5" className="flow-line" />
      <path d={`M${x2} ${y} l${-dir * 11} -6 v12 z`} fill={color} />
      <Badge at={{ x: mid - 52, y: below ? y + 25 : y - 25 }} n={n} />
      <text x={mid - 34} y={below ? y + 30 : y - 20} fontSize="13" fontWeight="600" fill="#334155">
        {label}
      </text>
    </g>
  );
}

export function SpiderGraph() {
  const uiPts = spread(uiLeaves.length, 138, 222).map((a) => polar(UI, 165, a));
  const dbPts = spread(dbLeaves.length, -52, 52).map((a) => polar(DB, 165, a));
  const langPts = spread(langs.length, -148, -32).map((a, i) => polar(C, i % 2 ? 165 : 190, a));

  return (
    <svg
      viewBox="0 0 1100 700"
      role="img"
      aria-label="Spider diagram: a visitor uses the frontend UI, which sends HTTP requests to the backend service. The backend, written in Java, Python, PHP, Node.js, Go or R, queries databases such as MySQL, MongoDB and Elasticsearch, calls services like payments and AI, and returns JSON that the UI displays."
      className="w-full"
    >
      {/* web rings and radial threads */}
      <g fill="none" stroke="#4f46e5" strokeOpacity="0.12">
        {[120, 230, 340].map((r) => (
          <circle key={r} cx={C.x} cy={C.y} r={r} />
        ))}
        {Array.from({ length: 16 }, (_, i) => {
          const p = polar(C, 340, i * 22.5);
          return <line key={i} x1={C.x} y1={C.y} x2={p.x} y2={p.y} strokeDasharray="3 5" />;
        })}
      </g>

      {/* visitor to UI */}
      <line x1={VISITOR.x} y1={VISITOR.y + 26} x2={UI.x} y2={UI.y - 58} stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
      <rect x={VISITOR.x - 98} y={VISITOR.y - 26} width="196" height="52" rx="26" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
      <text x={VISITOR.x} y={VISITOR.y - 3} textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
        Visitor
      </text>
      <text x={VISITOR.x} y={VISITOR.y + 15} textAnchor="middle" fontSize="11.5" fill="#475569">
        browser or phone
      </text>

      {/* spokes to leaves */}
      {uiPts.map((p, i) => (
        <line key={`u${i}`} x1={UI.x} y1={UI.y} x2={p.x} y2={p.y} stroke="#4f46e5" strokeOpacity="0.45" strokeWidth="1.5" />
      ))}
      {dbPts.map((p, i) => (
        <line key={`d${i}`} x1={DB.x} y1={DB.y} x2={p.x} y2={p.y} stroke="#1e293b" strokeOpacity="0.4" strokeWidth="1.5" />
      ))}
      {langPts.map((p, i) => (
        <line key={`l${i}`} x1={C.x} y1={C.y} x2={p.x} y2={p.y} stroke="#0e7490" strokeOpacity="0.5" strokeWidth="1.5" />
      ))}

      {/* backend to supporting services */}
      {services.map((s) => (
        <g key={s.title}>
          <line x1={C.x} y1={C.y} x2={s.x} y2={582} stroke="#0e7490" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 5" />
          <rect x={s.x - 70} y={582} width="140" height="58" rx="12" fill="#fff" stroke="#0e7490" strokeOpacity="0.6" strokeWidth="1.5" />
          <text x={s.x} y={606} textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
            {s.title}
          </text>
          <text x={s.x} y={625} textAnchor="middle" fontSize="11" fill="#475569">
            {s.sub}
          </text>
        </g>
      ))}

      {/* primary request / response flows */}
      <Flow x1={UI.x + 62} x2={C.x - 72} y={332} label="HTTP request" n={1} color="#4f46e5" />
      <Flow x1={C.x - 72} x2={UI.x + 62} y={368} label="JSON response" n={6} color="#0e7490" below />
      <Flow x1={C.x + 72} x2={DB.x - 62} y={332} label="Query" n={3} color="#4f46e5" />
      <Flow x1={DB.x - 62} x2={C.x + 72} y={368} label="Data" n={4} color="#0e7490" below />

      <text x={C.x} y={64} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0e7490">
        Server-side languages that run your business logic
      </text>

      {/* leaves */}
      {uiPts.map((p, i) => (
        <Leaf key={uiLeaves[i]} at={p} label={uiLeaves[i]} color="#4f46e5" />
      ))}
      {langPts.map((p, i) => (
        <Leaf key={langs[i]} at={p} label={langs[i]} color="#0e7490" />
      ))}
      {dbPts.map((p, i) => (
        <Leaf key={dbLeaves[i]} at={p} label={dbLeaves[i]} color="#1e293b" />
      ))}

      {/* hubs */}
      <circle cx={UI.x} cy={UI.y} r="62" fill="#4f46e5" />
      <text x={UI.x} y={UI.y - 4} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">Frontend</text>
      <text x={UI.x} y={UI.y + 15} textAnchor="middle" fontSize="12" fill="#e0e7ff">User interface</text>

      <rect x={UI.x - 100} y={UI.y + 132} width="200" height="44" rx="10" fill="#eef2ff" stroke="#4f46e5" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x={UI.x} y={UI.y + 151} textAnchor="middle" fontSize="12" fontWeight="700" fill="#3730a3">Built on HTML · CSS · JS</text>
      <text x={UI.x} y={UI.y + 167} textAnchor="middle" fontSize="11" fill="#475569">the building blocks of every UI</text>
      <line x1={UI.x} y1={UI.y + 62} x2={UI.x} y2={UI.y + 132} stroke="#4f46e5" strokeOpacity="0.5" strokeDasharray="3 3" />

      <circle cx={C.x} cy={C.y} r="72" fill="#0e7490" />
      <circle cx={C.x} cy={C.y} r="82" fill="none" stroke="#0e7490" strokeOpacity="0.35" />
      <text x={C.x} y={C.y - 12} textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">Backend</text>
      <text x={C.x} y={C.y + 6} textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">Service</text>
      <text x={C.x} y={C.y + 26} textAnchor="middle" fontSize="11.5" fill="#cffafe">Business logic</text>

      <circle cx={DB.x} cy={DB.y} r="62" fill="#1e293b" />
      <text x={DB.x} y={DB.y - 4} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">Database</text>
      <text x={DB.x} y={DB.y + 15} textAnchor="middle" fontSize="12" fill="#cbd5e1">SQL · NoSQL · Search</text>
    </svg>
  );
}
