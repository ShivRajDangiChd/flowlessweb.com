export type ChartHub = {
  title: string;
  sub: string;
  leaves: string[];
  note?: { title: string; sub: string };
};

export type ChartFlow = {
  side: "left" | "right";
  dir: "in" | "out"; // in = towards the centre hub, out = away from it
  n: number;
  label: string;
};

export type ChartConfig = {
  alt: string;
  center: { title: string[]; sub: string[] };
  left: ChartHub;
  right: ChartHub;
  top: { caption: string; leaves: string[] };
  bottom: { caption: string; boxes: { title: string; sub: string }[] };
  flows: ChartFlow[];
  badge?: { n: number; label: string };
};

type Pt = { x: number; y: number };

const L: Pt = { x: 235, y: 350 };
const C: Pt = { x: 525, y: 350 };
const R: Pt = { x: 815, y: 350 };

const themes = {
  light: {
    ring: "#4f46e5",
    ringOpacity: 0.12,
    hubs: { left: "#4f46e5", center: "#0e7490", right: "#1e293b" },
    hubSub: "#e2e8f0",
    stroke: { left: "#4f46e5", top: "#0e7490", right: "#1e293b", bottom: "#0e7490" },
    leafFill: "#ffffff",
    leafText: "#0f172a",
    boxFill: "#ffffff",
    boxSub: "#475569",
    boxTitle: "#0f172a",
    flowIn: "#4f46e5",
    flowOut: "#0e7490",
    flowText: "#334155",
    badgeFill: "#0f172a",
    badgeText: "#ffffff",
    caption: "#0e7490",
    note: { fill: "#eef2ff", stroke: "#4f46e5", title: "#3730a3", sub: "#475569" },
    halo: "#0b1226",
  },
  dark: {
    ring: "#ffffff",
    ringOpacity: 0.08,
    hubs: { left: "#475569", center: "#4f46e5", right: "#0d9488" },
    hubSub: "#e2e8f0",
    stroke: { left: "#94a3b8", top: "#a5b4fc", right: "#5eead4", bottom: "#a5b4fc" },
    leafFill: "#16203a",
    leafText: "#e2e8f0",
    boxFill: "#16203a",
    boxSub: "#94a3b8",
    boxTitle: "#ffffff",
    flowIn: "#a5b4fc",
    flowOut: "#5eead4",
    flowText: "#cbd5e1",
    badgeFill: "#ffffff",
    badgeText: "#0b1226",
    caption: "#a5b4fc",
    note: { fill: "#ffffff", stroke: "#94a3b8", title: "#e2e8f0", sub: "#94a3b8" },
    halo: "#0b1226",
  },
} as const;

const rad = (deg: number) => (deg * Math.PI) / 180;
const polar = (c: Pt, r: number, deg: number): Pt => ({
  x: c.x + r * Math.cos(rad(deg)),
  y: c.y + r * Math.sin(rad(deg)),
});
const spread = (n: number, from: number, to: number) =>
  n === 1 ? [(from + to) / 2] : Array.from({ length: n }, (_, i) => from + ((to - from) * i) / (n - 1));

export function SpiderChart({ config, theme = "light" }: { config: ChartConfig; theme?: "light" | "dark" }) {
  const t = themes[theme];
  const leftPts = spread(config.left.leaves.length, 144, 216).map((a) => polar(L, 150, a));
  const rightPts = spread(config.right.leaves.length, -48, 48).map((a) => polar(R, 150, a));
  const many = config.top.leaves.length >= 5;
  const topPts = spread(config.top.leaves.length, many ? -150 : -142, many ? -30 : -38).map((a, i) =>
    polar(C, i % 2 ? (many ? 175 : 170) : many ? 215 : 195, a),
  );
  const boxes = config.bottom.boxes;
  const boxX = (i: number) => 540 + (i - (boxes.length - 1) / 2) * 150;

  const Leaf = ({ at, label, color }: { at: Pt; label: string; color: string }) => {
    const w = Math.max(54, label.length * 8 + 22);
    return (
      <g>
        <rect x={at.x - w / 2} y={at.y - 14} width={w} height={28} rx={14} fill={t.leafFill} stroke={color} strokeWidth="1.5" />
        <text x={at.x} y={at.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill={t.leafText}>
          {label}
        </text>
      </g>
    );
  };

  const Badge = ({ at, n }: { at: Pt; n: number }) => (
    <g>
      <circle cx={at.x} cy={at.y} r="11" fill={t.badgeFill} />
      <text x={at.x} y={at.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill={t.badgeText}>
        {n}
      </text>
    </g>
  );

  const Flow = ({ flow, row }: { flow: ChartFlow; row: "top" | "bottom" }) => {
    const inner = flow.side === "left" ? [L.x + 62, C.x - 72] : [C.x + 72, R.x - 62];
    const forward = flow.side === "left" ? flow.dir === "in" : flow.dir === "out";
    const [x1, x2] = forward ? inner : [inner[1], inner[0]];
    const y = row === "top" ? 332 : 368;
    const dir = x2 > x1 ? 1 : -1;
    const color = flow.dir === "in" ? t.flowIn : t.flowOut;
    const mid = (x1 + x2) / 2;
    const below = row === "bottom";
    return (
      <g>
        <line x1={x1} y1={y} x2={x2 - dir * 8} y2={y} stroke={color} strokeWidth="2.5" className="flow-line" />
        <path d={`M${x2} ${y} l${-dir * 11} -6 v12 z`} fill={color} />
        <Badge at={{ x: mid - 44, y: below ? y + 25 : y - 25 }} n={flow.n} />
        <text x={mid - 26} y={below ? y + 30 : y - 20} fontSize="13" fontWeight="600" fill={t.flowText}>
          {flow.label}
        </text>
      </g>
    );
  };

  const hubText = (c: Pt, titles: string[], subs: string[], titleSize: number) => {
    const y0 = c.y - (titles.length * 20 + subs.length * 16) / 2 + 15;
    const yT = y0 + (titles.length - 1) * 21;
    return (
      <>
        {titles.map((line, i) => (
          <text key={line} x={c.x} y={y0 + i * 21} textAnchor="middle" fontSize={titleSize} fontWeight="700" fill="#fff">
            {line}
          </text>
        ))}
        {subs.map((line, j) => (
          <text key={line} x={c.x} y={yT + 20 + j * 16} textAnchor="middle" fontSize="12" fill={t.hubSub}>
            {line}
          </text>
        ))}
      </>
    );
  };

  // a flow is drawn on the upper lane when it moves right, on the lower lane when it moves left
  const lane = (f: ChartFlow): "top" | "bottom" => {
    const forward = f.side === "left" ? f.dir === "in" : f.dir === "out";
    return forward ? "top" : "bottom";
  };

  return (
    <svg viewBox="0 0 1100 700" role="img" aria-label={config.alt} className="w-full">
      <g fill="none" stroke={t.ring} strokeOpacity={t.ringOpacity}>
        {[120, 230, 340].map((r) => (
          <circle key={r} cx={C.x} cy={C.y} r={r} />
        ))}
        {Array.from({ length: 16 }, (_, i) => {
          const p = polar(C, 340, i * 22.5);
          return <line key={i} x1={C.x} y1={C.y} x2={p.x} y2={p.y} strokeDasharray="3 5" />;
        })}
      </g>

      {leftPts.map((p, i) => <line key={`l${i}`} x1={L.x} y1={L.y} x2={p.x} y2={p.y} stroke={t.stroke.left} strokeOpacity="0.55" strokeWidth="1.5" />)}
      {rightPts.map((p, i) => <line key={`r${i}`} x1={R.x} y1={R.y} x2={p.x} y2={p.y} stroke={t.stroke.right} strokeOpacity="0.5" strokeWidth="1.5" />)}
      {topPts.map((p, i) => <line key={`t${i}`} x1={C.x} y1={C.y} x2={p.x} y2={p.y} stroke={t.stroke.top} strokeOpacity="0.55" strokeWidth="1.5" />)}

      {boxes.map((b, i) => (
        <g key={b.title}>
          <line x1={C.x} y1={C.y} x2={boxX(i)} y2={582} stroke={t.stroke.bottom} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 5" />
          <rect x={boxX(i) - 70} y={582} width="140" height="58" rx="12" fill={t.boxFill} stroke={t.stroke.bottom} strokeOpacity="0.6" strokeWidth="1.5" />
          <text x={boxX(i)} y={606} textAnchor="middle" fontSize="13.5" fontWeight="700" fill={t.boxTitle}>{b.title}</text>
          <text x={boxX(i)} y={625} textAnchor="middle" fontSize="11" fill={t.boxSub}>{b.sub}</text>
        </g>
      ))}
      <text x={540} y={668} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={t.caption}>{config.bottom.caption}</text>
      <text x={C.x} y={62} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={t.caption}>{config.top.caption}</text>

      {config.badge ? (
        <g>
          <Badge at={{ x: C.x - 12, y: 500 }} n={config.badge.n} />
          <text x={C.x + 6} y={505} fontSize="13" fontWeight="600" fill={t.leafText} stroke={t.halo} strokeOpacity={theme === "dark" ? 1 : 0} strokeWidth="4" paintOrder="stroke">
            {config.badge.label}
          </text>
        </g>
      ) : null}

      {config.flows.map((f) => <Flow key={`${f.side}${f.dir}`} flow={f} row={lane(f)} />)}

      {leftPts.map((p, i) => <Leaf key={config.left.leaves[i]} at={p} label={config.left.leaves[i]} color={t.stroke.left} />)}
      {topPts.map((p, i) => <Leaf key={config.top.leaves[i]} at={p} label={config.top.leaves[i]} color={t.stroke.top} />)}
      {rightPts.map((p, i) => <Leaf key={config.right.leaves[i]} at={p} label={config.right.leaves[i]} color={t.stroke.right} />)}

      <circle cx={L.x} cy={L.y} r="62" fill={t.hubs.left} />
      {hubText(L, [config.left.title], [config.left.sub], 17)}

      <circle cx={C.x} cy={C.y} r="82" fill="none" stroke={t.hubs.center} strokeOpacity="0.4" />
      <circle cx={C.x} cy={C.y} r="72" fill={t.hubs.center} />
      {hubText(C, config.center.title, config.center.sub, 18)}

      <circle cx={R.x} cy={R.y} r="62" fill={t.hubs.right} />
      {hubText(R, [config.right.title], [config.right.sub], 17)}

      {([["left", L, 200] as const, ["right", R, 224] as const]).map(([side, hub, w]) => {
        const note = config[side].note;
        if (!note) return null;
        return (
          <g key={side}>
            <rect x={hub.x - w / 2} y={hub.y + 132} width={w} height="44" rx="10" fill={t.note.fill} fillOpacity={theme === "dark" ? 0.06 : 1} stroke={t.note.stroke} strokeOpacity="0.6" strokeDasharray="4 3" />
            <text x={hub.x} y={hub.y + 151} textAnchor="middle" fontSize="12" fontWeight="700" fill={t.note.title}>{note.title}</text>
            <text x={hub.x} y={hub.y + 167} textAnchor="middle" fontSize="11" fill={t.note.sub}>{note.sub}</text>
          </g>
        );
      })}
    </svg>
  );
}
