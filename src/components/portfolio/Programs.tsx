import { Award, CalendarDays, ExternalLink, GraduationCap, Hourglass } from "lucide-react";

import { programs, type ProgramEntry } from "@/data/portfolio";
import { Reveal, Section, Tag } from "./primitives";

const statusStyles: Record<ProgramEntry["status"], string> = {
  upcoming: "border-brand/25 bg-brand-soft text-brand-deep",
  ongoing: "border-brand/25 bg-brand-soft text-brand-deep",
  completed: "border-line bg-secondary text-ink",
};

const defaultStatusLabel: Record<ProgramEntry["status"], string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

function ProgramCard({ p }: { p: ProgramEntry }) {
  return (
    <article className="surface-card flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        {p.status !== "ongoing" && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] ${statusStyles[p.status]}`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {p.statusLabel ?? defaultStatusLabel[p.status]}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
          <CalendarDays className="h-3.5 w-3.5 text-brand" />
          {p.date}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-ink">{p.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-brand-deep">{p.org}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.topics.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {p.certificateUrl ? (
          <a
            href={p.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 [background:var(--gradient-brand)]"
          >
            <Award className="h-4 w-4" />
            View certificate
          </a>
        ) : p.status === "ongoing" ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line bg-secondary/60 px-4 py-2 text-sm font-semibold text-ink-soft">
            <Hourglass className="h-4 w-4 text-brand" />
            Ongoing
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line bg-secondary/60 px-4 py-2 text-sm font-semibold text-ink-soft">
            <Hourglass className="h-4 w-4 text-brand" />
            Certificate — Coming Soon
          </span>
        )}

        {p.programUrl && (
          <a
            href={p.programUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep underline-offset-4 hover:underline"
          >
            Program details
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Programs() {
  return (
    <Section
      id="programs"
      eyebrow="Programs & Certifications"
      title="Academic programs & certifications"
      lead="Selected programs, courses, certifications and workshops. Certificates appear here once each program is completed."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <ProgramCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}