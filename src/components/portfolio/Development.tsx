import { BookOpen } from "lucide-react";

import { professionalDevelopment } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Development() {
  return (
    <Section
      id="development"
      eyebrow="Professional Development"
      title="Continuous learning timeline"
      lead="Programs, courses, workshops and training that shape how I lead and learn. New entries are added chronologically."
      className="bg-secondary/40"
    >
      <div className="relative border-l border-line pl-7 sm:pl-9">
        {professionalDevelopment.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[2.35rem] top-2 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-brand sm:-left-[2.9rem]">
              <BookOpen className="h-4 w-4" />
            </span>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand">{d.year}</p>
            <h3 className="mt-1.5 text-lg font-semibold text-ink">{d.title}</h3>
            <p className="mt-1 text-sm font-medium text-brand-deep">{d.org}</p>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">{d.note}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}