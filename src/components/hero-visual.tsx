export function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] shadow-[0_30px_80px_-30px_rgba(91,75,255,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-[var(--line)] px-4 py-3">
          <span className="size-2.5 rounded-full bg-black/10" />
          <span className="size-2.5 rounded-full bg-black/10" />
          <span className="size-2.5 rounded-full bg-black/10" />
          <span className="ml-3 rounded-md bg-black/5 px-3 py-1 font-mono text-[10px] text-[var(--muted)]">
            yourbusiness.com
          </span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.9fr]">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-[var(--accent)]/70" />
            <div className="h-5 w-4/5 rounded bg-black/80" />
            <div className="h-5 w-3/5 rounded bg-black/80" />
            <div className="h-2.5 w-full rounded bg-black/10" />
            <div className="h-2.5 w-5/6 rounded bg-black/10" />
            <div className="mt-4 h-8 w-28 rounded-full bg-[var(--fg)]" />
            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="h-14 rounded-lg bg-black/5" />
              <div className="h-14 rounded-lg bg-black/5" />
              <div className="h-14 rounded-lg bg-black/5" />
            </div>
          </div>
          <div className="float rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 text-[11px] leading-snug">
            <div className="mb-2 flex items-center gap-2 font-medium">
              <span className="grid size-5 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-[9px] text-white">
                AI
              </span>
              Assistant
            </div>
            <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-[var(--fg)] px-3 py-2 text-white">
              Do you have a 2BHK near Sector 17?
            </p>
            <p className="mt-2 w-fit max-w-[90%] rounded-xl rounded-bl-sm bg-black/5 px-3 py-2">
              Yes, 3 homes match your budget. Want to book a visit this weekend?
            </p>
            <p className="mt-2 ml-auto w-fit rounded-xl rounded-br-sm bg-[var(--fg)] px-3 py-2 text-white">
              Saturday, 11 am
            </p>
            <p className="mt-2 w-fit rounded-xl rounded-bl-sm bg-[var(--accent-2)]/20 px-3 py-2">
              Booked. Confirmation sent on WhatsApp.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] tracking-widest text-[var(--muted)] uppercase">
        Example: website with built-in AI assistant
      </p>
    </div>
  );
}
