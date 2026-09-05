const paths: Record<string, React.ReactNode> = {
  frontend: (
    <>
      <path d="M9 8 5 12l4 4" />
      <path d="M15 8l4 4-4 4" />
    </>
  ),
  backend: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  payments: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </>
  ),
  cloud: (
    <>
      <path d="M17 18H7a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 10.5a3.75 3.75 0 0 1-1 7.5Z" />
    </>
  ),
  product: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" />
    </>
  ),
};

export function SkillIcon({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id] ?? paths.product}
    </svg>
  );
}
