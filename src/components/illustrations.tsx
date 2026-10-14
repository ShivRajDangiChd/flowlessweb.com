const iconPaths: Record<string, string> = {
  "Restaurants & Cafés": "M7 3v7M4.5 3v4a2.5 2.5 0 0 0 5 0V3M7 10v11M17 3c-2.2 1.8-3 4.6-3 8h3v10",
  "Clinics & Healthcare": "M4 4h16v16H4zM12 8v8M8 12h8",
  "Real Estate": "M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6",
  "Education & Coaching": "M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5",
  "Fashion & D2C Stores": "M5 8h14l-1 12H6L5 8zM9 8a3 3 0 0 1 6 0",
  "SaaS & Startups": "M3 4h18v16H3zM3 9h18M9 9v11",
  "Agencies & Consultants": "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  "Logistics & B2B": "M2 6h11v10H2zM13 9h4l3 3v4h-7M6 19.5h.01M17 19.5h.01",
};

export function ProjectIcon({ name }: { name: string }) {
  return (
    <span className="grid size-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={iconPaths[name] ?? iconPaths["SaaS & Startups"]} />
      </svg>
    </span>
  );
}

const inputs = ["Website form", "WhatsApp", "Email", "Sheets / CRM"];
const outputs = ["Instant reply", "Qualified lead", "Booking", "Daily report"];

export function AiFlow() {
  return (
    <svg viewBox="0 0 460 340" role="img" aria-label="Diagram: business inputs flow through an AI core into replies, leads, bookings and reports" className="w-full">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="1" stopColor="#4f46e5" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#2dd4bf" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="230" cy="170" r="110" fill="url(#halo)" />
      {inputs.map((_, i) => (
        <path key={`i${i}`} d={`M104 ${50 + i * 80} C170 ${50 + i * 80}, 170 170, 200 170`} fill="none" stroke="#2dd4bf" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      {outputs.map((_, i) => (
        <path key={`o${i}`} d={`M260 170 C290 170, 290 ${50 + i * 80}, 356 ${50 + i * 80}`} fill="none" stroke="#818cf8" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      {inputs.map((label, i) => (
        <g key={label}>
          <rect x="6" y={34 + i * 80} width="98" height="32" rx="16" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeOpacity="0.25" />
          <text x="55" y={54 + i * 80} textAnchor="middle" fontSize="11" fill="#e2e8f0">{label}</text>
        </g>
      ))}
      {outputs.map((label, i) => (
        <g key={label}>
          <rect x="356" y={34 + i * 80} width="98" height="32" rx="16" fill="#2dd4bf" fillOpacity="0.14" stroke="#2dd4bf" strokeOpacity="0.6" />
          <text x="405" y={54 + i * 80} textAnchor="middle" fontSize="11" fill="#ccfbf1">{label}</text>
        </g>
      ))}
      <circle cx="230" cy="170" r="38" fill="url(#core)" />
      <circle cx="230" cy="170" r="48" fill="none" stroke="#818cf8" strokeOpacity="0.5" />
      <text x="230" y="176" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">AI</text>
    </svg>
  );
}

const categoryPaths: Record<string, string> = {
  "web-development": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  "mobile-apps": "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",
  "ai-products": "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7zM10 10h4v4h-4z",
  "ui-ux-design": "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  "backend-cloud": "M4 5h16v5H4zM4 14h16v5H4zM8 7.5h.01M8 16.5h.01",
  "maintenance-support": "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4",
};

export function CategoryIcon({ slug, dark = false }: { slug: string; dark?: boolean }) {
  return (
    <span
      className={`grid size-12 place-items-center rounded-xl ${
        dark ? "bg-white/10 text-[var(--accent-2)]" : "bg-[var(--accent)]/10 text-[var(--accent)]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={categoryPaths[slug]} />
      </svg>
    </span>
  );
}
