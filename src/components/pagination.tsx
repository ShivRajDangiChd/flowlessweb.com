import Link from "next/link";

const pageHref = (page: number) => (page === 1 ? "/blog" : `/blog/page/${page}`);

function pageList(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

export function Pagination({ current, total }: { current: number; total: number }) {
  if (total <= 1) return null;
  const base = "grid h-10 min-w-10 place-items-center rounded-lg border px-3 text-sm font-medium transition-colors";
  const idle = "border-[var(--line)] bg-[var(--panel)] text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent-strong)]";
  const off = "pointer-events-none border-[var(--line)] bg-transparent text-slate-400";

  return (
    <nav aria-label="Blog pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
      {current > 1 ? (
        <Link href={pageHref(current - 1)} rel="prev" className={`${base} ${idle}`}>
          ← Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} ${off}`}>← Previous</span>
      )}

      <ul className="flex items-center gap-2">
        {pageList(current, total).map((item, i) =>
          item === "gap" ? (
            <li key={`gap${i}`} aria-hidden="true" className="px-1 text-slate-400">…</li>
          ) : (
            <li key={item}>
              {item === current ? (
                <span aria-current="page" className={`${base} border-[var(--accent)] bg-[var(--accent)] text-white`}>
                  {item}
                </span>
              ) : (
                <Link href={pageHref(item)} aria-label={`Page ${item}`} className={`${base} ${idle}`}>
                  {item}
                </Link>
              )}
            </li>
          ),
        )}
      </ul>

      {current < total ? (
        <Link href={pageHref(current + 1)} rel="next" className={`${base} ${idle}`}>
          Next →
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} ${off}`}>Next →</span>
      )}
    </nav>
  );
}
