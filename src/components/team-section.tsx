import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import { team } from "@/data/site";
import type { TeamMember } from "@/data/site";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

function Avatar({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name ? `${member.name}, ${member.role}` : member.role}
        width={240}
        height={240}
        unoptimized
        className="size-20 rounded-full object-cover ring-4 ring-white shadow-md"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-white shadow-md ring-4 ring-white"
    >
      {member.name ? (
        <span className="text-2xl font-semibold">{initials(member.name)}</span>
      ) : (
        <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
        </svg>
      )}
    </span>
  );
}

function MemberCard({ member, lead = false }: { member: TeamMember; lead?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col items-center rounded-xl border bg-[var(--panel)] p-5 text-center ${
        lead ? "border-[var(--accent)]/40 shadow-[0_18px_40px_-24px_rgba(79,70,229,0.45)]" : "border-[var(--line)]"
      }`}
    >
      <Avatar member={member} />
      {member.name ? (
        <>
          <h3 className="mt-3 text-base font-semibold tracking-tight">{member.name}</h3>
          <p className="mt-0.5 text-[13px] font-medium text-[var(--accent-strong)]">{member.role}</p>
        </>
      ) : (
        <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--accent-strong)]">{member.role}</h3>
      )}
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{member.summary}</p>
      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name ?? member.role} on LinkedIn`}
          className="mt-3 text-[13px] font-semibold text-[var(--accent-strong)] hover:underline"
        >
          LinkedIn ↗
        </a>
      ) : null}
    </div>
  );
}

const line = "bg-slate-300";

export function TeamSection() {
  const root = team.find((member) => !member.reportsTo) ?? team[0];
  const reports = team.filter((member) => member !== root && (member.reportsTo ?? root.role) === root.role);

  return (
    <section id="team" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <Eyebrow>Meet the team</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">The people behind your project</h2>
      <p className="mt-4 max-w-2xl leading-8 text-slate-700">
        A small senior team that covers leadership, product and operations, so every part of your project has an owner.
      </p>

      <div className="mt-14" role="group" aria-label="Team structure">
        <div className="mx-auto max-w-xs">
          <MemberCard member={root} lead />
        </div>

        {reports.length > 0 ? (
          <>
            <div className={`mx-auto h-6 w-px ${line}`} aria-hidden="true" />
            <ul className="flex flex-col md:flex-row md:justify-center md:gap-6">
              {reports.map((member, i) => (
                <li key={member.role} className="relative mx-auto w-full max-w-xs pt-6 md:mx-0 md:w-80 md:flex-none">
                  <span className={`absolute top-0 left-1/2 h-6 w-px ${line}`} aria-hidden="true" />
                  {reports.length > 1 ? (
                    <span
                      className={`absolute top-0 hidden h-px md:block ${line} ${
                        i === 0 ? "left-1/2 right-0 md:-right-3" : i === reports.length - 1 ? "right-1/2 left-0 md:-left-3" : "inset-x-0 md:-inset-x-3"
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                  <MemberCard member={member} />
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}
