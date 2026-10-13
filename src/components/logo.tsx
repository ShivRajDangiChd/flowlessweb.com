import { site } from "@/data/site";

export function Logo() {
  return (
    <span className="group flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
        <svg viewBox="0 0 64 64" className="size-5" aria-hidden="true">
          <path
            d="M20 46V18h24M20 31h16"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
    </span>
  );
}
