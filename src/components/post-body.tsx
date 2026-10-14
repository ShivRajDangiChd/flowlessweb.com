import type { Block } from "@/data/posts";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-[17px] leading-8 text-slate-700">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="!mt-12 text-2xl font-semibold tracking-tight text-[var(--fg)]">
                {block.text}
              </h2>
            );
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-[var(--accent)]">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[var(--accent-strong)]">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[0.06] p-5 text-base leading-7">
                <p className="font-semibold text-[var(--accent-strong)]">{block.title}</p>
                <p className="mt-1 text-slate-700">{block.text}</p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-[var(--line)]">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm leading-6">
                  <thead className="bg-slate-50 text-[var(--fg)]">
                    <tr>
                      {block.head.map((cell, c) => (
                        <th key={c} scope="col" className="px-4 py-3 font-semibold">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] bg-white">
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className={`px-4 py-3 align-top ${c === 0 ? "font-medium text-[var(--fg)]" : ""}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
